import './Form.css';

const options = {
  rabbit: 'パティ',
  bear: 'ボビー',
  fox: 'ダイアナ',
  pig: 'プリプリン',
  squirrel: 'ジュディ',
};

type Props = { selected?: keyof typeof options };

const Form: React.FC<Props> = ({ selected }) => (
  <form>
    <div className="form-item">
      <label htmlFor="favChar">好きなキャラクターは？</label>
      <select id="favChar" value={selected}>
        {Object.entries(options).map(([family, name]) => (
          <option value={family} key={family}>
            {name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="favReason">そのキャラクターのどこが好き？</label>
      <textarea id="favReason" value="【例】性格が好き" />
    </div>
  </form>
);

export default Form;
