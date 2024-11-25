<script>
	import '../app.css';
	let { children } = $props();

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>


<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
	</svelte:fragment>
	<nav>
		<a href="/" class="logo">Tidal Wave</a>
		<div class="nav-links">
				<a href="/">Home</a>
				<a href="/essay">Submit Essay</a>
				<a href="/resources">Resources</a>
				<a href="/help">Q&A</a>
				<a href="/demo/lucia/login">Login</a>
		</div>
</nav>

<!--

	<AppBar class="card variant-glass absolute z-[100] w-full">
		<svelte:fragment slot="lead">
			<a href="/">
				<div class="flex flex-row items-center justify-center">
					<enhanced:img src="/static/logo.png" alt="SAHF logo" class="mr-1 w-7"></enhanced:img>
					<strong class="text-primary-500 mt-1 text-xl uppercase">sapphire</strong>
				</div>
			</a>
		</svelte:fragment>

		<svelte:fragment slot="trail">
			<a class="btn btn-sm variant-soft-primary" href="/essay" rel="noreferrer"> Essay </a>

			<a class="btn btn-sm variant-soft-primary" href="/resources" rel="noreferrer"> Resources </a>

			<a class="btn btn-sm variant-soft-primary" href="/help" rel="noreferrer"> Help </a>

			<a class="btn btn-sm variant-soft-primary" href="/demo/lucia/login" rel="noreferrer"> Login </a>
		</svelte:fragment>
	</AppBar>

	-->
	{@render children()}
</AppShell>

<style>
	        :root {
            --primary: #4A90E2;
            --secondary: #6C63FF;
            --success: #2ECC71;
            --background: #ffffff;
            --text: #333333;
            --card-bg: #f8f9fa;
            --border: #e1e4e8;
        }
				nav {
            background-color: var(--card-bg);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }


				.logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary);
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--primary);
        }
</style>