import { ChangeEvent, SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { TbFaceId } from 'react-icons/tb';
import { v4 as UUID } from 'uuid';
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
import { enqueueSnackbar } from 'notistack';

import HttpService from '@/services/HttpService';

import frontPHSrc from '@/assets/images/templates/front_placeholder.jpg';
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

function Idealize() {
	const [isEditing, setIsEditing] = useState(false);

	const [pinturaImageSrc, setPinturaImageSrc] = useState<string>('');
	const [cropImageSrc, setCropImageSrc] = useState<string>('');
	const [uploadedImageSrc, setUploadedImageSrc] = useState<string>('');
	const [imageID, setImageID] = useState('');
	const editorRef = useRef<PinturaEditor>(null);

	const onImageCrop = (res: PinturaDefaultImageWriterResult) => {
		if (!res.dest) {
			enqueueSnackbar('Image crop failed. Please retry to crop image.', {
				variant: 'warning',
			});
		} else {
			const imageData = new FormData();
			imageData.append('img', res.dest);
			HttpService.post(`/img/${imageID}/f`, imageData).then(
				response => {
					const { success } = response;
					if (success) {
						enqueueSnackbar('Image uploaded.', { variant: 'success' });
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

	const onIdealizeClick = () => {
		HttpService.get(`/img/ideal/${imageID}`).then(response => {
			console.log(response);
		})
	}

	useEffect(() => {
		setImageID(UUID());
	}, []);

	return <div className={classes.root}>
		<div className={classes.uploader}>
			<img
				src={cropImageSrc}
				alt="Uploader image"
				onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
					e.currentTarget.src = frontPHSrc;
				}}
				hidden={isEditing}
			/>
			{!isEditing && <div className={classes.buttons}>
				<label htmlFor={'image-upload-input'}>
					<BiCloudUpload />
				</label>
				<span onClick={onIdealizeClick}>
					<TbFaceId />
				</span>
				<input
					id={'image-upload-input'}
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
		</div>
		<div className={classes.output}>
		</div>
	</div>
}

export default Idealize;