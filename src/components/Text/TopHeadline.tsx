import { TextType } from '@/components/Text/TextType';

export default function TopHeadline({ classNames = '', children } : TextType) {
  return <h1 className={`${classNames} mb-6 text-[32px] font-bold text-pq-indigo`}>{children}</h1>;
}
