'use client';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

export default function SettingsView() {
	return (
		<Box className='bg-fafbfc' sx={{ minHeight: '100vh' }}>
			<Box className='max-w-1200 mt-4 px-3' sx={{ mx: 'auto' }}>
				<Typography variant='h6' className='font-bold text-primary mb-2'>
					Settings
				</Typography>
				<Box className='bg-white rounded-2 shadow-1 p-30 mt-2'>
					<Typography variant='body2' className='text-secondary mb-3'>
						Actualice su información personal
					</Typography>
					<Grid container spacing={2}>
						<Grid size={{ xs: 12, md: 6 }}>
							<Typography
								variant='body2'
								className='text-secondary'
								sx={{ mb: 0.5 }}
							>
								Nombre
							</Typography>
							<TextField
								fullWidth
								size='small'
								value='John'
								variant='outlined'
								className='bg-fafbfc'
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Typography
								variant='body2'
								className='text-secondary'
								sx={{ mb: 0.5 }}
							>
								Apellido
							</Typography>
							<TextField
								fullWidth
								size='small'
								value='Doe'
								variant='outlined'
								className='bg-fafbfc'
							/>
						</Grid>
					</Grid>
					<Box sx={{ mb: 3 }}>
						<Typography
							variant='body2'
							className='text-secondary'
							sx={{ mb: 0.5 }}
						>
							Apodo
						</Typography>
						<TextField
							fullWidth
							size='small'
							value='John Doe'
							variant='outlined'
							className='bg-fafbfc'
							helperText={
								<span className='text-secondary'>
									Así aparecerá en la página
								</span>
							}
							FormHelperTextProps={{ sx: { ml: 0 } }}
						/>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
						<Button
							variant='outlined'
							className='bg-white text-primary'
							sx={{ textTransform: 'none', borderRadius: 2 }}
						>
							Cancelar
						</Button>
						<Button
							variant='contained'
							sx={{
								bgcolor: '#635bff',
								textTransform: 'none',
								borderRadius: 2,
							}}
						>
							Guardar
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
