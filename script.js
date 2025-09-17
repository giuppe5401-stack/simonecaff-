const {useState} = React;

function Badge({children}){
  return <span className="inline-flex px-3 py-1 rounded-xl bg-[var(--crema)] text-[var(--espresso)] border border-[var(--crema)]">{children}</span>
}

function Card({children, className=""}){
  return <div className={"rounded-3xl border border-[var(--crema)] bg-[var(--foam)] shadow-sm "+className}>{children}</div>
}

function StarRow({score=5}){
  const stars = Array.from({length:5},(_,i)=>i<Math.round(score));
  return <div className="flex items-center gap-1 text-xs">
    {stars.map((f,i)=>(
      <svg key={i} className={"w-4 h-4 "+(f?"fill-[var(--espresso)] text-[var(--espresso)]":"text-[var(--latte)]")} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z"/></svg>
    ))}
    <span className="ml-2">4.8/5</span>
  </div>
}

const PRODUCTS=[
  {id:1,name:"Moka Classica 3 Tazze",price:"€29,90",rating:4.7,img:"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop",tags:["Moka","Alluminio"]},
  {id:2,name:"Caffè Arabica Premium 250g",price:"€12,50",rating:4.8,img:"https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?q=80&w=1200&auto=format&fit=crop",tags:["Arabica","Monorigine"]},
  {id:3,name:"Macinacaffè Manuale Pro",price:"€49,00",rating:4.6,img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",tags:["Grinder","Acciaio"]},
  {id:4,name:"French Press Vetro 600ml",price:"€34,90",rating:4.5,img:"https://images.unsplash.com/photo-1519336555923-59661f41bb89?q=80&w=1200&auto=format&fit=crop",tags:["French Press","Vetro"]},
  {id:5,name:"Tazze Espresso (2pz)",price:"€16,90",rating:4.4,img:"https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",tags:["Tazze","Porcellana"]},
  {id:6,name:"Aeropress Go + Filtri",price:"€39,90",rating:4.7,img:"https://images.unsplash.com/photo-1502462041640-b3d7e50d066b?q=80&w=1200&auto=format&fit=crop",tags:["Aeropress","Viaggio"]},
];

function App(){
  const [page,setPage]=useState("home");

  return (<div className="min-h-screen">
    {/* NAV */}
    <header className="sticky top-0 z-10 backdrop-blur bg-white/30 border-b border-[var(--crema)]/70">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[var(--espresso)] text-[var(--foam)] grid place-items-center">☕</div>
          <div className="font-semibold">da Simo</div>
          <Badge>Punto Cialde & Capsule</Badge>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button className={"hover:underline "+(page==='home'?'underline':'')} onClick={()=>setPage('home')}>Home</button>
          <button className={"hover:underline "+(page==='brands'?'underline':'')} onClick={()=>setPage('brands')}>Marche & Catalogo</button>
          <a href="#contatti" className="hover:underline">Contatti</a>
        </nav>
        <a href="#prodotti" className="px-4 py-2 rounded-xl bg-[var(--espresso)] text-[var(--foam)] text-sm">Vai allo shop</a>
      </div>
    </header>

    {page==='home' && (<>
      {/* HERO */}
      <section className="relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--crema)]/70 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[var(--latte)]/60 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">da Simo — <span className="text-[var(--mocha)]">tutto per il caffè</span></h1>
            <p className="mt-4 text-lg text-[var(--espresso)]/90">Capsule, cialde ESE 44mm, macchine e accessori. Selezione curata per portare l'espresso di qualità a casa tua.</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#prodotti" className="px-4 py-2 rounded-xl bg-[var(--espresso)] text-[var(--foam)]">Acquista ora</a>
              <button onClick={()=>setPage('brands')} className="px-4 py-2 rounded-xl border border-[var(--espresso)] text-[var(--espresso)]">Scopri le marche</button>
            </div>
            <div className="mt-4"><StarRow score={4.8}/></div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-4 ring-[var(--crema)]">
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop" alt="Attrezzatura per caffè" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--foam)] rounded-2xl shadow p-4 text-sm">☕ Punto Cialde & Capsule • Compatibilità principali</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Perché scegliere da Simo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Selezione curata","Solo articoli testati da baristi e appassionati."],
              ["Qualità garantita","2 anni di garanzia e reso entro 30 giorni."],
              ["Spedizione rapida","Consegna in 24/48h in tutta Italia."],
            ].map(([t,d])=>(
              <Card key={t} className="p-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--crema)] grid place-items-center mb-3">★</div>
                <div className="font-semibold mb-1">{t}</div>
                <p className="text-sm text-[var(--espresso)]/90">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="prodotti" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">I nostri best seller</h2>
            <button onClick={()=>setPage('brands')} className="underline text-sm">Vedi marchi e catalogo</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(p=>(
              <Card key={p.id} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-1"><StarRow score={p.rating}/></div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tags.map(t=><Badge key={t}>{t}</Badge>)}
                  </div>
                  <div className="text-xl font-semibold mt-3">{p.price}</div>
                  <a className="mt-3 block text-center px-4 py-2 rounded-xl bg-[var(--espresso)] text-[var(--foam)]">Aggiungi al carrello</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>)}

    {page==='brands' && (<>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Marche & Compatibilità</h2>
          <p className="text-[var(--espresso)]/90 mb-6 max-w-3xl">Trattiamo capsule originali e compatibili per i principali sistemi. Di seguito trovi le linee più richieste in negozio.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {["A Modo Mio® (Lavazza)","Dolce Gusto®","Nespresso®*","Caffitaly®","ESE 44mm (cialde)","Macchine & Accessori"].map(b=>(
              <div key={b} className="rounded-2xl bg-[var(--foam)] border border-[var(--crema)] px-4 py-3 text-center font-semibold">{b}</div>
            ))}
          </div>
          <Card className="p-4">
            <div className="font-semibold mb-1">Note legali</div>
            <p className="text-sm text-[var(--espresso)]/80">I marchi riportati appartengono ai rispettivi proprietari. Le compatibilità indicate sono a scopo informativo.</p>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {PRODUCTS.map(p=>(
              <Card key={p.id} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                  <span className="inline-block text-xs px-2 py-1 rounded bg-[var(--latte)]/60 mb-2">Disponibile</span>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <p className="text-sm text-[var(--espresso)]/90 mt-1">Compatibilità: A Modo Mio® / Nespresso®* / Dolce Gusto® (vari modelli disponibili).</p>
                  <div className="text-xl font-semibold mt-2">{p.price}</div>
                  <a className="mt-3 block text-center px-4 py-2 rounded-xl bg-[var(--espresso)] text-[var(--foam)]">Richiedi disponibilità</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>)}

    {/* CONTACTS */}
    <section id="contatti" className="py-14">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Contattaci</h2>
          <p className="text-[var(--espresso)]/90 mb-4">Hai dubbi sulle compatibilità o cerchi una miscela specifica? Scrivici, rispondiamo in giornata.</p>
          <form className="space-y-3">
            <input className="w-full rounded-xl border border-[var(--crema)] bg-white/80 px-3 py-2" placeholder="Nome" />
            <input className="w-full rounded-xl border border-[var(--crema)] bg-white/80 px-3 py-2" placeholder="Email" />
            <textarea className="w-full rounded-xl border border-[var(--crema)] bg-white/80 px-3 py-2 min-h-[120px]" placeholder="Messaggio"></textarea>
            <button className="px-4 py-2 rounded-xl bg-[var(--espresso)] text-[var(--foam)]">Invia richiesta</button>
          </form>
          <div className="mt-4 text-sm space-y-1">
            <div>📞 +39 010 1234567</div>
            <div>✉️ negozio@dasimo.it</div>
            <div>📍 Via Aroma 10, Genova</div>
          </div>
        </div>
        <Card className="p-6">
          <div className="text-xl font-bold">Iscriviti alla newsletter</div>
          <p className="text-sm text-[var(--espresso)]/90 mt-1">Offerte, novità e consigli per un espresso perfetto.</p>
          <div className="mt-4 flex gap-2">
            <input className="flex-1 rounded-xl border border-[var(--crema)] bg-white/80 px-3 py-2" placeholder="La tua email" />
            <button className="px-4 py-2 rounded-xl bg-[var(--espresso)] text-[var(--foam)]">Iscriviti</button>
          </div>
          <p className="text-xs text-[var(--espresso)]/70 mt-3">Iscrivendoti accetti la nostra privacy policy.</p>
        </Card>
      </div>
    </section>

    <footer className="border-t border-[var(--crema)] bg-white/40">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-[var(--espresso)] text-[var(--foam)] grid place-items-center">☕</div>
            <div className="font-semibold">da Simo</div>
          </div>
          <p>Punto cialde e capsule: miscele e macchine per tutti i sistemi principali.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Pagine</div>
          <ul className="space-y-1">
            <li><button className="hover:underline" onClick={()=>setPage('home')}>Home</button></li>
            <li><button className="hover:underline" onClick={()=>setPage('brands')}>Marche & Catalogo</button></li>
            <li><a className="hover:underline" href="#contatti">Contatti</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Supporto</div>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="#">Spedizioni & Resi</a></li>
            <li><a className="hover:underline" href="#">Garanzia</a></li>
            <li><a className="hover:underline" href="#">Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Seguici</div>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-3">© 2025 da Simo — Tutti i diritti riservati. *Nespresso® è un marchio di terzi non collegato a questo sito.</div>
    </footer>
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
