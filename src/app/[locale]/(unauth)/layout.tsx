import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate>
      <div className="px-10">{props.children}</div>
    </BaseTemplate>
  );
}
