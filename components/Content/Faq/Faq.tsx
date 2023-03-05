import { FaqComponent } from './FaqComponent.Styles';

export default function Faq({ data }:any) {

  return (
    <FaqComponent className={`faq ${data.className}`} id="faq">
      <div className="grid-container">
        <div className="grid-x faq-container">
          <div className="grid-x small-12 faq">
            <div className="cell faq__title">
              <h2 className="h2">{data.title}</h2>
            </div>

            <ul className="faq-question">
              {
                data.items.map((item:any) => (
                  <li
                    key={Buffer.from(Math.random().toString()).toString('base64')}
                    className="faq-question-col -hidden"
                  >
                    <div className="faq__question">
                      <div className="cell grid-x faq__question_wrap">
                        <i className="icon" />
                        <span className="question">{item.title}</span>
                      </div>
                    </div>
                    <div className="cell small-12 faq__answer">
                      {
                        (item.text) && (
                          <p className="text">{item.text}</p>
                        )
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </FaqComponent>
  );
};
