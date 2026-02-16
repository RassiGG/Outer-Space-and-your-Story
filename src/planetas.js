import './sistemasolar.css';

function Planetas() {
    return (
        <div className="planetas">
            <header className='paginaplanetas'>
        <h1>CLIQUE EM UM DOS PLANETAS E VEJA SUA HISTÓRIA</h1>
    </header>

    <button onclick="voltarpaginaprincipal()">VOLTAR</button>

    <div class="space">
        <div class="sun"> </div>
      <div class="stars"> </div>
        <div class="orbita mercurio">
            <div class="planeta mercurio" id="mercurio"></div>
        </div>
        <div class="orbita venus">
            <div class="planeta venus" id="venus"></div>
        </div>
        <div class="orbita terra">
            <div class="planeta terra" id="terra"></div>
        </div>

        <div class="orbita marte">
            <div class="planeta marte" id="marte"></div>

        </div>

        <div class="orbita jupiter" >
            <div class="planeta jupiter" id="jupiter"></div>
        </div>
        <div class="orbita saturno">
            <div class="planeta saturno" id="saturno"></div>
        </div>

        <div class="orbita urano">
            <div class="planeta urano" id="urano"></div>
        </div>
        <div class="orbita netuno">
            <div class="planeta netuno" id="netuno"></div>
        </div>


    </div>
    </div>
    );
}