import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip, Box, Button, Stack, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const getApprovalStatusColor = (status) => {
  switch (status) {
    case "رد شده":
      return { backgroundColor: "#f44336", color: "white" };
    case "تأییدشده":
      return { backgroundColor: "#4caf50", color: "white" };
    case "در انتظار تأیید ثبت‌نام":
      return { backgroundColor: "#ff9800", color: "white" };
    default:
      return {};
  }
};

const getUserStatusColor = (status) => {
  switch (status) {
    case "فعال":
      return { backgroundColor: "#4caf50", color: "white" };
    case "غیرفعال":
      return { backgroundColor: "#f44336", color: "white" };
    default:
      return {};
  }
};

export const UsersDataGrid = ({
  rows,
  selectedRowId,
  onRowSelect,
  onRowSelectionChange,
}) => {
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(rows.length / pageSize);
  const startIndex = currentPage * pageSize;
  const paginatedRows = rows.slice(startIndex, startIndex + pageSize);
  const columns = [
    {
      field: "status",
      headerName: "وضعیت",
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          sx={getUserStatusColor(params.value)}
        />
      ),
    },
    {
      field: "approvalStatus",
      headerName: "وضعیت تأیید",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          sx={getApprovalStatusColor(params.value)}
        />
      ),
    },
    {
      field: "mobile",
      headerName: "تلفن همراه",
      width: 130,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 160,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "registrationMethod",
      headerName: "نحوه ثبت‌نام",
      width: 130,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "nationalId",
      headerName: "شناسه/کدملی",
      width: 130,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "identity",
      headerName: "هویت",
      width: 100,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "userType",
      headerName: "نوع کاربر",
      width: 130,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "userSpec",
      headerName: "مشخصات کاربر",
      width: 130,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "username",
      headerName: "نام کاربری",
      width: 150,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "id",
      headerName: "ردیف",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <Box sx={{ mb: 2, width: "100%", overflowX: "auto" }}>
      <Typography
        variant="h6"
        sx={(theme) => ({
          p: 1,
          borderRadius: "8px 8px 0 0",
          fontWeight: "bold",
          color: "#f5f5f5",
          textAlign: "left",
          backgroundColor: theme.palette.primary.main,
        })}
      >
        اطلاعات کاربران
      </Typography>
      <Box sx={{ height: 350, minWidth: 1200, width: "100%", mb: 2 }}>
        <DataGrid
          rows={paginatedRows}
          columns={columns}
          pageSizeOptions={[]}
          disableDensitySelector
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelection) => {
            onRowSelectionChange(newSelection);
          }}
          onRowClick={(params) => {
            if (params.field !== "__check__") {
              onRowSelect(params.id);
            }
          }}
          localeText={{}}
          sx={{
            direction: "rtl",
            minWidth: 1200,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#fafafa",
            },
            "& .MuiDataGrid-columnHeader": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              justifyContent: "center",
            },
            "& .MuiDataGrid-cell": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
            "& .MuiDataGrid-cellContent": {
              width: "100%",
              textAlign: "center",
            },
            "& .MuiDataGrid-row": {
              "&:hover": {
                backgroundColor: "#f0f0f0",
                cursor: "pointer",
              },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mt: 2,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          startIcon={<ChevronRight />}
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
        >
          قبلی
        </Button>

        <Stack direction="row" spacing={0.5}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              variant={currentPage === i ? "contained" : "outlined"}
              size="small"
              onClick={() => setCurrentPage(i)}
              sx={{ minWidth: 36 }}
            >
              {i + 1}
            </Button>
          ))}
        </Stack>

        <Button
          variant="outlined"
          size="small"
          endIcon={<ChevronLeft />}
          onClick={() =>
            setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
          }
          disabled={currentPage >= totalPages - 1}
        >
          بعدی
        </Button>
      </Box>

      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "center", mt: 1, color: "#666" }}
      >
        صفحه {currentPage + 1} از {totalPages}
      </Typography>
    </Box>
  );
};
