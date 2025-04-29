import React from 'react';

const YouTubeVideo = () => {
  return (
    <div className='flex justify-center items-center mt-32 mb-32'>
        <iframe className='w-[670px] h-[450px] rounded-2xl border-4 border-primary' src="https://www.youtube.com/embed/lfBsGFiW_Mg?si=Eh1169x88fBotXmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
  );
};

export default YouTubeVideo;
