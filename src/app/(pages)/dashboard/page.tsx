'use client';
import {
	Box,
	TextField,
	IconButton,
	ToggleButton,
	Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
	StyledToggleButtonGroup,
	StyledList,
	HorizontalFlex,
} from './styled-components';
import { useState } from 'react';
import { ITask } from './interfaces';
import TaskListItem from './TaskListItem';
let incrementalId = 1;

export default function DashboardView() {
	const [tasks, setTasks] = useState([] as ITask[]);
	const [newTaskContent, setNewTaskContent] = useState('');
	const totalTasks = tasks.length;
	const completedTasks = tasks.filter((t) => t.isCompleted).length;

	const createTask = (taskContent: string) => {
		if (!taskContent.trim()) return;
		const newTaskObj = {
			id: incrementalId,
			content: taskContent,
			isCompleted: false,
			createdAt: new Date(),
		};
		setTasks([...tasks, newTaskObj]);
		incrementalId++;
	};

	const completeTask = (id: number) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isCompleted: true } : task
			)
		);
	};

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
					<Box
						onSubmit={(event) => {
							event.preventDefault();
							createTask(newTaskContent);
							setNewTaskContent('');
						}}
						component='form'
						className='mb-3'
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						<TextField
							fullWidth
							variant='outlined'
							label='Introduzca una nueva tarea'
							className='bg-white rounded-2'
							size='small'
							value={newTaskContent}
							onChange={(e) => setNewTaskContent(e.target.value)}
						/>
						<IconButton
							color='primary'
							onClick={() => {
								createTask(newTaskContent);
								setNewTaskContent('');
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
							<TaskListItem key={task.id} task={task} onToggle={completeTask} />
						))}
					</StyledList>
				</Box>
			</Box>
		</Box>
	);
}
