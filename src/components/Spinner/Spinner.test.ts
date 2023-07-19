import itShouldMatchSnapshot from '@/test-utils/itShouldMatchSnapshot';
import { TestClassNames } from '@/test-utils/constants';
import Spinner from './index';

itShouldMatchSnapshot(Spinner({ classNames: TestClassNames }));
