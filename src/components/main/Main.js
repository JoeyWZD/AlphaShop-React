import StepProgress from './stepProgress/StepProgress';
import StepOne from './stepOne/StepOne';
import StepTwo from './stepTwo/StepTwo';
import StepThree from './stepThree/StepThree';
import StepProgressControl from './stepProgressControl/StepProgressControl';

import styles from './Main.module.css';

export default function Main () {

  return(
    <main className={styles.site}>
      <div className={styles.mainContainer}>

        <section className={styles.registerContainer} >

          <StepProgress></StepProgress>
          
          <section className={styles.formContainer}>
            <div>
              <StepOne />
            </div>
            <div style={{display: 'none'}}>
              <StepTwo />
            </div >
            <div style={{display: 'none'}}>
              <StepThree />
            </div>
          </section>

        </section>


        <div class={styles.stepProgressControlSet}>
          <hr className={styles.line} />
          <StepProgressControl className={styles.stepProgressControl}></StepProgressControl>
        </div>
      </div>
    </main>
  )
}

