'use server';

import Image from 'next/image';

type HighlightItem = {
  name: string;
  image_url: Array<string>;
  post_url: string;
};

type HighlightProps = {
  highlights: Array<HighlightItem>;
};

const Highlight = async ({ highlights }: HighlightProps) => {
  return (
    <div className="border-b border-gray-300  py-4 text-gray-800">
      <div className="py-3 text-2xl font-semibold">Pantip Highlight</div>
      <div className="flex flex-wrap gap-8">
        {highlights.map((item) => {
          return (
            <div className="w-64 text-sm" key={item.name}>
              <Image
                className="w-full rounded-xl"
                src={item.image_url.pop()!}
                width={255}
                height={255}
                alt=""
              />
              <div className="mb-1 mt-2 font-semibold ">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlight;
