'use client';
import {
	Box,
	TextField,
	IconButton,
	ToggleButton,
	Typography,
	Checkbox,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
	StyledToggleButtonGroup,
	StyledList,
	StyledListItem,
	HorizontalFlex,
} from './styled-components';

export default function DashboardView() {
	const tasks = [
		{ id: 1, text: 'Tarea 1', completed: true, time: '10:30 AM' },
		{ id: 2, text: 'Tarea 2', completed: false, time: '2:00 PM' },
		{ id: 3, text: 'Tarea 3', completed: false, time: '4:30 PM' },
	];
	const totalTasks = tasks.length;
	const completedTasks = tasks.filter((t) => t.completed).length;

	return (
		<Box className='bg-fafbfc' sx={{ minHeight: '100vh' }}>
			<Box className='max-w-1200 mt-4 px-3' sx={{ mx: 'auto' }}>
				<Typography variant='h6' className='font-bold text-primary mb-2'>
					Mis tareas
				</Typography>
				<Typography variant='body2' className='text-secondary mb-2'>
					{totalTasks} tareas, {completedTasks} completadas
				</Typography>
				<Box className='mb-2' sx={{ maxWidth: 220 }}>
					<TextField
						size='small'
						fullWidth
						placeholder='Search tasks...'
						variant='outlined'
					/>
				</Box>
				<Box className='bg-white rounded-2 shadow-1 p-4 mt-2 p-30'>
					<Box className='mb-3' sx={{ display: 'flex', alignItems: 'center' }}>
						<TextField
							fullWidth
							variant='outlined'
							placeholder='Introduzca una nueva tarea'
							value={''}
							className='bg-white rounded-2'
							size='small'
						/>
						<IconButton
							color='primary'
							onClick={() => {
								console.log('TODO');
							}}
							sx={{
								ml: 2,
								bgcolor: '#635bff',
								color: 'white',
								'&:hover': { bgcolor: '#5146e1' },
							}}
						>
							<AddIcon />
						</IconButton>
					</Box>
					<HorizontalFlex>
						<StyledToggleButtonGroup
							value={'all'}
							exclusive
							onChange={() => {
								console.log('TODO');
							}}
						>
							<ToggleButton value='all'>Todas</ToggleButton>
							<ToggleButton value='incomplete'>Incompletas</ToggleButton>
							<ToggleButton value='completed'>Completas</ToggleButton>
						</StyledToggleButtonGroup>
					</HorizontalFlex>
					<StyledList className='bg-white rounded-2 shadow-1'>
						{tasks.map((task) => (
							<StyledListItem
								key={task.id}
								className='border-bottom-light'
								sx={{ opacity: task.completed ? 0.6 : 1 }}
								secondaryAction={
									<HorizontalFlex>
										<Typography
											variant='body2'
											className='text-secondary'
											sx={{
												mr: 2,
												minWidth: 70,
												display: 'inline-block',
												textAlign: 'right',
											}}
										>
											{task.time}
										</Typography>
										<IconButton
											edge='end'
											aria-label='delete'
											onClick={() => {
												console.log('TODO');
											}}
										>
											<DeleteIcon fontSize='small' />
										</IconButton>
									</HorizontalFlex>
								}
							>
								<Checkbox
									checked={task.completed}
									onChange={() => {
										console.log('TODO');
									}}
									sx={{
										color: '#635bff',
										'&.Mui-checked': { color: '#635bff' },
									}}
								/>
								<Typography
									variant='body1'
									className='font-medium text-primary'
								>
									{task.text}
								</Typography>
							</StyledListItem>
						))}
					</StyledList>
				</Box>
			</Box>
		</Box>
	);
}
