@extends('layouts.app')

@section('title', '¡Encuentra cientos de eventos en Medellín!')

@section('ppal_nav')
    <div class="ham-menu">
        <!-- This container has the reponsive menu -->
    </div>
    <div id="ppal_link">
        <a href="#">Ingresar</a>
        <a href="#">Crea una cuenta</a>
    </div>
@endsection

@section('aside_content')
    <div class="text">
        <h2>¿Qué está pasando en Medellín?</h2>
        <input type="text" id="u_search" placeholder="¡Encuentra cientos de eventos!">
    </div>
    <div class="modules">
        <div class="module" style="background-color: #8ab0db">
            <i class="fas fa-palette icon"></i>
            <span>Arte</span>
        </div>

        <div class="module" style="background-color: #8adb8a">
            <i class="fas fa-book icon"></i>
            <span>Literatura</span>
        </div>

        <div class="module" style="background-color: #dadb8a">
            <i class="fas fa-film icon"></i>
            <span>Cine</span>
        </div>

        <div class="module" style="background-color: #db8a8a">
            <i class="fas fa-music icon"></i>
            <span>Música</span>
        </div>

        <div class="module" style="background-color: #db8ac0">
            <i class="fas fa-store-alt icon"></i>
            <span>Centro de eventos</span>
        </div>

        <div class="module" style="background-color: #968adb">
            <i class="fas fa-laugh-wink icon"></i>
            <span>Cultura</span>
        </div>
    </div>
@endsection