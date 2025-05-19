import { styled } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
	({ theme }) => ({
		marginBottom: theme.spacing(2),
		background: 'none',
		boxShadow: 'none',
		'& .MuiToggleButtonGroup-grouped': {
			border: '1px solid rgba(0, 0, 0, 0.11)',
			borderRadius: 999,
			marginLeft: theme.spacing(0.5),
			marginRight: theme.spacing(0.5),
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			minWidth: 120,
			fontWeight: 500,
			color: '#6c6f93',
			background: 'white',
			boxShadow: '0 1px 4px rgba(80,80,120,0.06)',
			transition: 'background 0.2s, color 0.2s',
			'&.Mui-selected': {
				background: '#635bff',
				color: '#fff',
				boxShadow: '0 2px 8px rgba(99,91,255,0.10)',
			},
			'&:not(:last-of-type)': {
				borderRight: 0,
			},
			'&:hover': {
				background: '#edefff',
			},
		},
	})
);

export const StyledList = styled(List)(() => ({
	backgroundColor: 'white',
	borderRadius: 16,
	boxShadow: '0 1px 4px rgba(80,80,120,0.06)',
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
	borderBottom: '1px solid #f0f1f3',
	'&:last-child': { borderBottom: 'none' },
	paddingLeft: theme.spacing(0.5),
	paddingRight: theme.spacing(1),
	paddingTop: theme.spacing(1.5),
	paddingBottom: theme.spacing(1.5),
	display: 'flex',
	alignItems: 'center',
}));

export const HorizontalFlex = styled(`div`)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifySelf: 'center',
}));
