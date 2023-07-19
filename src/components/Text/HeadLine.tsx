import { TextType } from '@/components/Text/TextType';

export default function Headline({ classNames = '', children } : TextType) {
  return <h3 className={`${classNames} text-2xl font-bold text-pq-indigo`}>{children}</h3>;
}
