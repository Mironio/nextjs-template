import itShouldMatchSnapshot from '@/test-utils/itShouldMatchSnapshot';
import Headline from '@/components/Text/HeadLine';
import { TestChildren, TestClassNames } from '@/test-utils/constants';
import TopHeadline from '@/components/Text/TopHeadline';

const HeadlineProps = { classNames: TestClassNames, children: TestChildren };
const TopHeadlineProps = { ...HeadlineProps };
itShouldMatchSnapshot(Headline(HeadlineProps));
itShouldMatchSnapshot(TopHeadline(TopHeadlineProps));
