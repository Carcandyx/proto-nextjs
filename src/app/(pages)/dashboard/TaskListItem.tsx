import { Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledListItem, HorizontalFlex } from './styled-components';
import { ITask } from './interfaces';

interface TaskListItemProps {
	task: ITask;
	onToggle: (id: number) => void;
	onDelete?: () => void;
}

export default function TaskListItem({
	task,
	onToggle,
	onDelete,
}: TaskListItemProps) {
	return (
		<StyledListItem
			className='border-bottom-light'
			sx={{ opacity: task.isCompleted ? 0.6 : 1 }}
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
						{task.createdAt.toDateString()}
					</Typography>
					<IconButton edge='end' aria-label='delete' onClick={onDelete}>
						<DeleteIcon fontSize='small' />
					</IconButton>
				</HorizontalFlex>
			}
		>
			<Checkbox
				checked={task.isCompleted}
				disabled={task.isCompleted}
				onChange={() => onToggle(task.id)}
				sx={{ color: '#635bff', '&.Mui-checked': { color: '#635bff' } }}
			/>
			<Typography variant='body1' className='font-medium text-primary'>
				{task.content}
			</Typography>
		</StyledListItem>
	);
}
