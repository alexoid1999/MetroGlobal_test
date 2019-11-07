import {
  IGetPageAction
} from './App.types';

const getPage = ( setPage: number ): IGetPageAction => ({
  setPage,
  type: 'GET_PAGE'
});


export { getPage };
