import React from 'react'

const Form = () => {
  return (
    <>
    <div classNameName="row">
        <div classNameName="col-12 col-md-8 mb-5">
          <div className="form-row filter-box p-3 mb-3">
            <div className="col-12 form-group m-0">
              <div
                id="body_infoTextError"
                className="alert alert-danger d-none"
                role="alert"
              ></div>
            </div>
            <div className="col-12 form-group mb-0">
              <label>Group or channel type:</label>
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                name="ctl00$body$hdSearchPlatforms"
                type="hidden"
                id="body_hdSearchPlatforms"
                value="1"
              />
              <select
                name="ctl00$body$dSearchPlatforms"
                id="body_dSearchPlatforms"
                className="form-control mb-3"
                onchange="dropchange(this, &#39;dSearchPlatforms&#39;)"
              >
                <option value="4">Discord</option>
                <option value="3">Facebook</option>
                <option value="2">Telegram</option>
                <option value="5">Twitch</option>
                <option selected="selected" value="1">
                  WhatsApp
                </option>
                <option value="6">Youtube</option>
              </select>
            </div>
            <div className="col-12 form-group mb-0">
              <label>Location:</label>
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                name="ctl00$body$hdSearchCountries"
                type="hidden"
                id="body_hdSearchCountries"
                value="-1"
              />
              <select
                name="ctl00$body$dSearchCountries"
                id="body_dSearchCountries"
                className="form-control mb-3"
                onchange="dropchange(this, &#39;dSearchCountries&#39;)"
              >
                <option value="-1">All countries or regions</option>
                <option value="1">Albania</option>
                <option value="6">Algeria</option>
                <option value="3">Andorra</option>
                <option value="4">Antigua and Barbuda</option>
                <option value="7">Argentina</option>
                <option value="8">Aruba</option>
                <option value="9">Australia</option>
                <option value="10">Austria</option>
                <option value="11">Bahamas</option>
                <option value="14">Bahrain</option>
                <option value="12">Bangladesh</option>
                <option value="13">Barbados</option>
                <option value="17">Belarus</option>
                <option value="15">Belgium</option>
                <option value="16">Belize</option>
                <option value="18">Bolivia</option>
                <option value="20">Bosnia and Herzegovina</option>
                <option value="19">Botswana</option>
                <option value="21">Brazil</option>
                <option value="22">Brunei</option>
                <option value="23">Bulgaria</option>
                <option value="24">Cambodia</option>
                <option value="25">Canada</option>
                <option value="27">Chile</option>
                <option value="28">China</option>
                <option value="30">Colombia</option>
                <option value="32">Costa Rica</option>
                <option value="33">Croatia</option>
                <option value="34">Cuba</option>
                <option value="29">Cyprus</option>
                <option value="109">Czech Republic</option>
                <option value="35">Denmark</option>
                <option value="110">Dominican Republic</option>
                <option value="36">Ecuador</option>
                <option value="37">Egypt</option>
                <option value="38">El Salvador</option>
                <option value="56">Equatorial Guinea</option>
                <option value="44">Estonia</option>
                <option value="45">Ethiopia</option>
                <option value="48">Fiji</option>
                <option value="47">Finland</option>
                <option value="49">France</option>
                <option value="50">Gabon</option>
                <option value="51">Georgia</option>
                <option value="2">Germany</option>
                <option value="52">Ghana</option>
                <option value="53">Gibraltar</option>
                <option value="54">Greece</option>
                <option value="55">Guatemala</option>
                <option value="57">Guyana</option>
                <option value="58">Honduras</option>
                <option value="59">Hong Kong</option>
                <option value="60">Hungary</option>
                <option value="65">Iceland</option>
                <option value="61">India</option>
                <option value="62">Indonesia</option>
                <option value="63">Iran</option>
                <option value="64">Ireland</option>
                <option value="66">Israel</option>
                <option value="67">Italy</option>
                <option value="68">Jamaica</option>
                <option value="69">Japan</option>
                <option value="70">Jordan</option>
                <option value="71">Kazakhstan</option>
                <option value="72">Kenya</option>
                <option value="73">Kuwait</option>
                <option value="74">Laos</option>
                <option value="75">Latvia</option>
                <option value="76">Lebanon</option>
                <option value="77">Libya</option>
                <option value="78">Liechtenstein</option>
                <option value="79">Lithuania</option>
                <option value="80">Luxembourg</option>
                <option value="82">Madagascar</option>
                <option value="83">Malaysia</option>
                <option value="84">Maldives</option>
                <option value="85">Malta</option>
                <option value="87">Mexico</option>
                <option value="88">Moldova</option>
                <option value="89">Monaco</option>
                <option value="90">Mongolia</option>
                <option value="91">Montenegro</option>
                <option value="86">Morocco</option>
                <option value="92">Myanmar</option>
                <option value="93">Namibia</option>
                <option value="94">Nepal</option>
                <option value="99">Netherlands</option>
                <option value="98">New Zealand</option>
                <option value="95">Nicaragua</option>
                <option value="96">Nigeria</option>
                <option value="81">North Macedonia</option>
                <option value="97">Norway</option>
                <option value="100">Pakistan</option>
                <option value="101">Panama</option>
                <option value="102">Papua New Guinea</option>
                <option value="103">Paraguay</option>
                <option value="104">Peru</option>
                <option value="46">Philippines</option>
                <option value="105">Poland</option>
                <option value="106">Portugal</option>
                <option value="107">Puerto Rico</option>
                <option value="26">Qatar</option>
                <option value="112">Romania</option>
                <option value="113">Russia</option>
                <option value="111">Rwanda</option>
                <option value="114">San Marino</option>
                <option value="5">Saudi Arabia</option>
                <option value="115">Serbia</option>
                <option value="116">Seychelles</option>
                <option value="117">Singapore</option>
                <option value="40">Slovakia</option>
                <option value="41">Slovenia</option>
                <option value="120">South Africa</option>
                <option value="31">South Korea</option>
                <option value="42">Spain</option>
                <option value="118">Sri Lanka</option>
                <option value="123">Suriname</option>
                <option value="119">Swaziland</option>
                <option value="121">Sweden</option>
                <option value="122">Switzerland</option>
                <option value="135">Taiwan</option>
                <option value="125">Tanzania</option>
                <option value="124">Thailand</option>
                <option value="126">Trinidad and Tobago</option>
                <option value="127">Tunisia</option>
                <option value="129">Turkey</option>
                <option value="128">Turkmenistan</option>
                <option value="130">Ukraine</option>
                <option value="39">United Arab Emirates</option>
                <option value="108">United Kingdom</option>
                <option value="43">United States</option>
                <option value="131">Uruguay</option>
                <option value="132">Vatican</option>
                <option value="133">Venezuela</option>
                <option value="134">Vietnam</option>
              </select>
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                name="ctl00$body$hdSearchCities"
                type="hidden"
                id="body_hdSearchCities"
                value="-1"
              />
              <select
                name="ctl00$body$dSearchCities"
                id="body_dSearchCities"
                className="form-control d-none mb-3"
                onchange="dropchange(this, &#39;dSearchCities&#39;)"
              ></select>
            </div>
            <div className="col-12 form-group mb-0">
              <label>Category:</label>
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                name="ctl00$body$hdSearchCategoryGroups"
                type="hidden"
                id="body_hdSearchCategoryGroups"
                value="-1"
              />
              <select
                name="ctl00$body$dSearchCategoryGroups"
                id="body_dSearchCategoryGroups"
                className="form-control mb-3"
                onchange="dropchange(this, &#39;dSearchCategoryGroups&#39;)"
              >
                <option value="-1">All categories</option>
                <option value="4">Ads &amp; Second-Hand</option>
                <option value="6">Anime, Movies and TV</option>
                <option value="8">Business and Money</option>
                <option value="11">Education, Art and Culture</option>
                <option value="9">Esotericism and Energy</option>
                <option value="10">Expats &amp; Community</option>
                <option value="16">Fashion and Beauty</option>
                <option value="2">Friendship and Meet new people</option>
                <option value="12">Funny &amp; Memes</option>
                <option value="13">Games and Video Games</option>
                <option value="22">Health and Wellness</option>
                <option value="1">Hobbies</option>
                <option value="5">Internet and Science</option>
                <option value="14">LGBT community</option>
                <option value="3">Love &amp; Singles</option>
                <option value="17">Motors &amp; Mechanics</option>
                <option value="18">Music and Dance</option>
                <option value="19">Organizations and Movements</option>
                <option value="20">Parents and Family</option>
                <option value="15">Pets and Animals</option>
                <option value="21">Religion and Beliefs</option>
                <option value="7">Sports and Fitness</option>
                <option value="23">Travel</option>
                <option value="24">+18</option>
              </select>
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                name="ctl00$body$hdSearchCategories"
                type="hidden"
                id="body_hdSearchCategories"
                value="-1"
              />
              <select
                name="ctl00$body$dSearchCategories"
                id="body_dSearchCategories"
                className="form-control d-none mb-3"
                onchange="dropchange(this, &#39;dSearchCategories&#39;)"
              ></select>
            </div>
            <div className="col-6 form-group my-1">
              <input
                type="submit"
                name="ctl00$body$bBuscar"
                value="Search"
                onclick="return searchFieldsValidate();"
                id="body_bBuscar"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form