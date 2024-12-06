import { ListTableProvider } from '@/hooks/useListTable'
import React from 'react'
import Pagination from './Pagination'
import ListBody from './ListBody'

export default function ListTable() {
  return (
    <ListTableProvider>
      <ListBody />
      <Pagination />
    </ListTableProvider>
  )
}
