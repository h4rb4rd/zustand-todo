import {memo} from 'react';

import {Button} from '@/components/ui/Button';
import {classNames} from '@/lib/classNames';
import {FiltersEnum} from '@/types';
import {useFilterStore} from '@/store';

import cls from './Filters.module.scss';

interface FiltersProps {
  className?: string;
}

export const Filters = memo(({className}: FiltersProps) => {
  const {filter, setFilter} = useFilterStore(state => ({
    filter: state.filter,
    setFilter: state.setFilter,
  }));

  return (
    <div className={classNames(cls.filters, [className], {})}>
      <Button
        textSize="size_s"
        disabled={filter === FiltersEnum.ALL}
        onClick={() => setFilter(FiltersEnum.ALL)}
      >
        all
      </Button>
      <Button
        textSize="size_s"
        disabled={filter === FiltersEnum.IN_PROGRESS}
        onClick={() => setFilter(FiltersEnum.IN_PROGRESS)}
      >
        in progress
      </Button>
      <Button
        textSize="size_s"
        disabled={filter === FiltersEnum.DONE}
        onClick={() => setFilter(FiltersEnum.DONE)}
      >
        done
      </Button>
    </div>
  );
});
