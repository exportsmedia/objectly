<x-app-layout>
    <x-slot name="title">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create Team') }}
        </h2>
    </x-slot>

    <x-slot name="content">
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            @livewire('teams.create-team-form')
        </div>
    </x-slot>
</x-app-layout>
