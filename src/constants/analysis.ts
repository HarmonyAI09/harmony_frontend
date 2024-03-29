export const ASSESSMENTS = {
  GonialAngle: {
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
    advice: `There are a few effective ways to improve your gonial angle. The best course to take depends on the severity and specifics of your case.
        1) lose body-fat to reveal the underlying angularity of your jaw. 
        2) correct malocclusion if that is causing your angle to be overly obtuse. (i.e., consult maxillofacial surgeon or orthodontist)
        3) wear a bite guard if you grind your teeth. Bruxism can wear down your teeth and give your jaw an overly flat appearance.
        4) Wraparound jaw implants to artificially create a jaw shape of your choosing.`,
  },
  NasofrontalAngle: {
    scores: [15, 7.5, 3.75, 1.875, 0, -5],
    notes: [
      'The angle formed between your brow ridge and nose is pleasant. Your brow region is neither too soft or harsh.',
      'Although not ideal, the angle formed between your brow ridge and nose is generally pleasant. Your brow region is neither too soft or harsh.',
      'Although not ideal, the angle formed between your brow ridge and nose is within a normal range. Your brow region is may begin to appear too protrusive (low values) or soft (high values).',
      'Although not ideal, the angle formed between your brow ridge and nose is within a reasonably normal range. Your brow region is may appear too protrusive (low values) or soft (high values).',
      'The angle formed between your brow ridge and nose is outside of a normal range. Your brow region is may appear too protrusive (low values) or soft (high values).',
      'The angle formed between your brow ridge and nose is outside at the extremes, indicating a lack of facial harmony. Your brow region is may appear too protrusive (low values) or soft (high values).',
    ],
    advice: `While difficult to change the morphology of the brow region, there are a few ways to improve your nasofrontal angle. 
        This is a sensitive area to change and it is not as common as other procedures.
        1) Rhinoplasty can change the shape of the area around your nasion and dorsum, which can alter the angle.
        2) custom forehead implants around the brow region can add projection and lower the angle if desired.`,
  },
  MandibularPlaneAngle: {
    scores: [12.5, 6.25, 3.125, 1.5625, -5, -10],
    notes: [
      'The slope of your mandible is harmonious, being neither too flat or downward grown. This is usually indicative of a healthy jaw and normal growth pattern.',
      'While not perfectly ideal, the slope of your mandible is harmonious, being neither too flat or downward grown. This is usually indicative of a healthy jaw and normal growth pattern.',
      'While not an ideal shape, the slope of your mandible is within a normal range of values. At this point, the growth of your jaw may indicate some hyper/hypo-divergent growth patterns, but it also may not.',
      'The slope of your mandible is slightly outside of a normal range of values. At this point, the growth of your jaw may indicate some hyper/hypo-divergent growth patterns. Your jaw may be either too flat (low values) or too steep (high values).',
      'The slope of your mandible is outside of a normal range of values. At this point, the growth of your jaw indicates some hyper/hypo-divergent growth patterns. Your jaw may be either too flat (low values) or too steep (high values).',
      'The slope of your mandible is far outside of a normal range of values. At this point, the growth of your jaw indicates some hyper/hypo-divergent growth patterns. Your jaw may be either too flat (low values) or too steep (high values).',
    ],
    advice: `There are a few effective ways to improve your MPA. 
        The best course to take depends on the severity and specifics of your case. 
        Most of the same advice from the GA would apply here since the MPA helps form the GA.
        1) lose body-fat to reveal the underlying angularity of your jaw.
        2) correct malocclusion if that is causing your angle to be overly obtuse. You especially want to address any hyper/hypo divergent growth patterns, where your jaw can become too elongated or short. This would yield the most profound effect since most unideal MPA have to do with one's teeth. (i.e., consult maxillofacial surgeon or orthodontist)
        3) wear a bite guard if you grind your teeth. Bruxism can wear down your teeth and give your jaw an overly flat appearance.
        4) Wraparound jaw implants to artificially create a jaw shape of your choosing.`,
  },
  RamusMandibleRatio: {
    scores: [10, 5, 2.5, 1.25, -5, -10],
    notes: [
      'The length of your ramus relative your mandible is harmonious. Your ramus is neither too long or short.',
      'Although not ideal, the length of your ramus relative your mandible is generally harmonious. Your ramus is neither too long or short.',
      'Although not ideal, the length of your ramus relative your mandible is within a normal range of values. Your ramus is neither too long or short.',
      'The length of your ramus relative your mandible is beginning to fall outside of the normal range. Your ramus may be considered too short (low values) or too long (high values).',
      'The length of your ramus relative your mandible falls outside of the normal range. Your ramus can be considered too short (low values) or too long (high values).',
      'Although not ideal, the length of your ramus relative your mandible is within a normal range of values. Your ramus is neither too long or short.',
    ],
    advice: `The main thing we would seek to improving here is improving the ramus length. 
        Shaving off bone and reducing ramus length is not really a viable procedure. 
        For those who do need ramus shortening a unilateral Le Fort I osteotomy has been attempted in the literature. 
        To add ramus height there is really only one option:custom wraparound jaw implants can add overall volume to the jaw. 
        Keep in mind this would also add height to the mandible, thereby lengthening your face. 
        That is worth considering given your other facial assessments.`,
  },
  FacialConvexityGlabella: {
    scores: [10, 5, 2.5, 0, -2.5, -5],
    notes: [
      'You have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with no severe overjet or underbite.',
      'Although not perfectly harmonious, you have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with perhaps some minor overjet (low values) or underbite (high values).',
      'Although not perfectly harmonious, you have a normal shape of the side profile. Neither part of your face -- upper, middle, or lower are in extreme disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is beginning to stray outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is far outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in extreme disharmony to one another. You certainly have some occlusal issues like perhaps an overjet (low values) or underbite (high values).',
    ],
    advice: `To improve your facial convexity, we want to try and improve the balance in projection of your facial thirds. This is primarily done through altering the position of the upper jaw (maxilla) and lower jaw (mandible). 
        Consulting an orthodontist or maxillofacial surgeon is the best bet as the course of action would depend on the severity of your case. Some options are:
        1) Orthognathic surgery to forcibly alter the position of your upper/lower jaw to be in better alignment. This is more financially costly and invasive. This would be appropriate in cases of severe malocclusion.
        2) braces may be the only thing needed to align your jaw.
        3) other orthodontic contraptions can set your teeth in proper alignment.
        4) facial hair around the chin can improve perceived chin projection, which can increase this angle into the harmonious range.
        5) Brow implants if the glabella position is recessed can increase facial convexity.
        6) Multiple-implant augmentation of the midface skeleton can simulate the visual appearance of Le Fort III osteotomy and advancement without altering dental occlusion. The entire midface is freed in the subperiosteal plane. The midface skeleton is augmented with a combination of porous polyethylene implants immobilized.
        A precise course of action would require consulting a specialist and taking X-rays beforehand in the case of jaw surgery.`,
  },
  SubmentalCervicalAngle: {
    scores: [10, 5, 2.5, 0, -5],
    notes: [
      'The angle between your neck and lower jaw is harmonious and defined.',
      'Although not perfectly ideal, the angle between your neck and lower jaw is generally harmonious and defined.',
      'Although not perfectly ideal, the angle between your neck and lower jaw is within a normal range.',
      'The angle between your neck and lower jaw is outside of the normal range and may indicate lacking jaw definition.',
      'The angle between your neck and lower jaw is far outside of the normal range and may indicate lacking jaw definition.',
    ],
    advice: `A few courses of action can improve the definition around your neck. 
        1) lose body fat.
        2) neck liposuction.
        3) Other non-surgical subdermal skin tightening techniques may provide some improvement.`,
  },
  NasoFacialAngle: {
    scores: [9, 4.5, 2.25, 1.125, -2, -5],
    notes: [
      "This angle indicates a harmonious balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "While not perfectly ideal, your angle indicates a harmonious balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "While not perfectly ideal, your angle indicates a normal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This may indicate that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
      "Your angle indicates a slightly abnormal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This may indicate that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
      "Your angle indicates an abnormal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This indicates that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
      "Your angle indicates an extremely abnormal balance between your nose and chin. This encompasses your nose shape and position, as well as your chin's position. This indicates that your jaw's position relative to your nose is unfavorable, but it does not provide additional information regarding the relative positioning of your jaw like the facial convexity angle. ",
    ],
    advice: `Along with correcting any malocclusion (reference facial convexity glabella), there are a few ways to improve your nasofacial angle. The best course of action would depend on the specifics of your case:
        1) Chin implants if your angle is too obtuse can help reduce the angle and boost harmony. Keep in mind this would have to consider other facial assessments as the change does not occur in isolation.
        2) Rhinplasty to alter your nose shape in a specific way to either increase or reduce this angle. One such example would be reducing your nasal projection, which tends to reduce the angle and vice versa.`,
  },
  NasoLabialAngle: {
    scores: [[7.5, 3.75, 1.875, 0.9375, -3, -5, -7.5]],
    notes: [
      'Your nose has a pleasant and ideal shape. Your nose is likely not too upturned or droopy and your philtrum probably has a pleasant shape.',
      'Your nose has a pleasant shape. Your nose is likely not too upturned or droopy and your philtrum probably has a pleasant shape.',
      'While not ideal, your nose has a normal shape. Your nose may begin to appear noticeably upturned or droopy and your philtrum may have a less than ideal shape.',
      'While not ideal, your nose has a reasonably normal shape. Your nose may begin to appear noticeably upturned or droopy and your philtrum may have a less than ideal shape.',
      'Your nose has an abnormal shape. Your nose may be noticeably upturned (high values) or droopy (low values) and your philtrum may have a less than ideal shape.',
      'Your nose has an extremely abnormal shape. Your nose may be noticeably upturned (high values) or droopy (low values) and your philtrum may have a less than ideal shape.',
      'Your nose has an extremely abnormal shape. Your nose may be noticeably upturned (high values) or droopy (low values) and your philtrum may have a less than ideal shape.',
    ],
    advice: `Altering your nasolabial angle is fairly straightforward since it is in the isolated region of your nose. A rhinoplasty primarily aimed at addressing the columella and nasal tip region can alter the nasolabial angle.
        Upper lip filler may also create some upswing of your philtrum, reducing the angle.`,
  },
  OrbitalVector: {
    scores: [7.5, 3.75, 0],
    notes: [
      'You have a positive orbital vector, indicating no infraorbital hollowing. This is a youthful feature that is generally considered attractive.',
      'You have a neutral orbital vector, indicating no infraorbital hollowing. This is a youthful feature that is generally considered attractive.',
      'You have a negative orbital vector, indicating infraorbital hollowing. There is a lack of soft tissue protrusion under your eyes, making your eyes perhaps appear sunken and less youthful.',
    ],
    advice: `To improve the youthfulness of the undereye region, filler is the primary option. Hyaluronic acid filler injected in the infraorbital region can add volume and create a rejuvenating effect. This would have to recurring as the filler dissipates. 
        Implants in the midface region, particularly around the zygomatic and infraorbital region can also address this issue.
        Another potential option is gaining body-fat. This will not provide a substantial benefit, but as your face gains soft tissue in the form of fat, so does the region under your eyes to some degree.`,
  },
  TotalFacialConvexity: {
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
    advice: `The same concepts of improvement would apply here as for the facial convexity (glabella) assessment. However, since this is the total profile, altering the nose's projection can also improve this assessment if that is the issue. We want to carefully recognize whether your unfavorable angle is due to your jaw, glabella, or your nose projection.
        If your angle is too high, you can get a Rhinoplasty to reduce the projection of your nose.
        If your angle is too low, increasing the projection of your nose is possible, but less common. I would caution against this unless your angle is extreme.`,
  },
  MentolabialAngle: {
    scores: [7.5, 3.75, 1.88, 0, -3.75, -7.5],
    notes: [
      'You have a pleasant contour of the chin. The indent formed between your chin is neither too deep or flat.',
      'You have a generally pleasant contour of the chin. The indent formed between your chin is neither too deep or flat.',
      'You have a normal contour of the chin. The indent formed between your chin could be a bit more normalized since it is either too indented (low values) or flat (high values).',
      'You have a slightly abnormal contour of the chin. The indent formed between your chin could be a bit more normalized since it is either too indented (low values) or flat (high values).',
      'You have an abnormal contour of the chin. The indent formed between your chin could be a bit more normalized since it is too indented (low values) or flat (high values).',
      'You have an extremely abnormal contour of the chin. The indent formed between your chin could be a bit more normalized since it is too indented (low values) or flat (high values).',
    ],
    advice: `The main things we would seek to address here are the projection of your chin and lower lip. There are a few ways to improve this assessment:
        1) losing body-fat can make the indent between your chin and lower lip subtly more pronounced.
        2) chin implants can reduce the angle if yours is too high.
        3) lower lip filler can reduce the angle if yours is too high.
        4) chin reduction surgery to increase the angle. Lower lip atrophy can also achieve this effect, but that tends to occur naturally with age.
        5) facial hair in males around the chin can give the illusion of increasing this angle.`,
  },
  FacialConvexityNasion: {
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      'You have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with no severe overjet or underbite.',
      'Although not perfectly harmonious, you have a pleasant shape of the side profile. Neither part of your face -- upper, middle, or lower are in disharmony to one another. You also likely have a pleasant dental occlusion with perhaps some minor overjet (low values) or underbite (high values).',
      'Although not perfectly harmonious, you have a normal shape of the side profile. Neither part of your face -- upper, middle, or lower are in extreme disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is beginning to stray outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in disharmony to one another. You may have some occlusal issues like perhaps a moderate overjet (low values) or underbite (high values).',
      'Your side profile shape is far outside of the normal range. This can indicate that some part of your face -- upper, middle, or lower are in extreme disharmony to one another. You certainly have some occlusal issues like perhaps an overjet (low values) or underbite (high values).',
    ],
    advice: `The same general concepts of improvement would apply here as for the facial convexity (glabella) assessment. However, there is one caveat. If your angle is low, and it is not primarily a result of a jaw recession, then it may be due to the recessed position of your nasion. In that case, a Rhinoplasty can add projection to the top of your nose.`,
  },
  NasalProjection: {
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      'You have an ideal nasal projection. Your nose is not too pronounced or unprojected.',
      'You have a near ideal nasal projection. Your nose is not too pronounced or unprojected.',
      'While not ideal, you have a normal nasal projection. Your nose may be considered slightly too projected (high values) or unprojected (low values).',
      'You have a slightly abnormal nasal projection. Your nose may be slightly too projected (high values) or unprojected (low values).',
      'You have an abnormal nasal projection. Your nose is slightly too projected (high values) or unprojected (low values).',
      'You have an extremely abnormal nasal projection. Your nose is slightly too projected (high values) or unprojected (low values).',
    ],
    advice: `Rhinoplasty to reduce nasal projection is the primary way to address an overly projected nose. Increasing nasal projection is not as common, but some form of Rhinoplasty would also apply.`,
  },
  NasalWHRatio: {
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      'You have an ideal Nasal WHR. The projection of your nose is proportionate relative to its height.',
      'You have a near ideal Nasal WHR. The projection of your nose is proportionate relative to its height.',
      'You have a normal Nasal WHR. The projection of your nose is reasonably proportionate relative to its height.',
      'You have a slightly abnormal Nasal WHR. The projection of your nose may be slightly too much (high values) or too little (low values) compared to its height.',
      'You have an abnormal Nasal WHR. The projection of your nose may be too much (high values) or too little (low values) compared to its height.',
      'You have an extremely abnormal Nasal WHR. The projection of your nose may be too much (high values) or too little (low values) compared to its height.',
    ],
    advice: `Reducing the vertical height of the nose is not really possible aside from a Lefort 1 advancement or some kind of invasive maxillofacial surgery. 
        The more superficial option is a Rhinoplasty to reduce nasal projection as the primary way to address an overly projected nose and create a lower ratio.
        Increasing nasal projection is not as common, but some form of Rhinoplasty would also apply to increase the ratio`,
  },
  RickettsELine: {
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You do not have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
    ],
    advice: `Fixing any malocclusion generally helps to improve the harmony of your chin, lips, and nose.
        Aside from that, lip filler, chin filler, and rhinoplasty can also be specifically catered to improve the harmony of your lip assessments. This concept would apply to all four of the lip assessments (EHSB).
        Facial hair in males may also be a viable option to increase perceived chin projection if that is lacking.`,
  },
  HoldawayHLine: {
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin and lips according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin and lips according to this specific assessment.',
      'You have an unpleasant harmony between your chin and lips according to this specific assessment.',
    ],
    advice: `N/A`,
  },
  SteinerSLine: {
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You do not have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
    ],
    advice: `N/A`,
  },
  BurstoneLine: {
    scores: [5, 2.5, 0],
    notes: [
      'You have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You have a reasonably pleasant harmony between your chin, lips, and nose according to this specific assessment.',
      'You do not have a pleasant harmony between your chin, lips, and nose according to this specific assessment.',
    ],
    advice: `N/A`,
  },
  NasomentalAngle: {
    scores: [5, 2.5, 1.25, 0.625, 0, -5],
    notes: [
      "This angle indicates a harmonious balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates a reasonably harmonious balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have a pleasant jaw position, but not always. It mainly indicates that your nose is harmonious relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "While not ideal, this angle indicates a normal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have a normal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates a slightly abnormal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It can indicate that you have an abnormal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates an abnormal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It probably indicates that you have an abnormal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
      "This angle indicates an extremely abnormal balance between your nose and chin. This encompasses your nose shape and position as well as your chin's position. It probably indicates that you have an extremely abnormal jaw position, but not always. It mainly indicates that your nose is normal relative to your chin, but doesn't provide additional information on whether your chin is harmonious relative to other parts of your face.",
    ],
    advice: `Along with correcting any malocclusion (reference facial convexity glabella), there are a few ways to improve your nasomental angle. The best course of action would depend on the specifics of your case:
        1) Chin implants if your angle is too acute can help increase the angle and boost harmony. Keep in mind this would have to consider other facial assessments as the change does not occur in isolation.
        2) Rhinoplasty can alter your nose shape in a specific way to either increase or reduce this angle. One such example would be reducing your nasal projection, which tends to increase the angle and vice versa. 
        This angle is the same conceptually as the nasofacial, but the angles vary inversely.`,
  },
  GonionMouthRelationship: {
    scores: [5, 1, 0, -5],
    notes: [
      'Your ramus has sufficient vertical growth.',
      'Your ramus has normal vertical growth, but could ideally have more length.',
      'Reference the notes for the ramus:mandible ratio. Improving this assessment also requires increasing ramus length.',
      'Reference the notes for the ramus:mandible ratio. Improving this assessment also requires increasing ramus length.',
    ],
    advice: `N/A`,
  },
  RecessionRelativeFrankfortPlane: {
    scores: [5, 1, 0, -5],
    notes: [
      'According to this assessment, you have no notable recession regarding the position of your chin relative to your nasion.',
      'According to this assessment, you have slight recession regarding the position of your chin relative to your nasion.',
      'According to this assessment, you have moderate recession regarding the position of your chin relative to your nasion.',
      'According to this assessment, you have extreme recession regarding the position of your chin relative to your nasion.',
    ],
    advice: `This assessment tends to correlate to the facial convexity. To improve it, you can consider a few things:
        1) fixing malocclusion
        2) chin implants if your chin is in a retruded position
        3) facial hair in males to add perceived chin projection
        4) orthognathic surgery in severe cases with severely retruded chins`,
  },
  BrowridgeInclinationAngle: {
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
    advice: `There are a few ways to improve the shape of your frontal bone, or forehead:
        1) custom forehead implants to make your forehead flatter in shape if it is too sloped back. Achieving drastic results may not be that realistic. 
        2) using a hairstyle that covers your forehead to distract from or hide this specific feature.
        3) custom forehead implants localized near the brow region to increase the slant of your forehead if it is too flat. This would also have to consider other assessments like the nasofrontal angle and facial convexity.`,
  },
  NasalTipAngle: {
    scores: [4, 2, 1, 0.5, 0, -2],
    notes: [
      'You have a harmonious nasal tip that is not overly upturned or droopy.',
      'You have a generally harmonious nasal tip that is not overly upturned or droopy.',
      'You have a normal nasal tip angle, but it may be considered slightly too upturned (high values) or droopy (low values).',
      'You have an abnormal nasal tip angle, indicating that your nose is either too upturned (high values) or droopy (low values).',
      'You have an abnormal nasal tip angle, indicating that your nose is either too upturned (high values) or droopy (low values).',
      'You have an extremely abnormal nasal tip angle, indicating that your nose is either too upturned (high values) or droopy (low values).',
    ],
    advice: `Rhinplasty specifically localized around the nasal tip is extremely common to address either an overly droopy or upturned nasal tip. This is also called nasal tip rotation rhinoplasty.`,
  },

  EyeSeparationRatio: {
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
    advice: `While extremely difficult to change the actual underlying morphology of your eyes, there are a few ways to improve this assessment:
        1) Lose body-fat to create a thinner face, thereby increasing your ESR and making your eyes appear wider set. The opposite also holds true -- if you have overly wide set eyes, gaining some weight on your face can lead to the appearance of more normally spaced eyes.
        2) Hairstyles to alter your perceived facial width. Along the same lines as facial fat, you can play around with hairstyles that add width to your face or reduce it. For example, if you have extremely wide set eyes, longer hairstyles that cover the sides of your face or add width can improve your perceived facial harmony. If your eyes are closer set, shorter hairstyles with shorter sides may suit your face better.
        3) Cheekbone implants to increase the width of your face. Or, zygomatic reduction surgery to do the opposite. 
        Overall, the only thing you can do is alter your facial width, but not the actual spacing of your eyes themselves. Craniofacial surgery can be used to correct severe cases of facial deformity, but it is not typically used to make minor corrections to eye spacing.`,
  },
  FacialThirds: {
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
        1) hairstyle to add length to your forehead if your upper third is short or reduce it if your upper third is too tall. 
        2) facial hair to add perceived vertical height to the lower third.
        3) Rhinoplasty to reduce a droopy nasal tip, since the middle third begins at the bottom of the nasal tip. This would give a shorter middle third. 
        4) Custom jaw implants to add vertical height to your lower third if needed. Again, this must consider the harmony of other facial assessments.`,
  },
  LateralCanthalTilt: {
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
    advice: `Aside from illusions in the form of makeup and lash length, there is no real way to change the structural distance between your eyes.
        Craniofacial surgery is an option in extreme cases of orbital hypertelorism. In those cases, the eyes may be 2 or more eye's widths apart.`,
  },
  FacialWHRatio: {
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
    advice: `There are a few ways to alter FWHR, but it is largely unchangeable due to it being linked heavily to one's bone structure:
        1) gaining or losing facial- fat can either increase or reduce your FWHR, respectively. 
        2) Cheekbone implants can increase facial width, thereby increasing FWHR slightly.
        3) upper lip filler can reduce the vertical distance of your midface, thereby increasing FWHR slightly. 
        4)  You can grow eyebrow hair more interior towards your nose, which can increase FWHR.
        5) Brow implants or filler may marginally lower your brow position, thereby increasing FWHR.
        Reducing FWHR is not as possible aside from losing facial fat and invasive zygomatic remodeling (cheekbone reduction surgery).`,
  },
  JawFrontalAngle: {
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
        1) Losing facial-fat can reveal your jaw contour better, often resulting in a more pleasant angle.
        2) Custom jaw implants can be used to specifically design your jaw's desired shape.
        3) Fixing malocclusion can improve your jaw in the same way that it would address your MPA. Your JFA is heavily tied to your MPA.
        4) Chin implants -- a wider chin tends to reduce this angle, while a narrower chin increases it. Facial hair can also conceptually do this to some degree.
        5) Masseter reduction surgery. An overly wide jaw can tend to increase this angle. Conversely, increasing your jaw width through chewing exercises can increase this angle if yours is on the lower end.`,
  },
  CheekBoneHeight: {
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
    advice: `We will assume that the main goal is to achieve higher set cheekbones. To do this, you can either lose body fat to reveal the underlying cheekbone structure if you have high cheekbones. Or, you can use cheekbone implants to increase the protrusion and width of your face near your eyes. Making that the widest part of your face will give the appearance of high cheekbones.`,
  },
  TotalFacialWHRatio: {
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
    advice: `Improving total FWHR/facial index depends on the underlying cause and severity of your overly elongated or compact face shape:
        1) Losing facial fat can increase the ratio, while gaining facial fat can reduce it.
        2) Cheekbone implants or reduction can reduce or increase this ratio, respectively.
        3) Hairstyles can manipulate the perceived dimensions of your face similar to the facial thirds. If your face is overly long, a wider hairstyle may help and vice versa. 
        4) Facial hair can add height to your face is your ratio is too low.
        5) Correcting any hyper/hypo divergent growth pattern at the orthodontist or maxillofacial surgeon can increase the harmony of your face's vertical height.
        6) Overly clenching and wearing down your teeth can result in a deep bite and reduce your facial height, thereby reducing this ratio. Although, this is not suggested as a method of improvement; rather, it is more so to avoid a reduction in facial height along with jaw joint problems.
        7) Correcting hair loss through minoxidil or a hairline transplant can lower this ratio. Severe hairline recession can often lead to abnormally high ratios.`,
  },
  BigonialWidth: {
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
    advice: `There are a few ways to alter this ratio:
        1) Increasing the cross-sectional muscle area of your masseter muscle through chewing tough foods can increase your jaw width if your ratio is low.
        2) Masseter reduction surgery can reduce your jaw width if it is too wide.
        3) Increasing your facial width through cheekbone implants can reduce your jaw's perceived width.
        4) Thicker sideburns can reduce your jaw's perceived width.
        5) A thicker beard can increase your jaw's perceived width.`,
  },
  ChinPhiltrumRatio: {
    scores: [12.5, 6.25, 3.13, 1.56, 0, -3.13, -6.25],
    notes: [
      'Your chin is harmoniously proportioned relative to your philtrum. This indicates that neither your chin or philtrum are too long or short.',
      'While not perfectly ideal, your chin is harmoniously proportioned relative to your philtrum. This indicates that neither your chin or philtrum are not excessively long or short.',
      'While not perfectly ideal, your chin is normally proportioned relative to your philtrum. This indicates that neither your chin or philtrum are not excessively long or short.',
      'Your chin is somewhat abnormally proportioned relative to your philtrum. This can indicate that your chin is too short (low values) or tall (high values) relative to your philtrum.',
      'Your chin is abnormally proportioned relative to your philtrum. This can indicate that your chin is too short (low values) or tall (high values) relative to your philtrum.',
      'Your chin is abnormally proportioned relative to your philtrum. This can indicate that your chin is too short (low values) or tall (high values) relative to your philtrum.',
    ],
    advice: `To alter this ratio we want to consider the chin and lips. Altering the position of the subnasale is not really possible.
        1) chin implants to increase this ratio.
        2) correcting malocclusion to fix any excessive or lacking chin projection and height.
        3) facial hair to increase perceived chin height and increase this ratio.
        4) upper lip filler to increase this ratio.
        5) lower lip filler to reduce this ratio.`,
  },
  NeckWidth: {
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
    advice: `Altering your neck width is fairly straightforward. Losing body fat tends to make the neck thinner and vice versa. Exercising your neck through resistance training can increase its circumference and width in the front view.`,
  },
  MouthNoseWidthRatio: {
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
    advice: `To alter this ratio, we primarily want to change the nasal width. Altering mouth width is more invasive and does not tend to produce as favorable results.
        A Commissuroplasty is a possible method to increase one's mouth width. Rhinoplasty can be used to reduce your nasal width (higher ratios), or increase it (lower ratios). 
        The latter is less common, but possible.`,
  },
  MidfaceRatio: {
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
    advice: `Since altering the distance between your pupils through craniofacial surgery is usually reserved for facial abnormalities,  upper lip filler to increase the ratio is a more realistic option.
        Some more invasive midface procedures like Lefort 1 can make the midface more vertically compact. thereby reducing the ratio further. Other forms of orthognathic surgery may result in some changes to the midface structure as well.`,
  },
  EyebrowPositionRatio: {
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
    advice: `This assessment is not really surgically alterable to be more favorable. However, in some cases where higher eyebrows result in an overall more harmonious face (factoring in other assessments), a brow lift can be a viable option.
        Filler around the brows can perhaps lower the brow position, but it is not something commonly done and it may throw off the appearance of your brow region.`,
  },
  EyeSpacingRatio: {
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
    advice: `Aside from illusions in the form of makeup and lash length, there is no real way to change the structural distance between your eyes.
        Craniofacial surgery is an option in extreme cases of orbital hypertelorism. In those cases, the eyes may be 2 or more eye's widths apart.`,
  },
  EyeAspectRatio: {
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
    advice: `ower lid blepharoplasty can increase this ratio if a sagging lower lid is the culprit.
        In the cases of overlying soft tissue in the upper lid region, blepharoplasty can increase the perceived height and roundness of your eyes.`,
  },
  LowerUpperLipRatio: {
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
    advice: `Lip filler aimed at increasing the upper or lower lip volume is the best way to address this proportion.`,
  },
  DeviationOfIaaJfa: {
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
    scores: [6, 3, 1.5, 0, -3, -6],
    notes: [
      'Your eyebrows have an ideal tilt. They are neither too upturned or droopy when accounting for inter-sex variability.',
      'Your eyebrows have a near ideal tilt. They are neither too upturned or droopy when accounting for inter-sex variability.',
      'Although not ideal, your eyebrows have a normal tilt. They may be considered slightly too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
      'Your eyebrows have a slightly abnormal tilt. They may be considered too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
      'Your eyebrows have an abnormal tilt. They may be considered too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
      'Your eyebrows have an extermely abnormal tilt. They may be considered too upturned (high values) or droopy (low values) when accounting for inter-sex variability.',
    ],
    advice: `Altering the tilt of your brows can primarily be done through superficial techniques (e.g., plucking, shaving, shaping, waxing, threading, etc.).
        Sometimes though, the shape of your brows is tied to your brow ridge's actual morphology. In that case, there is not an easy way to change its shape. In the case of droopy eyebrows, an eyebrow lift can also help.`,
  },
  BitemporalWidth: {
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
    advice: `Altering your forehead width will mostly have to do with altering your hairline. While altering this proportion is generally not necessary unless it is an extreme case, there are a few ways to do so:
        1) laser hair removal to widen an overly narrow hairline.
        2) shaving your hairline is inadvisable, but can widen the hairline.
        3) using a hairstyle to cover your forehead.
        4) altering your hair length. For example, wider bitemporal widths may suit shorter sides, while narrow foreheads may suit longer hairstyles. `,
  },
  LowerThirdProportion: {
    scores: [5, 2.5, 1.25, 0, -1.25, -2.5],
    notes: [
      [
        'Your lower third has a harmonious spacing between its features.',
        'Your lower third has a harmonious spacing between its features.',
        'Although not ideal, your lower third has a normal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either slightly too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
        'Your lower third has a slightly abnormal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
        'Your lower third has an abnormal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
        'Your lower third has an extremely abnormal spacing between its features. The upper portion (upper lip/philtrum) of your lower third may be either too short (low values) or long (high values) relative to the lower portion (chin/lower lip).',
      ],
    ],
    advice: `Altering chin height can be achieved through the following methods: jaw implants, chin implants, vertical genioplasty, facial hair. An increase in chin height lowers this proportion if it is too high.
        Rhinoplasty can reduce the droopiness of the nasal tip, thereby increasing this proportion. Altering lip size does not substantially affect this proportion.`,
  },
  IpsilateralAlarAngle: {
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
    advice: `Altering the spacing between your eyes is not feasible for most people, so the main way to change this measurement is to alter the position of your nasal tip. Rhinoplasty to reduce nasal tip droopiness can increase this angle.
        You should factor in how that change would alter your other facial proportions (e.g., facial thirds).`,
  },
  MedialCanthalAngle: {
    scores: [[10, 5, 2.5, 0, -2.5, -5, -10]],
    notes: [
      'The inner corner of your eye is harmonious. It has distinct shape and angularity, while not being overly angular.',
      'The inner corner of your eye is generally harmonious. It has distinct shape and angularity, while not being overly angular.',
      'The inner corner of your eye is somewhat harmonious. It may either lack some distinct angularity (high values) or be overly sharp (low values).',
      'The inner corner of your eye is somewhat disharmonious. It may either lack some distinct angularity (high values) or be overly sharp (low values).',
      'The inner corner of your eye is  disharmonious. It either lacks some distinct angularity (high values) or is overly sharp (low values).',
      'The inner corner of your eye is very disharmonious. It either lacks some distinct angularity (high values) or is overly sharp (low values).',
      'The inner corner of your eye is extremely disharmonious. It either lacks some distinct angularity (high values) or is overly sharp (low values).',
    ],
    advice: `There is no surgery specifically addressed at altering the sharpness of the medial canthus, but Canthoplasty, Canthopexy, or Blepharoplasty would alter this to some effect.`,
  },
};
