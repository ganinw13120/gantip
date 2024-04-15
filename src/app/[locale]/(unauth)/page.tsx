'use server';

import Highlight from '@/components/Highlight';
import List from '@/components/List';

export default async function Page() {
  const getRoomData = async () => {
    const res = await fetch(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      {
        method: 'POST',
        body: new URLSearchParams({
          type: 'room',
          limit: '2',
        }),
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const data = await res.json();
    return data.data;
  };

  const getTagData = async () => {
    const res = await fetch(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      {
        method: 'POST',
        body: new URLSearchParams({
          type: 'tag',
          limit: '2',
        }),
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const data = await res.json();
    return data.data;
  };

  const getHighlight = async () => {
    const res = await fetch(
      'https://pantip.com/api/forum-service/home/get_highlight',
      {
        method: 'GET',
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const data = await res.json();
    return data.data;
  };

  const room = await getRoomData();
  const tag = await getTagData();
  const highlights = await getHighlight();

  return (
    <>
      <Highlight highlights={highlights} />
      {[...room, ...tag].map((item: any) => {
        if (item.type === 'room') {
          return (
            <List
              name={item.room_name_th}
              topics={item.topics}
              key={item.tag_id}
            />
          );
        }
        if (item.type === 'tag') {
          return (
            <List
              name={item.tag_name}
              topics={item.topics}
              key={item.room_id}
            />
          );
        }
        return null;
      })}
      <div className="my-4">
        <button
          className="rounded-xl border border-gray-800 px-6 py-3 font-semibold transition hover:bg-gray-300"
          type="submit"
        >
          Show more...
        </button>
      </div>
    </>
  );
}
