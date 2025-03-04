import React from 'react';
import women from '../assets/images/ArticleP/Women.png';
import droplet from '../assets/images/ArticleP/droplet.png';
import CarouselSlider from '../components/ArticleTabCrausel'

const ArticlePreview: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Original Women Image Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-8">
        <div className="md:w-1/3">
          <img
            src={women}
            alt="Historical painting of a woman in white headwear"
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm mt-2 italic text-[#3A342B] font-light">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Morbi sagittis in orci vulputate lacus
            <br />
            tristique posuere eu.
          </p>
        </div>
        
        <div className="md:w-2/3 text-[#3A342B]">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Lorem Ipsum is simply dummy text of the printing and type setting industry
          </h1>
          
          <p className="mb-4 font-small text-2xl max-w-screen-xl">
            Lorem ipsum dolor sit amet consectetur. Libero eget ultrices varius volutpat non faucibus dui pretium sed. Justo lacus massa massa pellentesque et non. Vitae.
          </p>
          
          <p className="mb-4 font-normal">
            Lorem ipsum dolor sit amet consectetur. Gravida ac ultrices proin est dolor sit. Egestas fringilla maecenas sed nunc quis magna mi diam sagittis. Ornare scelerisque non tellus amet tortor. Elit vel adipiscing luctus id habitant dui. Feugiat elementum ut duis at urna. Tellus imperdiet platea elit amet duis id at auctor nulla. Nibh sagittis tincidunt a rhoncus tortor viverra volutpat lacus. Turpis tortor aliquam turpis in lobortis neque elit purus et. Maecenas pulvinar praesent ultrices erat tincidunt.
          </p>
          
          <p className="mb-4 font-normal">
            Tincidunt amet pulvinar varius egestas vulputate. Tristique tortor turpis nisl massa sed sed ipsum. Metus consequat integer aliquam vel felis lacus amet morbi egestas. Urna arcu sed consectetur non senectus. Sit maecenas quis faucibus porta venenatis et sed.
          </p>
          
          <p className="font-normal">
            Risus quis magna pulvinar dui elit. Urna odio id amet aliquam vitae vitae. Fermentum vel ultricies vitae sagittis ridiculus felis. Auctor aliquam etiam risus id. Amet aliquam amet commodo varius diam faucibus a mauris.
          </p>
        </div>
      </div>

      <hr className="border-gray-300 my-6 mx-4 max-w-6xl mx-auto" />

      {/* Droplet Banner Section - Full Width */}
      <div className="w-full relative mb-8">
        <img
          src={droplet}
          alt="Water droplet on a leaf"
          className="w-full h-64 md:h-72 lg:h-80 object-cover"
        />
        <div className="absolute top-0 left-0 p-8 md:p-12 text-white max-w-6xl mx-auto inset-x-0">
          <p className="text-2xl md:text-3xl font-medium max-w-sm">
            Lorem ipsum dolor sit amet consectetur. Tortor facilisis
            nisi magna ultricies neque et aliquam tortor.
          </p>
        </div>
      </div>

      {/* Two Column Content Section */}
      <div className="flex flex-col md:flex-row px-4 gap-8 mb-8 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-[#3A342B]">
          <p className="mb-6 font-normal">
            Lorem ipsum dolor sit amet consectetur.
            Felis accumsan dictum mollis odio ultricies
            molestie massa quis sit. Nisi aliquam lectus
            volutpat et placerat sodales. Nullam sed.
          </p>
        </div>
        <div className="md:w-1/2 text-[#3A342B]">
          <p className="mb-6 font-normal">
            Lorem ipsum dolor sit amet consectetur.
            Elementum pretium massa ante auctor leo
            morbi amet dui. Purus a purus cursus
            egestas hac id. Maecenas enim proin at.
          </p>
        </div>
      </div>
      <CarouselSlider />
    </div>
  );
};

export default ArticlePreview;