import { ChangeEvent, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { TbFaceId } from 'react-icons/tb';
import { enqueueSnackbar } from 'notistack';
import { PinturaEditor } from '@pqina/react-pintura';
import {
  // editor
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,

  // plugins
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_finetune_locale_en_gb,
  plugin_finetune_defaults,
  plugin_filter_locale_en_gb,
  plugin_filter_defaults,
  plugin_annotate_locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
  PinturaDefaultImageWriterResult,
} from '@pqina/pintura';

import { SERVER_URI } from '@/config';
import { useAppSelector } from '@/redux/store';
import MappingDialog from '@/components/pages/harmony/MappingDialog';
import HttpService from '@/services/HttpService';

import frontPHSrc from '@/assets/images/templates/front_placeholder.jpg';
import sidePHSrc from '@/assets/images/templates/side_placeholder.jpg';
import classes from './index.module.scss';
import '@pqina/pintura/pintura.css';

setPlugins(plugin_crop);

const editorDefaults = {
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter({
    targetSize: {
      width: 512,
      height: 512,
    },
  }),
  shapePreprocessor: createDefaultShapePreprocessor(),
  ...plugin_finetune_defaults,
  ...plugin_filter_defaults,
  ...markup_editor_defaults,
  locale: {
    ...locale_en_gb,
    ...plugin_crop_locale_en_gb,
    ...plugin_finetune_locale_en_gb,
    ...plugin_filter_locale_en_gb,
    ...plugin_annotate_locale_en_gb,
    ...markup_editor_locale_en_gb,
  },
};

interface IImageUploaderProps {
  type: 'front' | 'side';
}

function ImageUploader({ type = 'front' }: IImageUploaderProps) {
  const profileID = useAppSelector(state => state.setting.profileID);

  const [isEditing, setIsEditing] = useState(false);
  const [isMapping, openMappingDialog] = useState(false);

  const [pinturaImageSrc, setPinturaImageSrc] = useState<string>('');
  const [cropImageSrc, setCropImageSrc] = useState<string>('');
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string>('');
  const editorRef = useRef<PinturaEditor>(null);

  const phImageSrc = useMemo(
    () => (type === 'front' ? frontPHSrc : sidePHSrc),
    [type]
  );

  const onImageCrop = (res: PinturaDefaultImageWriterResult) => {
    if (!res.dest) {
      enqueueSnackbar('Image crop failed. Please retry to crop image.', {
        variant: 'warning',
      });
    } else {
      const imageData = new FormData();
      imageData.append('img', res.dest);
      HttpService.post(`/img/${profileID}/${type.slice(0, 1)}`, imageData).then(
        response => {
          const { success } = response;
          if (success) {
            enqueueSnackbar(
              `${type === 'front' ? 'Front' : 'Side'} image uploaded.`,
              { variant: 'success' }
            );
          }
        }
      );

      setCropImageSrc(URL.createObjectURL(res.dest));
    }
    setIsEditing(false);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return;
    setPinturaImageSrc(URL.createObjectURL(e.target.files[0]));
    setIsEditing(true);
  };

  const onMappingClick = () => {
    openMappingDialog(true);
  };

  useEffect(() => {
    setCropImageSrc('');
    setUploadedImageSrc(`${SERVER_URI}/img/${profileID}/${type.slice(0, 1)}`);
  }, [profileID]);

  return (
    <div className={classes.root}>
      <img
        src={cropImageSrc || uploadedImageSrc}
        alt="Uploader image"
        width="150"
        height="150"
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = phImageSrc;
        }}
        hidden={isEditing}
      />
      {!isEditing && <div className={classes.buttons}>
        <label htmlFor={`${type}-image-upload-input`}>
          <BiCloudUpload />
        </label>
        <span onClick={onMappingClick}>
          <TbFaceId />
        </span>
        <input
          id={`${type}-image-upload-input`}
          type="file"
          onChange={onFileChange}
          hidden
        />
      </div>}
      {isEditing && (
        <PinturaEditor
          {...editorDefaults}
          src={pinturaImageSrc}
          ref={editorRef}
          util={'crop'}
          imageCropAspectRatio={1}
          onProcess={onImageCrop}
          cropEnableImageSelection={false}
          previewUpscale={true}
          enableTransparencyGrid={true}
          enableCanvasAlpha={true}
          imageCropLimitToImage={false}
        />
      )}
      {isMapping && (
        <MappingDialog onClose={() => openMappingDialog(false)} type={type} />
      )}
    </div>
  );
}

export default ImageUploader;
