import React, { useState, useMemo } from 'react';
import { Container } from '@mui/material';
import { mockUsers } from '../mocks/mockUsers';
import { FilterRadioGroup } from './FilterRadioGroup';
import { UsersToolbar } from './UsersToolbar';
import { UsersDataGrid } from './UsersDataGrid';
import { UsersActionsBar } from './UsersActionsBar';
import { UserDetailsModal } from './modals/UserDetailsModal';
import { DeleteConfirmModal } from './modals/DeleteConfirmModal';
import { AddUserModal } from './modals/AddUserModal';
import { PendingApprovalsTable } from './PendingApprovalsTable';


export const UsersPage = () => {
  const [users] = useState(mockUsers);

  const [filterStatus, setFilterStatus] = useState('همه');
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const selectedRowId = selectedRowIds.length === 1 ? selectedRowIds[0] : null;

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [detailsModalUser, setDetailsModalUser] = useState(null);

  const pendingUsers = useMemo(() => {
    return users.filter((user) => user.approvalStatus === 'در انتظار تأیید ثبت‌نام');
  }, [users]);

  const nonPendingUsers = useMemo(() => {
    return users.filter((user) => user.approvalStatus !== 'در انتظار تأیید ثبت‌نام');
  }, [users]);

  const filteredByStatus = useMemo(() => {
    const normalizedFilter = filterStatus?.trim();

    if (!normalizedFilter || normalizedFilter === 'همه') {
      return nonPendingUsers;
    }

    return nonPendingUsers.filter(
      (user) => (user.approvalStatus || '').trim() === normalizedFilter
    );
  }, [nonPendingUsers, filterStatus]);

  const filteredBySearch = useMemo(() => {
    if (!searchQuery) {
      return filteredByStatus;
    }
    const lowerQuery = searchQuery.toLowerCase();
    return filteredByStatus.filter((user) => {
      const username = user.username.toLowerCase();
      const nationalId = user.nationalId.toLowerCase();
      return username.includes(lowerQuery) || nationalId.includes(lowerQuery);
    });
  }, [filteredByStatus, searchQuery]);

  const displayedRows = filteredBySearch;

  const handleFilterStatusChange = (newStatus) => {
    setFilterStatus(newStatus);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleRowSelectionChange = (newSelection) => {
    setSelectedRowIds(newSelection);
  };

  const handleRowClick = (rowId) => {
    const user = users.find((u) => u.id === rowId);
    if (user) {
      setDetailsModalUser(user);
      setDetailsModalOpen(true);
    }
  };

  const handleAddClick = () => {
    setAddModalOpen(true);
  };

  const handleAddSubmit = () => {
   
  };

  const handleViewDetailsClick = () => {
    if (selectedRowId) {
      const user = users.find((u) => u.id === selectedRowId);
      if (user) {
        setDetailsModalUser(user);
        setDetailsModalOpen(true);
      }
    }
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setDeleteModalOpen(false);
    setSelectedRowIds([]);
  };

  const handleEditClick = () => {
    console.log('Edit clicked (disabled)');
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <FilterRadioGroup
        selectedFilter={filterStatus}
        onFilterChange={handleFilterStatusChange}
      />

      <UsersToolbar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        filteredRowsCount={displayedRows.length}
      />

      <UsersDataGrid
        rows={displayedRows}
        selectedRowId={selectedRowId}
        onRowSelect={handleRowClick}
        onRowSelectionChange={handleRowSelectionChange}
      />

      <UsersActionsBar
        hasSelection={selectedRowId !== null}
        onAddClick={handleAddClick}
        onViewDetailsClick={handleViewDetailsClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />

      <PendingApprovalsTable
        rows={pendingUsers}
        selectedRowId={selectedRowId}
        onRowSelect={handleRowClick}
        onRowSelectionChange={handleRowSelectionChange}
      />

      <UserDetailsModal
        open={detailsModalOpen}
        user={detailsModalUser}
        onClose={() => setDetailsModalOpen(false)}
      />

      <DeleteConfirmModal
        open={deleteModalOpen}
        username={selectedRowId ? users.find((u) => u.id === selectedRowId)?.username : ''}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />

      <AddUserModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={handleAddSubmit}
      />
    </Container>
  );
};
