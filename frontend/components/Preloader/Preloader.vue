<template>
    <div id="Preloader" class="absolute w-full h-full flex items-center justify-center">
        <div class="w-[100px] h-[100px] border-4 border-solid border-blue-500 rounded-full animate-spin">
            <slot />
        </div>
    </div>
</template>