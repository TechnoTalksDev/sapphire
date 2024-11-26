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
	partners.set(5)
	educated.set(800)
</script>

<div class="container h-[95vh] mx-auto flex flex-col lg:flex-row justify-center items-center header w-screen rounded-3xl">
	<div class="h-[50%] lg:w-[50%] flex flex-col justify-center items-center text-left">
		<div class="w-[100%] lg:w-fit lg:ml-10">
			<h1 class="h2 text-7xl font-bold font-semibold">Sapphire 💎 </h1>

			<p class="w-0 min-w-full lg:min-w-[35rem] mt-6 text-xl">Get your essay reviewed today!</p>
			<div class="flex flex-row mt-6">
				<a href="/demo/lucia/login"><button class="btn variant-glass-primary flex flex-row justify-center items-center text-1xl">Sign up <ArrowRight size="20" class="ml-1"/></button></a>
				<a href="#intiatives"><button class="btn variant-glass-primary mx-4">Learn more</button></a>
			</div>
		</div>
	</div>

	<div id="visual" class="h-[50%] lg:w-[50%] absolute lg:relative flex flex-col justify-center items-center">
		<img src="/logo.png" class="mt-[-2rem]"/>
		<div id="l-blob" class="z-[-3] blur-[100px] absolute w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[20rem] rounded-[50%] bg-gradient-to-br from-error-500 via-primary-500 to-error-500 opacity-20 overflow-x-hidden animate-pulse">
		</div>
	</div>

</div>

<div class="flex flex-row w-full justify-around items-center mt-[30vh]">
	<div class="flex flex-col items-center justify-center w-[7rem]">
		<h1 class="h1 gradient-heading">{$donated.toFixed(0)}+</h1>
		<p class="h3">Essays</p>
	</div>	
	
	<div class="flex flex-col items-center justify-center w-[7rem]">
		
		<h1 class="h1 gradient-heading">{$partners.toFixed(0)}+</h1>
		<p class="h3">Partners</p>

	</div>	

	<div class="flex flex-col items-center justify-center w-[7rem]">
		<h1 class="h1 gradient-heading">{$educated.toFixed(0)}+</h1>
		<p class="h3">Students</p>
	</div>

</div>


<div class="flex flex-col h-fit lg:h-screen justify-center items-center overflow-hidden" id="intiatives">
	<h1 class="h1 text-5xl gradient-hero my-8 0">Reviews</h1>
	<div class="flex flex-col lg:flex-row w-full justify-around items-center">
		

			
    <div class="card card-hover shadow-md variant-filled-primary bg-primary-500/20 flex flex-row items-center justify-center w-[24rem] h-[24rem] rounded-3xl relative m-4">


      <div class="card variant-filled bg-white text-black p-6 rounded-3xl absolute bottom-1 m-6 shadow-sm">
        <h2 class="h3 text-3xl">Vishnu P.</h2>
        <p class="opacity-70 leading-5">This peer-reviewed essay site is an excellent resource for academic writing. The essays are thoroughly vetted and provide valuable insights, making it a reliable platform for both research and inspiration.</p>
      </div>
    
    </div>
		
    <div class="card card-hover shadow-md variant-filled-primary bg-primary-500/20 flex flex-row items-center justify-center w-[24rem] h-[24rem] rounded-3xl relative m-4">


      <div class="card variant-filled bg-white text-black p-6 rounded-3xl absolute bottom-1 m-6 shadow-sm">
        <h2 class="h3 text-3xl">Rico K.</h2>
        <p class="opacity-70 leading-5">The quality of the essays on this platform is outstanding. The peer-review process ensures credibility, and the diverse topics covered are perfect for broadening your knowledge base.</p>
      </div>
    
    </div>
    <div class="card card-hover shadow-md variant-filled-primary bg-primary-500/20 flex flex-row items-center justify-center w-[24rem] h-[24rem] rounded-3xl relative m-4">


      <div class="card variant-filled bg-white text-black p-6 rounded-3xl absolute bottom-1 m-6 shadow-sm">
        <h2 class="h3 text-3xl">Tristan C.</h2>
        <p class="opacity-70 leading-5">A fantastic site for anyone looking for high-quality academic essays. The peer-review process guarantees accuracy, and the user-friendly interface makes finding relevant content quick and easy.</p>
      </div>
    
    </div>
			

		

	</div>
	

</div>

<style>
.header {
		text-align: center;
		background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
		color: white;
}

</style>