import Image from 'next/image';
import exclamation from '/public/images/exclamation.svg';
import en from '@/locales/en';
import Headline from '@/components/Text/HeadLine';

export default function BaseError() {
  return (
    <div className="mt-24">
      <Image
        priority
        src={exclamation as string}
        alt={en.exclamationSign}
        className="mx-auto mb-8"
      />
      <Headline classNames="mb-6 text-center">
        {en.sorrySmthWentWrong}
      </Headline>
    </div>
  );
}
