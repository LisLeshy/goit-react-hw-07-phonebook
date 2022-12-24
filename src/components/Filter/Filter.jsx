import { useDispatch } from 'react-redux';
import { Label, Text, Input } from './Filter.styled';
import { changeFilter } from '../../redux/contacts-slice';

function Filter() {
  const dispatch = useDispatch();

  const changeFieldFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
}

export default Filter;