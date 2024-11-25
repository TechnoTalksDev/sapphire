<script>

import { ArrowRight } from 'lucide-svelte';
import 'ldrs/trefoil'
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';


let donated = tweened(0, {
		duration: 2500,
		easing: cubicInOut
	});

	let partners = tweened(0, {
		duration: 2500,
		easing: cubicInOut
	});

	let educated = tweened(0, {
		duration: 2500,
		easing: cubicInOut
	});

	donated.set(3000)
	partners.set(10)
	educated.set(500)
</script>

<div class="container h-screen w-full mx-auto flex flex-col lg:flex-row justify-center items-center">
	<div class="h-[50%] lg:w-[50%] flex flex-col justify-center items-center">
		<div class="w-[100%] lg:w-fit lg:ml-10">
			<h1 class="h2 text-7xl">💎 Sapphire</h1>

			<p class="w-0 min-w-full lg:min-w-[35rem] mt-6 text-xl">Dedicated to touching ryan panda</p>
			<div class="flex flex-row mt-6">
				<a href="#contact"><button class="btn variant-filled-error flex flex-row justify-center items-center text-1xl">Sign up <ArrowRight size="20" class="ml-1"/></button></a>
				<a href="#intiatives"><button class="btn variant-glass-error mx-4">Learn more</button></a>
			</div>
		</div>
	</div>

	<div id="visual" class="h-[50%] lg:w-[50%] absolute lg:relative flex flex-col justify-center items-center">
		<l-trefoil
			size="250"
			stroke="8"
			speed="2" 
			color="blue"
			class="hidden lg:inline scale-75 lg:scale-100" 
		></l-trefoil>	
		<div id="l-blob" class="z-[-3] blur-[100px] absolute w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[20rem] rounded-[50%] bg-gradient-to-br from-error-500 via-primary-500 to-error-500 opacity-20 overflow-x-hidden animate-pulse">
		</div>
	</div>

</div>

<div class="flex flex-row w-full justify-around items-center">
	<div class="flex flex-col items-center justify-center w-[7rem]">
		<h1 class="h1 gradient-heading">${$donated.toFixed(0)}+</h1>
		<p>donated</p>
	</div>	

	<div class="flex flex-col items-center justify-center w-[7rem]">
		<span class="divider-vertical h-20" />
		<h1 class="h1 gradient-heading">{$partners.toFixed(0)}+</h1>
		<p>Partners</p>
		<span class="divider-vertical h-20" />
	</div>	

	<div class="flex flex-col items-center justify-center w-[7rem]">
		<h1 class="h1 gradient-heading">{$educated.toFixed(0)}+</h1>
		<p>Students educated</p>
	</div>

</div>


<div class="flex flex-col h-fit lg:h-screen justify-center items-center overflow-hidden" id="intiatives">
	<h1 class="h1 text-5xl gradient-hero my-8">What we do</h1>
	<div class="flex flex-col lg:flex-row w-full justify-around items-center">
		

			
    <div class="card card-hover shadow-md variant-filled-primary bg-primary-500/20 flex flex-row items-center justify-center w-[24rem] h-[24rem] rounded-3xl relative m-4">
      <div class="flex h-[70%] w-full top-1 absolute justify-center">
      </div>

      <div class="card variant-filled bg-white text-black p-6 rounded-3xl absolute bottom-1 m-6 shadow-sm">
        <h2 class="h3 text-3xl">Yay</h2>
        <p class="opacity-70 leading-5">munchy monkey likes kids</p>
      </div>
    
    </div>
    <div class="card card-hover shadow-md variant-filled-primary bg-primary-500/20 flex flex-row items-center justify-center w-[24rem] h-[24rem] rounded-3xl relative m-4">
      <div class="flex h-[70%] w-full top-1 absolute justify-center">
      </div>

      <div class="card variant-filled bg-white text-black p-6 rounded-3xl absolute bottom-1 m-6 shadow-sm">
        <h2 class="h3 text-3xl">Yay</h2>
        <p class="opacity-70 leading-5">munchy monkey likes kids</p>
      </div>
    
    </div>
    <div class="card card-hover shadow-md variant-filled-primary bg-primary-500/20 flex flex-row items-center justify-center w-[24rem] h-[24rem] rounded-3xl relative m-4">
      <div class="flex h-[70%] w-full top-1 absolute justify-center">
      </div>

      <div class="card variant-filled bg-white text-black p-6 rounded-3xl absolute bottom-1 m-6 shadow-sm">
        <h2 class="h3 text-3xl">Tanisha C</h2>
        <p class="opacity-70 leading-5">I love ryan pandas sexy lil abs *blushes*</p>
      </div>
    
    </div>
			

		

	</div>
	

</div>