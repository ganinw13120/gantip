'use client';

import Link from 'next/link';
import { FaPlus, FaRegComment } from 'react-icons/fa';
import { MdQuestionMark } from 'react-icons/md';

type Topic = {
  topic_id: number;
  title: string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: {
    id: number;
    name: string;
  };
  created_time: string;
};

type ListProps = {
  name: string;
  topics: Array<Topic>;
};

const List = ({ name, topics }: ListProps) => {
  return (
    <div className="w-full border-b  border-gray-300 py-4 text-gray-800">
      <div className="py-3 text-2xl font-semibold">{name}</div>
      <div className="grid w-full grid-cols-1 gap-x-4 xl:grid-cols-2">
        {topics.map((topic) => {
          return (
            <Link href={`/${topic.topic_id}`} key={topic.topic_id}>
              <div className="my-3 w-full rounded-xl border border-gray-400 p-4">
                <div className="flex gap-2 font-semibold">
                  <div className="flex gap-3">
                    <MdQuestionMark
                      className="my-auto hidden size-4 rounded-full bg-primary text-white sm:block"
                      width={20}
                      height={20}
                    />
                    {topic.title}
                  </div>
                  <div className="grow" />
                  <div className="flex">
                    <FaRegComment className="my-auto h-3 w-4" />
                    <div className="my-auto h-fit">{topic.comments_count}</div>
                  </div>
                  <div className="flex">
                    <FaPlus className="my-auto h-3 w-4" />
                    <div className="my-auto h-fit">{topic.votes_count}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs font-light">
                  {topic.author.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default List;
