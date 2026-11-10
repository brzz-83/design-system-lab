import { useState } from 'react';
import { Button, type ButtonSize, type ButtonVariant } from './components/Button';

export function App() {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('m');
  const [label, setLabel] = useState('Сохранить');
  const [disabled, setDisabled] = useState(false);
  const [clicks, setClicks] = useState(0);
  const snippet = `<Button variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>\n  ${label.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('{', '&#123;').replaceAll('}', '&#125;')}\n</Button>`;

  return (
    <main className="lesson">
      <header>
        <p className="eyebrow">ДИЗАЙН-СИСТЕМА / УРОК 01</p>
        <h1>Твоя первая кнопка<br />в React.</h1>
        <p className="intro">Тот же компонент, что в Figma. Теперь он реагирует на наведение, нажатие и свойства.</p>
      </header>

      <section className="playground" aria-label="Конструктор кнопки">
        <div className="preview">
          <span className="section-label">ЖИВОЙ КОМПОНЕНТ</span>
          <div className="preview-button">
            <Button variant={variant} size={size} disabled={disabled} onClick={() => setClicks(n => n + 1)}>
              {label || 'Кнопка'}
            </Button>
                                                

          </div>
          <p className="status" aria-live="polite">{clicks ? `Нажатий: ${clicks}` : 'Наведи курсор, нажми или перейди к кнопке клавишей Tab.'}</p>
        </div>

        <form className="controls" onSubmit={e => e.preventDefault()}>
          <h2>Свойства экземпляра</h2>
          <label>Текст кнопки<input value={label} onChange={e => setLabel(e.target.value)} maxLength={60} /></label>
          <label>Type → variant<select value={variant} onChange={e => setVariant(e.target.value as ButtonVariant)}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
          </select></label>
          <label>Size → size<select value={size} onChange={e => setSize(e.target.value as ButtonSize)}>
            <option value="s">S — 32 px</option><option value="m">M — 40 px</option><option value="l">L — 48 px</option>
          </select></label>
          <label className="checkbox"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />Disabled</label>
        </form>
      </section>

      <section className="code-section" aria-labelledby="code-title">
        <div><p className="eyebrow">ИЗ FIGMA В КОД</p><h2 id="code-title">Это экземпляр компонента.</h2>
          <p>Меняй свойства справа — код меняется вместе с кнопкой. <code>children</code> — текст между открывающим и закрывающим тегами.</p>
        </div>
        <pre><code>{snippet}</code></pre>
      </section>

      <section className="exercise">
        <span className="exercise-number">01</span>
        <div><h2>Первое упражнение: поменяй основной цвет.</h2>
          <p>Открой <code>src/tokens.css</code>, найди <code>--purple-600</code> и замени его значение. Сохрани файл — Primary обновится в браузере.</p>
          <p className="small">Здесь переносим два вида кнопок. Остальные компоненты и Storybook — следующие уроки.</p>
        </div>
      </section>
    </main>
  );
}
