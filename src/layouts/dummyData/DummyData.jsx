import "./DummyData.scss";
import { names } from "../../redux/dummyData";

const DummyData = () => {
  return (
    <div className="dummyData text-center">
      <h2>Dummy Data generator</h2>
      <p>
        Using this application you can create array of numbers, odd numbers,
        even numbers, id, IP, colors, persons, countries, emails, names,
        cities,cats, foods, stories, and sports objects. Check all the
        possibilities you can by clicking the drop down button.
      </p>

      <div className="datashow">
        <div class="inputData m-2">
          <div>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="Enter a number"
              class=""
              value=""
            />
          </div>
          <div>
            <label></label>
            <select name="select">
              <option value="Hexa color">Hexa color</option>
              <option value="RGB color">RGB color</option>
              <option value="Random id">Random id</option>
              <option value="Random IP">Random IP</option>
              <option value="Prime numbers">Prime numbers</option>
              <option value="Odd numbers(1 - n)">Odd numbers(1 - n)</option>
              <option value="Even numbers(0 - n)">Even numbers(0 - n)</option>
              <option value="Sum of even numbers(0 - n)">
                Sum of even numbers(0 - n)
              </option>
              <option value="Sum of odd numbers(1 - n)">
                Sum of odd numbers(1 - n)
              </option>
              <option value="Sum of numbers">Sum of numbers</option>
              <option value="Factorial">Factorial</option>
              <option value="Names">Names</option>
              <option value="Numbers">Numbers</option>
              <option value="Emails">Emails</option>
              <option value="Array of person objects">
                Array of person objects
              </option>
              <option value="Array of countries">Array of countries</option>
              <option value="Array of random countries">
                Array of random countries
              </option>
              <option value="Array of capital cities">
                Array of capital cities
              </option>
              <option value="Array of random capital cities">
                Array of random capital cities
              </option>
              <option value="Array of country objects">
                Array of country objects
              </option>
              <option value="Array of random countries object">
                Array of random countries object
              </option>
              <option value="Array of animals object">
                Array of animals object
              </option>
              <option value="Array of cats object">Array of cats object</option>
              <option value="Array of foods object">
                Array of foods object
              </option>
              <option value="Array of sports object">
                Array of sports object
              </option>
              <option value="Array of stories object">
                Array of stories object
              </option>
              <option value="Website URL">Website URL</option>
              <option value="Images">Images</option>
              <option value="Avatars">Avatars</option>
            </select>
          </div>
        </div>
        <button>Generate</button>

        <div className="dataShowInfo">
          <textarea name="" id="" cols="70" rows="15" value={names}></textarea>
          <div className="clipboard">
            <i class="fa-solid fa-paste col"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyData;
