export const ASSESSMENTS = {
  GonialAngle: {
    name: 'Gonial Angle',
    unit: '°',
    meaning:
      'This facial assessment is one of the key indicators of your jaw shape. It simply takes the angle formed between the rear/vertical portion of your jaw (Ramus) and the lower jaw (Mandible). Typically, higher angles will result in a softer and less angular jaw, while lower angles will result in a more angular and squared jaw. There is no one-size-fits all perfect angle, but generally staying away from either extreme is preferred.',
    scores: [40, 20, 10, 5, 0, -10, -20],
    notes: [
      'Your jaw has an ideal shape. Since your Gonial angle is neither too obtuse or acute, your jaw is likely neither too square or steep/rounded in shape.',
      "Your jawline has a near ideal shape. Your jaw's structure may be slightly more rounded or squared than is preferred, but it is still within a harmonious range.",
      "Although your jawline does not have the most preferred shape, it still has a normal shape. Your jaw's structure may be slightly more rounded or squared than is preferred, but it is still within a normal range.",
      "Although your jawline does not have the most preferred shape, it still is within a reasonably normal range. Your jaw's structure may be noticeably rounded or squared, but it may not be enough to indicate facial abnormality.",
      "Your jawline's shape would not generally be considered favorable. It is either too square (low value) or rounded and lacking angularity (high value).",
      'Your jawline is beginning to stray into the extremes and would not generally be considered harmonious. It is likely that your jaw is either too square or rounded in shape.',
      'Your jawline shape is at the extremes and would not generally be considered harmonious. It is likely that your jaw is either too square or rounded in shape.',
    ],
    advice: `There are a few effective ways to improve your gonial angle. The best course of action depends on the severity and specifics of your case.

    LIFESTYLE CHANGES
    1) Lose body-fat and reduce facial bloating to reveal the underlying angularity of your jaw.
    2) Good posture can positively affect the appearance of your jawline. It may also help reduce the risk of developing jaw joint problems that can negatively impact your jaw's function.
    3) Avoid excess chewing, which can result in an overdevelopment of your jaw muscles.
    
    NON SURGICAL INTERVENTIONS
    4) Dermal filler around the jawline can alter its appearance, but it must be carefully catered to the patient. Facial balance should be considered.
    5) Botox can atrophy the masseter muscle for patients with overly prominent jaw muscles.
    6) Radiofrequency treatments and UI therapy may improve the skin laxity surrounding the jawline, resulting in a more angular appearance.
    7) Correct any malocclusion if that is the cause of an overly steep mandible (lower jaw). Make sure to consult a Maxillofacial surgeon or Orthodontist if you are considering orthognathic surgery or corrective appliances.
    
    ORTHODONTIC INTERVENTIONS
    8) Wear a bite guard if you grind your teeth. Bruxism can wear down your teeth and has been observed to cause a reduction in the gonial angle, resulting in a flatter appearance of the jaw. 
    
    SURGICAL INTERVENTIONS
    9) Wraparound jaw implants to artificially customize a jaw shape.
    10) A Genioplasty, or chin surgery, may affect the shape of your jawline.
    11) Mandibular angle reduction involves shaving off part of the mandibular structure to reduce its prominence.
    `,
  },
  NasofrontalAngle: {
    name: 'Nasofrontal Angle',
    unit: '°',
    meaning: `This angle tells us the general shape of your upper nose and brow region. The indent formed between your nose and glabella (medial part of brow ridge) will determine the pleasantness of this angle.
    Lower angles are masculinizing while higher angles are feminizing. This is because males typically have something called brow bossing, where their brow ridge is more protrusive. 
    Lower angles also correlate with a lower brow position and deeper set eyes in the front profile, which are both masculinizing features. This distinction in facial morphology between the sexes is referred to as sexual dimorphism; it plays a large role in facial attractiveness and these parameters factor that in. 
    There are many attractive faces that display a wide range of nasofrontal shapes, but generally staying away from the extremes is preferred.`,
    scores: [15, 7.5, 3.75, 1.875, 0, -5],
    notes: [
      'The angle formed between your brow ridge and nose is pleasant. Your brow region is neither too soft or harsh.',
      'Although not ideal, the angle formed between your brow ridge and nose is generally pleasant. Your brow region is neither too soft or harsh.',
      'Although not ideal, the angle formed between your brow ridge and nose is within a normal range. Your brow region is may begin to appear too protrusive (low values) or soft (high values).',
      'Although not ideal, the angle formed between your brow ridge and nose is within a reasonably normal range. Your brow region is may appear too protrusive (low values) or soft (high values).',
      'The angle formed between your brow ridge and nose is outside of a normal range. Your brow region is may appear too protrusive (low values) or soft (high values).',
      'The angle formed between your brow ridge and nose is outside at the extremes, indicating a lack of facial harmony. Your brow region is may appear too protrusive (low values) or soft (high values).',
    ],
    advice: `While it is difficult to change the morphology of the brow region, there are a few ways to improve your nasofrontal angle. This is a sensitive area and not as frequently operated upon.

    LIFESTYLE CHANGES
    1) Relaxing the muscles around your brow region may play a minor role in reducing its perceived prominence.
    
    NON SURGICAL INTERVENTIONS
    2) Filler directed around the brow region can also increase its projection, thereby lowering the nasofrontal angle. 
    
    SURGICAL INTERVENTIONS
    3) Rhinoplasty can change the shape of the area around your nasion and dorsum, which can alter the angle.
    4) Custom forehead implants around the brow region can add projection and lower the angle if desired.
    5) Brow bone reduction surgery may be an option for patients with excess brow protrusion or brow bossing. This may be more common for facial feminization procedures.
    6) Fat grafting , where fat from another part of the body is injected into the forehead area, can subtly alter the nasofrontal angle.
    7) A brow lift may subtly alter the soft tissue (skin & fat) around your brow region.`,
  },
  MandibularPlaneAngle: {
    name: 'Mandibular Plane Angle',
    unit: '°',
    meaning: `This angle is another key indicator of the pleasantness of your jaw shape. Instead of factoring the Ramus, or back portion of your jaw, it just considers how steep or flat your lower jaw is. 
    Usually a jaw that is neither too steep or flat is preferred. An abnormal angle may indicate hyper/hypo-divergent growth patterns and occlusal abnormalities (jaw misalignment). That may include retrognathia or severe class II occlusions where the jaw is weaker than preferred.`,
    scores: [12.5, 6.25, 3.125, 1.5625, -5, -10],
    notes: [
      'The slope of your mandible is harmonious, being neither too flat or downward grown. This is usually indicative of a healthy jaw and normal growth pattern.',
      'While not perfectly ideal, the slope of your mandible is harmonious, being neither too flat or downward grown. This is usually indicative of a healthy jaw and normal growth pattern.',
      'While not an ideal shape, the slope of your mandible is within a normal range of values. At this point, the growth of your jaw may indicate some hyper/hypo-divergent growth patterns, but it also may not.',
      'The slope of your mandible is slightly outside of a normal range of values. At this point, the growth of your jaw may indicate some hyper/hypo-divergent growth patterns. Your jaw may be either too flat (low values) or too steep (high values).',
      'The slope of your mandible is outside of a normal range of values. At this point, the growth of your jaw indicates some hyper/hypo-divergent growth patterns. Your jaw may be either too flat (low values) or too steep (high values).',
      'The slope of your mandible is far outside of a normal range of values. At this point, the growth of your jaw indicates some hyper/hypo-divergent growth patterns. Your jaw may be either too flat (low values) or too steep (high values).',
    ],
    advice: `There are a few effective ways to improve your MPA. The best course to take depends on the severity and specifics of your case. Most of the same advice from the Gonial angle would apply here since the MPA helps form the Gonial angle.

    LIFESTYLE CHANGES
    1) Lose body-fat and reduce facial bloating to reveal the underlying angularity of your jaw.
    2) Good posture can positively affect the appearance of your jawline. It may also help reduce the risk of developing jaw joint problems that can negatively impact your jaw's function.
    3) Avoid excess chewing, which can result in an overdevelopment of your jaw muscles.
    
    NON SURGICAL INTERVENTIONS
    4) Dermal filler around the jawline can alter its appearance, but it must be carefully catered to the patient. Facial balance should be considered.
    5) Botox can atrophy the masseter muscle for patients with overly prominent jaw muscles.
    6) Radiofrequency treatments and UI therapy may improve the skin laxity surrounding the jawline, resulting in a more angular appearance.
    7) Correct any malocclusion if that is the cause of an overly steep mandible (lower jaw). Make sure to consult a Maxillofacial surgeon or Orthodontist if you are considering orthognathic surgery or corrective appliances.
    
    ORTHODONTIC INTERVENTIONS
    8) Wear a bite guard if you grind your teeth. Bruxism can wear down your teeth and has been observed to cause a reduction in the gonial angle, resulting in a flatter appearance of the jaw. 
    
    SURGICAL INTERVENTIONS
    9) Wraparound jaw implants to artificially customize a jaw shape.
    10) A Genioplasty, or chin surgery, may affect the shape of your jawline.
    11) Mandibular angle reduction involves shaving off part of the mandibular structure to reduce its prominence.`,
  },
  RamusMandibleRatio: {
    name: 'Ramus To Mandible Ratio',
    unit: '',
    meaning: `This proportion helps indicate the balance of your overall jaw complex/jawline. Usually a pleasant jaw has a sufficient vertical and forward growth dimension. This contributes to an overall greater jaw volume and more attractive appearance.
    By taking the length of the jaw Ramus and dividing it by the mandibular length, we are assessing whether the Ramus or Mandible length is lacking. Neither should be in disproportion to the other. It is not preferable to have a Ramus that is too short or tall, or a Mandible that is too short or long. `,
    scores: [10, 5, 2.5, 1.25, -5, -10],
    notes: [
      'The length of your ramus relative your mandible is harmonious. Your ramus is neither too long or short.',
      'Although not ideal, the length of your ramus relative your mandible is generally harmonious. Your ramus is neither too long or short.',
      'Although not ideal, the length of your ramus relative your mandible is within a normal range of values. Your ramus is neither too long or short.',
      'The length of your ramus relative your mandible is beginning to fall outside of the normal range. Your ramus may be considered too short (low values) or too long (high values).',
      'The length of your ramus relative your mandible falls outside of the normal range. Your ramus can be considered too short (low values) or too long (high values).',
      'Although not ideal, the length of your ramus relative your mandible is within a normal range of values. Your ramus is neither too long or short.',
    ],
    advice: `While difficult to address, there are a few options to alter your Ramus length.

    LIFESTYLE CHANGES
    1) Losing facial fat or using jawline defining techniques like Gua sha, while not able to alter your bone structure, may improve the appearance of your jawline. 
    
    NON SURGICAL INTERVENTIONS
    2) Filler directed at the ramus or gonion (bottom of the back jaw) may improve its perceived length.
    
    SURGICAL INTERVENTIONS
    3) A unilateral Le Fort I osteotomy has been observed to reduce the ramus height in the literature as a result of reducing the midface length. 
    4) Mandibular angle reduction can reduce the ramus length slightly, resulting in a more feminine jawline.
    3) Custom wraparound jaw implants can add overall volume to the jaw. This would also add height to the mandible, thereby lengthening your face. It is worth factoring that in with your overall facial balance.
    4) There are more invasive procedures like Distraction Osteogenesis that are used in severe cases of craniofacial abnormality.`,
  },
  FacialConvexityGlabella: {
    name: 'Facial Convexity (glabella)',
    unit: '°',
    meaning: `This angle helps clue into any facial deficiencies. That could be deficiency of the upper (brow region), middle (maxillary region), or lower (mandibular region) parts of the face.
    If the angle is too low, that indicates an overly rounded profile. An angle that is too high can indicate an overly flat or even concave profile (e.g., "moon face"). 
    The reason this assessment is vital is because it also ties heavily into your occlusal relationship. Overly low angles typically clue into a severe overjet and overbite, while overly high angles can often clue into an underbite. 
    Thus, having a harmonious angle somewhere in the middle suits most faces best. Within that middle ground there are variations based on ethnicity and other specific facial features.`,
    scores: [10, 5, 2.5, 0, -2.5, -5],
    notes: [
      'You have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with no severe overjet or underbite.',
      'Although not perfectly harmonious, you have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with perhaps some minor overjet (low values) or underbite (high values).',
      'Although not perfectly harmonious, you have a normal shape of the side profile. Neither part of your face -- upper, middle, or lower are in extreme disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is beginning to stray outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is far outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in extreme disharmony to one another. You certainly have some occlusal issues like perhaps an overjet (low values) or underbite (high values).',
    ],
    advice: `Improving your facial convexity requires altering the balance and projection of your facial thirds. This is primarily done through altering the position of the upper jaw (maxilla), lower jaw (mandible & chin), and to a lesser extent the brow region.

    LIFESTYLE CHANGES
    1) Achieving a healthy weight can naturally alter facial contours, as changes in body fat distribution can affect facial fullness and profiles.
    
    NON SURGICAL INTERVENTIONS
    2) Facial hair around the chin can improve the perceived projection of your chin, resulting in a flatter facial profile.
    3) Filler directed at regions like the lip/philtrum and chin can subtly alter the convexity of your profile.
    
    ORTHODONTIC INTERVENTIONS
    Consulting an orthodontist or maxillofacial surgeon is the best way to improve the alignment of your jaw.
    4) Braces or invisalign may yield subtle changes to your side profile. Correcting dental misalignments can alter the lip's position and improve the jawline, impacting the facial profile and convexity.
    5) Orthodontic contraptions and appliances can influence jaw growth, particularly in young patients.
    
    SURGICAL INTERVENTIONS
    6) Orthognathic surgery can alter the position of your upper and lower jaw to be in better alignment . There are also procedures to advance the jaw. These procedures are typically financially costly and invasive, requiring up to a year to fully recover . Orthognathic surgery is corrective in nature and appropriate in cases of severe malocclusion or facial recession.
    7) Altering the projection of your brow region through filler, fat grafting, or implants can increase facial convexity. Reductions to brow ridge projection can lead to a softer and rounder profile.
    8) Multiple-implant augmentation of the midface skeleton can simulate the visual appearance of Le Fort III osteotomy and advancement without altering dental occlusion. The entire midface is freed in the subperiosteal plane and augmented through implants to be more projected.
    9) Chin augmentation or reduction can alter the chin's projection (i.e., sliding or reduction genioplasty). 
    A precise course of action would require consulting a specialist.`,
  },
  SubmentalCervicalAngle: {
    name: 'Submental Cervical Angle',
    unit: '°',
    meaning:
      'This angle formed between the neck (cervical region) and the chin/jaw (mental region) helps clue into the pleasantness of your jaw contour. Lower angles within reason lead to a taut and defined appearance, while very obtuse angles tend to make a jaw look weaker. This is commonly the case in older individuals. A combination of higher body fat and loose skin (jowls) will lead to the appearance of a weaker jaw.',
    scores: [10, 5, 2.5, 0, -5],
    notes: [
      'The angle between your neck and lower jaw is harmonious and defined.',
      'Although not perfectly ideal, the angle between your neck and lower jaw is generally harmonious and defined.',
      'Although not perfectly ideal, the angle between your neck and lower jaw is within a normal range.',
      'The angle between your neck and lower jaw is outside of the normal range and may indicate lacking jaw definition.',
      'The angle between your neck and lower jaw is far outside of the normal range and may indicate lacking jaw definition.',
    ],
    advice: `There are a few courses of action that can improve the definition around your neck and jaw. 

    LIFESTYLE CHANGES
    1) Losing body-fat and reducing facial bloating can improve the definition and contour of your jawline.
    2) Improvements in posture can dramatically improve the appearance of your jawline.
    
    NON SURGICAL INTERVENTIONS
    3) Kybella is an FDA-approved injectable treatment that destroys fat cells under the chin, reducing fat and improving the contour of the neck and jawline.
    4) Radiofrequency (RF) Treatments: RF energy is used to tighten the skin and stimulate collagen production, which can improve skin laxity in the neck and submental area.
    5) Ultrasound Therapy (e.g., Ultherapy): Utilizes focused ultrasound energy to lift and tighten loose skin, improving the definition of the neck and jawline.
    
    SURGICAL INTERVENTIONS
    6) Submental liposuction can reduce loose skin or adipose tissue underneath the jawline.
    7) Neck Lift (Lower Rhytidectomy): A surgical procedure that removes excess skin and fat from the neck and tightens the platysma muscle, significantly improving the submental-cervical angle.
    8) Submentoplasty: A less invasive surgical option that combines liposuction with direct excision of fat and tightening of the platysma muscle through a small incision under the chin.
    9) Platysmaplasty: A surgery that addresses the platysma muscle in the neck, tightening it to define the neck and jawline better.
    `,
  },
  NasoFacialAngle: {
    name: 'Nasofacial Angle',
    unit: '°',
    meaning: `This is an important assessment that clues into the harmony between your nose and chin. When used in conjunction with other similar assessments, we can generally tell whether your profile has a deficiency in regards to your chin/lower jaw or nose projection.
    The harmonious range for this assessment is quite standard across most faces. If the angle is too low that can indicate a nose that is too small and un-projected. Or, it can indicate an overly prominent chin. An angle that is too wide can indicate the opposite -- an overly retruded and weak jaw, or overly prominent nose. It can also indicate a combination of the two within each category (too low or too high).`,
    scores: [9, 4.5, 2.25, 1.125, -2, -5],
    notes: [
      "This angle indicates a harmonious balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "While not perfectly ideal, your angle indicates a harmonious balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "While not perfectly ideal, your angle indicates a normal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This may indicate that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
      "Your angle indicates a slightly abnormal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This may indicate that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
      "Your angle indicates an abnormal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This indicates that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
      "Your angle indicates an extremely abnormal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This indicates that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
    ],
    advice: `Improving the Nasofacial angle will generally require the same suggestions as the other facial assessments (i.e., facial convexity):

    LIFESTYLE CHANGES
    1) Achieving a healthy weight can naturally alter facial contours, as changes in body fat distribution can affect facial fullness and profiles.
    
    NON SURGICAL INTERVENTIONS
    2) Facial hair around the chin can improve the perceived projection of your chin, resulting in a lower nasofacial angle.
    3) Filler directed at regions like the nose and chin can subtly alter this angle.
    
    ORTHODONTIC INTERVENTIONS
    Consulting an orthodontist or maxillofacial surgeon is the best way to improve the alignment of your jaw.
    4) Braces or invisalign may yield subtle changes to your side profile. Correcting dental misalignments can alter the lip's position and improve the jawline, impacting the facial profile.
    5) Orthodontic contraptions and appliances can influence jaw growth, particularly in young patients.
    
    SURGICAL INTERVENTIONS
    6) Orthognathic surgery can alter the position of your upper and lower jaw to be in better alignment . There are also procedures to advance the jaw. These procedures are typically financially costly and invasive, requiring up to a year to fully recover . Orthognathic surgery is corrective in nature and appropriate in cases of severe malocclusion or facial recession.
    7) Rhinoplasty can alter your nose shape in a specific way to either increase or reduce this angle. One such example would be reducing your nasal projection, which tends to reduce the angle and vice versa. 
    8) Multiple-implant augmentation of the midface skeleton can simulate the visual appearance of Le Fort III osteotomy and advancement without altering dental occlusion. The entire midface is freed in the subperiosteal plane and augmented through implants to be more projected.
    9) Chin augmentation or reduction can alter the chin's projection (i.e., sliding or reduction genioplasty). 
    A precise course of action would require consulting a specialist.
    `,
  },
  NasoLabialAngle: {
    name: 'Nasolabial Angle',
    unit: '°',
    meaning: `This angle helps assess the harmony of the nose, namely how upturned it is. It is the angle formed between your upper lip and the inflection point near the nasal tip where the nose shape changes direction. Generally, a nose that is neither too upturned or droopy is preferred. This means an angle that is nietiher too low or high. 
    The nasolabial angle is also contingent on the shape and projection of the philtrum. If the philtrum and upper lip are prominent, the angle will be lower. Thus, that would not indicate an issue with the nose itself. Ethnic variability is important to factor in as lip projection varies between the groups.`,
    scores: [7.5, 3.75, 1.875, 0.9375, -3, -5, -7.5],
    notes: [
      'Your nose has a pleasant and ideal shape. Your nose is likely not too upturned or droopy and your philtrum probably has a pleasant shape.',
      'Your nose has a pleasant shape. Your nose is likely not too upturned or droopy and your philtrum probably has a pleasant shape.',
      'While not ideal, your nose has a normal shape. Your nose may begin to appear noticeably upturned or droopy and your philtrum may have a less than ideal shape.',
      'While not ideal, your nose has a reasonably normal shape. Your nose may begin to appear noticeably upturned or droopy and your philtrum may have a less than ideal shape.',
      'Your nose has an abnormal shape. Your nose may be noticeably upturned (high values) or droopy (low values) and your philtrum may have a less than ideal shape.',
      'Your nose has an extremely abnormal shape. Your nose may be noticeably upturned (high values) or droopy (low values) and your philtrum may have a less than ideal shape.',
      'Your nose has an extremely abnormal shape. Your nose may be noticeably upturned (high values) or droopy (low values) and your philtrum may have a less than ideal shape.',
    ],
    advice: `
    NON SURGICAL INTERVENTIONS
    1) Growing facial hair may give the illusion of a more acute nasolabial angle.
    
    SURGICAL INTERVENTIONS
    2) Upper lip filler may create some upswing of your philtrum, thereby reducing the angle.
    3) Permalip lip implants may increase lip volume, thereby reducing this angle.
    4) A Rhinoplasty primarily aimed at addressing the columella and nasal tip region can alter the nasolabial angle. A cosmetic surgeon should be able to make the nose contour more upturned in the case of a droopy nasal tip.
    `,
  },
  OrbitalVector: {
    name: 'Orbital Vector',
    unit: '',
    meaning:
      "This assessment provides insight into the underlying bone structure around your eyes, as well as the soft tissue (e.g., fat/skin) overlying it. It assesses the position of the infraorbital region relative to the foremost point of your eyeball. While there are many causes for periorbital hyperpigmentation (dark circles), hollowing of the infraorbital region can often be confused with POH. Infraorbital hollowing is when the tissue underneath the eyes is hollow, creating the appearance of a trough and overall leading to a less youthful and vibrant appearance. POH simply refers to the skin's color around the eyes. The orbital vector tells us if the tissue underneath the eye is inferior (in front) or posterior (behind) the eye. Usually the latter is not aesthetically pleasing.",
    scores: [7.5, 3.75, 0],
    notes: [
      'You have a positive orbital vector, indicating no infraorbital hollowing. This is a youthful feature that is generally considered attractive.',
      'You have a neutral orbital vector, indicating no infraorbital hollowing. This is a youthful feature that is generally considered attractive.',
      'You have a negative orbital vector, indicating infraorbital hollowing. There is a lack of soft tissue protrusion under your eyes, making your eyes perhaps appear sunken and less youthful.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Gaining body-fat may provide some rejuvenating effect to the undereye region. As your face gains soft tissue in the form of fat, so does the region under your eyes to some degree.
    
    NON SURGICAL INTERVENTIONS
    2) Topical Treatments: Retinoids, peptides, and vitamin C can improve skin texture and thickness over time, which might help diminish the appearance of infraorbital hollows slightly.
    
    SURGICAL INTERVENTIONS
    3) Hyaluronic acid filler injected in the infraorbital region can add volume and create a rejuvenating effect.
    4) Fat Transfer: A minimally invasive procedure where fat is harvested from another part of the body, processed, and then injected into the infraorbital area to fill hollows. Though more invasive than fillers, it can offer a more permanent solution.
    5) Cheekbone Augmentation: Implants or fat grafting to the cheeks can improve the orbital vector by enhancing the prominence of the cheekbones, creating a more positive vector and reducing the relative prominence of the eyes.
    6) Orbital Decompression: In cases where the negative orbital vector is due to thyroid eye disease or other conditions causing the eyes to bulge, orbital decompression surgery can reposition the eyes to a more normal position.
    7) Midface Lift: This procedure can elevate the midface tissues, reducing the appearance of hollowing under the eyes and improving the overall facial contour.`,
  },
  TotalFacialConvexity: {
    name: 'Total Facial Convexity',
    unit: '°',
    meaning: `See notes for "Facial convexity(glabella)".This is a variation of the normal facial convexity assessment. The only difference is that it includes your nose. It is possible to have a less than ideal facial convexity angle while having an ideal total facial convexity angle. It depends how well your nose harmonizes with your facial profile. The same concept applies here, where you don't want a full (or total) profile that is too flat or too rounded. While this does still factor in the lower jaw, it also indicates whether your nose is too protrusive or too small.`,
    scores: [7.5, 3.75, 1.88, 0, -3.75, -5, -7.5],
    notes: [
      'The harmony of your lateral profile is pleasant when considering your nose. This means that your nose harmonizes well with the projection of your brow ridge and chin.',
      'The harmony of your lateral profile is generally pleasant when considering your nose. This means that your nose harmonizes well with the projection of your brow ridge and chin.',
      'The harmony of your lateral profile is normal when considering your nose. This means that your nose harmonizes reasonably well with the projection of your brow ridge and chin.',
      'The harmony of your lateral profile is beginning to appear abnormal when considering your nose. This means that your nose harmonizes unfavorably with the projection of your brow ridge and chin.',
      'The harmony of your lateral profile is abnormal when considering your nose. This means that your nose harmonizes unfavorably with the projection of your brow ridge and chin.',
      'The harmony of your lateral profile is extremely abnormal when considering your nose. This means that your nose harmonizes unfavorably with the projection of your brow ridge and chin.',
      'The harmony of your lateral profile is extremely abnormal when considering your nose. This means that your nose harmonizes unfavorably with the projection of your brow ridge and chin.',
    ],
    advice: `The same concepts of improvement would apply here as for the facial convexity (glabella) assessment. However, since this is the total profile, altering the nose's projection can also improve this assessment (if that is the point of concern). It is important to carefully assess whether your unfavorable angle is due to your jaw, glabella, nose projection, or a combination of the three

    LIFESTYLE CHANGES
    1) Achieving a healthy weight can naturally alter facial contours, as changes in body fat distribution can affect facial fullness and profiles.
    
    NON SURGICAL INTERVENTIONS
    2) Facial hair around the chin can improve the perceived projection of your chin, resulting in a flatter facial profile.
    3) Filler directed at regions like the lip/philtrum and chin can subtly alter the convexity of your profile.
    
    ORTHODONTIC INTERVENTIONS
    Consulting an orthodontist or maxillofacial surgeon is the best way to improve the alignment of your jaw.
    4) Braces or invisalign may yield subtle changes to your side profile. Correcting dental misalignments can alter the lip's position and improve the jawline, impacting the facial profile and convexity.
    5) Orthodontic contraptions and appliances can influence jaw growth, particularly in young patients.
    
    SURGICAL INTERVENTIONS
    6) Orthognathic surgery can alter the position of your upper and lower jaw to be in better alignment . There are also procedures to advance the jaw. These procedures are typically financially costly and invasive, requiring up to a year to fully recover . Orthognathic surgery is corrective in nature and appropriate in cases of severe malocclusion or facial recession.
    7) Altering the projection of your brow region through filler, fat grafting, or implants can increase facial convexity. Reductions to brow ridge projection can lead to a softer and rounder profile.
    8) Multiple-implant augmentation of the midface skeleton can simulate the visual appearance of Le Fort III osteotomy and advancement without altering dental occlusion. The entire midface is freed in the subperiosteal plane and augmented through implants to be more projected.
    9) Chin augmentation or reduction can alter the chin's projection (i.e., sliding or reduction genioplasty). 
    10) A Rhinoplasty can reduce the projection of your nose, thereby increasing this angle if your profile appears too round or your nose appears disproportionately large.
    A precise course of action would require consulting a specialist.
    `,
  },
  MentolabialAngle: {
    name: 'Mentolabial Angle',
    unit: '°',
    meaning: `This is the angle formed between your lower lip and the foremost point of your chin (Pogonion). It provides valuable insight into the nature of your chin's shape and protrusion, as well as the protrusion of your lower lip.
    A lower angle indicates a greater indent between the chin and lower lip. This could be due to a pouted lower lip or prominent chin. However, some degree of indent is desirable. In other words, you generally don't want an angle that is too high or low. A normal angle tends to form the most attractive and pleasant appearance.`,
    scores: [7.5, 3.75, 1.88, 0, -3.75, -7.5],
    notes: [
      'You have a pleasant contour of the chin. The indent formed between your chin is neither too deep or flat.',
      'You have a generally pleasant contour of the chin. The indent formed between your chin is neither too deep or flat.',
      'You have a normal contour of the chin. The indent formed between your chin could be a bit more normalized since it is either too indented (low values) or flat (high values).',
      'You have a slightly abnormal contour of the chin. The indent formed between your chin could be a bit more normalized since it is either too indented (low values) or flat (high values).',
      'You have an abnormal contour of the chin. The indent formed between your chin could be a bit more normalized since it is too indented (low values) or flat (high values).',
      'You have an extremely abnormal contour of the chin. The indent formed between your chin could be a bit more normalized since it is too indented (low values) or flat (high values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Losing body-fat can make the indent between your chin and lower lip subtly more pronounced.
    2) Facial hair in males around the chin can give the illusion of increasing this angle, or decreasing it, depending on how it is styled.
    3) While skincare and lifestyle changes don't directly alter the mentolabial angle, maintaining healthy skin can improve the overall appearance of the lower face. 
    
    NON SURGICAL INTERVENTIONS
    4) Dermal Fillers: Injectable fillers can be used to add volume to the chin and subtly alter the lower facial contours, impacting the mentolabial angle by enhancing chin projection or softening the crease between the lower lip and chin.
    5) Neuromodulators (e.g., Botox): Injecting Botox into the mentalis muscle (the muscle responsible for chin dimpling) can relax the chin area, potentially softening a deep mentolabial fold.
    
    SURGICAL INTERVENTIONS
    6) Genioplasty (Chin Surgery): This surgical procedure involves repositioning or reshaping the chin bone (mandible), which can significantly alter the mentolabial angle. It can be performed by either sliding genioplasty, where the chin bone is cut and moved forward or backward, or by adding or removing bone material to achieve the desired contour.
    7) Lip Reduction or Augmentation: Adjusting the size and projection of the lower lip can influence the mentolabial angle. Lip augmentation can be achieved with fillers or fat grafting, while lip reduction involves the surgical removal of lip tissue.
    8) Chin augmentation or reduction  can increase or decrease the projection of your chin.
    `,
  },
  FacialConvexityNasion: {
    name: 'Facial Convexity (nasion)',
    unit: '°',
    meaning: `See notes for "Facial convexity(glabella)". This measurement is simply a variation of that one. It seeks to eliminate the confounding variable of one's brow ridge (Glabella) and replace it with the Nasion. This provides useful insight because sometimes the regular facial convexity angle can be misleading if your brow ridge is quite protrusive, or non-protrusive for that matter.`,
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      'You have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with no severe overjet or underbite.',
      'Although not perfectly harmonious, you have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with perhaps some minor overjet (low values) or underbite (high values).',
      'Although not perfectly harmonious, you have a normal shape of the side profile. Neither part of your face -- upper, middle, or lower are in extreme disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is beginning to stray outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is far outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in extreme disharmony to one another. You certainly have some occlusal issues like perhaps an overjet (low values) or underbite (high values).',
    ],
    advice: `The same improvement notes generally apply here as do for the facial convexity (glabella).

    LIFESTYLE CHANGES
    1) Achieving a healthy weight can naturally alter facial contours, as changes in body fat distribution can affect facial fullness and profiles.
    
    NON SURGICAL INTERVENTIONS
    2) Facial hair around the chin can improve the perceived projection of your chin, resulting in a flatter facial profile.
    3) Filler directed at regions like the lip/philtrum and chin can subtly alter the convexity of your profile.
    
    ORTHODONTIC INTERVENTIONS
    Consulting an orthodontist or maxillofacial surgeon is the best way to improve the alignment of your jaw.
    4) Braces or invisalign may yield subtle changes to your side profile. Correcting dental misalignments can alter the lip's position and improve the jawline, impacting the facial profile and convexity.
    5) Orthodontic contraptions and appliances can influence jaw growth, particularly in young patients.
    
    SURGICAL INTERVENTIONS
    6) Orthognathic surgery can alter the position of your upper and lower jaw to be in better alignment . There are also procedures to advance the jaw. These procedures are typically financially costly and invasive, requiring up to a year to fully recover . Orthognathic surgery is corrective in nature and appropriate in cases of severe malocclusion or facial recession.
    7) Altering the projection of your brow region through filler, fat grafting, or implants can increase facial convexity. Reductions to brow ridge projection can lead to a softer and rounder profile.
    8) Multiple-implant augmentation of the midface skeleton can simulate the visual appearance of Le Fort III osteotomy and advancement without altering dental occlusion. The entire midface is freed in the subperiosteal plane and augmented through implants to be more projected.
    9) Chin augmentation or reduction can alter the chin's projection (i.e., sliding or reduction genioplasty). 
    A precise course of action would require consulting a specialist.
    `,
  },
  NasalProjection: {
    name: 'Nasal Projection',
    unit: '',
    meaning: `This proportion helps gather whether your nose is too small or large in terms of projection. The projection of the nose simply refers to how much your nose sticks out from your face. 
    Generally, a nose that is not too small or large is preferred because it creates the best overall facial balance.`,
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      'You have an ideal nasal projection. Your nose is not too pronounced or unprojected.',
      'You have a near ideal nasal projection. Your nose is not too pronounced or unprojected.',
      'While not ideal, you have a normal nasal projection. Your nose may be considered slightly too projected (high values) or unprojected (low values).',
      'You have a slightly abnormal nasal projection. Your nose may be slightly too projected (high values) or unprojected (low values).',
      'You have an abnormal nasal projection. Your nose is slightly too projected (high values) or unprojected (low values).',
      'You have an extremely abnormal nasal projection. Your nose is slightly too projected (high values) or unprojected (low values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup Techniques: Contouring with makeup can create the illusion of a more projected or less projected nose.
    
    NON SURGICAL INTERVENTIONS
    2) Dermal Fillers: Injectable fillers can be used to subtly alter the shape of the nose, including its projection. This is a temporary solution but can be a good option for those seeking minor adjustments or considering surgical options in the future.
    3) Thread Lifts: Though less common for nasal adjustments, thread lifts can provide a temporary lift or support to the nasal tip, slightly altering its projection.
    
    SURGICAL INTERVENTIONS
    4) Rhinoplasty: This is the most direct and permanent way to modify nasal projection. Rhinoplasty can increase or decrease the nose's projection through structural modifications, using techniques like cartilage grafting (to build up the nose) or cartilage reshaping/reduction.
    5) Septorhinoplasty: Combines the features of rhinoplasty with corrections of the nasal septum, which can impact both the functional and aesthetic aspects of nasal projection.`,
  },
  NasalWHRatio: {
    name: 'Nasal W to H',
    unit: '',
    meaning: `This ratio helps determine whether the projection of your nose is proportional to its height. 
    A more prominent nose may harmonize better with a longer nasal length, while a shorter nose will tend to harmonize better with less protrusion. A disbalance between the width and height of the nose in the side profile can potentially throw off facial harmony.`,
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      'You have an ideal Nasal WHR. The projection of your nose is proportionate relative to its height.',
      'You have a near ideal Nasal WHR. The projection of your nose is proportionate relative to its height.',
      'You have a normal Nasal WHR. The projection of your nose is reasonably proportionate relative to its height.',
      'You have a slightly abnormal Nasal WHR. The projection of your nose may be slightly too much (high values) or too little (low values) compared to its height.',
      'You have an abnormal Nasal WHR. The projection of your nose may be too much (high values) or too little (low values) compared to its height.',
      'You have an extremely abnormal Nasal WHR. The projection of your nose may be too much (high values) or too little (low values) compared to its height.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup Techniques: Contouring with makeup can create the illusion of a more projected or less projected nose.
    
    NON SURGICAL INTERVENTIONS
    2) Dermal Fillers: Injectable fillers can be used to subtly alter the shape of the nose, including its projection. This is a temporary solution but can be a good option for those seeking minor adjustments or considering surgical options in the future.
    3) Thread Lifts: Though less common for nasal adjustments, thread lifts can provide a temporary lift or support to the nasal tip, slightly altering its projection.
    
    SURGICAL INTERVENTIONS
    4) Rhinoplasty: This is the most direct and permanent way to modify nasal projection. Rhinoplasty can increase or decrease the nose's projection through structural modifications, using techniques like cartilage grafting (to build up the nose) or cartilage reshaping/reduction.
    5) Septorhinoplasty: Combines the features of rhinoplasty with corrections of the nasal septum, which can impact both the functional and aesthetic aspects of nasal projection.`,
  },
  RickettsELine: {
    name: "Ricketts' E Line",
    unit: '',
    meaning:
      'This assessment provides insight into the relative positioning of your chin, lips, and nose. More specifically, the E line tells us how far back your upper and lower lip are relative to this line. If there is a disbalance between the upper or lower lip and its relation to the line, it can indicate a deficiency of jaw growth. Given the context of other facial assessments, it helps indicate whether the chin, lips, or nose pose any issue in terms of facial harmony.',
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You do not have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
    ],
    advice: `It is important to factor in ethnic variation in lip size when considering these options. 

    LIFESTYLE CHANGES
    1) Facial hair in males may be a viable option to increase perceived chin projection. 
    
    NON SURGICAL INTERVENTIONS
    2) Dermal Fillers: Injectable fillers can add volume to the lips or chin, subtly altering their projection to improve alignment with the E-line.
    3) Botox: Can be used to adjust the positioning of the lips slightly or reduce the appearance of a gummy smile, affecting the lips' relation to the E-line.
    4) Thread Lifts: Though less common, thread lifts can offer temporary repositioning of the lower facial features, including the jowls and cheeks, potentially influencing the overall facial profile and its relation to the E-line.
    
    ORTHODONTIC INTERVENTIONS
    5) Orthodontic Treatment: Braces or clear aligners can adjust the positioning of teeth, which may indirectly influence the lips' projection and their relation to the E-line.
    
    SURGICAL INTERVENTIONS
    6) Rhinoplasty: Adjusts the shape and projection of the nose to better align with the E-line.
    7) Chin Surgery (Genioplasty or Chin Implants): Enhances or reduces chin projection to align with the E-line. Genioplasty can move the chin forward or backward, while implants can increase its projection.
    8) Lip Lift or Reduction: Alters the height and position of the lips to achieve better alignment with the E-line.
    9) Orthognathic Surgery: In cases of significant jaw discrepancies, surgical repositioning of the jaw(s) can improve overall facial harmony and alignment with the E-line.
    10) Fat Transfer to Lips: Adds volume to the lips, potentially pushing them slightly forward to align closer to or on the E-line.
    `,
  },
  HoldawayHLine: {
    name: 'Holdaway H Line',
    unit: '',
    meaning:
      'This assessment provides insight into the relative positioning of your chin and lips. More specifically, the H line determines whether your lower lip is too prominent or the opposite. It can also indicate whether your chin is too weak since that may also lead to a less favorable assessment.',
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin and lips according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin and lips according to this specific assessment.',
      'You have an unpleasant harmony between your chin and lips according to this specific assessment.',
    ],
    advice: `N/A`,
  },
  SteinerSLine: {
    name: 'Steiner S Line',
    unit: '',
    meaning:
      'This assessment provides insight into the relative positioning of your chin, lips, and nose. More specifically, the S line takes the top point at the inflection point of the columella (column between nostrils). The line extending from the chin should make contact with the upper lip and columella. If not, it can indicate a less than ideal position of the upper lip. ',
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You do not have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
    ],
    advice: `N/A`,
  },
  BurstoneLine: {
    name: 'Burstone Line',
    unit: '',
    meaning:
      'This assessment provides insight into the relative positioning of your chin and lips. More specifically, this assessment tells us how prominent your lips are relative to your chin. If your lips fall behind the line, it can mean that your lips are too thin and retruded. If they extent too far past the line, it can indicate overly prominent lips. Keep in mind, all of the lip assessments must factor in some degree of ethnic variation to account for differences in lip and nose size. In line with the concept of averageness, certain population groups may actually suit fuller lips that do not fully align with the standard EHSB lines.',
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You do not have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
    ],
    advice: `N/A`,
  },
  NasomentalAngle: {
    name: 'Nasomental Angle',
    unit: '°',
    meaning: `Reference notes on "Nasofacial angle". This measurement is a variation of the Nasofacial angle.
    If the angle is too large, it can indicate an overly prominent chin or lower jaw. If the angle is too small, it can indicate a weaker than ideal chin. The angle also depends on the shape of the nose and how slanted it is from the nasal tip to Nasion. These assessments also help provide insight into malocclusion or unideal positioning of the jaws, especially within the context of the facial convexity angles. In other words, there may be a misalignment of the jaw leading to a less than favorable angle, or it could simply be your unique nose shape. The latter is less of an aesthetic concern.`,
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      "This angle indicates a harmonious balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates a reasonably harmonious balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "While not ideal, this angle indicates a normal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have a normal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates a slightly abnormal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have an abnormal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates an abnormal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It probably indicates that you have an abnormal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates an extremely abnormal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It probably indicates that you have an extremely abnormal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
    ],
    advice: `Improving the Nasomental angle will generally require the same suggestions as the other facial assessments (i.e., facial convexity):

    LIFESTYLE CHANGES
    1) Achieving a healthy weight can naturally alter facial contours, as changes in body fat distribution can affect facial fullness and profiles.
    
    NON SURGICAL INTERVENTIONS
    2) Facial hair around the chin can improve the perceived projection of your chin, resulting in a lower nasofacial angle.
    3) Filler directed at regions like the nose and chin can subtly alter this angle.
    
    ORTHODONTIC INTERVENTIONS
    Consulting an orthodontist or maxillofacial surgeon is the best way to improve the alignment of your jaw.
    4) Braces or invisalign may yield subtle changes to your side profile. Correcting dental misalignments can alter the lip's position and improve the jawline, impacting the facial profile.
    5) Orthodontic contraptions and appliances can influence jaw growth, particularly in young patients.
    
    SURGICAL INTERVENTIONS
    6) Orthognathic surgery can alter the position of your upper and lower jaw to be in better alignment . There are also procedures to advance the jaw. These procedures are typically financially costly and invasive, requiring up to a year to fully recover . Orthognathic surgery is corrective in nature and appropriate in cases of severe malocclusion or facial recession.
    7) Rhinoplasty can alter your nose shape in a specific way to either increase or reduce this angle. One such example would be reducing your nasal projection, which tends to reduce the angle and vice versa. 
    8) Multiple-implant augmentation of the midface skeleton can simulate the visual appearance of Le Fort III osteotomy and advancement without altering dental occlusion. The entire midface is freed in the subperiosteal plane and augmented through implants to be more projected.
    9) Chin augmentation or reduction can alter the chin's projection (i.e., sliding or reduction genioplasty). 
    A precise course of action would require consulting a specialist.
    `,
  },
  GonionMouthRelationship: {
    name: 'Gonion To Mouth Relationship',
    unit: '',
    meaning:
      'This assessment provides insight into the vertical growth dimension of the jaw. To ensure sufficient vertical growth and jaw volume, we want to assess whether the jaw Gonion falls below the lateral oral commissure (outer mouth corner). If the jaw Gonion falls above the mouth, it can indicate a deficiency in Ramus length and overall give the appearance of a weaker jaw.',
    scores: [5, 1, 0, -5],
    notes: [
      'Your ramus has sufficient vertical growth.',
      'Your ramus has normal vertical growth, but could ideally have more length.',
      'Your ramus has lacking vertical growth.',
      'Your ramus has severely lacking vertical growth.',
    ],
    advice: `
    NON SURGICAL INTERVENTIONS
    1) Filler directed at the ramus or gonion (bottom of the back jaw) may improve its perceived length.
    
    SURGICAL INTERVENTIONS
    2) Custom wraparound jaw implants can add overall volume to the jaw. This would also add height to the mandible, thereby lengthening your face. It is worth factoring that in with your overall facial balance.
    `,
  },
  RecessionRelativeFrankfortPlane: {
    name: 'Recession Relative to Frankfort Plane',
    unit: '',
    meaning:
      "This assessment helps determine whether the chin's projection is deficient relative to the Nasion (top of the nose). Given the context of other facial assessments like the facial convexity, we can determine whether the chin is indeed recessed. It may sometimes be the case that an individual has a very prominent brow ridge, which can lead to a poor assessment. However, it is important to not look at one facial assessment in isolation, but consider them all as a whole. To standardize the assessment across all faces and head positions, the Frankfort Horizontal plane is used as a reference line that cuts through the Tragus and orbital bone. ",
    scores: [5, 1, 0, -5],
    notes: [
      'According to this assessment, you have no notable recession regarding the position of your chin relative to your nasion.',
      'According to this assessment, you have slight recession regarding the position of your chin relative to your nasion.',
      'According to this assessment, you have moderate recession regarding the position of your chin relative to your nasion.',
      'According to this assessment, you have extreme recession regarding the position of your chin relative to your nasion.',
    ],
    advice: `This assessment tends to correlate to the facial convexity. To improve it, you can consider a few things:

    LIFESTYLE CHANGES
    1) Facial hair in males may give the illusion of a more prominent lower jaw.
    
    NON SURGICAL INTERVENTIONS
    2) Filler directed at the chin can subtly alter the projection of your lower jaw.
    
    ORTHODONTIC INTERVENTIONS
    Consulting an orthodontist or maxillofacial surgeon is the best way to improve the alignment of your jaw.
    3) Braces or invisalign may yield subtle changes to your side profile. Correcting dental misalignments can alter the lip's position and improve the jawline, impacting the facial profile
    4) Orthodontic contraptions and appliances can influence jaw growth, particularly in young patients.
    
    SURGICAL INTERVENTIONS
    5) Orthognathic surgery can alter the position of your upper and lower jaw to be in better alignment . There are also procedures to advance the jaw. These procedures are typically financially costly and invasive, requiring up to a year to fully recover . Orthognathic surgery is corrective in nature and appropriate in cases of severe malocclusion or facial recession.
    6) Chin augmentation or reduction can alter the chin's projection (i.e., sliding or reduction genioplasty). 
    A precise course of action would require consulting a specialist.`,
  },
  BrowridgeInclinationAngle: {
    name: 'Browridge Inclincation Angle',
    unit: '°',
    meaning:
      'This assessment helps determine how slanted or inclined the forehead is. This can vary greatly depending on the projection of the brow bone as well. For males with significant brow bossing, the forehead will appear more slanted. In general, a forehead that is neither too flat or slanted provides the most aesthetically pleasing appearance. Males tend to have more slanted foreheads on average, while women tend to have flatter foreheads as a result of less brow projection. Women also tend to have a slight curvature towards the top of the frontal bone(forehead).  ',
    scores: [4, 2, 1, 0.5, -2, -6, -10],
    notes: [
      'Your forehead is not overly sloped back or flat. It is harmonious in shape.',
      'While not ideal, your forehead is not overly sloped back or flat.',
      'While not ideal, your forehead has a normal shape. It is not overly sloped back (high values) or flat (low values).',
      'Your forehead has a slightly  abnormal shape. It is likely overly sloped back (high values) or flat (low values).',
      'Your forehead has an abnormal shape. It is likely overly sloped back (high values) or flat (low values).',
      'Your forehead has an extremely abnormal shape. It is either overly sloped back (high values) or flat (low values).',
      'Your forehead has an extremely abnormal shape. It is either overly sloped back (high values) or flat (low values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) A hairstyle that covers your forehead can distract from or hide this specific feature.
    
    NON SURGICAL INTERVENTIONS
    2) Dermal Fillers: Injectable fillers can be used to temporarily enhance the contour of the brow ridge by adding volume beneath the skin.
    3) Fat Transfer: Similar to fillers, but using fat harvested from another part of the body. This can provide a more natural augmentation of the brow ridge, though it involves a minimally invasive procedure.
    
    SURGICAL INTERVENTIONS
    4) Brow Bone Augmentation: This procedure involves using implants or bone cement to add volume and change the contour of the brow ridge, increasing its prominence or altering its shape.
    5) Forehead Recontouring: Often part of facial feminization surgery (FFS) or facial masculinization surgery (FMS), this procedure can modify the shape of the forehead and brow ridge by adding or removing bone or using implants.`,
  },
  NasalTipAngle: {
    name: 'Nasal Tip Angle',
    unit: '°',
    meaning:
      "This assessments help indicate the pleasantness of your nasal tip. Generally a nasal tip that is not too bulbous and droopy is preferred. However, a nasal tip that is too pointed is also not desirable. Somewhere in the middle harmonizes best with most people's faces.",
    scores: [4, 2, 1, 0.5, 0, -2],
    notes: [
      'You have a harmonious nasal tip that is not overly upturned or droopy.',
      'You have a generally harmonious nasal tip that is not overly upturned or droopy.',
      'You have a normal nasal tip angle, but it may be considered slightly too upturned (high values) or droopy (low values).',
      'You have an abnormal nasal tip angle, indicating that your nose is either too upturned (high values) or droopy (low values).',
      'You have an abnormal nasal tip angle, indicating that your nose is either too upturned (high values) or droopy (low values).',
      'You have an extremely abnormal nasal tip angle, indicating that your nose is either too upturned (high values) or droopy (low values).',
    ],
    advice: `
    NON SURGICAL INTERVENTIONS
    1) Dermal Fillers: Injectable fillers can be used to subtly alter the nasal tip's appearance by adding volume around the tip or in specific areas to create the illusion of a lift or adjustment in the angle. This is a temporary solution but can be a good option for those seeking minor adjustments or who are hesitant about surgery.
    
    SURGICAL INTERVENTIONS
    2) Rhinoplasty: This surgical procedure can adjust the nasal tip angle through various techniques, including trimming or reshaping the lower lateral cartilages, and using sutures to reposition the tip. Cartilage grafts may also be used to support and maintain the new tip position.
    3) Tip Plasty: A more focused version of rhinoplasty that specifically targets improvements to the nasal tip, including rotation and projection. 
    4) Septorhinoplasty: Combines the features of rhinoplasty with corrections to the nasal septum, which can be necessary if a deviated septum is affecting the nose's appearance or function.
    5) Chin Augmentation or Reduction: Through genioplasty (surgical repositioning of the chin bone), chin implants, or reduction surgery, the chin can be reshaped to better balance the lower third with the rest of the face.`,
  },

  EyeSeparationRatio: {
    name: 'Eye Separation Ratio',
    unit: '%',
    meaning:
      "This facial assessment is of high importance because the eyes are the first thing we tend to look at. The spacing of the eyes heavily influences how pleasant your eyes appear. This measurement divides the distance between your pupils by the bizygomatic width (zygion-zygion) distance. Both men and women favor measurements somewhere in the middle, also referred to as an averageness zone. Overly close set or wide set eyes relative to facial width can throw off facial balance. Within that zone, women's faces generally tend to favor higher ratios (wider set eyes), while male faces favor lower ratios (closer set eyes).",
    scores: [35, 17.5, 8.75, 4.38, 0, -4.38, -17.5],
    notes: [
      'Your eyes are harmoniously spaced relative to your facial width.',
      'While not perfectly ideal, your eyes are generally harmoniously spaced relative to your facial width.',
      'While not perfectly ideal, your eyes are still normally spaced relative to your facial width. They may begin to appear either slightly close set (low values) or wide set (high values).',
      'Your eyes have a slightly abnormal spacing relative to your facial width. They may begin to appear either close set (low values) or wide set (high values).',
      'Your eyes have a moderately abnormal spacing relative to your facial width. They may begin to appear either too close set (low values) or wide set (high values).',
      'Your eyes have an abnormal spacing relative to your facial width. They appear either too close set (low values) or wide set (high values).',
      'Your eyes have an extremely abnormal spacing relative to your facial width. They appear either too close set (low values) or wide set (high values).',
    ],
    advice: `While it is extremely difficult to change the underlying morphology of your eyes, there are a few ways to improve this assessment:

    LIFESTYLE CHANGES
    1) Eye Makeup: Applying makeup can significantly affect how the eye separation is perceived. For eyes that appear too close, emphasizing the outer corners with darker eyeshadow or extending eyeliner outward can create the illusion of wider-set eyes. For eyes that seem too far apart, focusing darker shades and eyeliner more on the inner corners can help.
    2) Eyebrow Shape: Adjusting the shape and position of the eyebrows can also influence the perception of eye separation. Bringing the eyebrows slightly closer together can make wide-set eyes appear closer, while subtly increasing the gap can make close-set eyes seem further apart.
    3) Losing body-fat can result in a thinner face, thereby increasing your ESR and making your eyes appear wider set. The opposite also holds true. Gaining some weight on your face can lead to the appearance of more normally spaced eyes.
    4) Hairstyles can alter your perceived facial width. Along the same lines as facial fat, you can play around with hairstyles that add or reduce the perceived width of your face. For example, if you have extremely wide set eyes, longer hairstyles that add width to your face may improve your perceived facial harmony. If your eyes are closer set, hairstyles with shorter sides may suit your face better.
    
    SURGICAL INTERVENTIONS
    5) Cheekbone augmentation (i.e., implants) can increase the width of your face. Zygomatic reduction surgery can reduce the width of your face. 
    6) Craniofacial surgery can be used to correct severe* cases of facial deformity (i.e., hypertelorism), but it is not typically used to make minor corrections to eye spacing.`,
  },
  FacialThirds: {
    name: 'Facial Thirds',
    unit: '%',
    meaning:
      'Facial thirds are perhaps one of the most well known facial beauty canons. They assess the relative balance between the upper, middle, and lower portions of your face. The upper third is from the Trichion (middle hairline point) to the Glabella (foremost brow point usually around the mid-brow). The middle third is from the Glabella to the Nasal tip (or subnasale, whichever is lower). The lower third is from the Nasal tip to the Menton (lowermost point of the chin). All of these thirds should be approximately the same length. However, it is rarely the case that any person has perfectly balanced thirds. As long as no third is overly disproportionate, facial balance should be maximized. Males tend to suit slightly taller lower thirds, so that their favorable distribution is when the lower third is the tallest. It is the opposite for female faces, where a shorter lower third is favored. Again, this means shorter within reason and not overly short.',
    scores: [30, 15, 7.5, 3.75, 0, -7.5, -15],
    notes: [
      'Your facial thirds are harmoniously distributed, leading to a balanced appearance of the upper, middle, and lower parts of your face.',
      'Although not ideal, your facial thirds are harmoniously distributed, leading to a balanced appearance of the upper, middle, and lower parts of your face.',
      'Although not ideal, your facial thirds are normally distributed, leading to a reasonably balanced appearance of the upper, middle, and lower parts of your face. One of your thirds may begin to appear overly short or long in relation to the others.',
      'Your facial thirds are slightly abnormal in their distribution, leading to an unbalanced appearance of the upper, middle, and lower parts of your face. One of your thirds likely appears overly short or long in relation to the others.',
      'Your facial thirds are abnormal in their distribution, leading to an unbalanced appearance of the upper, middle, and lower parts of your face. One of your thirds appears overly short or long in relation to the others.',
      'Your facial thirds are extremely abnormal in their distribution, leading to an unbalanced appearance of the upper, middle, and lower parts of your face. One of your thirds appears overly short or long in relation to the others.',
      'Your facial thirds are extremely abnormal in their distribution, leading to an unbalanced appearance of the upper, middle, and lower parts of your face. One of your thirds appears overly short or long in relation to the others.',
    ],
    advice: `There are many ways to alter your facial thirds. The best course of action would depend on your specific case:

    LIFESTYLE CHANGES
    1) Various hairstyles can add or reduce the perceived length of your upper third.
    2) Facial hair in males can add perceived vertical height to the lower third.
    
    ORTHODONTIC INTERVENTIONS
    3) Orthodontics or Orthognathic Surgery: Corrects dental or jaw alignment issues, impacting the lower third's proportions and possibly its height.
    
    SURGICAL INTERVENTIONS
    4) Forehead Reduction Surgery or Hairline Lowering: Reduces the size of an overly large upper third.
    5) Brow Lift: Raises the eyebrows to a more aesthetically pleasing position, indirectly affecting the upper third's proportions.
    6) Rhinoplasty: Reduces a droopy nasal tip, thereby giving the appearance of a shorter middle third. 
    7) Custom jaw implants can add vertical height to your lower third if needed. Again, this must consider the harmony of other facial assessments. 
    8) Hair Transplant: For receding hairlines or thinning hair, this can help restore a balanced upper third.
    `,
  },
  LateralCanthalTilt: {
    name: 'Lateral Canthal Tilt',
    unit: '°',
    meaning:
      'This angle helps determine how upturned your eyes are. It is also referred to as the palpebral axis or canthal tilt depending on the specific literature you are looking at. It assesses the angle between the inner corner of your eye (inner/medial canthus) and the outer corner (lateral canthus). Generally, eyes that are neither too upturned or droopy are favorable, but there are ethnic variations that allow for slightly more upturned eyes among East Asian and African subgroups. Female faces tend to have marginally more upturned eyes than male faces on average. ',
    scores: [25, 12.5, 6.25, 3.125, 0, -5, -12.5],
    notes: [
      'Your eyes have a harmonious tilt, meaning they are not overly droopy or upturned.',
      'Your eyes have a generally harmonious tilt, meaning they are not overly droopy or upturned.',
      'Although not perfectly ideal, your eyes have a normal tilt, meaning they are not overly droopy or upturned.',
      'Your eyes have a slightly abnormal tilt. They may begin to appear slightly droopy (low values) or overly upturned (high values)',
      'Your eyes have a slightly abnormal tilt. They may begin to appear slightly droopy (low values) or overly upturned (high values)',
      'Your eyes have an abnormal tilt.  They appear overly droopy (low values) or overly upturned (high values)',
      'Your eyes have an extremely  abnormal tilt.  They appear overly droopy (low values) or overly upturned (high values)',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Skincare: Regular use of products that promote collagen production and elasticity (like retinoids and peptides) can improve the skin's firmness around the eyes, supporting a more lifted appearance.
    2) Sun Protection: Protecting the eye area from sun damage with sunscreen and sunglasses can help maintain skin elasticity and prevent sagging.
    
    NON SURGICAL INTERVENTIONS
    3) Botox: Strategic injections can lift the eyebrows' outer portion, subtly lifting the lateral aspect of the eyelids and enhancing the canthal tilt.
    4) Fillers: Injectable fillers can provide lift and support to the eyebrow and outer eye area, indirectly affecting the canthal tilt by elevating the tissue around the eye.
    5) Thread Lifts: These can provide a temporary lift to the brow and lateral eye area, subtly altering the canthal tilt.
    
    SURGICAL INTERVENTIONS
    6) Lateral Canthoplasty (Canthopexy): A surgical procedure that repositions the lateral canthus (outer corner of the eye) higher to create or enhance a positive canthal tilt. Lateral Canthoplasty is relatively invasive and can significantly change the eye's shape.
    7) Canthopexy is a less invasive procedure compared to Canthoplasty. It involves repositioning and tightening the lateral canthal tendon without cutting it, which can subtly lift the outer corner of the eye.
    8) Blepharoplasty: Specifically, upper or lower eyelid surgery can address sagging skin and fat around the eyes, and when combined with canthoplasty, it can improve the canthal tilt. In the case of a sagging lower eyelid, blepharoplasty can also increase the perceived tilt of the eyes.
    9) Brow Lift: Elevating the eyebrows surgically can indirectly influence the appearance of the canthal tilt by lifting the tissue around the outer corners of the eyes.
    10) Fat Transfer: Adding volume to the brow or temple area through fat grafting can lift the lateral eyebrow and eyelid area, potentially enhancing the canthal tilt.`,
  },
  FacialWHRatio: {
    name: 'Facial Width To Height Ratio',
    unit: '',
    meaning:
      'This ratio provides insight into the shape of your midface region and its compactness. There are many variations in midface shape: elongated midfaces, short midfaces, and somewhere in between. Usually somewhere in between suits most faces. This ratio is contingent on a few factors. A higher eyebrow position can lead to the appearance of a longer midface, while a lower brow position can do the opposite. A longer philtrum can also tend to elongate the midface and lead to lower ratios. Similarly, a thin upper lip can lead to a longer midface -- a fuller upper lip can make the midface more compact. The ratio is also contingent on the width of your face, which depends on your bone structure and can also vary based on body fat. ',
    scores: [25, 12.5, 6.25, 3.13, 0, -3.13, -6.25],
    notes: [
      'You have an ideal FWHR, indicating a facial width and midface height that harmonize well with one another. Your midface region (i.e., FWHR) is not overly compact or elongated in shape.',
      'You have a near ideal FWHR, indicating a facial width and midface height that harmonize well with one another. Your midface region (i.e., FWHR) is not overly compact or elongated in shape.',
      'Although not ideal, you have a normal FWHR, indicating a facial width and midface height that harmonize reasonably well with one another. Your midface region (i.e., FWHR) may begin to appear slightly long or compact, but it is not an aesthetic flaw.',
      'You have a normal FWHR, indicating a facial width and midface height that harmonize reasonably well with one another. Your midface region (i.e., FWHR) may begin to appear slightly long or compact, but it is not a large aesthetic flaw.',
      'You have a slightly abnormal FWHR, indicating a facial width and midface height that do not harmonize that well. Your midface region (i.e., FWHR) likely appears overly long or overly compact. Still, this is not at the extremes.',
      'You have an abnormal FWHR, indicating a facial width and midface height that do not harmonize that well. Your midface region (i.e., FWHR) likely appears overly long or overly compact. Your ratio is beginning to stray into the extremes.',
      'You have an extremely abnormal FWHR, indicating a facial width and midface height that do not harmonize that well. Your midface region (i.e., FWHR) likely appears overly long or overly compact. Your ratio is at the extremes.',
    ],
    advice: `There are a few ways to alter FWHR, but it is largely unchangeable due to being linked heavily to one's bone structure:

    LIFESTYLE CHANGES
    1) Gaining or losing facial- fat can either increase or reduce your FWHR, respectively. 
    2) Growing eyebrow hair towards the interior of your upper nose can make your midface appear subtly more compact.
    
    SURGICAL INTERVENTIONS
    3) Cheekbone augmentation can alter facial width. Cheekbone implants or reduction surgery can increase or decrease facial width, respectively.
    4) Upper lip filler or Permalip can reduce the vertical distance of your midface, thereby increasing FWHR slightly. 
    5) Brow augmentation (i.e., filler or implants) may marginally lower your brow position, thereby increasing FWHR.
    6) Orthognathic surgery can alter the position of your upper and jaw, including reducing its vertical height. 
    `,
  },
  JawFrontalAngle: {
    name: 'Jaw Frontal Angle',
    unit: '°',
    meaning:
      'This angle helps assess the shape and tapering of your jaw in the front view. This angle is heavily contingent on the Gonial angle and Mandibular plane angle in the side profile, both of which determine the jaw shape in the front. Your chin shape can also affect this angle since wider chins tend to lead to lower angles. Thus, males have slightly lower angles on average despite having wider jaws than females on average. The main takeaway from this angle is that your jaw ideally should not be too flat or steep in appearance. Larger angles can make the jaw look overly square and flat, while overly low angles can make the jaw look steep and long. ',
    scores: [25, 12.5, 6.25, 3.13, 0, -6.25, -12.5],
    notes: [
      'Your jaw has an ideal contour in the front profile, indicated by a harmonious angle in this assessment.',
      'Your jaw has a near ideal contour in the front profile, indicated by a harmonious angle in this assessment.',
      'Your jaw has a slightly unideal contour in the front profile. It may be considered either slightly too flat (high values) or steep (low values).',
      'Your jaw has a slightly unideal contour in the front profile. It may be considered either slightly too flat (high values) or steep (low values).',
      'Your jaw has an unideal contour in the front profile. It is considered either slightly too flat (high values) or steep (low values).',
      'Your jaw has an extremely unideal contour in the front profile. It is considered either slightly too flat (high values) or steep (low values).',
      'Your jaw has an extremely unideal contour in the front profile. It is considered either slightly too flat (high values) or steep (low values).',
    ],
    advice: `There are a few ways to improve the contour of your jaw:

    LIFESTYLE CHANGES
    1) Lose body-fat and reduce facial bloating to reveal the underlying angularity of your jaw. Gaining facial fat tends to increase this angle while losing it tends to decrease it.
    2) Good posture can positively affect the appearance of your jawline. It may also help reduce the risk of developing jaw joint problems that can negatively impact your jaw's function.
    3) Chewing can hypertrophy your jaw muscles and result in a higher JFA.
    
    NON SURGICAL INTERVENTIONS
    4) Dermal filler around the jawline can alter its appearance, but it must be carefully catered to the patient. Facial balance should be considered.
    5) Botox can atrophy the masseter muscle for patients with overly prominent jaw muscles.
    6) Radiofrequency treatments and UI therapy may improve the skin laxity surrounding the jawline, resulting in a more angular appearance.
    7) Correct any malocclusion if that is the cause of an overly steep mandible (lower jaw). Make sure to consult a Maxillofacial surgeon or Orthodontist if you are considering orthognathic surgery or corrective appliances.
    
    ORTHODONTIC INTERVENTIONS
    8) Wear a bite guard if you grind your teeth. Bruxism can wear down your teeth and has been observed to cause a reduction in the gonial angle, resulting in a flatter appearance of the jaw. 
    
    SURGICAL INTERVENTIONS
    9) Wraparound jaw implants to artificially customize a jaw shape.
    10) A Genioplasty, or chin surgery, may affect the shape of your jawline.
    11) Mandibular angle reduction involves shaving off part of the mandibular structure to reduce its prominence.
    `,
  },
  CheekBoneHeight: {
    name: 'Cheekbone Height',
    unit: '%',
    meaning:
      "This ratio helps assess the position of your cheekbones relative to your midface. The height of the cheekbones is determined as the most laterally  protrusive part of your zygion on either side of your face. In other words, it assesses where your cheekbones pop out at the sides of your face. The higher the position, the higher the ratio's value. Higher cheekbones are generally preferred and represent the standard of beauty across both sexes as they lead to a more youthful and robust appearance. Lower cheekbones can also be considered attractive, but are perhaps not the standard of beauty. ",
    scores: [20, 12.5, 6.25, 3.13, 0, -6.25, -12.5],
    notes: [
      'You have high cheekbones, which are generally preferred when it comes to facial aesthetics.',
      'Although not incredibly high-set, you still have reasonably high cheekbones, which are generally preferred when it comes to facial aesthetics.',
      'You do not have what would be considered high cheekbones, but your cheekbones are also not low-set. They could be considered medium to perhaps ever so slightly high set.',
      'You do not have what would be considered high cheekbones, but your cheekbones are also not low-set. They could be considered medium set.',
      'You have what would be classified as low set cheekbones, where the widest part of your face is likely more towards the base of your nose rather than closer to your eyes.',
      'You have what would be classified as low set cheekbones, where the widest part of your face is likely more towards the base of your nose rather than closer to your eyes. This can lead to a droopy or melted face appearance and your face generally lacks the structure that is considered attractive.',
      'You have what would be classified as extremely low set cheekbones, where the widest part of your face is likely more towards the base of your nose rather than closer to your eyes. This can lead to a droopy or melted face appearance and your face generally lacks the structure that is considered attractive.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Lose body-fat and reduce facial bloating to reveal the underlying angularity of your cheekbones. 
    2) Skincare Routine: A diligent skincare routine, including products that promote collagen production and skin elasticity (like retinoids and vitamin C serums), can improve the overall health and tautness of the skin, contributing to a more lifted appearance of the cheeks.
    3) Sun Protection: Regular use of sunscreen protects the skin from premature aging and sagging, supporting a more youthful facial structure.
    
    NON SURGICAL INTERVENTIONS
    4) Dermal fillers directed around your cheekbones can alter their perceived height.
    
    SURGICAL INTERVENTIONS
    5) Cheekbone augmentation, namely implants, can lead to the appearance of high cheekbones.
    6) Malar Osteotomy: This more invasive procedure involves cutting and repositioning the cheekbones to enhance their prominence. It's less common and has a longer recovery period compared to other options.
    7) Facelift: While primarily aimed at reducing sagging and wrinkles, a facelift can include repositioning of the cheek fat pads, indirectly enhancing the cheekbones' appearance.
    `,
  },
  TotalFacialWHRatio: {
    name: 'Total Facial Width To Height Ratio',
    unit: '',
    meaning:
      'This proportion helps assess the shape of your face with regards to the length of your face divided by its width. This forms the distinction between a long face  vs. short face, or somewhere in the middle. Somewhere in the middle is preferred across both sexes. However, female faces tend to benefit from slightly shorter faces, while males tend to benefit from slightly longer faces.',
    scores: [15, 7.5, 3.75, 0, -3.75, -7.5, -15],
    notes: [
      "You have an ideal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is neither too long or compact.",
      "You have a near ideal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is neither too long or compact.",
      "Although not ideal, you have a normal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is perhaps ever so slightly too long (high values) or short (low values).",
      "You have a slightly abnormal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is perhaps slightly too long (high values) or short (low values).",
      "You have an abnormal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is too long (high values) or short (low values).",
      "You have an extremely abnormal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is too long (high values) or short (low values).",
      "You have an extremely abnormal face shape when it comes to your face's height and width (Total FWHR/facial index). Your face is too long (high values) or short (low values).",
    ],
    advice: `Improving total FWHR depends on the underlying cause of your elongated or compact face shape:

    LIFESTYLE CHANGES
    1) Losing facial fat can increase this ratio, resulting in a longer face shape, while gaining facial fat can do the opposite. This may be a suitable option  for individuals that lie close to the ideal range.
    2) Hairstyles can manipulate the perceived dimensions of your face , similar to the facial thirds. If your face is overly long, a wider hairstyle may help and vice versa. 
    3) Facial hair can add perceived height to your face, resulting in the appearance of a longer face.
    
    SURGICAL INTERVENTIONS
    4) Cheekbone augmentation can increase or decrease facial width, which affects how long or short your face appears.
    5) Correcting any hyper/hypo divergent growth patterns through orthognathic (jaw) surgery may increase the harmony of your face.
    6) Hair Transplant: For receding hairlines or thinning hair, this can help restore a balanced upper third. Preventative hair loss methods like finasteride and minoxidil may help retain the result.`,
  },
  BigonialWidth: {
    name: 'Bigonial Width',
    unit: '%',
    meaning:
      'This ratio indicates the width of your jaw as a percentage of your bizygomatic width (or total facial width). Bi-gonial width is also referred to as the inter-gonial width, or the distance between your two jaw gonion on either side of your face. In line with facial averageness, a jaw that is neither too wide or narrow is preferred. Within that framework, women do benefit from slightly narrower jaws, while men benefit from slightly wider jaws.',
    scores: [15, 7.5, 3.75, 1.88, 0, -3.75, -10],
    notes: [
      'You have an ideal jaw width. Your jaw is neither too wide or narrow relative to your total facial width.',
      'You have a near ideal jaw width. Your jaw is neither too wide or narrow relative to your total facial width.',
      'Although not ideal, you have a normal jaw width. Your jaw may be slightly too narrow (low values) or wide (high values).',
      'You have a normal jaw width. Your jaw may be either slightly too narrow (low values) or wide (high values), but it does not likely appear abnormal in terms of facial harmony.',
      'You have an abnormal jaw width. Your jaw can be considered either too narrow (low values) or wide (high values).',
      'You have an abnormal jaw width. Your jaw can be considered either too narrow (low values) or wide (high values).',
      'You have an extremely abnormal jaw width. Your jaw can be considered either too narrow (low values) or wide (high values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Increasing the mass of your masseter muscle through chewing exercises can increase your jaw width. However, take caution when performing jaw exercises as it may negatively impact your Temporomandibular joint.
    2) Hairstyle: Choosing a hairstyle that balances the face can also help in creating the illusion of a wider or more proportionate jawline. For example, shorter hairstyles may emphasize the jawline more, while longer hairstyles can soften the appearance of the jaw. Thicker sideburns may make your jaw appear smaller by proportin.
    3) Losing facial fat can reduce your jaw width while gaining facial fat can do the opposite.
    4) In males, a thicker beard can increase your jaw's perceived width.
    
    NON SURGICAL INTERVENTIONS
    5) Fillers: Injectable fillers can provide temporary enhancement to the jawline, subtly increasing its width. This approach requires regular maintenance.
    6) Botox can temporarily reduce the size of the masseter muscle by blocking nerve signals that cause muscle contractions, leading to a visually slimmer jawline. This non-surgical approach requires periodic treatments to maintain results but can serve as a minimally invasive option.
    
    SURGICAL INTERVENTIONS
    7) Orthognathic Surgery: In cases of jaw misalignment or for significant changes in jaw structure, surgical repositioning of the jawbones (orthognathic surgery) can alter the bigonial width. This approach is more complex and typically also addresses functional issues.
    8) Jawline Implants: Custom implants can be designed to enhance the width of the lower jaw, providing a more defined or broader jawline.
    9) Masseter muscle reduction is a procedure aimed at decreasing the size of the masseter muscles. This surgery can be considered for individuals looking to soften an overly square or wide jawline, often for aesthetic reasons or to address issues related to teeth grinding (bruxism) that have led to muscle hypertrophy. 
    10) Cheekbone augmentation can increase (implants) or decrease (shaving) your facial width. This will affect the perceived width of your jaw by proportion.
    `,
  },
  ChinPhiltrumRatio: {
    name: 'Chin To Philtrum Ratio',
    unit: '',
    meaning:
      "This ratio is used to determine the harmony of your chin height. It helps clue into whether your chin is too tall or short. This uses the philtrum length as the determinant of your chin's harmony. A chin that is neither too tall or short is preferred. For males, slightly taller chins and higher ratios are preferred, while the opposite is true in female faces.",
    scores: [12.5, 6.25, 3.13, 1.56, 0, -3.13, -6.25],
    notes: [
      'Your chin is harmoniously proportioned relative to your philtrum. This indicates that neither your chin or philtrum are too long or short.',
      'While not perfectly ideal, your chin is harmoniously proportioned relative to your philtrum. This indicates that neither your chin or philtrum are not excessively long or short.',
      'While not perfectly ideal, your chin is normally proportioned relative to your philtrum. This indicates that neither your chin or philtrum are not excessively long or short.',
      'Your chin is somewhat abnormally proportioned relative to your philtrum. This can indicate that your chin is too short (low values) or tall (high values) relative to your philtrum.',
      'Your chin is abnormally proportioned relative to your philtrum. This can indicate that your chin is too short (low values) or tall (high values) relative to your philtrum.',
      'Your chin is abnormally proportioned relative to your philtrum. This can indicate that your chin is too short (low values) or tall (high values) relative to your philtrum.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Facial hair can add perceived height to your chin, resulting in the appearance of a higher ratio.
    2) Makeup Techniques: Highlighting and contouring can play a significant role in altering the perceived proportions of the chin and philtrum. For example,  highlighting the cupid's bow can make the philtrum appear shorter.
    
    NON SURGICAL INTERVENTIONS
    3) Dermal Fillers: Injectable fillers can add volume to the chin, subtly altering its height and projection for a more balanced look. This is a temporary solution but can be ideal for minor adjustments.
    
    ORTHODONTIC INTERVENTIONS
    4) Orthodontics or Orthognathic Surgery: Corrects dental or jaw alignment issues, impacting the lower third's proportions and possibly chin height.
    
    SURGICAL INTERVENTIONS
    5) Lip augmentation, namely lip filler or lip implants like Permalip, can alter the height of your chin or philtrum. An increase in upper lip volume tends to make your philtrum appear shorter, thereby increasing this ratio. An increase in lower lip volume tends to make your chin appear shorter, which decreases the ratio.
    6) Lip Lift: Reduces the height of the philtrum by removing a strip of skin under the nose, shortening the distance between the nose and the upper lip, and enhancing the upper lip's appearance.
    7) Genioplasty: A surgical procedure that alters the bone of the chin, either moving it forward or backward, or vertically lengthening or shortening it, to improve facial proportions.
    8) Chin Implants: The insertion of implants to enhance chin projection or increase its height can contribute to a more balanced facial profile.
    9) Fat Grafting: Injecting fat into the chin area can subtly increase its volume and adjust its contour, including height adjustments.
    `,
  },
  NeckWidth: {
    name: 'Neck Width',
    unit: '%',
    meaning:
      "This ratio helps determine whether your neck's width suits your face. While the neck is not technically part of your face, it does contribute to facial attractiveness. For males, a notably thin neck can disharmonize your facial appearance. This is less of an aesthetic concern for women, but an overly wide or narrow neck can still throw off facial balance.",
    scores: [10, 5, 1, 0, -2.5, -5, -7.5],
    notes: [
      'You have an ideal neck width that adds balance to your facial appearance.',
      'You have a near ideal neck width that adds balance to your facial appearance.',
      'Although not perfectly harmonious, you have a normal neck width.',
      'Your neck can be considered slightly too narrow (low values) or too wide (high values).',
      'Your neck can be considered too narrow (low values) or too wide (high values).',
      'Your neck can be considered extremely narrow (low values) or extremely wide (high values).',
      'Your neck can be considered extremely narrow (low values) or extremely wide (high values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Building Muscle: Exercises targeting the neck and upper shoulders can increase muscle mass, potentially enhancing the neck's width. Examples include neck curls, lateral raises, and shoulder presses.
    2) An increase or decrease in body fat can increase or decrease the width of your neck, respectively.`,
  },
  MouthNoseWidthRatio: {
    name: 'Mouth Width To Nose Width Ratio',
    unit: '',
    meaning: `This ratio is used to assess the relative harmony between your mouth width and inter-alar width, or nose width. Ideally, your nose or mouth will not be overly narrow or wide in relation to one another. 
    Males tend to have wider noses and mouths, but their larger inter-alar width will lead to lower ratios on average. Females tend to have narrower noses so their ratio will tend to be higher on average.`,
    scores: [10, 5, 2.5, 1.25, 0, -2.5, -5],
    notes: [
      'Your mouth width harmonizes extremely well with your nose width.',
      'Your mouth width harmonizes well with your nose width.',
      'Your mouth width harmonizes reasonably well with your nose width. Your nose/mouth may be considered slightly too narrow or wide, resulting in a less than ideal proportion.',
      'Your mouth width does not harmonize that well with your nose width. Your nose/mouth may be considered too narrow or wide, resulting in a less than ideal proportion.',
      'Your mouth width does not harmonize well with your nose width. Your nose/mouth may be considered too narrow or wide, resulting in a less than ideal proportion.',
      'Your mouth width harmonizes poorly with your nose width. Your nose/mouth may be considered too narrow or wide, resulting in a less than ideal proportion.',
      'Your mouth width harmonizes extremely poorly with your nose width. Your nose/mouth may be considered too narrow or wide, resulting in a less than ideal proportion.',
    ],
    advice: `
    NON SURGICAL INTERVENTIONS
    1) Botox: Small amounts of Botox can be used to slightly narrow the nose by relaxing muscles that flare the nostrils.
    
    SURGICAL INTERVENTIONS
    2) Rhinoplasty: A surgical procedure that can alter the width of the nose at various points, including the nostrils, nasal bridge, and tip. Rhinoplasty can narrow or widen the nose, depending on the individual's goals.
    3) Alarplasty (Nostril Reduction): A specific type of rhinoplasty focused on reducing the width of the nostrils and the base of the nose for a more proportionate appearance.
    4) Commissuroplasty is a surgical procedure aimed at altering the corners of the mouth, specifically addressing issues related to the oral commissures. It can be used to adjust the width of the mouth by either narrowing or widening it, depending on the individual's needs and aesthetic goals. This procedure can also correct downturned mouth corners (oral commissure droop), which often give a sad or angry appearance, and can be part of treatment for conditions like facial paralysis, congenital deformities, or the results of aging.`,
  },
  MidfaceRatio: {
    name: 'Midface Ratio',
    unit: '',
    meaning: `This ratio helps assess the compactness of your midface, but on a smaller scale than the FWHR. Instead of taking the entire midface width and height like the FWHR, the midface ratio is more central and localized in nature.
    It basically takes the middle of your midface and assesses its harmony. The main facial features that affect this ratio are the interpupillary distance (distance between your pupils) and the length of your nose. The size of your upper lip can also affect your midface ratio much like the FWHR. Since males display longer nasal lengths than women, their ratio tends to be notably lower. Still, a midface that is neither too long or short is preferred.`,
    scores: [10, 5, 2.5, 1.25, 0, -5, -10],
    notes: [
      'You have a harmonious interior (or central) midface structure that is neither too compact or elongated.',
      'You have a generally harmonious interior (or central) midface structure that is neither too compact or elongated.',
      'You have a reasonably harmonious interior (or central) midface structure. It may be considered slightly too elongated (low values) or compact (high values).',
      'You have a slightly unharmonious interior (or central) midface structure. It may be considered too elongated (low values) or compact (high values).',
      'You have an unharmonious interior (or central) midface structure. It can be considered too elongated (low values) or compact (high values).',
      'You have an extremely unharmonious interior (or central) midface structure. It can be considered too elongated (low values) or compact (high values).',
      'You have an extremely unharmonious interior (or central) midface structure. It can be considered too elongated (low values) or compact (high values).',
    ],
    advice: `
    NON SURGICAL INTERVENTIONS
    1) Makeup Techniques: Highlighting and contouring can play a significant role in altering the perceived proportions of the midface. For example,  highlighting the cupid's bow can make the philtrum appear shorter, which makes the midface appear subtly more compact.
    
    SURGICAL INTERVENTIONS
    2) Lip augmentation, namely lip filler or lip implants like Permalip, can alter the prominence of your upper lip. An increase in upper lip volume tends to make your midface appear subtly shorter. The difference will not be substantial though.
    3) Some invasive midface procedures like a Lefort 1 Osteotomy can alter the midface structure to be more vertically elongated or compact. Other forms of orthognathic surgery may result in some changes to the midface structure as well. Such procedures are typically reserved for severe cases as they are corrective operations with notable risks and long recovery times.`,
  },
  EyebrowPositionRatio: {
    name: 'Eyebrow Position Ratio',
    unit: '',
    meaning: `This ratio assesses the position of your eyebrows as a proportion of your palpebral height (or the height of your eye). Generally, a lower position of the brows is preferred, but this can vary slightly based on ethnicity. 
    Males tend to have a lower brow position on average, while females have a slightly higher brow position. Relatively lower brow positions are still considered attractive on women. Extremely low brows are almost exclusively found on male faces and do not tend to harmonize with most female faces.`,
    scores: [10, 5, 2.5, 1, 0, -2.5, -5],
    notes: [
      'You have an ideal positioning of your eyebrows above your eyes. A lower position is typically preferred among younger demographics. Your eyebrows could generally be considered low-set, which typically leads to a more striking appearance.',
      'You have a near ideal positioning of your eyebrows above your eyes. Your eyebrows could be considered medium-low set in the male range, and medium set in the female range.',
      'You have a normal positioning of your eyebrows above your eyes. Your eyebrows could be considered medium set in the male range, and medium-high set in the female range.',
      'You have a normal positioning of your eyebrows above your eyes. Your eyebrows could be considered slightly high set in the male range, and high set in the female range.',
      'You have a slightly abnormal positioning of your eyebrows above your eyes. Your eyebrows could be considered high set. This may lead to the appearance of a more elongated midface region.',
      'You have an unideal positioning of your eyebrows above your eyes. Your eyebrows could be considered very high set. This may lead to the appearance of a more elongated midface region.',
      'You have an unideal positioning of your eyebrows above your eyes. Your eyebrows could be considered extremely high set. This may lead to the appearance of a more elongated midface region.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Eyebrow Grooming: Shaping the eyebrows by plucking, threading, or waxing can also alter their perceived position and shape. Allowing the outer part of the brows to grow thicker while removing hair from the lower inner brows can create a lift effect.
    
    NON SURGICAL INTERVENTIONS
    2) Dermal Fillers: While primarily used to add volume, fillers can also provide a slight lift to the brows when injected into the forehead or temples. They can sometimes be used to lower the perceived position of the eyebrows by adding volume above them.
    3) Thread Lifts: Absorbable threads are inserted under the skin to physically lift the brow area. The results are temporary, lasting several months to a couple of years.
    4) Botox: Strategically placed Botox injections can be used to relax certain forehead muscles that elevate the eyebrows, allowing the brows to lower slightly. The effect is temporary, and the degree of lowering can be subtle.
    
    SURGICAL INTERVENTIONS
    5) Brow Lift (Forehead Lift): A surgical procedure that raises the eyebrows to a more desired position. It can be performed through various techniques, including endoscopic, coronal, or hairline lifts, depending on the individual's anatomy and aesthetic goals.
    6) Direct Brow Lift: Involves removing a segment of skin directly above the eyebrows to lift them. This method is less commonly used due to visible scarring but might be appropriate in specific cases.
    7) Pretrichial Brow Lift: Similar to a direct brow lift but the incision is made along the hairline, reducing the forehead size while lifting the brows, which can be beneficial for individuals with a high forehead.
    `,
  },
  EyeSpacingRatio: {
    name: 'Eye Spacing Ratio',
    unit: '',
    meaning:
      "This ratio helps assess the spacing of your eyes. It is similar to the ESR in that respect. Typically, the eyes should be about one eye's width (palpebral width) apart, but it does not have to be precisely one eye as long as it is within a reasonable range. There are variations among ethnic groups. Unlike the ESR, there are no notable sexually dimorphic (male-female) differences in this measurement.",
    scores: [10, 5, 2.5, 1, 0, -5, -10],
    notes: [
      'Your eyes have a harmonious spacing relative to one another.',
      'Your eyes have a generally harmonious spacing relative to one another.',
      'Although not ideal, your eyes have a normal spacing relative to one another. They may appear slightly close together (low values) or far apart (high values), but it is nothing extreme.',
      'Although not ideal, your eyes have a normal spacing relative to one another. They may appear somewhat close together (low values) or far apart (high values), but it is nothing extreme.',
      'Your eyes have an abnormal spacing relative to one another. They may appear either overly close together (low values) or far apart (high values).',
      'Your eyes have an extremely abnormal spacing relative to one another. They may appear either overly close together (low values) or far apart (high values).',
      'Your eyes have an extremely abnormal spacing relative to one another. They may appear either overly close together (low values) or far apart (high values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup Techniques: Highlighting and contouring around the eyes can alter their perceived width, usually making them appear wider.
    
    SURGICAL INTERVENTIONS
    2) Craniofacial surgery is an option in extreme cases of orbital hypertelorism. In those cases, the eyes may be greater than two eye widths apart.`,
  },
  EyeAspectRatio: {
    name: 'Eye Aspect Ratio',
    unit: '',
    meaning:
      "This ratio indicates how rounded or narrow your eye are. An aspect ratio simply refers to the width vs. height of a thing. Eyes that are not overly round or narrow are usually preferred because they harmonize best with most people's faces. Males tend to have higher ratios on average due to a lower palpebral height (eye height) than females. Female faces tend to have rounder eye shapes on average.",
    scores: [10, 5, 2.5, 1.25, 0, -2.5, -5],
    notes: [
      'Your eyes have an ideal shape in terms of their width and height. Your eyes are neither too narrow and elongated or round in shape.',
      'Your eyes have a near ideal shape in terms of their width and height. Your eyes are neither too narrow and elongated or round in shape.',
      'Your eyes have a normal shape in terms of their width and height. Your eyes may be considered either slightly too round (low values) or narrow (high values) in shape.',
      'Your eyes have a slightly abnormal shape in terms of their width and height. Your eyes may be considered either too round (low values) or narrow (high values) in shape.',
      "Your eyes have an abnormal shape in terms of their width and height. Your eyes may be considered either too round (low values) or narrow (high values) in shape. Overly round eyes can begin to look too beady and overly narrow one's lack the ability to display emotional cues as well. Both extremes are generally not attractive.",
      "Your eyes have an extremely abnormal shape in terms of their width and height. Your eyes may be considered either too round (low values) or narrow (high values) in shape. Overly round eyes can begin to look too beady and overly narrow one's lack the ability to display emotional cues as well. Both extremes are generally not attractive.",
      "Your eyes have an extremely abnormal shape in terms of their width and height. Your eyes may be considered either too round (low values) or narrow (high values) in shape. Overly round eyes can begin to look too beady and overly narrow one's lack the ability to display emotional cues as well. Both extremes are generally not attractive.",
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup: Skilled application of makeup can create the illusion of wider or taller eyes. Techniques include strategic placement of eyeshadow, eyeliner to extend the eye shape, and mascara to open up the eyes.
    2) Eyelash Extensions: Can enhance the perceived size of the eyes by adding volume and length to the lashes
    
    NON SURGICAL INTERVENTIONS
    3) Fillers: Injectable dermal fillers can be used carefully around the eye area to adjust contours and subtly affect the appearance of the eye's width and height.
    
    SURGICAL INTERVENTIONS
    4) Blepharoplasty (Eyelid Surgery): Upper Blepharoplasty: Can remove excess skin and fat to create a more open and larger appearance of the eye, potentially affecting palpebral height.
    Lower Blepharoplasty: Targets under-eye bags and excess skin, which can subtly influence the perceived height and shape of the eye.
    5) Lateral Canthoplasty: A surgical procedure that alters the outer corner of the eye (lateral canthus), which can increase the width of the eye and create a more almond-shaped appearance.
    6) Epicanthoplasty: Focuses on the inner corner of the eye (medial canthus), reducing the epicanthal fold common in Asian eyelids, which can increase the horizontal width of the eye and create a more open look.
    7) Ptosis Surgery: Corrects drooping of the upper eyelid by tightening the muscle, which can increase the palpebral height, making the eye appear larger and more awake.`,
  },
  LowerUpperLipRatio: {
    name: 'Lower Lip To Upper Lip Ratio',
    unit: '',
    meaning:
      'This assessment divides the height of your lower lip by that of your upper lip. There should generally be a balance between the two, with neither being overly full in proportion to the other. This can vary slightly based on ethnic group, but the same principle applies.',
    scores: [7.5, 3.75, 1.88, 0.94, 0, -3.75, -7.5],
    notes: [
      'Your lower and upper lip are ideally proportioned relative to one another.',
      'Your lower and upper lip are near ideally proportioned relative to one another.',
      'Although not ideal, your lower and upper lip are normally proportioned relative to one another. Your upper lip may be slightly too full (high values) or thin (low values) relative to your upper lip.',
      'Your lower and upper lip are slightly abnormally proportioned relative to one another. Your upper lip may be too full (high values) or thin (low values) relative to your upper lip. This may also indicate lacking upper lip volume of the upper lip itself rather than the inherent fullness of the lower lip.',
      'Your lower and upper lip are abnormally proportioned relative to one another. Your upper lip may be too full (high values) or thin (low values) relative to your upper lip. This may also indicate lacking upper lip volume of the upper lip itself rather than the inherent fullness of the lower lip.',
      'Your lower and upper lip are abnormally proportioned relative to one another. Your upper lip may be too full (high values) or thin (low values) relative to your upper lip. This may also indicate lacking upper lip volume of the upper lip itself rather than the inherent fullness of the lower lip.',
      'Your lower and upper lip are abnormally proportioned relative to one another. Your upper lip may be too full (high values) or thin (low values) relative to your upper lip. This may also indicate lacking upper lip volume of the upper lip itself rather than the inherent fullness of the lower lip.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup Techniques: Altering the prominence of your upper and/or lower lip through lip liner, lipstick, highlighting techniques, and contouring can affect their perceived height.
    
    NON SURGICAL INTERVENTIONS
    2) Dermal filler can increase the prominence of the upper and/or lower lip.
    
    ORTHODONTIC INTERVENTIONS
    3) Braces or clear aligners can adjust the positioning of teeth, which may indirectly influence the prominence of your upper and lower lip.
    
    SURGICAL INTERVENTIONS
    4) Surgical lip augmentation like Permalip can alter the prominence of your upper and/or lower lip. 
    5) Fat Transfer: Uses the patient's own fat to add volume to the lips, providing a more natural feel. It's more invasive than fillers or a lip flip and has a longer recovery period.
    `,
  },
  DeviationOfIaaJfa: {
    name: 'Deviation of IAA & JFA',
    unit: '°',
    meaning:
      "This assesses the difference in angle value between the IAA and JFA in the report. Generally, there should be agreement between the two angles. An extreme deviation can indicate disharmony between the shape of one's jaw and their midface.",
    scores: [7, 3.75, 1.88, 0.94, 0, -3.75],
    notes: [
      'You have an ideal harmony between your JFA and IAA.',
      'You have a near ideal harmony between your JFA and IAA.',
      'You have a normal harmony between your JFA and IAA. The difference between your angles may indicate something disharmonious about your eye spacing or jaw shape. You can reference the IAA, ESR, and JFA for more info.',
      'You have a normal harmony between your JFA and IAA. The difference between your angles may indicate something disharmonious about your eye spacing or jaw shape. You can reference the IAA, ESR, and JFA for more info.',
      'You have an abnormal harmony between your JFA and IAA. The difference between your angles may indicate something disharmonious about your eye spacing or jaw shape. You can reference the IAA, ESR, and JFA for more info.',
      'You have an extremely abnormal harmony between your JFA and IAA. The difference between your angles may indicate something disharmonious about your eye spacing or jaw shape. You can reference the IAA, ESR, and JFA for more info.',
    ],
    advice: `N/A`,
  },
  EyebrowTilt: {
    name: 'Eyebrow Tilt',
    unit: '°',
    meaning:
      'This angle measures the degree of tilt in the eyebrows from the interior portion to the brow peak around the lateral third of the brow. Harmonious eyebrows are neither too upturned or downturned. Generally, female faces tend to have slightly more upturned eyebrows on average than male faces.',
    scores: [6, 3, 1.5, 0, -3, -6],
    notes: [
      'Your eyebrows have an ideal tilt. They are neither too upturned or droopy when accounting for inter-sex variability.',
      'Your eyebrows have a near ideal tilt. They are neither too upturned or droopy when accounting for inter-sex variability.',
      'Although not ideal, your eyebrows have a normal tilt. They may be considered slightly too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
      'Your eyebrows have a slightly abnormal tilt. They may be considered too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
      'Your eyebrows have an abnormal tilt. They may be considered too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
      'Your eyebrows have an extermely abnormal tilt. They may be considered too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup: Use an eyebrow pencil or pomade to shape the eyebrows artificially. For a more upturned look, focus on elevating the tail end with makeup while lightly filling in the front. To flatten the arch, use makeup to emphasize a straighter line from the beginning to the end of the brow.
    2) Grooming techniques: Repositioning brow hairs can support either an upturned appearance or a flatter arch, depending on how you brush and set them. Waxing and plucking eyebrows to achieve a desired shape are also effective strategies.
    
    NON SURGICAL INTERVENTIONS
    3) Botox Injections: Strategically placed Botox can adjust the dynamics of the muscles around the eyebrows, either lifting the outer portions for a more upturned look or relaxing specific areas to flatten the arch. This requires skilled application by a professional to achieve the desired effect without compromising facial expressions.
    4) Dermal Fillers: Though less common for directly altering eyebrow tilt, fillers can be used around the eyebrows to support the desired shape indirectly or correct asymmetries that affect eyebrow tilt.
    
    SURGICAL INTERVENTIONS
    5) Brow Lift: A surgical procedure that can be tailored to modify the tilt of the eyebrows. Depending on the technique used (endoscopic, coronal, or hairline lift), the surgeon can reposition the eyebrows to be more flat or more arched, enhancing the outer brow lift for a more upturned appearance.
    6) Direct Brow Lift: Involves removing a segment of skin above or below the eyebrows to raise or lower their position, which can also affect their tilt. This method is less commonly used due to potential scarring.
    7) Temporal Brow Lift: Part of the scalp is lifted, specifically targeting the outer third of the eyebrows to raise them, creating a more upturned look`,
  },
  BitemporalWidth: {
    name: 'Bitemporal Width',
    unit: '%',
    meaning:
      "This proportion assesses the width of the temporal region, or forehead, relative to one's total facial width. This provides valuable insight into the harmony of the upper face. Generally, the forehead should not be too narrow or wide. Your specific hairline shape can also contribute to this proportion, along with the actual structural shape of your upper head.",
    scores: [5, 2.5, 1.25, 0, -1.25, -2.5, -5],
    notes: [
      'Your forehead has an ideal width relative to your cheekbones. Your forehead is neither too narrow nor wide.',
      'Your forehead has a near ideal width relative to your cheekbones. Your forehead is neither too narrow nor wide.',
      'Although not ideal, your forehead has a normal width relative to your cheekbones. Your forehead may be considered either slightly too wide (high values) or narrow (low values).',
      'Your forehead has a slightly abnormal width relative to your cheekbones. Your forehead may be considered either too wide (high values) or narrow (low values).',
      'Your forehead has an abnormal width relative to your cheekbones. Your forehead may be considered either too wide (high values) or narrow (low values).',
      'Your forehead has an extremely abnormal width relative to your cheekbones. Your forehead may be considered either too wide (high values) or narrow (low values).',
      'Your forehead has an extremely abnormal width relative to your cheekbones. Your forehead may be considered either too wide (high values) or narrow (low values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Hairstyles can manipulate the perceived dimensions of your forehead. If your forehead is wide, a hairstyle with shorter sides may suit you better. Narrower hairline may suit longer hairstyles. For women, styles that pull the hair back tightly may emphasize a narrower forehead. Fringe hairstyles can also be used to mask your forehead region.
    2) Headwear: Hats and headbands can also be styled to alter the perceived width of the forehead, either by covering the temples or by adding width through their design.
    
    NON SURGICAL INTERVENTIONS
    3) While generally inadvisable, shaving your hairline can alter its perceived width.
    
    SURGICAL INTERVENTIONS
    4) Hair Transplant: For receding hairlines or thinning hair, this can help restore a more balanced forehead width. Preventative hair loss methods like finasteride and minoxidil may help retain the result.
    5) For permanent results, hairline laser hair removal can be an effective method for altering the appearance of the bitemporal width. This procedure reshapes the forehead by removing or thinning unwanted hair at the hairline. Concentrated light is used to target and destroy hair follicles, leading to permanent hair reduction in the treated area.
    6) While a less common procedure, temporal implants can alter the actual shape of the upper head.  `,
  },
  LowerThirdProportion: {
    name: 'Lower Third Proportion',
    unit: '%',
    meaning:
      'This proportion assesses the localized harmony of the lower portion of your face. More specifically, the line segment from your subnasale to mid-lip is divided by the distance from your subnasale to menton (bottom of chin). The ratio should not be too high, or it may indicate an overly elongated region above the mid-lip. If the ratio is too low, it may indicate an overly short region above the mid-lip. In the latter case, it could indicate a thin upper lip and short philtrum.',
    scores: [5, 2.5, 1.25, 0, -1.25, -2.5],
    notes: [
      'Your lower third has a harmonious spacing between its features.',
      'Your lower third has a harmonious spacing between its features.',
      'Although not ideal, your lower third has a normal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either slightly too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
      'Your lower third has a slightly abnormal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
      'Your lower third has an abnormal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
      'Your lower third has an extremely abnormal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Facial hair can add perceived height to your chin, resulting in the appearance of a lower ratio.
    
    NON SURGICAL INTERVENTIONS
    2) Dermal Fillers: Injectable fillers can add volume to the chin, subtly altering its height and projection for a more balanced look. This is a temporary solution but can be ideal for minor adjustments.
    
    ORTHODONTIC INTERVENTIONS
    3) Orthodontics or Orthognathic Surgery: Corrects dental or jaw alignment issues, impacting the lower third's proportions and possibly chin height.
    
    SURGICAL INTERVENTIONS
    4) Genioplasty: A surgical procedure that alters the bone of the chin, either moving it forward or backward, or vertically lengthening or shortening it, to improve facial proportions.
    5) Chin Implants: The insertion of implants to enhance chin projection or increase its height can contribute to a more balanced facial profile.
    6) Fat Grafting: Injecting fat into the chin area can subtly increase its volume and adjust its contour, including height adjustments.
    7) Rhinoplasty can reduce the droopiness of the nasal tip, which increases the value of this proportion.
    `,
  },
  IpsilateralAlarAngle: {
    name: 'Ipsilateral Alar Angle',
    unit: '°',
    meaning:
      'This is the angle formed between the subnasale (bottom of nose) and both outer eye corners. It generally helps assess the shape of the midface region. Angles that are overly high signify a midface that is too compact, and/or eyes that are too wide set. Low angles can signify the opposite, an elongated midface and/or close set eyes.',
    scores: [2.5, 1.25, 0.63, 0, -0.63, -1.25, -2.5],
    notes: [
      'Your midface structure retains a harmonious balance.',
      'Your midface structure retains a harmonious balance.',
      'Although not perfectly ideal, your midface structure retains a normal balance. Your angle may indicate a slightly elongated nasal region and close set eyes (low values). Or, it may indicate a slightly short nose and wide set eyes (high values).',
      'Although not perfectly ideal, your midface structure retains a normal balance. Your angle may indicate a slightly elongated nasal region and close set eyes (low values). Or, it may indicate a slightly short nose and wide set eyes (high values).',
      'Your midface structure lacks balance. Your angle may indicate an elongated nasal region and close set eyes (low values). Or, it may indicate a short nose and wide set eyes (high values).',
      'Your midface structure lacks balance. Your angle may indicate an extremely elongated nasal region and close set eyes (low values). Or, it may indicate a short nose and wide set eyes (high values).',
      'Your midface structure lacks balance. Your angle may indicate an extremely elongated nasal region and close set eyes (low values). Or, it may indicate a short nose and wide set eyes (high values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup: Skilled application of makeup can create the illusion of wider eyes. 
    2) Eyelash Extensions: Can enhance the perceived size of the eyes by adding volume and length to the lashes
    
    SURGICAL INTERVENTIONS
    1) Rhinoplasty can reduce the droopiness of the nasal tip, thereby increasing this value by a subtle amount.
    2) Some invasive midface procedures like a Lefort 1 Osteotomy can alter the midface structure to be more vertically elongated or compact. Other forms of orthognathic surgery may result in some changes to the midface structure as well. Such procedures are typically reserved for severe cases as they are corrective operations with notable risks and long recovery times.`,
  },
  MedialCanthalAngle: {
    name: 'Medial Canthal Angle',
    unit: '°',
    meaning:
      'This angle assesses how sharp the inner corner of the eye (medial/inner canthus) is.  Generally sharper angles are more attractive because they give the eyes a jaguar-like appearance. Though, this is not a universal standard across all ethnic groups. For example, Korean faces may favor a higher angle and more rounded eye shape. Generally, somewhere in the middle is most attractive.',
    scores: [10, 5, 2.5, 0, -2.5, -5, -10],
    notes: [
      'The inner corner of your eye is harmonious. It has distinct shape and angularity, while not being overly angular.',
      'The inner corner of your eye is generally harmonious. It has distinct shape and angularity, while not being overly angular.',
      'The inner corner of your eye is somewhat harmonious. It may either lack some distinct angularity (high values) or be overly sharp (low values).',
      'The inner corner of your eye is somewhat disharmonious. It may either lack some distinct angularity (high values) or be overly sharp (low values).',
      'The inner corner of your eye is  disharmonious. It either lacks some distinct angularity (high values) or is overly sharp (low values).',
      'The inner corner of your eye is very disharmonious. It either lacks some distinct angularity (high values) or is overly sharp (low values).',
      'The inner corner of your eye is extremely disharmonious. It either lacks some distinct angularity (high values) or is overly sharp (low values).',
    ],
    advice: `
    LIFESTYLE CHANGES
    1) Makeup: Skilled application of makeup can create the illusion of a sharper inner eye corner. 
    
    SURGICAL INTERVENTIONS
    2) Medial Canthoplasty: This procedure tightens or repositions the medial canthal tendon to alter the angle between the eyelids, bringing them closer to the nose or adjusting their tension. It's often used to correct eyelid laxity or to bring the eyelids into a more aesthetically pleasing position.
    3) Epicanthoplasty: Specifically targets the epicanthal fold, which is more common in Asian eyelids, to create a more open appearance of the eyes by modifying the medial canthal angle. This procedure can reduce the fold and change the eye's shape, making the eyes appear larger and more rounded.
    4) Lower Blepharoplasty: Targets under-eye bags and excess skin, which can subtly influence the perceived shape of the medial canthus.
    5) Ptosis Surgery: Corrects drooping of the upper eyelid by tightening the muscle, which can increase the palpebral height, making the inner eye corner appear larger and more awake (along with the rest of the eye).`,
  },
};
