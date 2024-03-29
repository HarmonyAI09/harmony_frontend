import { ChangeEvent, useMemo, useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { TbFaceId } from 'react-icons/tb';
import { enqueueSnackbar } from 'notistack';
import { v4 as uuidv4 } from 'uuid';
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

import MappingDialog from '@/components/pages/harmony/MappingDialog';
import HttpService from '@/services/HttpService';
import { updateProfileID } from '@/redux/reducers/setting';
import { useAppDispatch } from '@/redux/store';

import FrontPlaceholderSrc from '@/assets/images/templates/front_placeholder.jpg';
import SidePlaceholderSrc from '@/assets/images/templates/side_placeholder.jpg';
import classes from './index.module.scss';
import '@pqina/pintura/pintura.css';

setPlugins(plugin_crop);

const editorDefaults = {
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),
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
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [isMapping, openMappingDialog] = useState(false);
  const [fileSrc, setFileSrc] = useState<string>('');
  const [resSrc, setResSrc] = useState<string>('');
  const [rawImgSrc, setRawImgSrc] = useState<File | null>(null);
  const editorRef = useRef<PinturaEditor>(null);

  const placeholderSrc = useMemo(
    () => (type === 'front' ? FrontPlaceholderSrc : SidePlaceholderSrc),
    [type]
  );

  const onImageCrop = (res: PinturaDefaultImageWriterResult) => {
    setResSrc(URL.createObjectURL(res.dest));
    setRawImgSrc(res.dest);
    setIsEditing(false);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return;
    setFileSrc(URL.createObjectURL(e.target.files[0]));
    setIsEditing(true);
  };

  const onMappingClick = () => {
    openMappingDialog(true);

    const imageID = uuidv4();
    const imageData = new FormData();
    if (rawImgSrc) imageData.append('img', rawImgSrc);
    HttpService.post(
      `/img/${imageID}/${type === 'front' ? 'f' : 's'}`,
      imageData
    ).then(response => {
      const { success } = response;
      if (success) {
        dispatch(updateProfileID(imageID));
      }
    });
  };

  return (
    <div className={classes.root}>
      <img
        src={resSrc || placeholderSrc}
        alt={`${type}placeholder`}
        hidden={isEditing}
      />
      <div className={classes.buttons}>
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
      </div>
      {isEditing && (
        <PinturaEditor
          {...editorDefaults}
          src={fileSrc}
          ref={editorRef}
          util={'crop'}
          imageCropAspectRatio={1}
          onProcess={onImageCrop}
          cropEnableImageSelection={false}
          previewUpscale={true}
          enableTransparencyGrid={true}
          enableCanvasAlpha={true}
        />
      )}
      <MappingDialog
        open={isMapping}
        onClose={() => openMappingDialog(false)}
        type={type}
      />
    </div>
  );
}

export default ImageUploader;
