import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Box,
  FormHelperText,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const addUserValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('نام کاربری الزامی است'),
  userSpec: Yup.string()
    .required('مشخصات کاربر الزامی است'),
  userType: Yup.string()
    .required('نوع کاربر الزامی است'),
  identity: Yup.string()
    .required('هویت الزامی است'),
  nationalId: Yup.string()
    .required('شناسه/کدملی الزامی است')
    .matches(/^\d{10,11}$/, 'شناسه/کدملی باید 10 یا 11 رقم باشد و فقط شامل اعداد'),
  registrationMethod: Yup.string()
    .required('نحوه ثبت‌نام الزامی است'),
  email: Yup.string()
    .required('ایمیل الزامی است')
    .email('ایمیل معتبر نیست'),
  mobile: Yup.string()
    .required('تلفن همراه الزامی است')
    .matches(/^09\d{9}$/, 'تلفن همراه باید به فرمت 09XXXXXXXXX باشد'),
  approvalStatus: Yup.string()
    .required('وضعیت تأیید الزامی است'),
  status: Yup.string()
    .required('وضعیت الزامی است'),
});


export const AddUserModal = ({ open, onClose, onSubmit }) => {
  const initialValues = {
    username: '',
    userSpec: '',
    userType: '',
    identity: '',
    nationalId: '',
    registrationMethod: '',
    email: '',
    mobile: '',
    approvalStatus: 'در انتظار تأیید ثبت‌نام',
    status: 'فعال',
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { direction: 'rtl' },
      }}
    >
      <DialogTitle sx={{ textAlign: 'right' }}>
        اضافه کردن کاربر جدید
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={addUserValidationSchema}
        onSubmit={(values) => {
          // Validation-only: just close modal
          onSubmit(values);
          onClose();
        }}
        validateOnBlur
        validateOnChange
      >
        {({ values, errors, touched, setFieldValue, handleSubmit, isValid }) => (
          <Form>
            <DialogContent sx={{ direction: 'rtl' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <TextField
                  fullWidth
                  label="نام کاربری"
                  name="username"
                  value={values.username}
                  onChange={(e) => setFieldValue('username', e.target.value)}
                  onBlur={() => {}}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  dir="rtl"
                  inputProps={{ dir: 'rtl' }}
                />

                <TextField
                  fullWidth
                  select
                  label="مشخصات کاربر"
                  name="userSpec"
                  value={values.userSpec}
                  onChange={(e) => setFieldValue('userSpec', e.target.value)}
                  error={touched.userSpec && Boolean(errors.userSpec)}
                  helperText={touched.userSpec && errors.userSpec}
                  dir="rtl"
                >
                  <MenuItem value="شخصی">شخصی</MenuItem>
                  <MenuItem value="سازمانی">سازمانی</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  select
                  label="نوع کاربر"
                  name="userType"
                  value={values.userType}
                  onChange={(e) => setFieldValue('userType', e.target.value)}
                  error={touched.userType && Boolean(errors.userType)}
                  helperText={touched.userType && errors.userType}
                  dir="rtl"
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Supervisor">Supervisor</MenuItem>
                  <MenuItem value="SSO User">SSO User</MenuItem>
                </TextField>

                <FormControl error={touched.identity && Boolean(errors.identity)}>
                  <FormLabel>هویت</FormLabel>
                  <RadioGroup
                    row
                    name="identity"
                    value={values.identity}
                    onChange={(e) => setFieldValue('identity', e.target.value)}
                  >
                    <FormControlLabel
                      value="حقیقی"
                      control={<Radio />}
                      label="حقیقی"
                    />
                    <FormControlLabel
                      value="حقوقی"
                      control={<Radio />}
                      label="حقوقی"
                    />
                  </RadioGroup>
                  {touched.identity && errors.identity && (
                    <FormHelperText>{errors.identity}</FormHelperText>
                  )}
                </FormControl>

                <TextField
                  fullWidth
                  label="شناسه/کدملی"
                  name="nationalId"
                  value={values.nationalId}
                  onChange={(e) => setFieldValue('nationalId', e.target.value)}
                  error={touched.nationalId && Boolean(errors.nationalId)}
                  helperText={touched.nationalId && errors.nationalId}
                  dir="rtl"
                  inputProps={{ dir: 'rtl' }}
                />

                <TextField
                  fullWidth
                  select
                  label="نحوه ثبت‌نام"
                  name="registrationMethod"
                  value={values.registrationMethod}
                  onChange={(e) => setFieldValue('registrationMethod', e.target.value)}
                  error={touched.registrationMethod && Boolean(errors.registrationMethod)}
                  helperText={touched.registrationMethod && errors.registrationMethod}
                  dir="rtl"
                >
                  <MenuItem value="درگاه دولت">درگاه دولت</MenuItem>
                  <MenuItem value="سامانه">سامانه</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="ایمیل"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  dir="rtl"
                  inputProps={{ dir: 'rtl' }}
                />

                <TextField
                  fullWidth
                  label="تلفن همراه"
                  name="mobile"
                  value={values.mobile}
                  onChange={(e) => setFieldValue('mobile', e.target.value)}
                  error={touched.mobile && Boolean(errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
                  dir="rtl"
                  inputProps={{ dir: 'rtl' }}
                />

                <TextField
                  fullWidth
                  select
                  label="وضعیت تأیید"
                  name="approvalStatus"
                  value={values.approvalStatus}
                  onChange={(e) => setFieldValue('approvalStatus', e.target.value)}
                  error={touched.approvalStatus && Boolean(errors.approvalStatus)}
                  helperText={touched.approvalStatus && errors.approvalStatus}
                  dir="rtl"
                >
                  <MenuItem value="رد شده">رد شده</MenuItem>
                  <MenuItem value="تأییدشده">تأییدشده</MenuItem>
                  <MenuItem value="در انتظار تأیید ثبت‌نام">در انتظار تأیید ثبت‌نام</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  select
                  label="وضعیت"
                  name="status"
                  value={values.status}
                  onChange={(e) => setFieldValue('status', e.target.value)}
                  error={touched.status && Boolean(errors.status)}
                  helperText={touched.status && errors.status}
                  dir="rtl"
                >
                  <MenuItem value="فعال">فعال</MenuItem>
                  <MenuItem value="غیرفعال">غیرفعال</MenuItem>
                </TextField>
              </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-start', p: 2, gap: 1 }}>
              <Button
                onClick={() => handleSubmit()}
                variant="contained"
                color="primary"
              >
                افزودن
              </Button>
              <Button onClick={onClose} variant="outlined">
                انصراف
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
