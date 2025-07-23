<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('welcome');
//})->name('home');
//
//Route::middleware(['auth', 'verified'])->group(function () {
//    Route::get('dashboard', function () {
//        return Inertia::render('dashboard');
//    })->name('dashboard');
//});

//unauthenticated
Route::prefix('digital/resource')->group(function () {

    Route::get('/program', function () {
        return Inertia::render('E-Books/Program');
    })->name('program');

    Route::get('/grades', function (Request $request) {
        $program = $request->query('program');

        return Inertia::render('E-Books/Grade', [
            'program' => $program,
        ]);
    })->name('grade');

    Route::get('/subjects', function (Request $request) {
        $program = $request->query('program');
        $grade = $request->query('grade');
        $subject = $request->query('subject');

        return Inertia::render('E-Books/Subject', [
            'program' => $program,
            'grade' => $grade,
            'subject' => $subject,
        ]);
    })->name('subject');

    Route::get('/lessons', function (Request $request) {
        $program = $request->query('program');
        $grade = $request->query('grade');
        $subject = $request->query('subject');

        return Inertia::render('E-Books/Lesson', [
            'subject' => $subject,
            'program' => $program,
            'grade' => $grade,
        ]);
    })->name('lesson');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
