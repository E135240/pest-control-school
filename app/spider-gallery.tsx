import photos from './spider-photos.json';
const everyday = [
  { image: 'jumping', title: 'Jumping spiders', label: 'DAYTIME HUNTERS', feature: 'Compact bodies and large front-facing eyes. They stalk prey rather than catching it in a capture web.', where: 'Plants, walls, and sunny outdoor surfaces.', response: 'Watch from a distance; let outdoor hunters continue their work.' },
  { image: 'orb', title: 'Orb-weaving spiders', label: 'GARDEN WEB BUILDERS', feature: 'Often seen resting in or beside circular webs stretched between plants or structures.', where: 'Gardens, shrubs, and sheltered outdoor supports.', response: 'Leave undisturbed webs away from walkways; report webs across busy routes.' },
  { image: 'cellar', title: 'Cellar spiders', label: 'LONG-LEGGED NEIGHBORS', feature: 'Small bodies with very long, slender legs; often hang upside down in loose webs.', where: 'Quiet corners, eaves, garages, and storage spaces.', response: 'Ask staff to manage indoor webs and clutter when needed.' },
];
const caution = [
  { image: 'black-widow', title: 'Western black widow', label: 'HIGHER MEDICAL CONCERN', feature: 'Adult females are often glossy black with an underside hourglass. Young spiders can look very different.', where: 'Dry sheltered crevices, stored equipment, and outdoor clutter.', response: 'Do not approach or handle. Report its location. A suspected bite needs prompt medical advice.' },
  { image: 'brown-widow', title: 'Brown widow', label: 'KEEP DISTANCE & REPORT', feature: 'Color varies; spiky egg sacs are a useful clue. They are established in Southern California.', where: 'Under outdoor furniture, around railings, and in playground crevices.', response: 'Report spiders or egg sacs near people. Bites are generally less severe than black widow bites, but handling is still unsafe.' },
];
export default function SpiderGallery(){return <div className="field-guide">
  <div className="guide-group-heading"><div><span className="guide-kicker">01 / EVERYDAY ENCOUNTERS</span><h3>Common neighbors you may notice</h3></div><span className="guide-status">Usually beneficial</span></div>
  <p className="guide-description">Examples of familiar California spider groups relevant to Pomona. Encounters vary by habitat and season; these are not a ranked local census.</p>
  <div className="photo-grid">{everyday.map(s=><SpiderCard key={s.image} spider={s}/>)}</div>
  <div className="guide-group-heading caution-heading"><div><span className="guide-kicker">02 / KNOW WHEN TO REPORT</span><h3>Widow spiders deserve extra caution</h3></div><span className="guide-status caution-status">No handling</span></div>
  <p className="guide-description">Keep a respectful distance from both. Their medical risks differ; neither should be picked up for identification.</p>
  <div className="photo-grid caution-grid">{caution.map(s=><SpiderCard key={s.image} spider={s}/>)}</div>
  <p className="identification-note"><strong>Photos are learning aids, not a diagnosis.</strong> Appearance varies with age, sex, and lighting. Never turn a spider over to look for an hourglass. Students should not collect spiders or egg sacs.</p>
</div>}
function SpiderCard({spider:s}:{spider:typeof everyday[number]}){const photo=photos[s.image as keyof typeof photos]; return <article className={`spider-photo-card ${s.image.includes('widow')?'caution-card':''}`}>
  <figure><img src={`/spiders/${s.image}.jpg`} alt={photo.alt} loading="lazy" width="900" height="650"/><figcaption><span>Shown: <i>{photo.species}</i></span><a href="#photo-credits">Photo credit & source ↓</a></figcaption></figure>
  <div className="spider-photo-copy"><span className="guide-kicker">{s.label}</span><h4>{s.title}</h4><p>{s.feature}</p><dl><dt>Where to notice them</dt><dd>{s.where}</dd><dt>Your next step</dt><dd>{s.response}</dd></dl></div>
</article>}

export function PhotoCredits(){return <div className="photo-credits" id="photo-credits"><h3>Spider photography credits</h3><p>Representative photographs, not taken at this campus. Original files are unmodified and displayed at a smaller size without cropping.</p><ul>{Object.values(photos).map(p=><li key={p.species}><a href={p.sourceUrl} target="_blank" rel="noreferrer">{p.label} (<i>{p.species}</i>)</a> — {p.photographer} · <a href={p.licenseUrl} target="_blank" rel="noreferrer">{p.license}</a></li>)}</ul></div>}
