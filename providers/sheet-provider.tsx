'use client';

import NewAccountSheet from '@/features/accounts/components/new-account-sheet';
import EditAccountSheet from '@/features/accounts/components/edit-account-sheet';

import NewCategorySheet from '@/features/categories/components/new-category-sheet';
import EditCategorySheet from '@/features/categories/components/edit-category-sheet';

import NewTransactionSheet from '@/features/transactions/components/new-transaction-sheet';

const SheetProvider = () => {
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <NewTransactionSheet />
    </>
  );
};

export default SheetProvider;
