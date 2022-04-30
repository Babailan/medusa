import styles from "./About.module.scss";
function About() {
  return (
    <section data-scroll-section className={styles.container}>
      <div className={styles.q}>
        <h1
          data-scroll
          data-scroll-sticky
          data-scroll-target={`.${styles.summaryText1}`}
          className={styles.title}
        >
          WHO&apos;S IS MEDUSA?
        </h1>
        <div
          data-scroll
          className={`${styles.summaryText1} ${styles.summaryContainer}`}
        >
          <span>
            MEDUSA IS ONE OF THE MORE UNUSUAL DIVINE FIGURES OF ANCIENT GREECE
            MYTHOLOGY. ONE OF A TRIO OF GORGON SISTERS, MEDUSA WAS THE ONLY
            SISTER WHO WAS NOT IMMORTAL. SHE IS FAMED FOR HER SNAKE-LIKE HAIR
            AND HER GAZE, WHICH TURNS THOSE WHO LOOK AT HER TO STONE.
          </span>
          <span>
            LEGEND STATES THAT MEDUSA WAS ONCE A BEAUTIFUL, AVOWED PRIESTESS OF
            ATHENA WHO WAS CURSED FOR BREAKING HER VOW OF CELIBACY. SHE IS NOT
            CONSIDERED A GODDESS OR OLYMPIAN, BUT SOME VARIATIONS ON HER LEGEND
            SAY SHE CONSORTED WITH ONE. WHEN MEDUSA HAD AN AFFAIR WITH THE SEA
            GOD POSEIDON, ATHENA PUNISHED HER. SHE TURNED MEDUSA INTO A HIDEOUS
            HAG, MAKING HER HAIR INTO WRITHING SNAKES AND HER SKIN WAS TURNED A
            GREENISH HUE. ANYONE WHO LOCKED GAZE WITH MEDUSA WAS TURNED INTO
            STONE. THE HERO PERSEUS WAS SENT ON A QUEST TO KILL MEDUSA. HE WAS
            ABLE TO DEFEAT THE GORGON BY LOPPING OFF HER HEAD, WHICH HE WAS ABLE
            TO DO BY FIGHTING HER REFLECTION IN HIS HIGHLY POLISHED SHIELD. HE
            LATER USED HER HEAD AS A WEAPON TO TURN ENEMIES TO STONE. AN IMAGE
            OF MEDUSA&apos;S HEAD WAS PLACED ON ATHENA&apos;S OWN ARMOR OR SHOWN
            ON HER SHIELD.
          </span>
        </div>
      </div>
      <div className={styles.q}>
        <h1
          data-scroll
          data-scroll-sticky
          data-scroll-target={`.${styles.summaryText2}`}
          className={styles.title}
        >
          LINEAGE.
        </h1>
        <div
          data-scroll
          className={`${styles.summaryText2} ${styles.summaryContainer}`}
        >
          <span>
            ONE OF THREE GORGON SISTERS, MEDUSA WAS THE ONLY ONE WHO WAS NOT
            IMMORTAL. THE OTHER TWO SISTERS WERE STHENO AND EURYALE. GAIA IS
            SOMETIMES SAID TO BE THE MOTHER OF MEDUSA; OTHER SOURCES CITE THE
            EARLY SEA DEITIES PHORCYS AND CETO AS THE PARENTS OF THE TRIO OF
            GORGONS. IT IS GENERALLY BELIEVED THAT SHE WAS BORN AT SEA. THE
            GREEK POET HESIOD WROTE THAT MEDUSA LIVED CLOSE TO THE HESPERIDES IN
            THE WESTERN OCEAN NEAR SARPEDON. HERODOTUS THE HISTORIAN SAID HER
            HOME WAS LIBYA.
          </span>
          <span>
            SHE IS GENERALLY CONSIDERED UNMARRIED, THOUGH SHE DID LIE WITH
            POSEIDON. ONE ACCOUNT SAYS SHE MARRIED PERSEUS. AS A RESULT OF
            CONSORTING WITH POSEIDON, SHE IS SAID TO HAVE BIRTHED PEGASUS, THE
            WINGED HORSE, AND CHRYSAOR, THE HERO OF THE GOLDEN SWORD. SOME
            ACCOUNTS SAID HER TWO SPAWN HAD SPRUNG FROM HER SEVERED HEAD.
          </span>
        </div>
      </div>
      <div className={styles.q}>
        <h1
          data-scroll
          data-scroll-sticky
          data-scroll-target={`.${styles.summaryText3}`}
          className={styles.title}
        >
          HOW IS MEDUSA A FEMINIST SYMBOL?
        </h1>
        <div
          data-scroll
          className={`${styles.summaryText3}  ${styles.summaryContainer}`}
        >
          <span>
            THE STORY OF MEDUSA CONTINUES TO PROVOKE RENEWED PERSPECTIVES ON ITS
            SYMBOLISM — INCLUDING THROUGH THE LENS OF FEMINISM AND
            PSYCHOANALYSIS.
          </span>
          <span>
            From a feminist perspective, Medusa’s story seems a cautionary tale
            of the symbolic decapitation of women and a loss of one’s power. In
            order to unpack the feminist implication of the mythology, let’s
            begin with the narrative of her story. Medusa was one of three
            daughters — born with extraordinary beauty and stunning hair. She
            becomes a priestess to her sister Athena and vows to her sister to
            remain pure. Athena grows jealous, as many men flock to her, only to
            glance at Medusa instead. Eventually, Medusa attracts the attention
            of Poseidon, who subsequently rapes her. Although Athena had the
            power to prevent this, she chooses not to. Athena is one of
            Poseidon’s sworn enemies, and through raping her sister, he is able
            to take power from her. When Athena discovers that Posidon has raped
            Medusa, she chooses to blame her rather than him. In order to punish
            her, Athena curses Medusa by replacing her beautiful hair with a
            head of venomous snakes and making it so anyone who looks into her
            eyes will be turned to stone.
          </span>
        </div>
      </div>
    </section>
  );
}
export { About };
