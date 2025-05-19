'use client';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomNavBar() {
	const pathname = usePathname();
	return (
		<AppBar
			position='static'
			elevation={0}
			sx={{
				bgcolor: '#fff',
				borderBottom: '1px solid #e5e6eb',
				boxShadow: 'none',
				py: 0.5,
			}}
		>
			<Toolbar
				sx={{
					px: { xs: 2, sm: 6 },
					minHeight: 56,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					variant='h6'
					component='div'
					sx={{
						flexGrow: 1,
						color: '#635bff',
						fontWeight: 700,
						fontSize: 20,
						letterSpacing: 0,
						fontFamily: 'inherit',
					}}
				>
					Tasks123
				</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<Link href='/dashboard'>
						<Button
							sx={{
								color: pathname === '/dashboard' ? '#635bff' : '#232360',
								fontWeight: pathname === '/dashboard' ? 700 : 400,
								fontSize: 14,
								textTransform: 'none',
								px: 1.5,
								minWidth: 0,
								opacity: pathname === '/dashboard' ? 1 : 0.8,
							}}
							disableRipple
						>
							Dashboard
						</Button>
					</Link>
					<Link href='/settings'>
						<Button
							sx={{
								color: pathname === '/settings' ? '#635bff' : '#232360',
								fontWeight: pathname === '/settings' ? 700 : 400,
								fontSize: 14,
								textTransform: 'none',
								px: 1.5,
								minWidth: 0,
								opacity: pathname === '/settings' ? 1 : 0.8,
							}}
							disableRipple
						>
							Settings
						</Button>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
