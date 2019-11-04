import React, {useState} from 'react';
import s from './UploadPhoto.module.scss';


const UploadPhoto = ({setPhoto,setChangePhoto}) => {

	let [newPhoto, setNewPhoto] = useState(null);

	let setUserPhoto = (e) => {
		/*let formData = new FormData();
		formData.append('PhotoUrl', e.currentTarget.files[0]);*/
		setNewPhoto(e.currentTarget.files[0]);
	};
	let sentPhoto = () => {
		setPhoto(newPhoto);
		setNewPhoto(null);

	};

	return (
		<div className={s.uploadPhotoWrapper}>
			<span>Загрузить фото</span>
			<div className={s.uploadPhoto}>
				<input
					name='image'
					type='file'
					onChange={(e) => setUserPhoto(e)}
				/>
				<div className={s.sendPhotoBtn}>
					<button className={s.sendPhoto} onClick={sentPhoto} disabled={!newPhoto}>Upload photo</button>
				</div>
			</div>
		</div>
	)
};

export default UploadPhoto;