import { useSelector, useDispatch } from 'react-redux';

export default function Fileupload() {
    const dispatch = useDispatch();
    const previewimagefiles = useSelector((state) => state.addedimagefiles);
    const previewvideofiles = useSelector((state) => state.addedvideofiles);
 
    const handleImageChange = (e) => {
		console.log(e.target.files)
		if (e.target.files[0] && e.target.files[0].size<= 10485760) {
            if(e.target.files[0].type.indexOf("image/") > -1 ){
                console.log(e.target.files[0].type.indexOf("image/"));
                const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
                dispatch({ type: 'addfile', imagefiles: filesArray });
            }
            if(e.target.files[0].type.indexOf("video/") > -1){
                const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
                dispatch({ type: 'addfile', videofiles: filesArray});
            }
			
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) 
			);
		}
	};

    const renderPhotos = (source) => {
        console.log('source: ', source);
		return source.map((photo) => {
            if (photo !== undefined && photo !== ""){
			return <img className="px-6 pt-5 pb-6 max-w-s" src={photo} alt="" key={photo} />; } 
            else {
                return;
            }
		});
	};

    const renderVideos = (source) => {
            console.log('source: ', source);
            return source.map((video) => {
                if (video !== undefined && video !== ""){
                return <video className="px-6 pt-5 pb-6 max-w-s" src={video} id="video" key={video} controls />; } 
                else {
                    return;
                }
            });
        
           
		
	};

    return (
        <div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Upload Files</h2>
                </div>
                <div className="mt-8 space-y-6"  >
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            
                            <div className="flex justify-center text-sm text-gray-600">
                                <label htmlFor="file-upload"
                                 className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <svg 
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                            >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                                    </svg>
                                    
                                    <input id="file-upload" name="file-upload" type="file"  accept="image/*,video/*" onChange={handleImageChange} className="sr-only" />
                                </label>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4, AVI, MOV, MKV up to 10MB</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
		<div className="items-center flex flex-wrap justify-start">
            {renderPhotos(previewimagefiles)}
         </div>
         <div className="items-center flex flex-wrap justify-start">
         {renderVideos(previewvideofiles)}
         </div>
        </div>
    )
  }
  