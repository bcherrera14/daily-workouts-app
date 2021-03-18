const workouts = [
	{
		title: 'FRANNY ROW YOUR BOAT',
		description:
			'A. Ab Circuit warm up (5 min AMRAP)\n1 min Plank\n15 Side bends per side\n15 Bicycle sit ups per side\nB. 1 min @ each x 3 rounds\nCurl to press\nPush ups\nLunges\nC. For time\n100 sit ups\n400m run\n50 Cal bike\n400m run\n25 Burpees\n400m run\n50 cal bike\n400m run\n100 sit ups',
		id: '1',
		userId: '103641054784067776862'
	},
	{
		title: 'LAP DOG',
		description:
			'A. 15, 12, 9, 6, 3\nBench press\nBurpees\n200m run or row each round\nB. 15, 12, 9, 6, 3\nWall Balls\nPush ups\n200m run or row each round\nC. 15, 12, 9, 6, 3\nCal bike\nAb wheels\n1 min plank each round\nD. 3 sets\n10 seated OH press\n10 tri kick backs per arm',
		id: '2',
		userId: '103641054784067776862'
	},
	{
		title: 'TNG AND TTB',
		description:
			'A. 100/70 cal\n*at the start and every 2 min, complete 10 KBS + 10 goblet  squarts                                                                                *10 min cap\nB. AMRAP in 10 min\n200m run or row\n15 curl to press\n15 ab wheels\nC. AMRAP in 10 min\n200m run or row\n10 PVC Good morning\n10 PVC OHS\nC. 3 sets\n10 SA rows per side\n15 tri ext.',
		id: '3',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE DOWN',
		description:
			'AMRAP in 45 min\n50 Lunges\n50 Push ups\n50 KBS\n50 Wall Balls\n50 Pull ups\n50 GHD sit ups\n*at the start, and every 15 min, complete a block run',
		id: '4',
		userId: '103641054784067776862'
	},
	{
		title: 'THE BOXER',
		description:
			'A. ALT. TABATA x 5 rounds (:20 on/ :10 off)\nKBDL\nPush ups\nAlt. Reverse lunges\nB. 3 rounds:\n500m row\n15 burpees\n15 bench press\nC. 3 rounds:\n400m run\n20 weighted sit ups\n40 weighted squats\nD. :30 side plank per side x 3 sets per side\n*add weight to increase difficulty',
		id: '5',
		userId: '103641054784067776862'
	},
	{
		title: 'AFTERMATH',
		description:
			'A. 100 sit ups for time\n*at the start and every minute, complete 4 burpees\n*10 min cap\nB. 40-30-20-10\nDB hang squat cleans\nPush Press\nCal bike or row',
		id: '6',
		userId: '103641054784067776862'
	},
	{
		title: 'ETOT',
		description:
			'*45 min running clock\n*A, B, C are all 15 min AMRAPS\n*Begin each AMRAP with 800m run or row buy in\n*No extra rest\nA. 15 min\n100 Jump Rope\n25 Air Squats\n25 Push press\nB. 15 min\n:30 side plank per side\n15 KBDL\n15 cal bike\nC. 15 min\n15 bent over 2 arm row\n15 Russian twists per side\n15 Lunges per leg',
		id: '7',
		userId: '103641054784067776862'
	},
	{
		title: '12 MONKEYS',
		description:
			'A. :40 at each x 4 rounds\nPistols\nPush up to renegade rows\nWeighted sit ups\nB. AMRAP in 30 min\n10 KBS\n10 Goblet squats\n15 Body rows\n15 Burpees\n*at the start and every 10 min, run 400m\nC. 5 min plank\neach time you break, complete 10 switch lunges',
		id: '8',
		userId: '103641054784067776862'
	},
	{
		title: 'BRICK BY BRICK',
		description:
			'A. AMRAP in 5 min\n3, 6, 9, 12, 15…\nWall Balls\nWeighted Burpees\nRest 2 min x 2 rounds\nB. AMRAP in 12 min\n15 Curl to press\n1 min plank\n15 DB Lunges per leg\n10 Ab wheels\nC. 3 rounds:\n15 Bench press\n400m run\nD. 3 rounds:\n15 K2E\n400m row',
		id: '9',
		userId: '103641054784067776862'
	},
	{
		title: 'ROW THEN THAT',
		description:
			'A. 10 min clock\n4 min bike or row\n3 min walking lunges\n2 min plank\n1 min burpees\nB. AMRAP in 15 min\nBlock run buy in\n+\nAMRAP with time remaining\n40 Air Squats\n30 Sit ups\n20 Push ups\n100m run\nC. 3 sets:\n15 Curls\n15 Ab wheels\nD. 3 sets:\n10 SA rows per arm\n15 side bends per side',
		id: '10',
		userId: '103641054784067776862'
	},
	{
		title: 'BELLS N BURPEES',
		description:
			'A. :40 on/ :20 off x 5 rounds\nDevils Press\nBox Jumps\nB. For time\n50 Thrusters\n400m run\n50 Push ups\n400m run\n50 Lunges, per leg\n400m run\n50 GHD sit ups\n400m run\n50 Pull ups\n400m run',
		id: '11',
		userId: '103641054784067776862'
	},
	{
		title: 'DEVILS PLAYTHING',
		description:
			'Big Block Run\n100 sit ups\n90 Lunges\n80 Step ups\n70 HR push ups\n60 Pull ups\n50 cal bike\n40 Push press\n30 Burpees\n20 DB front squats\n10 Devils Press',
		id: '12',
		userId: '103641054784067776862'
	},
	{
		title: 'DEAD OVERHANG',
		description:
			'15, 12, 9, 6, 3\nPull Ups\nKBS\n200m run each round15, 12, 9, 6, 3\nGHD sit ups\nThrusters\n200m row each round\n15, 12, 9, 6, 3\nPush ups\nLunges per leg\nCal air bike',
		id: '13',
		userId: '103641054784067776862'
	},
	{
		title: 'DEAD RINGERS',
		description:
			'A. 1 min @ each x 4 rounds\nBurpees\nPlank\nDB ground to OH\nB. AMRAP in 12 min\n1k row\n25 push ups\n50 air squats\nC. AMRAP in 12 min\n1 mile air bike\n25 wall balls\n50 sit ups\nD. 15, 12, 9, 6, 3\nK2E\nAb wheels',
		id: '14',
		userId: '103641054784067776862'
	},
	{
		title: 'TO THE BELLS',
		description:
			'A. Ab circuit warm up\n15 side bends per side\n20 bicycle sit ups\n:30 plank\nB. AMRAP in 18 min\n10 Pistols\n10 curl to press\n20 alt. weighted step ups\n400m run or row\nC. AMRAP in 18 min\n10 Bench press\n10 SA rows per arm\n30 Battle Rope waves\n400m run or row',
		id: '15',
		userId: '103641054784067776862'
	},
	{
		title: 'OFF THE WALL',
		description:
			'A. AMRAP in 10 min\n10 Bulgarian split squats per leg\n20 Sit ups\n200m runB. AMRAP in 10 min\n10 Burpees\n20 Russian twists per side\n200m row\nC. 3 sets:\n10 Skull crushers\n10 Ab wheels\n30 battle rope (2 arm waves)\nD. 3 sets:\n10 Curls\n15 Tri ext\n30 battle rope (alt waves)',
		id: '16',
		userId: '103641054784067776862'
	},
	{
		title: 'THE WORST THINGS',
		description:
			'A. 15, 12, 9, 6, 3\nBench press\nK2E\n200m run or row each round\nB. 15, 12, 9, 6, 3\nAlt DB snatches\nBurpees\nCal Air bike\nC. 3 sets:\n10 Bulgarian Split squats per leg\n1 min plank\nD. 3 rounds:\n15 Side bends per side\n15 Russian Twists per side',
		id: '17',
		userId: '103641054784067776862'
	},
	{
		title: 'OVER RINGS',
		description:
			'A. Complete 1 round every 2 min\n10 KBS\n10 Goblet squats\n10 burpees\n*rest the remainder of the 2 min interval, x 4 sets (8 min total)\nB. AMRAP in 20 min\nBlock run buy in\n+\nAMRAP w time remaining:\n10 pull ups\n10 box jumps\n10 DB ground to OH\n200m run or row\nC. 10 min clock\n3 min plank\n2 min sit ups\n2 min side bends, alt sides\n3 min plank',
		id: '18',
		userId: '103641054784067776862'
	},
	{
		title: 'HIT THE WALL',
		description:
			'A. 1 min @ each x 3 rounds\nSit ups\nBox jumps\nHR push ups\nB. AMRAP in 12 min\n10 Pistols 5/5\n10 Curl to press\n10 Cals (bike or row)\nB. AMRAP in 20 min\n10 Ab wheels\n20 KB High Pulls\n30 Reps battle rope (any pattern)\n400m run',
		id: '19',
		userId: '103641054784067776862'
	},
	{
		title: 'GETTING WORSE',
		description:
			'A. 4 sets:\n10 Seated OH press\n10 Curls\n15 Tri press downs\nB. 4 sets:\n10 RDL\n:30 Wall sit\n10 Russian step ups per leg\nC. 3 rounds:\n10 Push ups\n15 Body rows\n20 Wall Balls\n30 Sit ups\n400m run or row',
		id: '20',
		userId: '103641054784067776862'
	},
	{
		title: 'NOT BARBARA',
		description:
			'A. Against a 3 min clock:\n15 DB ground to OH\n10/7 cal bike or row\n*rest the remainder of 3 min interval x 4 rounds (12 min)\nB. AMRAP in 12 min\n10 Box jumps\n15 Goblet squats\n200m run/row\nC. AMRAP in 12 min\n10 K2E\n10 Push ups\n200m run or row\nD. 4 min clock\n1 min Plank\n1 min Russian twists\n1 min Sit ups\n1 min Plank',
		id: '21',
		userId: '103641054784067776862'
	},
	{
		title: 'LIGHT AND SUCKY',
		description:
			'A. 12 min cap\n50 Sit ups\n50 KBDL high pull\n50 Air squats\n*At the start and every min, complete 3 burpees\n*Complete all reps of one movement before moving onto the next\n*No extra rest between movements\nB. 3 rounds:\n15 Bench press\n15 Dips\n400m row\nC. 3 rounds\n15 KBS\n30 Lunges\n400m run\nC. 3 rounds\n10 ab wheels\n1 min plank',
		id: '22',
		userId: '103641054784067776862'
	},
	{
		title: '16.4!',
		description:
			'A. AMRAP in 40 min\nBuy in: Lunges up Farley! Jog back down\nthen\nAMRAP w/ time remaining:\n25 push press\n25 cal bike\n25 burpees\n25 cal row\n25 weighted sit ups\n400m run',
		id: '23',
		userId: '103641054784067776862'
	},
	{
		title: 'BETWEEN BURPEES',
		description:
			'A. AMRAP in 18 min\n10 bench press\n10 pull ups\n20 lunges\n*at the start and every 6 min run/row 200mB. AMRAP in 18 min\n10 Goblet squats\n15 KBS\n50 jump rope\n*at the start and every 6 min run/row 200mC. 1 min @ each\nPlank\nSide plank- left\nSide plank- right\nRussian Twists\nSide plank- right\nSide plank- left\nPlank',
		id: '24',
		userId: '103641054784067776862'
	},
	{
		title: 'BREAK IT TILL YOU MAKE IT',
		description:
			'A. AMRAP in 10 min\n1/2 lap “gun” carry\n10 box jumps\n200m row\nB. AMRAP in 10 min\n10 push up to renegade row\n10 back ext\n200m run\nC. AMRAP in 10 min\n10 Cal bike\n15 Goblet squats\n20 sit ups\nD. 1 min @ each\nPlank\nHollow Rocks\nFlutter kicks\nAb wheels\nPlank',
		id: '25',
		userId: '103641054784067776862'
	},
	{
		title: 'SHOOTING PLANKS',
		description:
			'A. AMRAP in 5 min\nPlank hold!\nAMRAP burpees with the time remaining, once you break the plank.\nMotivation to hold 5 min unbroken!B. :40 at each x 4 rounds\nAir squats\nSit ups\nCurl to press\nC. 21-15-9\nSeated OH press\nK2E\nD. 15, 12, 9, 6, 3\nPush ups\nRDL\n200m run each round',
		id: '26',
		userId: '103641054784067776862'
	},
	{
		title: '3 LITTLE ROUNDS',
		description:
			'A. AMRAP in 5 min\n:30 side plank per side\n20 flutter kicks per side\n10 sit ups\nB. 4 sets:\n15 KBDL\n15 GHD sit ups\n800m run\nC. 4 sets:\n10 SA rows per arm\n15 push ups\n800m run\nD. 4 sets:\n15 thrusters\n15 cal bike or row',
		id: '27',
		userId: '103641054784067776862'
	},
	{
		title: 'GET ON UP',
		description:
			'A. 10 min cap\n50 DB ground to OH\n50 KBS\n*at the start, and every min complete 3 burpees\n*You must complete all reps of DB ground to OH, before moving onto the KBS.\n*No extra rest between movements\nB. AMRAP in 10 min\n15 Bench press\n10 pull ups\n10 cal bike\nC. AMRAP in 10 min\n15 Wall Balls\n10 box jumps\n10 cal row\nD. 3 sets:\n15 skull crushers\n1 min plank',
		id: '28',
		userId: '103641054784067776862'
	},
	{
		title: 'BACK TO BURPEES',
		description:
			'A. 10 min clock\n75/55 cal bike or row\nAMRAP jump rope with time remaining.\nB. 3 rounds;\n15 bench press\n15 russian twists per side\n400m run\nC. 3 rounds:\n15 wall balls\n15 GHD sit ups\n400m row',
		id: '29',
		userId: '103641054784067776862'
	},
	{
		title: 'MONKEYIN AROUND',
		description:
			'A. 10 min clock\n3 min plank\n3 min sit ups\n2 min box jumps\n2 min push ups\nB. 10 min clock\n4 min bike or row\n3 min walking lunges\n2 min pull ups\n1 min burpees\nC. 3 rounds:\n400m run or row\n21 KBS\n12 knees 2 elbows',
		id: '30',
		userId: '103641054784067776862'
	},
	{
		title: 'STILL DUBBIN',
		description:
			'A. AMRAP in 20 min\n400m run or row\n10 ab wheels\n15 standing OH tri ext.\n20 lunges\n25 sit ups\nB. AMRAP in 20 min\n400m run or row\n10 Goblet squats\n15 KBS\n20 alt. battle rope waves\n1 min plank',
		id: '31',
		userId: '103641054784067776862'
	},
	{
		title: 'THE INVERSE',
		description:
			'A. 75 DB thrusters\n*at the start and every min = 3 burpees\n*10 min cap\nB. 3 rounds:\n15 pull ups\n15 KBS\n15 cal bike\nC. 3 rounds:\n10 weighted step ups per leg\n15 GHD sit ups\n200m run or row',
		id: '32',
		userId: '103641054784067776862'
	},
	{
		title: 'HELEN WHO?',
		description:
			'A. 1 min @ each x 3 rounds\nJump rope\nDevil’s press\nPlank\nB. 15, 12, 9, 6, 3\nDB hang squat cleans\nCal row\nC. 15, 12, 9, 6, 3\nKBS\nGoblet squats\n200m run each round\nD. 3 sets:\n15 Russian twists per side\n15 sit ups',
		id: '33',
		userId: '103641054784067776862'
	},
	{
		title: 'GET IT STRAIGHT',
		description:
			'A. Ab circuit warm up\nAMRAP in 5 min\n:30 plank\n10 ab wheels\n15 side bends per side\nB. AMRAP in 20 min\n15 bench press\n15 DB front squats\n15 sit ups\n400m run\nC. 3 sets:\n15 skull crushers\n10 alt curls per side\nD. 3 sets:\n10 SA rows per arm\n10 RDL',
		id: '34',
		userId: '103641054784067776862'
	},
	{
		title: 'DUBBLE UP',
		description:
			'A. AMRAP in 10 min\n200m row\n25 battle rope 2 arm wave\n15 russian twist with plate\nB. AMRAP in 10 min\n10 cal air bike\n25 alt. battle rope wave\n15 weighted sit ups\nC. AMRAP in 20 min\n400m run\n10 pull ups\n15 thrusters\n50 jump rope',
		id: '35',
		userId: '103641054784067776862'
	},
	{
		title: '16.1',
		description:
			'A. 1 min @ each x 3 rounds\nDevils press\nDB weighted step ups\nplank\nB. AMRAP in 15 min\nBlock run buy in\n+\nAMRAP with time left\n5 pull ups\n10 push ups\n15 air squats\nC. AMRAP in 15 min\nBlock run buy in\n+\nAMRAP with time left\n5 knees 2 elbows\n10 lunges 5/5\n15 sit ups',
		id: '36',
		userId: '103641054784067776862'
	},
	{
		title: 'GONE BAD',
		description:
			'A. 4 sets:\n15 skull crushers\n10 ab wheels\nB. 4 sets:\n15 russian twists per side\n10 seated OH press\nC. 4 rounds:\n500m row\n25 wall balls\n1k c2 bike\n15 burpees',
		id: '37',
		userId: '103641054784067776862'
	},
	{
		title: 'DA HUNDO',
		description:
			'A. AMRAP in 10 min\n10 curl to press\n10 DB front squats\n1 lap “gun” carry\nB. AMRAP in 10 min\n10 bench press\n10 SA rows per arm\n200m row\nC. AMRAP in 10 min\n10 back ext\n15 sit ups\n200m run\nD. AMRAP in 10 min\n10 push ups\n10 box jumps\n10 cal bike',
		id: '38',
		userId: '103641054784067776862'
	},
	{
		title: '12.2!',
		description:
			'A. 4 sets\n10 seated OH press\n10 RDL\nB. 4 sets:\n10 pull ups\n15 GHD sit ups\nC. 4 sets:\n15 tri ext.\n15 curls\nD. 15, 12, 9, 6, 3\nCal bike or row\nBurpees',
		id: '39',
		userId: '103641054784067776862'
	},
	{
		title: 'WALK N ROLL',
		description:
			'21-15-9\nknees 2 elbows\npush ups\n400m run\n21-15-9\nRDL\nGHD sit up\n400m run\n21-15-9\ncal bike\nburpees\n400m run\n21-15-9\nAb wheels\nbox jumps',
		id: '40',
		userId: '103641054784067776862'
	},
	{
		title: 'ROWIN DIRTY',
		description:
			'21-15-9\nknees 2 elbows\npush ups\n400m run\n21-15-9\nRDL\nGHD sit up\n400m run\n21-15-9\ncal bike\nburpees\n400m run\n21-15-9\nAb wheels\nbox jumps',
		id: '41',
		userId: '103641054784067776862'
	},
	{
		title: '11.5',
		description:
			'A. 3 sets:\n21 curls, 7 series\n:20 “gun hold”\n:60 plank\nB. 3 sets:\n15 DB front squats\n:30 wall sit\n15 side bends per side\nC. 3 rounds\n400m row\n15 push press\n400m row\n30 lunges',
		id: '42',
		userId: '103641054784067776862'
	},
	{
		title: '40 SOMETHING',
		description:
			'A. AMRAP in 20 min\nBig block run or 1 mile row buy in\n+\nAMRAP with time remaining:\n3, 6, 9, 12, 15…\nPull ups\nKBS\nBench press\n100m run or row each round\nB. AMRAP in 20 min\nBig block run or 1 mile row buy in\n+\nAMRAP with time remaining:\n3, 6, 9, 12, 15…\nThrusters\nBox jumps\nAb wheels\n100m run or row each round',
		id: '43',
		userId: '103641054784067776862'
	},
	{
		title: 'TABATA FOR ALL',
		description:
			'A. TABATA x 8 rounds at each, no alternating\nsit ups\nair squats\npush ups\nB. AMRAP in 15 min\n10 knees 2 elbows\n100m run\n10 box jumps\n100m run\n10 KBS\n100m run\nC. 21-15-9\nCal bike\ncurl to press',
		id: '44',
		userId: '103641054784067776862'
	},
	{
		title: 'WINTER SLEDDING',
		description:
			'A. Every 2 min x 4 sets (8 min total)\n200m run + 10 wall balls\nrest the remainder of 2 min interval, scale run/distance if needed\nB. Every 2 min x 4 sets (8 min total)\n12/9 cal bike + 10 burpees\nrest the remainder of 2 min interval, scale bike distance if needed\nC. AMRAP in 10 min\n20 bench press\n15 lunges per leg\n10 ab wheels\nD. AMRAP in 10 min\n20 DB front squats\n15 Weighted sit ups\n100 jump rope',
		id: '45',
		userId: '103641054784067776862'
	},
	{
		title: 'YEP, UNBROKEN',
		description:
			'A. AMRAP in 5 min\n10 floor glute bridges w. band\n10 PVC pipe good morning\n10 PVC OHS\n10 Hollow rocks\nB. 3 sets:\n1 min burpees\n1 min rest\nC. 40-30-20-10\nCals on bike or rower\nWall balls\nWeighted sit ups\n400m run each round',
		id: '46',
		userId: '103641054784067776862'
	},
	{
		title: 'BUY AND FLY',
		description:
			'A. AMRAP in 30 min\nBig block run buy in\n+\nAMRAP with time remaining\n10 seated OH press\n15 OHS\n20 Lunges\n25 sit ups\n300m row\nB. AMRAP in 10 min\nmax plank hold buy in (5 min cap)\n+\nAMRAP with time remaining\n15 side bends per side\n10 ab wheels\n10 glute bridges\n10 good mornings-hands on hips',
		id: '47',
		userId: '103641054784067776862'
	},
	{
		title: 'KB BABY',
		description:
			'A. 1 min @ each exercise x 3 rounds\nThrusters\nHR push ups\nSit ups\nB. AMRAP in 15 min\n400m run or row\n10 bench press\n10 pistols 5/5\n1 min plank\nC. AMRAP in 15 min\n400m run or row\n10 Ab wheels\n15 skull crushers\n20 Russian KBS',
		id: '48',
		userId: '103641054784067776862'
	},
	{
		title: 'STOP N GO',
		description:
			'45 min running clock\nABC are all AMRAP in 15 min\nA. 15 min\n10 Dips\n10 burpees\n:45 plank\n20 air squats\nB. 15 min\n10 push ups\n15 cal Bike\n20 KBS\nC. 15 min\n10 Good mornings with PVC\n15 Pull ups\n20 Russian Twists 10/10\n50 Jump rope',
		id: '49',
		userId: '103641054784067776862'
	},
	{
		title: 'STAT PADDING',
		description:
			'A. Ab Warm up:\nAMRAP in 5 min\n15 weighted situps\n20 flutter kicks 10/10\n:30 straight arm plank\nB. AMRAP in 10 min\n30 battle rope waves\n15 push press\n200m run\nC. AMRAP in 10 min\n15 goblet squats\n10 reverse lunges per leg\n400m c2 bike @ high damper\nD. 15, 12, 9, 6, 3\nBox jumps\nKBS\nBurpees',
		id: '50',
		userId: '103641054784067776862'
	},
	{
		title: 'RUN IT AGAIN',
		description:
			'Block Run\n4 rounds:\n1 min plank\n15 skull crushers\n20 hammer curls\n800m run\n4 rounds:\n10 ab wheels\n15 box jumps\n20 lunges 10/10\n400m run\n4 rounds:\n200m row\n10 burpees\n200m run\n4 rounds:\n15 side bends per side\n15 KBDL',
		id: '51',
		userId: '103641054784067776862'
	},
	{
		title: 'FOR THE 10K',
		description:
			'A. :40 at each exercise x 4 rounds\nKBS\nPlank\nDB curl to press\nB. AMRAP in 18 min\n400m run\nAMRAP push ups, 1 attempt per round\n25 sit ups\nC. 15, 12, 9, 6, 3\nKnees to elbow\nBench press\n200m row each round',
		id: '52',
		userId: '103641054784067776862'
	},
	{
		title: 'DEVIL’S IN THE DETAILS',
		description:
			'A. 80/60 cals for time\n*at the start and every 2 min complete 5 burpees\n**10 min cap\nB. AMRAP in 10 min\n10 Bench press\n10 pistols, 5/5\n100m run\nC. AMRAP in 10 min\n10 Pull ups\n30 battle rope waves\n100m run\nD. 10 min clock:\n2 min plank\n2 min sit ups\n2 min lunges\n2 min air squats\n2 min plank',
		id: '53',
		userId: '103641054784067776862'
	},
	{
		title: 'PERTY THIRTY',
		description:
			'A. ALT TABATA :20 on/ :10 off x 5 rounds\nStrict Press\nPush press\nRussian Twists\nAb wheels\nB. AMRAP in 12 min\nGoblet Sq: 3, 6, 9, 12, 15, 18…\nKBS: 3, 6, 9, 12, 15…\nCals: 3, 6, 9, 12, 15…\nC. AMRAP in 20 min\n10 RDL\n20 SA rows, 10 each side\n30 sit ups\n400m run',
		id: '54',
		userId: '103641054784067776862'
	},
	{
		title: 'SWING SET',
		description:
			'400m run or row\n15 burpees\n20 box jumps\n25 KBS\n30 Thrusters\n35 Push ups\n40 Lunges per leg\n45 sec side plank per side\n50 Cal bike\n55 Situps\nA. AMRAP in 5 min\nB. AMRAP in 7 min\nC. AMRAP in 10 min\nD. 1 round for time',
		id: '55',
		userId: '103641054784067776862'
	},
	{
		title: 'GET TO THE ROPES',
		description:
			'A. :40 on/ :20 off x 4 rounds\nDB ground to OH\nPlank\nBox Jumps\nB. 12-10-8-6-4\nKnees 2 elbows\n200m run each round\nC. 12-10-8-6-4\nDevils Press\n200m row each round\nD. 12-10-8-6-4\nGoblet squats\n500m c2 bike each round\nD. 3 sets:\n15 ab wheels\n15 side bends each side',
		id: '56',
		userId: '103641054784067776862'
	},
	{
		title: 'SHOOTIN PLANKS',
		description:
			'A. AMRAP in 45 min\n10 Wall balls\n10 med ball russian twists, per side\n10 OH med ball lunges, per leg\n20 sit ups\n20 cal bike or row\n20 alt. DB curls\n*at the start, and every 15 min, Farley Hill run\n*Run up to the top of Farley & back',
		id: '57',
		userId: '103641054784067776862'
	},
	{
		title: 'FAST N’ SLOW',
		description:
			'A. 1 round AFAP every 3 min x 4 sets\n10 thrusters\n10 air squats\n10 cal bike or row\nB. 21-15-9\nBench press\nAb wheels\nC. 21-15-9\nKBS\nPush ups\nD. 21-15-9\nWeighted sit ups\n1 min plank each round',
		id: '58',
		userId: '103641054784067776862'
	},
	{
		title: 'HANGIN AT THE BAR',
		description:
			'A. 1 min @ each x 4 sets\nAlt. DB snatches\nPlank\nThrusters\nRest\nB. 3 rounds for time\nRun: Block run, 400m run, 200m run\n50 sit ups\n40 air squats\n30 push ups\n20 box jumps\n10 burpees',
		id: '59',
		userId: '103641054784067776862'
	},
	{
		title: 'DUBSTERS',
		description:
			'A. 3 rounds:\nw/ empty barbell or DBs\n10 bent over 2 arm row\n10 RDL\n10 curls\nB. 3 rounds:\n10 banded hamstring curls\n10 back ext\n:60 plank\nC. 3 rounds:\n20 body rows\n15 skull crushers\n10 push ups\nD. 3 rounds:\n15 cal bike or row\n15 burpees',
		id: '60',
		userId: '103641054784067776862'
	},
	{
		title: 'SNATCH N GO',
		description:
			'A. 10 min clock:\n4 min bike or row\n3 min plank\n2 min DB ground to OH\n1 min burpees\nB. AMRAP in 10 min\n20 airsquats\n20 body rows/pull ups\n200m run\nC. AMRAP in 10 min\n30 sit ups\n20 KBS\n10 push ups\nD. AMRAP in 10 min\n30 Jump rope\n20 KBDL\n10 single arm row per arm',
		id: '61',
		userId: '103641054784067776862'
	},
	{
		title: 'SHIPS PASSING',
		description:
			'AMRAP in 45 min\nBig Block run buy in\n+\nAMRAP w/ time remaining:\n10 burpees\n20 alt. weighted step up 10/10\n30 Cal bike or row\n40 lunges\n50 sit ups',
		id: '62',
		userId: '103641054784067776862'
	},
	{
		title: '8 BALL',
		description:
			'A. As a Warm up\nAMRAP in 8 min:\n15 side bends per side\n:30 straight arm plank\n10 lateral banded steps\n100m row\nB. 15, 12, 9, 6, 3\nSingle leg RDL per leg\nBench press\n200m run or row each round\nC. 4 rounds:\n25 weighted sit ups\n15 thrusters\n15 cal bike',
		id: '63',
		userId: '103641054784067776862'
	},
	{
		title: 'A GOOD OL’ AMRAP',
		description:
			'A. 4 sets:\n10 Bulgarian split squats per leg\n10 bench press\nB. 4 sets:\n10 RDL\n1 min plank\nC. 3 rounds:\n30 wall balls\n300m row\n20 KBS\n200m run\n10 burpees\n100m run',
		id: '64',
		userId: '103641054784067776862'
	},
	{
		title: 'UPS N DUBS',
		description:
			'A. Ab circuit warm up\n3 rounds:\n:30 side plank left\n:30 side plank right\n:30 leg lifts\nB. 10 min clock\n2 min burpees\n2 min box jumps\n2 min KBS\n2 min plank\n2 min sit ups\n*rest 2 min, then repeat\nC. AMRAP in 15 min\n5 pistols each leg\n10 HR push ups\n15 curl to press\n20 lunges, 10 each leg\n*at the start, and every 5 min, run/row 200m',
		id: '65',
		userId: '103641054784067776862'
	},
	{
		title: '40 SOMETHING',
		description:
			'A. 3 sets:\n15 curls\n15 tri ext\n1 min straight arm plank\nB. 3 sets:\n10 ab wheels\n15 side bends per side\n30 bicycle sit ups, 15/15\nC. 3 sets:\n400m run\n20 thrusters\n400m row\n20 burpees',
		id: '66',
		userId: '103641054784067776862'
	},
	{
		title: 'GO DUBS',
		description:
			'A. 4 sets:\n5 Bench press\n10 hammer curls\n15 DB front squats\n*add weight each round of bench press\nB. For time\n50 HR push ups\n400m run or row\n50 GHD sit ups\n400m run or row\n50 Wall balls\n400m run or row\n50 step ups, weighted\n400m run or row\n50 lunges, 25 per leg\n400m run or row',
		id: '67',
		userId: '103641054784067776862'
	},
	{
		title: '12 DAYS',
		description:
			'12 days of Christmas\n1. 3 burpees\n2. 5 box jumps\n3. 10 KBS\n4. 10 thrusters\n5. 10 push ups\n6. 200m run or row\n7. 20 sit ups\n8. 20 lunges\n9. 20 cal bike\n10. 1 min plank\n11. 20 body rows\n12. 5 man makers',
		id: '68',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLE THREAT',
		description:
			'A. AMRAP in 15 min\n10 curls\n10 KB high pulls\n10 jumping lunges\n*at the start, and every 5 min, row/run 200m\nB. AMRAP in 15 min\n10 Goblet squats\n15 KBS\n20 sit ups\n*at the start, and every 5 min, row/run 200m\nC. 5 min straight arm plank, each break complete 3 burpees',
		id: '69',
		userId: '103641054784067776862'
	},
	{
		title: 'DEAD GIVEAWAY',
		description:
			'A. AMRAP in 15 min\n10 curls\n10 KB high pulls\n10 jumping lunges\n*at the start, and every 5 min, row/run 200m\nB. AMRAP in 15 min\n10 Goblet squats\n15 KBS\n20 sit ups\n*at the start, and every 5 min, row/run 200m\nC. 5 min straight arm plank, each break complete 3 burpees',
		id: '70',
		userId: '103641054784067776862'
	},
	{
		title: 'ON REPEAT',
		description:
			'A. 1 min @ each x 3 rounds\nPush up to renegade row\nThrusters\nAb wheels\nB. 4 rounds:\n15 Bench press\n15 cal bike\n25 weighted sit ups\n250m row\n:30 side plank per side\n30 mtn climbers',
		id: '71',
		userId: '103641054784067776862'
	},
	{
		title: 'RUN RUN RUDOLF',
		description:
			'A. 10 min clock\n4 min bike or row\n3 min plank\n2 min Devils press\n1 min burpees\nrest 2 min x 2 sets\nB. 21-15-9\nSeated OH press\nPush ups\n400m run\nC. 21-15-9\nGHD sit ups\nGood mornings\n400m run',
		id: '72',
		userId: '103641054784067776862'
	},
	{
		title: 'SLED BELLS JINGLIN',
		description:
			'AMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time remaining:\n20 weighted step ups\n20 weighted sit ups\n20 bench press\n200m run\nAMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time remaining:\n20 wall balls\n20 burpees\n20 body rows\n200m row',
		id: '73',
		userId: '103641054784067776862'
	},
	{
		title: 'RINGS N BELLS',
		description:
			'40 min running clock\nABCD are each AMRAP in 10 min\nBegin each 10 min with 400m run/row\nNo extra rest between AMRAPS\nA. “Buy in”\n+\n5 pull ups\n10 push ups\n15 squats\nB. “Buy in”\n+\n10 Russian twists per side\n15 KBS\n20 Goblet lunges, 10/10\nC. “Buy in”\n+\n:30 side plank per side\n30 sit ups\n30 jump rope\nD. “Buy in”\n+\n5 burpees\n10 box jumps\n15 side bends per side',
		id: '74',
		userId: '103641054784067776862'
	},
	{
		title: '15.4 REDO',
		description:
			'A. For time\n100 lunges\n90 sit ups\n80 KBDL\n70 push ups\n60 cals\n50 pull ups\n40 burpees\n30 box jumps\n20 knees to elbows\n10 devils press',
		id: '75',
		userId: '103641054784067776862'
	},
	{
		title: 'LEGITMUS TEST',
		description:
			'A. 4 sets:\n10 bench press\n10 knees to elbows\n400m run or row\nB. 4 sets:\n15 tri ext.\n10 ab wheel\n400m run or row\nB. 4 sets:\n10 RDL\n15 hamstring curls\n400m run or row\nC. 4 sets:\n15 goblet squats\n15 no push up burpees\n400m run or row',
		id: '76',
		userId: '103641054784067776862'
	},
	{
		title: 'JUST KEEP SWIMMING',
		description:
			'A. 15 min running clock\n*5 min @ each exercise\n*Begin each exercise with 400m run or row buy in\n-Burpee box jumps\n-Weighted sit ups\n-OH walking Lunges\nB. AMRAP in 20 min\n*increase reps by 5 each round\n5, 10, 15, 20, 25…\nPull ups\nAir squats\nHR push ups\nCal Bike',
		id: '77',
		userId: '103641054784067776862'
	},
	{
		title: 'FIRST TRY',
		description:
			'A. Complete 1 round every 4 min x 4 sets (16 min total)\n200 run or row\n15 wall balls\n20 switch lunges 10/10\n*scale reps as needed so that you have at least 1 min rest each round\nB. AMRAP in 12 min\n10 cal bike\n15 bench press\n20 weighted step ups 10/10\nC. AMRAP in 12 min\nMax plank hold buy in (5 min cap)\n10 ab wheels\n15 KBS\n100m run',
		id: '78',
		userId: '103641054784067776862'
	},
	{
		title: 'TEN IS ENOUGH',
		description:
			'A. 10 min clock\n4 min bike or row\n3 min walking lunges\n2 min Devils press\n1 min plank hold\nB. 10 min clock\n4 min bike or row\n3 min burpees\n2 min weighted sit ups\n1 min plank\nC. AMRAP in 10 min\n10 SA rows each arm\n15 skull crushers\n200m run\nD. AMRAP in 10 min\n50 jump rope\n15 KB high pull\n15 goblet squats',
		id: '79',
		userId: '103641054784067776862'
	},
	{
		title: 'ENTER SANDBAG',
		description:
			'A. AMRAP in 5 min\n15 jump rope\n5 boot strap squats\n15 jump rope\n:30 straight arm plank\nB. Final week of the strength cycle!\n4 sets:\n10 RDL\n10 Seated overhead press\nC. 1 round:\nBlock run\n50 sit ups\n40 KBS\n30 pull ups\n20 burpee box jumps\n30 pull ups\n40 KBS\n50 sit ups\nBlock run',
		id: '80',
		userId: '103641054784067776862'
	},
	{
		title: 'A GRIP OF FUN',
		description:
			'A. 1 min @ each x 4 rounds\nWeighted step ups\nPlank\nJump rope\nB. 3 rounds\n10 knees 2 elbows\n20 DB ground to OH\n30 cal bike or row\n40 Jump rope\n50 sit ups\nC. 4 sets:\n15 SA row per side\n15 side bends per side\n10 ab wheels',
		id: '81',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE DIP',
		description:
			'A. 4 sets:\n15 KB high pull\n15 Tri ext.\nB. 4 sets:\n15 bent over 2 arm row\n15 hamstring curls\nC. 21-15-9\nCal bike\nPush ups\nKBS\nD. 21-15-9\nWall Balls\nBox jumps\n400m run each round',
		id: '82',
		userId: '103641054784067776862'
	},
	{
		title: '10.0 ON THE STRICTER SCALE',
		description:
			'A. As a warm up\n3 rounds:\n:30 side bend left\n:30 side bend right\n:30 side plank left\n:30 side plank right\nB. AMRAP in 10 min\n10 Dips\n10 Bench press\n10 Lunges per leg\nC. AMRAP in 10 min\n10 cal bike or row\n10 pull ups\n10 Russian twists per side\nD. AMRAP in 10 min\n10 KBS\n10 Good mornings\n200m run',
		id: '83',
		userId: '103641054784067776862'
	},
	{
		title: 'PACE OFF',
		description:
			'A. AMRAP in 5 min\n400m row or run buy in\nAMRAP Devils press with time left\nrest 1 min x 2 sets\nB. 30-20-10\nCal Bike\nWeighted sit ups\nBurpees\nC. 3 sets:\n1 min straight arm plank\n15 curls\n15 skull crushers',
		id: '84',
		userId: '103641054784067776862'
	},
	{
		title: 'BLOCK PARTY',
		description:
			'A. 1 min @ each x 3 rounds\nPlank\nsit ups\nB. 1 round sprint every 4 min x 3 rounds\n15 thrusters\n10 burpees\n10 cal bike or row\n*scale as needed to ensure you have a minute of rest b.t rounds\nC. AMRAP in 20 min\n400m row or run\n10 SA row each arm\n10 ab wheels\n15 box jumps\n15 goblet squats',
		id: '85',
		userId: '103641054784067776862'
	},
	{
		title: 'RUN THE CLOCK',
		description:
			'A. Ab Circuit warm up\nAMRAP in 5 min\n10 side bends per side\n:45 straight arm plank\n30 bicycle sit ups\nB. AMRAP in 10 min\n15 cal bike\n15 bench press\n15 DB front squats\nB. AMRAP in 10 min\n20 lunges, 10 per leg\n20 wall balls\n20 sit ups\nC. AMRAP in 10 min\n:30 side plank per side\n30 jump rope\n300m row\nD. AMRAP in 5 min\nMAN MAKERS!',
		id: '86',
		userId: '103641054784067776862'
	},
	{
		title: 'OH HEY ISABEL',
		description:
			'A. Ab Circuit warm up\nAMRAP in 5 min\n10 side bends per side\n:45 straight arm plank\n30 bicycle sit ups\nB. AMRAP in 10 min\n15 cal bike\n15 bench press\n15 DB front squats\nB. AMRAP in 10 min\n20 lunges, 10 per leg\n20 wall balls\n20 sit ups\nC. AMRAP in 10 min\n:30 side plank per side\n30 jump rope\n300m row\nD. AMRAP in 5 min\nMAN MAKERS!',
		id: '87',
		userId: '103641054784067776862'
	},
	{
		title: 'BLACK FRIDAY',
		description: '“Cindy”\n20 min AMRAP\n5 pullups\n10 pushups\n15 squats',
		id: '88',
		userId: '103641054784067776862'
	},
	{
		title: 'EIGHTERADE',
		description:
			'Pre Thanksgiving WOD\nAMRAP in 45 min\nBuy in: Lunges up Farley, continue at the top, to finish block run\n+\nAMRAP with time remaining\n80 sit ups\n60 push ups\n40 cal bike\n20 box jump/step up\n400m run',
		id: '89',
		userId: '103641054784067776862'
	},
	{
		title: 'JUMP TO CONCLUSIONS',
		description:
			'A. 1 min @ each x 4 rounds\nSit ups\nGoblet squats\nPlank\nBurpees\nRest\nB. AMRAP in 20 min\n10 bench press\n15 wall balls\n400m run',
		id: '90',
		userId: '103641054784067776862'
	},
	{
		title: 'ROPES N STUFF',
		description:
			'A. Ab circuit warm upAlt. TABATA :20 on/:10 off x 4 roundsSide bend (left)Side bend (right)Russian TwistsStraight arm plank\nB. Strength cycle (week 2 of 4):\n4 sets:\n10 RDL\n10 Seated overhead press\n*try to beat last weeks #\nC. 3 rounds:\n800m run or 1k row\n40 lunges (20/20)\n30 HR push ups\n20 Burpees',
		id: '91',
		userId: '103641054784067776862'
	},
	{
		title: 'WEEKENDER',
		description:
			'A. 100 hang squat clean thrusters for time\n*at the start and every min, complete 3 burpees\n*10 min cap\nB. 4 rounds:\n21 curl series (7s)\n:30 “gun hold”\n:60 plank\nC. 4 rounds:\n200m run\n15 KBS\n200m row\n25 sit ups',
		id: '92',
		userId: '103641054784067776862'
	},
	{
		title: 'BEAR DOWN',
		description:
			'A. 21-15-9\nbench press\nlunges per leg\n400m run\nB. 21-15-9\nKBS\nPush ups\n400m run\nC. 21-15-9\nBurpees\nbox jumps\n400m run\nD. 21-15-9\nGHD situps\ncal row\n400m run',
		id: '93',
		userId: '103641054784067776862'
	},
	{
		title: 'RHIANNON',
		description:
			'A. Alt. Tabata x 4 rounds\nLevel changes\nAb wheels\nBicycle sit ups\nB. For time\n100 lunges\n90 air squats\n800m run or row\n70 push ups\n60 cal bike\n50 Pull ups\n400m run or row\n30 burpees\n20 knees 2 elbow\n100m overhead carry',
		id: '94',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER TOES',
		description:
			'A. AMRAP in 10 min\n30 reps battle rope wave- any style\n20 KBS\n1 Lap Farmer’s carry\nB. AMRAP in 10 min\n200m run\n25 sit ups\n10 ab wheels\nC. AMRAP in 10 min\n200m row\n10 push ups\n10 dips\nD. AMRAP in 10 min\n10 cal bike\n10 thrusters\n1 min plank',
		id: '95',
		userId: '103641054784067776862'
	},
	{
		title: 'STRONGER IS AS STRONGER DOES',
		description:
			'A. As a warm up AMRAP in 5 min\n10 halo each way\n:30 side plank each side\n5 boot strap squats\nB. Strength cycle:\n4 sets:\n10 RDL\n10 Seated overhead press\n*record weights, this is week 1 of 4\nC. 30-20-10\nWall balls\nCal bike\nBurpees\n400m run each round',
		id: '96',
		userId: '103641054784067776862'
	},
	{
		title: 'ANGIE',
		description:
			'A. 5 rounds:\n10 bench press\n10 push ups\n250m row\nB. 5 rounds:\n12 weighted lunges 6/leg\n12 thrusters\n12 cal bike\nC. 3 rounds:\n1 min plank\n25 sit ups\n400m run',
		id: '97',
		userId: '103641054784067776862'
	},
	{
		title: '2 FAST',
		description:
			'A. Ab circuit\nAlt. TABATA x 5 rounds\nFlutter kicks\nPike up on rower\nRussian Twists\nA. :40 at each x 4 rounds (8 min total)\nKBDL high pull\nGoblet squats\nPlank\nB. :40 at each x 4 rounds (8 min total)\nWeighted sit ups\nJump rope\nCurl to press\nC. 3 rounds:\n30 cals bike or rower\n30 box jumps\n30 pull ups',
		id: '98',
		userId: '103641054784067776862'
	},
	{
		title: 'SCOUT TEAM',
		description:
			'A. Ab circuit\nAlt. TABATA x 5 rounds\nFlutter kicks\nPike up on rower\nRussian Twists\nB. For time:\nBlock run\n50 wall balls\n50 box jumps\n50 Body rows/pull ups\n800m run\n50 KBS\n50 no push up burpees\n50 cal bike\nBlock Run',
		id: '99',
		userId: '103641054784067776862'
	},
	{
		title: 'CHEST DAY',
		description:
			'A. 80/60 cal bike or row\n*at the start and every 2 min, complete 7 burpees\n*10 min cap\nB. 30 min running clock\neach of the triplets is a 10 min AMRAP\nbegin each triplet with 400m run buy in\nno rest between triplets\n10 Push ups\n10 lunges per leg\n:45 plank\n10 weighted squats\n10 weighted step ups\n10 push press\n25 sit ups\n10 SA row each side\n10 back ext',
		id: '100',
		userId: '103641054784067776862'
	},
	{
		title: 'LOAD UP',
		description:
			'A. Against 10 min clock\ncomplete as many reps of:\nBurpees: 15, 12, 9, 6, 3\nGoblet sq 15, 12, 9, 6, 3\nRun 100m every round\n*if you finish in under 10 min, you get extra rest!\nB. Against 10 min clock\ncomplete as many reps of:\nKB high pull 15, 12, 9, 6, 3\nab wheels 15, 12, 9, 6, 3\nRow 150m each round\nC. AMRAP in 20 min\nblock run buy in\n+\nAMRAP w time remaining:\n10 bench press\n15 side bends each side\n20 KBS\n30 sit ups\n40 Lunges, 20 per leg',
		id: '101',
		userId: '103641054784067776862'
	},
	{
		title: 'LUMBERJACK 20',
		description:
			'A. As a warm up\nAMRAP in 5 min\n10 halo each way\n5 HR push ups\n5 rev. lunge to glute activation per leg\n100m row\nB. Hero Work out\nLUMBERJACK 20\n20 Deadlifts\n400 meter Run\n20 Kettlebell Swings\n400 meter Run\n20 Overhead Squats\n400 meter Run\n20 Burpees\n400 meter Run\n20 pull ups\n400 meter Run\n20 Box Jumps\n400 meter Run\n20 Dumbbell Squat Cleans\n400 meter Run',
		id: '102',
		userId: '103641054784067776862'
	},
	{
		title: 'OVER UNDER',
		description:
			'A. 18 min clock:\nBuy in: 1k row/Block run/40 cal bike\n+\nAMRAP with time left\n20 curls\n:30 DB “gun hold”\n15 sit ups\n10 cals (bike or row)\nB. 18 min clock:\nBuy in: 1k row/Block run/40 cal bike\n+\nAMRAP with time left:\n20 Lunges 10/10\n15 box jumps\n10 ab wheels\n10 cals (bike or row)\nC. 5 min to accumulate as much of a plank as possible\n*each break, complete 5 burpees then continue in plank',
		id: '103',
		userId: '103641054784067776862'
	},
	{
		title: '20.5',
		description:
			'A. For time:\n40 pull ups\n80 cal row\n120 wall balls\n*partition reps any way.\nB. 30-20-10\nSide bends per side\nSit ups\n1 min plank each round\n200m run each round',
		id: '104',
		userId: '103641054784067776862'
	},
	{
		title: 'LOAD MANAGEMENT',
		description:
			'A. 1 min @ each x 3 rounds:\nweighted sit ups\nKBS\njump rope\nB. 15, 12, 9, 6, 3\nSA row each arm\nAb wheels\n200m run each round\nC. 15, 12, 9, 6, 3\nPull ups\nwall balls\n200m row each round\nD. 3 rounds\n15 barbell curls\n15 tri ext.\n1 min plank',
		id: '105',
		userId: '103641054784067776862'
	},
	{
		title: 'FIGHT GONE TIME',
		description:
			'A. AMRAP in 10 min\nAlt. DB bench press x 10 each side\n10 push ups\n10 cal bike\nB. AMRAP in 10 min\n10 push up to renegade row\n10 RDL\n200m row\nC. AMRAP in 20 min\n400m run\n1 min plank\n15 GHD sit ups\n15 KB high pull',
		id: '106',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLES ALLEY',
		description:
			'A. AMRAP in 15 min\n5 ab wheels\n10 push ups\n15 air squats\n*at the start, and every 5 min, complete 1 lap farmer carry\nB. AMRAP in 15 min\n5 box jumps\n10 wall balls\n15 situps\n*at the start, and every 5 min, complete 200m run\nC. For total reps\n4 min bike or row, for max meters\n3 min devils press\n2 min plank\n1 min burpees',
		id: '107',
		userId: '103641054784067776862'
	},
	{
		title: 'WE GOT A RUNNER!',
		description:
			'A. As a warm up\nAMRAP in 5 min\n10 shoulder taps\n10 russian twists per side w plate\n10 single arm plate press\n10 plate squats\nB. For total time\nLunges up Farley, from the fire hydrant at the bottom, to the stop sign at the top,\nthen finish the remaining block run\n+\n1k row\n50 sit ups\n2k c2 bike\n50 KBS\n50/35 cal assault bike\n50 pull ups\n2k c2 bike\n50 KBS\n1k row\n50 sit ups\n*bike and row are interchangeable',
		id: '108',
		userId: '103641054784067776862'
	},
	{
		title: 'EMOMMY',
		description:
			'A. 1 min @ each x 3 rounds\nDB weighted step ups\npush up to renegade rows\njump rope\nB. 3 sets:\n5-10 heavy bench\n10 pull ups\n1 min plank\nC. 3 sets:\n10 RDL\n20 jumping lunges AFAP\n:30 wall sit\nD. 3 rounds:\n200m run\n10 thrusters\n200m row\n10 ab wheels',
		id: '109',
		userId: '103641054784067776862'
	},
	{
		title: '20.4',
		description:
			'A. Complete for time, 20 min time cap.\n30 box jumps\n15 DB ground to OH\n30 box jumps\n15 DB ground to OH\n30 box jumps\n10 DB ground to OH\n30 pistols\n10 DB ground to OH\n30 pistols\n5 DB ground to OH\n30 pistols\n5 DB ground to OH\nB. AMRAP in 20 min\n60 second plank\n50 sit ups\n400m run\n30 side bends, 15/15\n20 cal bike\n10 push ups',
		id: '110',
		userId: '103641054784067776862'
	},
	{
		title: 'HAPPY HALLOWEEN!',
		description:
			'Block run\n50 weighted sit ups\n50 lunges, DB on shoulders\n50 HR push ups\n800m run\n40 box jumps\n40 weighted squats, DB on shoulders\n40 body rows\n400m run\n30 k2e\n30 KBS\n30 push press\n200m run\n20 Russian twists per side\n20 pike up on rower\n20 Burpees',
		id: '111',
		userId: '103641054784067776862'
	},
	{
		title: 'THE HANG OUT',
		description:
			'A. 18, 15, 12, 9\nBench press\nNo push-up burpees\n200m run each round\nB. 18, 15, 12, 9\nKBS\nPull ups\n200m row each round\nC. 18, 15, 12, 9\n2 arm bent over DB row\nDB box step overs\n50 DUs ea round\nD. 3 sets:\n45 sec side plank per side\n15 ab wheel',
		id: '112',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE DOUBLE',
		description:
			'A. 100 cal bike or row\n*at the start, and every 2 mins, complete 10 thrusters\n*10 min cap\nB. 4 sets:\n10 bench press\n15 sit bends each side\n20 tri ext.\nC. 4 sets:\n15 KBDL\n1 min plank\n400m run',
		id: '113',
		userId: '103641054784067776862'
	},
	{
		title: 'EXTRA BAGGAGE',
		description:
			'A. AMRAP in 15 min\n30 KBS\n30 body rows\n30 box jumps\n*at the start and every 5 min, run/row 200m\nB. AMRAP in 15 min\n30 sit ups\n30 wall balls\n30 lunges, 15 each leg\n*at the start and every 5 min, run/row 200m\nC. 10 min clock\n4 min burpees\n3 min DB ground to OH\n2 min plank\n1 min air squats',
		id: '114',
		userId: '103641054784067776862'
	},
	{
		title: 'ROUNDABOUT',
		description:
			'A. 4 rounds:\n10 SA rows per arm\n15 KBS\n20 sit ups\n300m row\nB. 4 rounds:\n10 ab wheels\n15 side bends each side\n20 air squats\n400m run\nC. 4 sets:\n10 barbell curls\n15 tri ext',
		id: '115',
		userId: '103641054784067776862'
	},
	{
		title: '20.3',
		description:
			'A. AMRAP in 9 min\n21-15-9\nKBDL\nHR push ups\n+\n21-15-9\nKBDL\n50 ft bear crawl each round\nB. AMRAP in 12 min\n200m run\n15 sit ups\n1 min plank\nC. AMRAP in 12 min\n200m row\n10 SA OH walking lunges, per arm\n10 pull ups\nD. 3 min max cals bike or row',
		id: '116',
		userId: '103641054784067776862'
	},
	{
		title: 'TAILWIND',
		description:
			'A. For time\nBig Block run\n+\n3 rounds:\n15 bench press\n400m row\n+\n3 rounds:\n15 wall balls\n800m c2 bike\n+\n3 rounds:\n100 jump rope\n25 sit ups\n+\nBig Block run',
		id: '117',
		userId: '103641054784067776862'
	},
	{
		title: '14.4ISH',
		description:
			'A. :40 at each x 4 rounds\nBattle rope – any wave\nPlank\nThrusters\nSit ups\nB. Every 2 min, x 4 rounds (10 min total)\ncomplete 1 round of:\n10 KBS\n100m run\n10 KBS\nrest the remainder of each 2 min interval\nC. 21-15-9\nCal Bike\nLunges- per leg\nD. 21-15-9\nCal row\nBurpees',
		id: '118',
		userId: '103641054784067776862'
	},
	{
		title: 'DIZZNEYLAND',
		description:
			'A. AMRAP 10 min\n15 skull crushers\n1 attempt max reps UB push ups\n150m row\nB. AMRAP in 10 min\n10 Bul. split squats per leg\n10 jumping lunges per leg\n100m run\nC. AMRAP in 10 min\n10 burpees\n10 cal bike\n15 sit ups\nD. AMRAP in 10 min\n15 body rows\n1 min plank\n100m run',
		id: '119',
		userId: '103641054784067776862'
	},
	{
		title: 'ONE LINERS',
		description:
			'For time:\n100 lunges\n90 situps\n80 squats\n70 KBS\n60 pushups\n50 pullups\n40 cal assault bike\n30 cal row\n20 burpee box jumps\n1 min accumulated in hollow body rock\n*Mix up the order as needed',
		id: '120',
		userId: '103641054784067776862'
	},
	{
		title: 'POST POINT TWO',
		description:
			'A. 15, 12, 9, 6, 3\nBurpees\nGoblet squats\n400m run\nB. 15, 12, 9, 6, 3\nAb wheels\nSeated OH press\n400m run\nC. 15, 12, 9, 6, 3\nCal Bike\nWall balls\n400m run\nD. 15, 12, 9, 6, 3\nDB ground to OH\n:45 plank each round',
		id: '121',
		userId: '103641054784067776862'
	},
	{
		title: '20.2',
		description:
			'A. 20.2- AMRAP in 20 min\n4 thrusters\n6 toes 2 bar\n24 double unders\nB. AMRAP in 20 min\n200m row\n10 bench press\n200m run\n25 sit ups',
		id: '122',
		userId: '103641054784067776862'
	},
	{
		title: 'GETTIN CHIPPY',
		description:
			'A. Alternating TABATA x 6 rounds\nPush ups\nBody Rows\nRDL\nPlank\nB. AMRAP in 12 min\n400m run\n21 KBS\n12 pull ups\nC. AMRAP in 12 min\n10 DB hang squat clean\n10 FLE split squats\n200m row\nD. 3 sets:\n15 side bends per side\n20 sit ups',
		id: '123',
		userId: '103641054784067776862'
	},
	{
		title: 'SEQUENTIAL',
		description:
			'A. 3 rounds:\n20 OHS\n20 Burpees\n20 Bench press\nB. 3 rounds:\n400m run\n20 strict press\n20 weighted sit ups\nC. 3 rounds:\n400m row\n1 min plank\n10 knees 2 elbows',
		id: '124',
		userId: '103641054784067776862'
	},
	{
		title: 'BELL AIR',
		description:
			'A. 1 min @ each, x 3 rounds\nWall Balls\nJump Rope\nPlank\nB. AMRAP in 10 min\nKBS: 3, 6, 9, 12…\nPush ups: 3, 6, 9, 12…\n200m run each round\nC. AMRAP in 10 min\n20 weighted lunges, 10 per leg\n15 body rows\n200m row\nD. 4 sets:\n15 russian twists per side\n10 back ext.',
		id: '125',
		userId: '103641054784067776862'
	},
	{
		title: 'HIT N RUN',
		description:
			'A. 4 sets:\n10 bulgarian split squats, per leg\n15 skull crushers\nB. 4 sets:\n10 kneeling SA arnold press, per arm\n15 side bends\nC. 4 rounds:\n400m run or row\n10 thrusters\n15 box jumps\n20 sit ups',
		id: '126',
		userId: '103641054784067776862'
	},
	{
		title: 'JUST MOVE',
		description:
			'A. AMRAP in 20 min\n400m run\n1 attempt AMRAP UB k2e\n400m row\n25 sit ups\nB. AMRAP in 20 min\n10 OHS\n15 cal bike\n20 lunges, 15 per leg\n1 lap farmer carry',
		id: '127',
		userId: '103641054784067776862'
	},
	{
		title: '20.1',
		description:
			'A. 20.1 10 rounds, 15 min cap\n8 DB ground to OH\n10 burpees  \nB. 21-15-9\nBody rows\nGHD sit ups  \n400m run  \nC. 21-15-9\nPush ups\nKBS  \n400m run  \nD. 21-15-9\ncal bike\nbox jumps',
		id: '128',
		userId: '103641054784067776862'
	},
	{
		title: 'HAPPY OPEN SEASON!',
		description:
			'A. AMRAP in 30 min\nBig block run buy in\n+\nAMRAP with time remaining:\n10 bench press\n10 pull ups\n20 alt. weighted step ups\n200m row\n*Run 200m @ 15, 20, 25 min marks\nB. 20-15-10\nPistols, total count\nPush ups\nCal bike',
		id: '129',
		userId: '103641054784067776862'
	},
	{
		title: 'WARM UP AND COOL DOWN',
		description:
			'A. 1 min @ each x 3 rounds:\nKBS\nGoblet lunges\nWeighted sit ups\nRest\nB. AMRAP in 20 min\n400m run\n1 attempt AMRAP unbroken push ups\n400m row\n10 barbell curls\nC. 21-15-9\nWall balls\ncal bike',
		id: '130',
		userId: '103641054784067776862'
	},
	{
		title: 'WE WANT BURPEES',
		description:
			'A. AMRAP in 10 min\n100m run\n30 battle rope waves, any style\n100m run\n10 burpees\nB. AMRAP in 10 min\n50 jump rope\n10 ab wheels\n50 jump rope\n20 sit ups\nC. AMRAP in 10 min\n10 single arm rows each side\n10 knees 2 elbows\n200m row\nD. AMRAP in 10 min\n10 cal bike\n10 DB front squats\n10 box jumps',
		id: '131',
		userId: '103641054784067776862'
	},
	{
		title: 'MUPS N DUBS',
		description:
			'A. 5 rounds\n10 bench press\n10 burpees\n200m run\nB. 5 rounds\n10 back ext\n10 wtd rev lunges per leg\n200m row\nc. 5 rounds\n20 situps\n1 min plank',
		id: '132',
		userId: '103641054784067776862'
	},
	{
		title: 'NO SLOW ROW',
		description:
			'A. 1 min @ each x 3 rounds:\nOHS with PVC\nJump rope\nPlank\nB. For time\n50 alt. step ups\n400m run\n50 body rows\n400m run\n50 weighted sit ups\n400m run\n50 KBS\n400m run\n50 wall balls\n400m run',
		id: '133',
		userId: '103641054784067776862'
	},
	{
		title: 'FRIDAY MASH UP',
		description:
			'A. 100/70 cals\n*at the start, and every 2 min, complete 10 thrusters\n*10 min cap\n*cals may be completed on rower or bike\nB. 4 rounds:\n400m run\n20 box jumps\n15 weighted sit ups\n10 buprees\nC. 3 x 1 min planks',
		id: '134',
		userId: '103641054784067776862'
	},
	{
		title: 'GLUTE CHECK',
		description:
			'A. AMRAP in 15 min\n5 burpees\n10 KBS\n15 sit ups\n*at the start, and every 5 min, run 200m\nB. AMRAP in 15 min\n5 Russian step ups per leg\n10 ab wheels\n15 air squats\n*at the start and every 5 min, 500m on c2 bike\nC. 3 rounds:\n400m run\n10 KBDL\n10 HR push ups\n30 2 arm battle rope waves',
		id: '135',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE THE DUBS',
		description:
			'A. 3 sets:\n10 FLE split squats per leg\n10 RDL\nB. 3 sets:\n10 pull ups\n10 strict press\nC. 15, 12, 9, 6, 3\nGHD sit ups\n1 min plank each round\nD. 30-20-10\nWall Balls\nCal bike\n400m run each round',
		id: '136',
		userId: '103641054784067776862'
	},
	{
		title: 'ALL GAS NO BREAKS',
		description:
			'S&P Cycle: squat – PULL – press – acs – off\nA. 1 clean grip DL + 1 squat clean + 1 hang sq clean x 5 sets  @ 65-85% clean 1RM\nB. 3 rounds for time (SPRINT, no pacing!):\n15 burpees\n15 KBS (70/53)\nC. 15-12-9-6 GHD situp + 1 min plank bt sets\nCSPORT\nA. AMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time left\nBurpees: 3, 6, 9, 12, 15…\nThrusters: 3, 6, 9, 12, 15…\nAb Wheels: 3, 6, 9, 12, 15…\nRun: 100m each round\nB. AMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time left:\nBox jumps: 3, 6, 9, 12, 15…\nCal row: 3, 6, 9, 12, 15…\nK2E: 3, 6, 9, 12, 15…\nRun: 100m each round\nQuote of the Day\n“The world belongs to the energetic.” – Ralph Waldo Emerson',
		id: '137',
		userId: '103641054784067776862'
	},
	{
		title: 'ONE FAST MINUTE',
		description:
			'S&P Cycle: SQUAT – pull – press – acs – off\nA. OHS: to a heavy single\nB. 5 rounds for time:\n14 pullups\n12 push press (95/65)\n10 box jumps (24/20)\nrest exactly 1 min\nCSPORT\nA. 3 sets:\nmax reps push ups\nmax reps single arm rows per side\nrest as needed\nB. 3 sets:\n15 weighted squats\nAMRAP jumping lunges in :30 as possible\nC. 15, 12, 9, 6, 3\nBench press\nKBS\nCal row\nD. 15, 12, 9, 6, 3\nWeighted sit ups\nCal bike\n:40 plank each round\nQuote of the Day\n“Go and get your things. Dreams mean work.”  – Paulo Coelho',
		id: '138',
		userId: '103641054784067776862'
	},
	{
		title: 'JACKDIKELLY',
		description:
			'S&P Cycle: squat – pull – press – acs – OFF\n30 min @ 75%\n400m row\n10 thrusters (empty bar)\n10 pullups\n10 DL (225/155)\n10 HSPUs\n400m run\n10 box jumps\n10 wall balls\nCSPORT\nA. 3 sets:\nBulgarian Split Squats x 10 per side\nGood mornings- PVC or light barbell\nB. 3 sets:\n10 Filly press per side, standing or seated\n10 Push ups\nC. 3 rounds:\nRun: 800/400/200m\n50 sit ups\n40 KBS\n30 wall balls\n20 burpees\nQuote of the Day\n“Go and get your things. Dreams mean work.”  – Paulo Coelho',
		id: '139',
		userId: '103641054784067776862'
	},
	{
		title: 'PROTECT THE WALL',
		description:
			'S&P Cycle: squat – pull – press – ACS – off\nA. 3 sets\n10 SA DB rows ea side\n10 SL biceps curls @ 3131\n10 SL scaption @ 3131\n10 rotational medball throws ea side (off the wall)\n*For single leg moves, stand on same side for all 10 reps\nB. AMRAP in 12 min:\n1-2-3-4… squat snatch (135/95)\n1-2-3-4… wall climbs\n1-2-3-4… ring muscle-ups\nCSPORT\nA. AMRAP in 40 min\nBig block run buy in\n+\nAMRAP with time left:\n10 Burpees\n10 ab wheels\n15 pull up/body rows\n15 box jumps\n200m row\n20 Weighted lunges 10/10\n30 Russian twists\n30 sit ups\n400m run\nQuote of the Day\n“My father taught me to work; he did not teach me to love it.” –  Abraham Lincoln',
		id: '140',
		userId: '103641054784067776862'
	},
	{
		title: 'SLED JUMP',
		description:
			'S&P Cycle: squat – pull – PRESS – acs – off\nA. (1 strict press + 2 push press + 3 push jerk) x 4; rest ~ 3 min\nB. AMRAP in 15 min:\n40yd sled push (180/90)\n12 HR pushups\n40 double-unders\n12 toes to bar\nCSPORT\nA. AMRAP in 10 min\n40 yd sled push\n20 walking lunges\n10 push ups\nB. AMRAP in 10 min\n10 SA rows per arm\n10 RDL\n400m c2 bike @ high damper (7+)\nC. AMRAP in 10 min\n10 Thrusters\n15 side bends each side\n200m run\nD. AMRAP in 10 min\n10 box jump/step up\n10 dips\n200m row\nQuote of the Day\n“When he worked, he really worked. But when he played, he really played.” – Dr. Seuss',
		id: '141',
		userId: '103641054784067776862'
	},
	{
		title: 'ROPE SWING',
		description:
			'S&P Cycle: squat – PULL – press – acs – off\nA. DL: 3 reps EMOM for 10 min @ ~ 80%\nB. 5 rounds for time:\n400m run\n2 rope climbs\n12 KBS (70/53)\nCSPORT\nA. 1 min @ each x 3 rounds:\nBurpees\nSit ups\nKBSwings\nRest\nB. 3 rounds:\n15 tri ext.\n10 knees 2 elbows\n400m run\nC. 3 rounds:\n15 DB curl to press\n10 ab wheels\n400m row\nD. 10-1\nBox jumps\n:30 plank each round\nQuote of the Day\n“When he worked, he really worked. But when he played, he really played.” – Dr. Seuss',
		id: '142',
		userId: '103641054784067776862'
	},
	{
		title: 'BUT MY LEGS…',
		description:
			'S&P Cycle:\nSQUAT\n– pull – press – acs – off\nA. back squat: 3-3-3-3-3\nB. AMRAP in 20 min:\n3-6-9-12… thrusters (115/75)\n3-6-9-12… burpees\n3-6-9-12… cal row or assault bike (mix and match as you like)',
		id: '143',
		userId: '103641054784067776862'
	},
	{
		title: 'COREBREAK',
		description:
			'S&P Cycle: squat – pull – press – acs – OFF\nFor time\n30 cal airbike\n20 GHD situps\n30 DB power cleans (50/35)\n20 GHD situps\n30 box jumps (30/24)\n20 GHD situps\n30 push press (50/35)\n20 GHD situps\n30 DB walking lunges (50/35)\n20 GHD situps\n30 DB walking lunges (50/35)',
		id: '144',
		userId: '103641054784067776862'
	},
	{
		title: 'PULLIN A FAST ONE',
		description:
			'S&P Cycle: squat – pull – press – ACS – off\nA. 3 sets\n10\nFilly Pres\ns ea. side\n15 banded triceps pressdown\n15\nbanded overhead triceps extension\n15 banded ext rotation\nB. 4 rounds, each for time:\n20 fast pullups\n400m run (one way, no turn around)\n*walk/jog back, rest 20-30 additional sec. then begin next round\n*If you can’t do the pullups in 2 sets or less in at least the first 2 rounds, scale movement or reps',
		id: '145',
		userId: '103641054784067776862'
	},
	{
		title: 'BEAR NECESSITIES',
		description:
			'S&P Cycle: squat – pull – PRESS – acs – off\nA. 100 reps strict press for time (~30% 1RM – we tested this Sept 2)\nB. 5 rounds for time:\n20 back extensions\n40yds bear crawl\n1 min plank',
		id: '146',
		userId: '103641054784067776862'
	},
	{
		title: 'DEVIL MADE ME DO IT',
		description:
			'S&P Cycle: squat – PULL – press – acs – off\nA. hang sq clean & jerk: 5 x 3; rest 2 min\nB. 3 rounds for reps:\n1 min double unders\n1 min toes to bar\n1 min devils press\n1 min rest',
		id: '147',
		userId: '103641054784067776862'
	},
	{
		title: 'DOWN THE LINE',
		description:
			'S&P Cycle: SQUAT – pull – press – acs – off\nA. front squat: 3-3-3-3-3 @ 3311 tempo; rest 3-4 min\nB. 3 rounds for time:\n40 walking lunges\n30 situps\n20 deadlifts (205/165)\n10 bar muscle ups',
		id: '148',
		userId: '103641054784067776862'
	},
	{
		title: 'COUNTING CALORIES',
		description:
			'S&P Cycle: squat – pull – press – acs – OFF\nA. AMRAP in 25 min, at start and top of every 5 min, do 1/2 lap heavy sandbag or farmer carry\n*Choose one\nCal Row\nCal C2 bike\nCal Assault bike\nCal Ski erg\nB. 50 ab wheel reps',
		id: '149',
		userId: '103641054784067776862'
	},
	{
		title: 'LOVE, KAREN',
		description:
			'S&P Cycle: squat – pull – press – ACS – off\nA. 3 sets\n8-10 KB clean to bottoms-up press ea side\n30 sec starfish pose ea. side\n30 sec dead bug w/ lateral tension ea. side\nB. “KAREN”\n150 wall balls for time (20/14)',
		id: '150',
		userId: '103641054784067776862'
	},
	{
		title: 'GOTTA TABATA',
		description:
			'S&P Cycle: squat – pull – PRESS – acs – off\nA. jerk: to a heavy double\nB. 8 rounds Tabata on each, no rest bt movements, keep the clock running:\nring rows\npushups\nOH DB walking lunge (single arm)\nDUs',
		id: '151',
		userId: '103641054784067776862'
	},
	{
		title: 'PUSH N PULL',
		description:
			'S&P Cycle: squat – PULL – press – acs – off\nA. 1 power snatch + 1 hang sq snatch:\n1 set EMOM @ 60% x bonus 6 min, then 6 min to find RM of complex\nB. 5 rounds for time\n20yd sled push (135/75)\n20yd base sled pull (135/75)\n10 Heavy RKBS\n10 HSPUs',
		id: '152',
		userId: '103641054784067776862'
	},
	{
		title: 'GRIP N DIP',
		description:
			'S&P Cycle: SQUAT – pull – press – acs – off\nA. box squat: 5-5-5-5-5\nB. 6 rounds for time:\n5-7-9-11-13-15 clean & jerk (155/105)\n15 pullups',
		id: '153',
		userId: '103641054784067776862'
	},
	{
		title: '30 ROTTEN SCOUNDRELS',
		description:
			'S&P Cycle: squat – pull – press – acs – OFF\nA. 3 rounds, each for time:\n30 cal assault bike\n30 GHD situps\n30 OHS (95/65)\n*rest 5 min bt rounds',
		id: '154',
		userId: '103641054784067776862'
	},
	{
		title: '3RD DOWN',
		description:
			'S&P Cycle: squat – pull – press – ACS – off\nA.. 5 rounds for time:\n21 pushups\n18 SA KB snatch (53/35, 9 per side)\n15 burpees\n12 cal row\nB. 2 rounds (choose weights that are just barely light enough to get the first round unbroken)\n25 DB curls\n25 skull crushers\n25 lateral raises',
		id: '155',
		userId: '103641054784067776862'
	},
	{
		title: 'KELLYISH',
		description:
			'S&P Cycle: squat – pull – PRESS – acs – off\nA. bench press: Max reps @ 90%/75% bw\nB. “AMRAP Kelly”\nAMRAP in 22 min:\n400m run\n30 box jumps (24/20)\n30 wall balls (20/14)',
		id: '156',
		userId: '103641054784067776862'
	},
	{
		title: 'HUNTING STRICTLAND',
		description:
			'S&P Cycle: squat – PULL – press – acs – off\nA. UB power clean: 10 down to 1 ladder @ 50%\nB. AMRAP in 22 min:\n9 strict pullups\n200m run\n8 strict HSPUs\n200m run\n7 strict toes to bar\n200m run',
		id: '157',
		userId: '103641054784067776862'
	},
	{
		title: 'SLEDDER DONE',
		description:
			'A. AMRAP in 10 min\nKBS 3, 6, 9, 12…\nGoblet squats 3, 6, 9, 12….\n100m run each round\nB. AMRAP in 10 min\nDB bench press: 3, 6, 9, 12…\nBody rows: 3,,6 ,9, 12…\n100m row each round\nC. AMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time remaining:\n5 ab wheels\n10 barbell curls\n15 lunges per leg\n200m run\n25 Jump rope\n \n \n \n \nQuote of the Day\n“Wherever you go, go with all your heart.” – Confucious',
		id: '158',
		userId: '103641054784067776862'
	},
	{
		title: 'BACK ON THE BOAT',
		description:
			'A. :40 on/ :20 off x 4 rounds\nBattle rope\nBox jumps\nBurpees\nB. :40 on/ :20 off x 4 rounds\nPlank\nWtd. sit ups\nLunges\nC. AMRAP in 12 min\n200m run\n10 DB front squats\n200m row\n10 DB push press\nD. 10-1\nKBS\nPush up to renegade rows\n \n \n \n \nQuote of the Day\n“Do not pray for an easy life, pray for the strength to endure a difficult one.” – Bruce Lee',
		id: '159',
		userId: '103641054784067776862'
	},
	{
		title: 'DEAD SHOT',
		description:
			'A. 3 sets:\n10 heavy weighted squats\n10 air squats for speed\n10 squat jumps\nrest as needed b.t sets\nB. 3 sets:\n500m row\n21 pull ups\n12 DB ground to OH (2 arm)\nC. 3 sets:\n400m run\n21 Push ups\n12 Russian Twists per side\n \n \n \nQuote of the Day\n“Plans are only good intentions unless they immediately degenerate into hard work. ” – Peter Drucker',
		id: '160',
		userId: '103641054784067776862'
	},
	{
		title: 'STEP IT UP',
		description:
			'A. 15, 12, 9, 6, 3\nKBS\nBench press\n200m run each round\nB. 15, 12, 9, 6, 3\nCal Air bike\nBurpees\n200m row each round\nC. 15, 12, 9, 6, 3\nBox jumps\nWall Balls\n1 min plank each round\nD. 3 x max reps push ups, rest 2 min b.t sets\n \n \nQuote of the Day\n“Without hard work, nothing grows but weeds. ” – Gordon B. Hinckley',
		id: '161',
		userId: '103641054784067776862'
	},
	{
		title: 'PULL THRU',
		description:
			'A. 21, 15, 9\nSeated Arnold press 2 arms\nPull ups\nCal row\nB. 21, 15, 9\nRDL\nLunges per leg\nCal AB\nC. 21, 15, 9\nBurpees\nKBS\n400m run each round\nD. 21, 15, 9\nAb Wheels\nWeighted sit ups\n1 min plank each round\n \n \nQuote of the Day\n“The most dangerous place to be is in your comfort zone. ” – unkonwn',
		id: '162',
		userId: '103641054784067776862'
	},
	{
		title: 'SEE YOU LADDER',
		description:
			'A. AMRAP in 10 min\n200m run\n10 bench press\n15 goblet squats\nB. AMRAP in 10 min\n200m row\n10 barbell curls\n15 sit ups\nC. 10-1\nKBS\nPush ups\nD. 10-1\nBack ext.\nRussian twists per side\n \n \nQuote of the Day\n“A lot of hard work is hidden behind nice things.” – Ralph Lauren',
		id: '163',
		userId: '103641054784067776862'
	},
	{
		title: 'GETTIN LOOPY',
		description:
			'A. 3 rounds:\nRun: Block, 800m, 400m\n25 med ball sit ups\n25 thrusters\nB. 3 rounds:\nRow: 1k, 750, 500m\n25 body rows\n25 box jumps\nC. 3 rounds:\n1 min plank\n15 side bends per side\n \n \nQuote of the Day\n“The two most important days of your life are the day you were born, and the day you find out why.” – Mark Twain',
		id: '164',
		userId: '103641054784067776862'
	},
	{
		title: 'MISDIRECTION',
		description:
			'A. Every 2 min, complete 1 round of:\n250/200m row\n10 burpees\nrest remainder of each 2 min interval x 4 sets\nB. Every 2 min, complete 1 round of:\n200m run\n10 KBS\nrest remainder of 2 min interval x 4 sets\nC. 3 rounds for time:\n50 lunges\n40 sit ups\n30 wall balls\n20 cal bike\n \n \nQuote of the Day\n“The two most important days of your life are the day you were born, and the day you find out why.” – Mark Twain',
		id: '165',
		userId: '103641054784067776862'
	},
	{
		title: 'NO BREAKY',
		description:
			'A. AMRAP in 20 min\nBig block run buy in\n+\nAMRAP with time remaining:\n10 burpees\n15 body rows\n20 KBS\n200m run\nB. AMRAP in 20 min\n1 mile bike buy in, either bike\n+\nAMRAP with time remaining:\n10 ab wheels\n15 DB hang squat cleans\n20 weighted step ups\n400m c2 bike or .25 mile AB\n \n \n \nQuote of the Day\n“It is not the length of life, but depth of life.” – Emerson',
		id: '166',
		userId: '103641054784067776862'
	},
	{
		title: 'HAVE A BALL',
		description:
			'A. 15, 12, 9, 6, 3:\nBench Press\nSA rows per arm\n200m row each round\nB. 15, 12, 9, 6, 3:\nThrusters\nLunges per leg\n200m run eac round\nC. 15, 12, 9, 6, 3:\nCal AB\nBox jumps\n1 min plank each round\nD. 15, 12, 9, 6, 3:\nAlt. curls each arm\nPush ups\n15 weighted sit ups each round\n \n \n \nQuote of the Day\n“It is not the length of life, but depth of life.” – Emerson',
		id: '167',
		userId: '103641054784067776862'
	},
	{
		title: 'THE GREAT WALL',
		description:
			'A. 4 sets:\n15 bench press\n10 burpees\nB. 4 sets:\n10 RDL\n10 DB Front squats\nC. 3 sets:\n20 pull ups\n20 cal AB\nD. 3 sets:\n1 min plank\n400m row\n \n \n \nQuote of the Day\n“One day, or Day one… it’s your decision.” – unknown',
		id: '168',
		userId: '103641054784067776862'
	},
	{
		title: 'FILTHY FRIDAY',
		description:
			'A. AMRAP in 40 min\n—50 HR push ups\n400m run\n—50 KBS\n400m run\n—50 Goblet squats\n400m run\n—50 push press\n400m run\n—50 sit ups\n400m run\n—50 box jumps\n400m run\n \n \nQuote of the Day\n“A smooth sea never made a skilled sailor.” – Franklin D. Roosevelt',
		id: '169',
		userId: '103641054784067776862'
	},
	{
		title: 'AMANDA',
		description:
			'A. Final week of Wednesday Testers\nPart 1: AMRAP burpees in 1 minute\nPart 2: 500m row OR 1 mile air bike (retest whichever you chose last week)\nTry to make these your best numbers!\nB. 3 rounds:\n10 thrusters\n15 russian twists per side\n400m run\nC. 3 rounds:\n10 ab wheels\n1 min plank\n100 jump rope\nD. 3 rounds:\n10 SA rows each side\n10 push ups\n \n \nQuote of the Day\n“A smooth sea never made a skilled sailor.” – Franklin D. Roosevelt',
		id: '170',
		userId: '103641054784067776862'
	},
	{
		title: 'UP AND OVER',
		description:
			'A. Final week of Wednesday Testers\nPart 1: AMRAP burpees in 1 minute\nPart 2: 500m row OR 1 mile air bike (retest whichever you chose last week)\nTry to make these your best numbers!\nB. 3 rounds:\n10 thrusters\n15 russian twists per side\n400m run\nC. 3 rounds:\n10 ab wheels\n1 min plank\n100 jump rope\nD. 3 rounds:\n10 SA rows each side\n10 push ups\n \n \nQuote of the Day\n“A smooth sea never made a skilled sailor.” – Franklin D. Roosevelt',
		id: '171',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE OR SOMETHING',
		description:
			'A. :40 sec @ each x 4 rounds:\nBattle rope- any pattern\nHR push ups\nWeighted step ups\nB. 3 rounds:\nKBS: 30, 20, 10\nRun: 400m each round\nC. 3 rounds:\nWall Balls: 30, 20, 10\nRow: 400m each round\nD. 3 rounds:\nGHD sit ups: 30, 20, 10\nCal AB: 15 each round\n \n \nQuote of the Day\n“Act as if what you do makes a difference. It does” – William James',
		id: '172',
		userId: '103641054784067776862'
	},
	{
		title: 'EVERY MINUTE COUNTS',
		description:
			'A. AMRAP in 12 min:\n60yd Sled push\n10 burpees\n200m row\nB. AMRAP in 12 min:\n20 Alt. DB bench press- 10 each side\n1 min plank\n500m c2 bike\nC. AMRAP in 20 min\n800m run buy in\n+\nAMRAP with time remaining:\n10 Box jumps\n15 body rows\n20 lunges – 10 each leg\n200m run\n \nQuote of the Day\n“Act as if what you do makes a difference. It does” – William James',
		id: '173',
		userId: '103641054784067776862'
	},
	{
		title: 'AIR IT OUT',
		description:
			'A. AMRAP in 20 min\n10 burpees\n20 box jumps\n30 Wall balls\n40 Sit ups\n50 jump rope\n60 second plank\n*at the start and every 5 min, run 200m\nB. 30-20-10\nCal bike\nPush ups\nCal row\nLunges\n \n \nQuote of the Day\n“Strive not to be a success, but rather to be of value.”– Albert Einstein',
		id: '174',
		userId: '103641054784067776862'
	},
	{
		title: 'LEFT FOR DEAD',
		description:
			'A. 21-15-9\nClapping push ups\nBody rows\n400m run\nB. 21-15-9\nRDL\nPull ups\n400m run\nC. 21-15-9\nBulgarian split squat per leg\nWeighted sit ups\n400m run\nD. 21-15-9\nOHS\nBent over 2 arm row\n \n \nQuote of the Day\n“The best way out is always through.”– Robert Frost',
		id: '175',
		userId: '103641054784067776862'
	},
	{
		title: 'BET THE FARM',
		description:
			'A. 4 sets:\n10 bench press\n10 strict press\nB. 4 sets:\n15 tri ext.\n15 side bends each side\nC. 4 sets:\n10 weighted lunges 5/5\n10 weighted step ups 5/5\nD. 4 rounds:\n300m row\n20 KBS\n200m run\n20 Goblet squats\n \n \nQuote of the Day\n“Be yourself; everyone else is already taken.” – Oscar Wilde',
		id: '176',
		userId: '103641054784067776862'
	},
	{
		title: 'AT ITS CORE',
		description:
			'A. Every 2 min x 4 sets (8 min)\n100m run\n*finish each run with as much of a plank or sit ups as possible\nodd mins= plank\neven mins= sit ups\nB. AMRAP in 12 min\nBlock run buy in\n+\nAMRAP with time left:\nKBS: 3, 6, 9, 12…\nBurpees: 3, 6, 9, 12…\nC. AMRAP in 20 min\n1 mile bike\nMax reps push ups (1 attempt per round)\n10 body rows\n20 lunges- 10 per leg\n30 jump rope\n \n \n \nQuote of the Day\n“If you aren’t going all the way, why go at all?” – Joe Namath',
		id: '177',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE TAP',
		description:
			'A. Every 2 min x 4 sets (8 min)\n100m run\n*finish each run with as much of a plank or sit ups as possible\nodd mins= plank\neven mins= sit ups\nB. AMRAP in 12 min\nBlock run buy in\n+\nAMRAP with time left:\nKBS: 3, 6, 9, 12…\nBurpees: 3, 6, 9, 12…\nC. AMRAP in 20 min\n1 mile bike\nMax reps push ups (1 attempt per round)\n10 body rows\n20 lunges- 10 per leg\n30 jump rope\n \n \n \nQuote of the Day\n“The question isn’t who is going to let me; it’s who is going to stop me.” – Ayn Rand',
		id: '178',
		userId: '103641054784067776862'
	},
	{
		title: 'GRINDHOUSE',
		description:
			'A. AMRAP in 10 min\nSkull crusher 3, 6, 9, 12, 15…\nK2E: 3, 6, 9, 12, 15…\n100m run each round\nB. AMRAP in 10 min\nSA Row: 3, 6, 9, 12, 15… (per arm)\nKBS: 3, 6, 9, 12 ,15….\n100m run each round\nC. 3 rounds:\n500m row\n1 min plank\n15 thrusters\nD. 3 rounds:\n1k c2 bike\n1 min wall sit\n15 barbell curls\n \n \n \nQuote of the Day\n“May you live all the days of your life.”– Jonathan Swift',
		id: '179',
		userId: '103641054784067776862'
	},
	{
		title: 'PERFECT 10',
		description:
			'A. 1 min @ each x 3 rounds:\nMan makers\nDB weighted step ups\nSit ups\nDUs\nB. AMRAP in 10 min\n10 bench press\n15 JPU\n200m run\nC. AMRAP in 10 min\n10 cal AB\n15 wall balls\n45 sec plank\n \n \n \nQuote of the Day\n“We are what we repeatedly do.” – Aristotle',
		id: '180',
		userId: '103641054784067776862'
	},
	{
		title: 'PECTACULAR',
		description:
			'A. :40 @ each x 4 rounds\nBattle rope- alt. wave\nPlank\nWalking lunges\nB. :40 @ each x 4 rounds\nBattle rope- Egg beater\nSit ups\nAir squats\nC. For time:\n50 HR push ups\n—400m run\n50 cal row\n—400m run\n50 Burpees\n—400m run\n50 Step ups 25/25\n—400m run\n \n \nQuote of the Day\n“The more you sweat in peace, the less you bleed in war.” – Norman Schwarzkopf  (Also Fred Staub)',
		id: '181',
		userId: '103641054784067776862'
	},
	{
		title: 'MONKEY BUSINESS',
		description:
			'A. 100 box jumps for time\n*at the start, and every min, 5 burpees\n*10 min cap\nB. 3 rounds:\n500m row\n10 pull ups\n15 wall balls\n20 sit ups\nC. 4 rounds:\n400m run\n10 ab wheels\n15 Push ups\n20 lunges 10/10\n \n \nQuote of the Day\n“Life isn’t about finding yourself. Life is about creating yourself.” – George Bernard Shaw',
		id: '182',
		userId: '103641054784067776862'
	},
	{
		title: 'THROWIN’ AND TOEIN’',
		description:
			'A. Wednesday Testers!\nWeek 2 of 4\nPlease record your scores each week to track progress!\nPart 1: AMRAP burpees in 1 minute\nPart 2: 500m row OR 1 mile air bike (retest whichever you chose last week)\nB. 21-15-9\nSeated OH press\nPull ups\n400m run\nC. 21-15-9\nKBS\nWall Balls\n400m run\nD. 21-15-9\nAb Wheels\nWeighted sit ups\n400m run\n \n \n \nQuote of the Day\n“Life isn’t about finding yourself. Life is about creating yourself.” – George Bernard Shaw',
		id: '183',
		userId: '103641054784067776862'
	},
	{
		title: '10-4 GOOD BUDDY',
		description:
			'A. AMRAP in 4 min (as a warm up)\n10 banded hammer curls\n10 band pull aparts\n10 squats\nB. AMRAP in 12 min\n15 tri ext.\n10 bench press\n200m row\nC. AMRAP in 12 min\n10 back ext.\n10 weighted squats\n200m run\nD. AMRAP in 12 min\n15 side bends each side\n1 min plank\n10 cal bike\n \n \n \nQuote of the Day\n“The successful warrior is the average man, with laser-like focus.” – Bruce Lee',
		id: '184',
		userId: '103641054784067776862'
	},
	{
		title: 'FOR THE PEOPLE',
		description:
			'A. AMRAP in 20 min\n800m run or row buy in\n+\nAMRAP w time remaining:\n15 KBS\n15 Goblet Squats\n15 push ups\n400m run or row\nB. AMRAP in 20 min\n800m run or row buy in\n+\nAMRAP with time remaining:\n15 K2E\n15 RDL\n15 Box jumps\n400m run or row\nC. AMRAP plank in 3 min (goal is unbroken!)\n \n \n \nQuote of the Day\n“The successful warrior is the average man, with laser-like focus.” – Bruce Lee',
		id: '185',
		userId: '103641054784067776862'
	},
	{
		title: 'ROWKAY',
		description:
			'A. AMRAP in 10 min\n10 bench press\n10 Goblet squats\n1 min plank\nB. AMRAP in 10 min\n20 alternating battle rope waves\n10 box jumps\n100m run\nC. 4 rounds:\n20 battle rope 2- arm wave\n15 side bends each side\n15 tri ext.\n20 sit ups\n400m run\n \n \nQuote of the Day\n“The successful warrior is the average man, with laser-like focus.” – Bruce Lee',
		id: '186',
		userId: '103641054784067776862'
	},
	{
		title: 'JUST A MINUTE',
		description:
			'A. AMRAP in 24 min\n10 HR push ups\n10 knees to elbows\n15 weighted situps\n15 KBS\n*at the start, and every 6 min, run 400m\nB. AMRAP in 24 min\n10 curl to press, balance on 1 leg 5/5\n10 DB hang squat clean\n10 weighted step ups\n10 ab wheels\n*at the start, and every 6 min, row 400m\n \n \nQuote of the Day\n“The question isn’t who is going to let me; it’s who is going to stop me.” – Ayn Rand',
		id: '187',
		userId: '103641054784067776862'
	},
	{
		title: 'HEROIC RECOVERY',
		description:
			'A. AMRAP in 10 min\n10 weighted squats\n10 seated OH press\n200m row or run\nB. AMRAP in 10 min\n50 cal bike buy in\n+\n10 single arm rows per side\n10 russian twists per side\n30 jump rope\nC. AMRAP in 20 min\n2 min plank buy in\n+\nAMRAP with remaining time:\n1 lap farmers carry\n10 Alternating DB bench press, per side\n20 sit ups\n400m run or row\n \n \nQuote of the Day\n“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill',
		id: '188',
		userId: '103641054784067776862'
	},
	{
		title: 'HOLLEYMAN',
		description:
			'Hero Month Grand Finale!\n“Holleyman”\n30 rounds for time of:\n5 Wall balls 20/14, 10ft/9ft\n3 HSPUs\n1 Power clean (225/155)',
		id: '189',
		userId: '103641054784067776862'
	},
	{
		title: 'RENE',
		description:
			'A. snatch: 1 rep EMOM for 10 min\nB. Hero WOD Rene\n7 rounds for time of:\n400m run\n21 walking lunges\n15 pull-ups\n9 burpees',
		id: '190',
		userId: '103641054784067776862'
	},
	{
		title: 'JORGE',
		description:
			'A. bench press: 3-3-3-3-3; rest as needed\nB. Hero WOD “Jorge”\nFor time:\n30 GHD sit-ups\n15 Squat cleans (155/105)\n24 GHD sit-ups\n12 Squat cleans\n18 GHD sit-ups\n9 Squat cleans\n12 GHD sit-ups\n6 Squat cleans\n6 GHD sit-ups\n3 Squat cleans',
		id: '191',
		userId: '103641054784067776862'
	},
	{
		title: 'ANDY',
		description:
			'Hero WOD “Andy”\nFor time:\n25 thrusters, 115 lb.\n50 box jumps, 24 in.\n75 deadlifts, 115 lb.\n1.5-mile run\n75 deadlifts, 115 lb.\n50 box jumps, 24 in.\n25 thrusters, 115 lb.',
		id: '192',
		userId: '103641054784067776862'
	},
	{
		title: 'NATE',
		description:
			'A. Pause back squats: 5-5-5 (3 sec pause at the bottom); rest as needed\nB. Hero WOD “Nate”\nAMRAP in 20 min:\n2 Muscle-ups\n4 Handstand Push-ups\n8 KBS (70/53)',
		id: '193',
		userId: '103641054784067776862'
	},
	{
		title: 'HOTSHOTS 19',
		description:
			'Hotshots 19\nSix rounds for time of:\n30 Squats\n135 pound Power clean, 19 reps\n7 Strict Pull-ups\nRun 400 meters',
		id: '194',
		userId: '103641054784067776862'
	},
	{
		title: 'SCOTTY',
		description:
			'A. 30 sec @ each x 3 rounds:\nsquats\nGood mornings- hands on hips\nsuperman hold\nB. 21-15-9\nbench press\npush ups\nring rows\n400m run\nC. 21-15-9\nmtn climbers (x2)\nbox jumps\nRev. lunges (per leg)\n400m run\nD. 21-15-9\nGoblet squats\nK2E\nKBS\n400m run\n \n \nQuote of the Day\n“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.” – Mark Twain',
		id: '195',
		userId: '103641054784067776862'
	},
	{
		title: 'T.U.P.',
		description:
			'A. 4 rounds:\n10 bench press\n10 single arm rows each side\n10 ab wheels\nB. 4 rounds:\n10 weighted step ups per leg\n15 hamstring curls\n20 sit ups\nC. 4 rounds:\n500m row\n25 wall balls\n400m run\n25 push ups\n \n \nQuote of the Day\n“If you think you can do a thing or think you can’t do a thing, you’re right.” – Henry Ford',
		id: '196',
		userId: '103641054784067776862'
	},
	{
		title: 'DORK',
		description:
			'A. As a warm up:\nAMRAP in 6 min\n10 Halos (per direction)\n10 Good morning- hands on hips\n:30 plank side plank per side\nB. AMRAP in 12 min\n5 Burpees\n10 barbell curls\n15 sit ups\n*at the start, and every 3 min, run 100m\nC. AMRAP in 12 min\n5 Push up to renegade row\n10 thrusters\n15 tri ext.\n*at the start, and every 3 min, run 100m\nD. AMRAP in 15 min\n1 min plank\n10 KBS\n20 lunges per leg\n400m row/800m c2 bike\n \n \nQuote of the Day\n“That which does not kill us makes us stronger.” – Friedrich Nietzsche',
		id: '197',
		userId: '103641054784067776862'
	},
	{
		title: 'PAUL PENA',
		description:
			'A. 3 sets:\n20 alt. DB bench press (10 per side)\nAMRAP ring plank in 1 attempt\nB. Hero Work out\nLOREDO\n6 Rounds:\n24 Air Squats\n24 Push-Ups\n24 Walking Lunges\n400 m Run\n \n \nQuote of the Day\n“Life is either a daring adventure, or nothing. ” -Helen Keller',
		id: '198',
		userId: '103641054784067776862'
	},
	{
		title: 'MAUPIN',
		description:
			'A. 4 sets:\n5 Pistols per leg\n10 bench press\n15 weighted sit ups\n400m run + :90 plank\nB. 4 sets:\n5 SLDL\n10 front raise with plate\n15 KBS\n400m run + :90 plank\nC. 4 sets:\n5 ab wheels\n10 weighted squats\n15 Cal row\n400m run + :90 plank\n \n \nQuote of the Day\n“Life is either a daring adventure, or nothing. ” -Helen Keller',
		id: '199',
		userId: '103641054784067776862'
	},
	{
		title: 'MARSTON',
		description:
			'A. 15,12,9,6, 3\nSeated Arnold press\nJack knives\nBox jumps\nB. 15, 12, 9, 6, 3\nBody rows- elevate feet to increase difficulty\nPush ups\nBack ext\nC. 15, 12, 9 , 6, 3\nCals\nBul. split squat each leg\nweighted sit ups\nD. 15, 12, 9, 6, 3\nGoblet squats\nK2E\n:30 side plank each side each round\n \n \nQuote of the Day\n“It’s not whether you get knocked down, it’s whether you get up. ” – Vince Lombardi',
		id: '200',
		userId: '103641054784067776862'
	},
	{
		title: 'JT',
		description:
			'A. :40 at each x 4 rounds:\nBurpees\nJump rope\nSit ups\nB. :40 at each x 4 rounds:\nWall Balls\nPlank\nStep ups\nC. AMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time remaining:\n15 DB front squats\n15 Push press\n15 Push ups\n200m run\nD. AMRAP Plank hold in 5 min\n \n \nQuote of the Day\n“The truth of the matter is that you always know the right thing to do. The hard part is doing it.” – Norman Schwarzkopf, Jr.',
		id: '201',
		userId: '103641054784067776862'
	},
	{
		title: 'VIOLA',
		description:
			'A. 100 Wall balls for time:\n* at the start, and every min = 5 push ups\n10 min cap\nB. 4 sets:\n10 cals\n15 OH press\n20 lunges, 10 per leg\n400m run\nC. 4 sets:\n10 burpees\n15 DB squat clean\n20 sit ups\n400m run\nD. 4 sets:\n50 jump rope\n10 SA rows each arm\n:30 plank (weighted if you can)\n400m run\n \nQuote of the Day\n“By failing to prepare, you are preparing to fail.” – Ben Franklin',
		id: '202',
		userId: '103641054784067776862'
	},
	{
		title: 'KUTSCHBACH',
		description:
			'A. every 90sec x 4 rounds\n100m run + AMRAP weighted sit ups with time left\nB. AMRAP 12 min\n10 barbell curls\n15 Russian twists per side\n20 alt. battle rope wave per side\n300m row\nB. AMRAP in 12 min\n10 thrusters\n15 tri ext.\n20 egg beater battle rope\n15/10 cal bike\nC. 10-1\nKBS\nPush ups\nD. 10-1\nAb wheels\n:30 plank per round\n \n \nQuote of the Day\n“I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. ” – Bruce Lee',
		id: '203',
		userId: '103641054784067776862'
	},
	{
		title: 'HALL',
		description:
			'AMRAP in 15 min\n15 DB power cleans\n15 DB push press\n15 sit ups\n400m run\nAMRAP in 15 min\n15 knees 2 elbows\n15 box jumps\n15 burpees\n400m row\nAMRAP in 10 min\nThrusters 21-18-15-12-9-6-3\nPull ups 21-18-15-12-9-6-3\nJump rope 50-50-50-50-50-50\nGet as far as you can in the descending sequence..\n \n \nQuote of the Day\n“Do what you can, with what you have, where you are. ” – Teddy Roosevelt',
		id: '204',
		userId: '103641054784067776862'
	},
	{
		title: 'RANDY',
		description:
			'A. AMRAP in 6 min\nPush up to renegade row: 3, 6, 9, 12…\nBox jumps: 3, 6, 9, 12…\nB. AMRAP in 6 min\nBurpees: 3, 6, 9, 12….\n100m run each round\nC. AMRAP in 30 min\n50 sit ups\n400m run\n50 dips\n400m run\n50 air squats\n400m run\n50 pull ups/ body rows\n400m run\n \n \nQuote of the Day\n“Lead me, follow me, or get the hell out of my way.” – George S. Patton Jr.',
		id: '205',
		userId: '103641054784067776862'
	},
	{
		title: 'FALKEL',
		description:
			'A. 30-20-10\nDB hang squat cleans\nPush press\nCals\nB. 30-20-10\nGHD sit ups\nDBDL\nburpees\nC. 30-20-10\nKBS\nPush ups\n400m run each round\n \nQuote of the Day\n“Whatever you are, be a good one.” – Abraham Lincoln',
		id: '206',
		userId: '103641054784067776862'
	},
	{
		title: 'HILDY',
		description:
			'A. 1 min @ each x 4 rounds:\nDB front squats\nDB weighted step ups\nPlank\nB. AMRAP in 15 min\n200m run\n15 sit ups\n500m c2 bike\n20 OH weighted lunges\nC. 3 sets:\n10 ab wheels\n15 side bends per side\n30 flutter kicks\n \n \nQuote of the Day\n“Whatever you are, be a good one.” – Abraham Lincoln',
		id: '207',
		userId: '103641054784067776862'
	},
	{
		title: 'TUMILSON',
		description:
			'A. AMRAP in 12 min\npull ups: 3, 6, 9, 12, 15…\nKBS: 3, 6, 9, 12, 15….\n100m run each round\nB. AMRAP in 12 min\n25 battle rope 2 arm waves\n1 min plank\n200m row\nC. 4 sets:\n15 russian twists w. battle rope per side\n15 barbell curls\n15 tri ext\nD. 4 sets:\n10 back ext.\n15 jack knives\n \nQuote of the Day\n“It is fatal to enter a war without the will to win it.” – Douglas MacArthur',
		id: '208',
		userId: '103641054784067776862'
	},
	{
		title: 'SMALL',
		description:
			'ABC are all 15 min AMRAPs\nBegin each AMRAP with 800m run or row buy in\n45 min running clock, no extra rest\nA. buy in\n+\n10 pistols per leg\n15 weighted sit ups\n20 HR push ups\n30 step ups, alternating\nB. buy in\n+\n10 bench press\n15 burpees\n20 cal bike\n30 jump rope\nC. buy in\n+\n10 thrusters\n15 bent over 2 arm DB row\n20 lunges\n30 mtn climbers\n \n \nQuote of the Day\n“It is fatal to enter a war without the will to win it.” – Douglas MacArthur',
		id: '209',
		userId: '103641054784067776862'
	},
	{
		title: 'WE CAN BE HEROES',
		description:
			'A. “Helton” HERO WOD\n800 meter Run\n30 Dumbbell Squat Cleans\n30 Burpees\nB. Ab Circuit, coach’s choice\n \n \nQuote of the Day\n“It always seems impossible, until it’s done.” – Nelson Mandela',
		id: '210',
		userId: '103641054784067776862'
	},
	{
		title: 'HOT GATES',
		description:
			'Final week of strength cycle and time trials!\nA. 4 sets:\n5 heavy bench press\n10 RDL\nB. Time Trial\nChoose one, whichever you choose, you will retest each week\n1k row\n2k bike\n800m run\nC. 40-30-20-10\nCals\nWeighted sit ups\nAir Squats\nHR Push ups\n \nQuote of the Day\n“It always seems impossible, until it’s done.” – Nelson Mandela',
		id: '211',
		userId: '103641054784067776862'
	},
	{
		title: 'WELL TRAVELED',
		description:
			'A. 100 squats for time\n*at the start, and every min complete 20 jump rope\n*10 min cap\nB. 3 rounds:\n10 ab wheels\n15 K2E\n400m run\nC. 3 rounds:\n10 box jumps\n15 push press\n400m row\nD. 10-1\nPush ups\nlunges per leg\n \n \nQuote of the Day\n“The successful man is the average man with laser-like focus.” – Bruce Lee',
		id: '212',
		userId: '103641054784067776862'
	},
	{
		title: 'MIDDLE CHILDREN',
		description:
			'A. AMRAP in 10 min\n10 bench press\n10 kneeling SA arnold press per arm\n15 sit ups\nB. AMRAP in 10 min\n10 KBS\n10 box jumps\n10 cal row\nC. AMRAP in 10 min\n200m run\n10 burpees\n1 min plank\nD. AMRAP in 10 min\n10 Thrusters\n10 body rows\n10 cal bike\n \n \n \nQuote of the Day\n“I have no special talent.  I am just passionately curious.” – Einstein',
		id: '213',
		userId: '103641054784067776862'
	},
	{
		title: 'PACE RACE',
		description:
			'A. AMRAP in 18 min:\n5 Pull ups\n10 Bench press\n15 sit ups\n400m run or row\nB. AMRAP in 18 min:\n5 ab wheels\n10 box jumps\n15 wall balls\n400m run or row\nC. AMRAP in 6 min\n1, 2, 3, 4, 5, 6, 7, 8..\nJack knife\nPush ups\n \n \nQuote of the Day\n“All that we are is the result of what we have thought.” – Buddha',
		id: '214',
		userId: '103641054784067776862'
	},
	{
		title: 'SQUAT CITY',
		description:
			'A. Every 3 min, complete 1 round of:\n250m row\n10 thrusters\nx 3 sets\nB. Every 3 min, complete 1 round of:\n500m c2 bike, or .3 air bike\n15 weighted sit ups\nx 3 sets\nC. AMRAP in 12 min\n10 curls\n10 box jumps\n10 Russian twists each side\n*at the start, and every 4 min, 75 jump rope\nD. AMRAP in 12 min\n10 goblet squats\n10 KBS\n10 HRPU\n*at the start, and every 4 min, run 100m\n \nQuote of the day\n“You have to expect things of yourself before you can do them.”  – MJ',
		id: '215',
		userId: '103641054784067776862'
	},
	{
		title: 'OLDIE BUT GOODIE',
		description:
			'A. 21-15-9\nSeated OH press\nWeighted lunges per leg\n50 DUs each round\n400m run\nB. 21-15-9\nCal air bike\nK2E\n1 min plank each round\n400m run\nC. 21-15-9\nSA DB row each arm\nGHD sit ups\n1 farmer’s carry lap each round\n400m run\nD. 21-15-9\nBurpees\nAir squats\n:30 deadhang each round\n \n \nQuote of the day\n“You have to expect things of yourself before you can do them.”  – MJ',
		id: '216',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLEY DEAD',
		description:
			'C-sport strength cycle & time trial combo! week 3 of 4\nA. 4 sets:\n5 heavy bench press\n10 RDL\nB. Time Trial\nChoose one, whichever you choose, you will retest each week\n1k row\n2k bike\n800m run\nC. 3 rounds:\n10 burpees\n20 wall balls\n400m run\nD. 3 rounds:\n10 ab wheels\n15 side bends each side\n400m row\n \n \nQuote of the day\n“You have to expect things of yourself before you can do them.”  – MJ',
		id: '217',
		userId: '103641054784067776862'
	},
	{
		title: 'SEEING TRIPLE',
		description:
			'A. :40 on/ :20 off x 4 rounds\nBattle rope\nCurl to press\nDB front squats\nPlank\nB. For time:\n—Block run\n50 sit ups\n50 HR push ups\n50 lunges per leg\n50 cals\n—Block run\n25 sit ups\n25 HR push ups\n25 lunges per leg\n25 cals\n \n \nQuote of the day\n“The harder the battle, the sweeter the victory.”  – Les Brown',
		id: '218',
		userId: '103641054784067776862'
	},
	{
		title: 'CLIMBING GYM',
		description:
			'A. AMRAP in 12 min\nKBS: 3, 6, 9, 12, 15…\nGoblet squat: 3, 6, 9, 12, 15…\nBurpees: 3, 6, 9, 12,15…\n100m run each round\nB. AMRAP in 12 min\nK2E: 3, 6, 9, 12, 15…\nPush ups: 3, 6, 9, 12,15 …\nWtd situps 3, 6, 9, 12, 15….\n100m run each round\nC. 30-20-10\nCal bike\nbox jumps\nD. 30-20-10\nCal row\n:90 plank each round\n \n \nQuote of the day\n“It’s hard to beat a person who never gives up.”  – Babe Ruth',
		id: '219',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLET TUESDAY… ON A SATURDAY.',
		description:
			'A. 4 rounds:\n800-600-400-200m row\n80-60-40-20 Double Unders\n8-6-4-2 Devils Press\nB. 4 rounds:\nBlock run- 800m- 400m- 200m\n25 sit ups\n10 burpees\nC. 4 sets:\n1 min plank\n10 ab wheels\n \n \nQuote of the day\n“A lifetime of training, for just 10 seconds.”  – Jesse Owens',
		id: '220',
		userId: '103641054784067776862'
	},
	{
		title: 'HAVIN’ A BALL',
		description:
			'A. 21-15-9\nCurls\nPush ups\n400m run\nB. 21-15-9\nRev. lunges off riser, per leg\nSquats\n400m run\nC. 21-15-9\nPull ups\nWeighted sit ups\n400m run\nD. 21-15-9\nEgg beater battle rope (circles out)\nBox jumps\n \n \nQuote of the day\n“My confidence comes from the daily grind – training my butt off day in and day out.” – Hope Solo',
		id: '221',
		userId: '103641054784067776862'
	},
	{
		title: 'SLED LIFE',
		description:
			'A. AMRAP in 15 min\nBig block run buy in\n+\n25 sit ups\n15 side bends each side\n100m run\nB. AMRAP in 15 min\n1k row buy in\n+\n15 Goblet squats\n15 Russian twists each side\n200m row\nC. AMRAP in 15 min\n2 mile bike buy in (3200m c2, 2.0 airbike)\n+\n15 body rows\n15 RDL\n800m c2 bike, 0.5 air bike\n \n \nQuote of the day\n“Sometimes things may not go your way, but the effort should be there every single night.”  – MJ',
		id: '222',
		userId: '103641054784067776862'
	},
	{
		title: 'DOWN HILL RACE',
		description:
			'C-sport strength cycle & time trial combo! week 2 of 4\nA. 4 sets:\n5 heavy bench press\n10 RDL\nB. Time Trial\nChoose one, whichever you choose, you will retest each week\n1k row\n2k bike\n800m run\nC. 30-20-10\nKBS\nCal Row\nD. 30-20-10\nPush ups\n400m run each set\n \n \nQuote of the day\n“Sometimes things may not go your way, but the effort should be there every single night.”  – MJ',
		id: '223',
		userId: '103641054784067776862'
	},
	{
		title: 'TIME BANDITS',
		description:
			'A. 1 min @ each x 4 rounds:\nweighted sit ups\nGoblet squats\nHR push ups\nRest\nB. AMRAP in 15 min\n1k c2 bike\n15 DB ground to OH\n400m run\n15 DB hang squat cleans\nC. AMRAP in 5 min\nK2E: 2, 4, 6, 8, …\nAb Wheels: 2, ,4, 6, 8, …\nD. AMRAP in 5 min\nStep ups per leg: 2, 4, 6, 8, 10…\nBurpees: 2, 4, 6, 8, 10…\n \n \nQuote of the day\n“Sometimes things may not go your way, but the effort should be there every single night.”  – MJ',
		id: '224',
		userId: '103641054784067776862'
	},
	{
		title: 'GLUTES AND LADDERS',
		description:
			'A. AMRAP in 15 min\n30 battle rope 2-arm wave\n20 sit ups\n10 burpees\n*at the start and every 5 min, run or row 200m\nB. AMRAP in 15 min\n30 Russian KBS\n20 box jumps\n10 Thrusters\n*at the start and every 5 min, run or row 200m\nC. 3 sets\n10 S.A. Overhead walking lunges per arm\n10 kneeling S.A. Arnold press per arm\n:60 Plank\nD. 3 sets:\n10 chainsaw row per arm\n15 hamstring curls\n \n \nQuote of the day\n“Failure is simply an opportunity to begin again, this time more intelligently .”  – Henry Ford',
		id: '225',
		userId: '103641054784067776862'
	},
	{
		title: 'SITUP SNEAKER',
		description:
			'AMRAP in 45 min\n—1k row\n30 sit ups\n30 Lunges\n30 HR push ups\n—Block run\n30 sit ups\n30 Lunges\n30 HR push ups\n—-1k Row\n30 Wall balls\n30 Bench press\n30 Russian twists per side\n—Block Run\n30 Wall balls\n30 Bench press\n30 Russian Twists per side\n \n \nQuote of the day\n“The need for connection and community is primal, as fundamental as the need for air, water, and food.”  – Dean Ornish',
		id: '226',
		userId: '103641054784067776862'
	},
	{
		title: 'BELL TOWER',
		description:
			'A. AMRAP in 10 min\n15 hammer curls\n:30 “gun hold”\n15 tri ext\n:30 plank\n400m run\nB. 21-15-9\nPull ups\nWall balls\n400m run\nC. 21-15-9\nSeated OH press\nBox jumps\n400m run\nD. 21-15-9\nAlt. DB snatch per side\ncal air bike\n \n \nQuote of the day\n“Things may come to those who wait, but only the things left by those who hustle.”  – unknown',
		id: '227',
		userId: '103641054784067776862'
	},
	{
		title: 'THRUSTER BUNCH',
		description:
			'A. 100 sit ups\n*at the start, and every Min = 10 russian KBS\nB. AMRAP in 12 min\n400m run\n30 battle rope (2 arm wave)\n20 lunges\nC. AMRAP in 12 min\n1k bike\n30 battle rope (alt wave)\n10 Push ups\nD. 3-4 sets:\n10 back ext.\n10 Pistols per leg\n10 russian twists per side\n \n \nQuote of the day\n“The big talent is persistence”  – Octavia Butler',
		id: '228',
		userId: '103641054784067776862'
	},
	{
		title: 'DUBS & DBS',
		description:
			'New C-sport strength cycle & time trial combo! week 1 of 4\nA. 4 sets:\n5 heavy bench press\n10 RDL\nB. Time Trial\nChoose one, whichever you choose, you will retest each week\n1k row\n2k bike\n800m run\nC. 30-20-10\nCals\nBurpees\nKBS\nWeighted sit ups\n \n \nQuote of the day\n“You will never do anything in this world without courage.  It is the greatest quality of the mind next to honor.”  – Aristotle',
		id: '229',
		userId: '103641054784067776862'
	},
	{
		title: 'HEAVY DOES IT',
		description:
			'A. 4 sets:\n10 Seated OH press\n15 Banded hamstring curls\nB. 4 sets:\n10 DB front squats\n10 SL RDL each leg\nC. 4 sets\n400m run\n15 DB hang squat cleans\n30 jump rope\nD. 4 sets:\n400m row\n20 body rows\n15 burpees\n \n \nQuote of the day\n“Focus on the journey, not the destination.  Joy is found not in finishing an activity, but in doing it.”  – Greg Anderson',
		id: '230',
		userId: '103641054784067776862'
	},
	{
		title: 'STRICTLY BUSINESS',
		description:
			'40 min clock\nABCD are all 10 min AMRAP, no extra rest between\nBegin each AMRAP with 400m run buy in\nA. buy in\n+\n5 pull ups\n10 push ups\n15 air squats\nB. buy in\n+\n5 lunges per leg\n10 box jumps\n15 sit ups\nC. buy in\n+\n5 burpees\n10 Cals\n15 KBS\nD. buy in\n+\n5 ab wheels\n10 thrusters\n15 side bends each side\n \n \nQuote of the day\n“Focus on the journey, not the destination.  Joy is found not in finishing an activity, but in doing it.”  – Greg Anderson',
		id: '231',
		userId: '103641054784067776862'
	},
	{
		title: 'THRU BURPEES',
		description:
			'A. :40 on/:20 off x 3 rounds:\nCurl to press\nWeighted step ups\nSit ups\nAir squats\n400m run\nB. 15, 12, 9, 6, 3\nCal Bike\nK2E\n400m run\nC. 15, 12, 9, 6, 3:\nBody rows\nBurpees\n400m run\nD. 15, 12, 9, 6,3\nCal Row\nPush up to renegade row\n \n \nQuote of the day\n“Everyone talks about age, but it’s not about age.  It’s about work ethic.  Winning never gets old.”  – Lisa Leslie',
		id: '232',
		userId: '103641054784067776862'
	},
	{
		title: 'BIG DIPPER',
		description:
			'AMRAP in 45 min\n30 burpees\n—200m run\n30 Wall balls\n—200m run\n30 cals bike or row\n—200m run\n30 KBS\n—200m run\n30 box jumps\n—200m run\n30 sit ups\n—200m run\n30 bench press\n—200m run\n30 Lunges\n—200m run\n \n \nQuote of the day\n“You do the right thing even if it makes you feel bad.  The purpose of life is not to be happy, but to be worthy of happiness.”  – Tracy Kidder',
		id: '233',
		userId: '103641054784067776862'
	},
	{
		title: 'QUARTER CHIPPER',
		description:
			'A. 4 rounds:\n1 lap farmers carry\n10 single arm kneeling arnold press each arm\n10 single arm OH walking lunges per leg\nB. 4 rounds:\n50 Jump Rope\n30 Sit ups\n20 Thrusters\n10 cals\nC. 10-1\nKBS\nPush ups\n \n \nQuote of the day\n“Winners embrace hard work.  They love the discipline of it, the trade-off they’re making to win.  Losers, on the other hand, see it as punishment.  And that ‘s the difference.”  – Lou Holtz',
		id: '234',
		userId: '103641054784067776862'
	},
	{
		title: 'BOUNCE HOUSE',
		description:
			'A. Every 5 min complete 1 round:\n20 DB weighted lunges\n400/300m row\nrest the remainder of the 5 min interval, x 3 sets\nB. Every 5 min complete 1 round:\n15 Weighted situps\n400m run\nrest the remainder of the 5 min interval x 3 sets\nC. 3 rounds:\n1 min plank\n20 Russian twists\n10 thrusters\nD. 3 rounds:\n:30 side plank each side\n20 Flutter kicks\n10 DB ground to OH\n \n \n \nQuote of the day\n“Winners embrace hard work.  They love the discipline of it, the trade-off they’re making to win.  Losers, on the other hand, see it as punishment.  And that ‘s the difference.”  – Lou Holtz',
		id: '235',
		userId: '103641054784067776862'
	},
	{
		title: 'BENCH WARMER',
		description:
			'A. AMRAP in 15 min\n200m run\nAMRAP unbroken strict press (1 attempt per round)\nAMRAP unbroken ab wheels (1 attempt per round)\nB. ARMAP in 15 min\n10 cal bike\nAMRAP unbroken push ups (1 attempt per round)\nAMRAP unbroken plank hold (1 attempt per round)\nC. AMRAP in 10 min\n15 Tri Ext.\n15 Side bends per side\n15 Goblet squats\n \n \n \nQuote of the day\n“Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.”  – Stephen King',
		id: '236',
		userId: '103641054784067776862'
	},
	{
		title: 'SECOND CHANCE',
		description:
			'A. 21-15-9\nBench Press\nPush Ups\nCal Row\nB. 21-15-9\nDB curls\nBody Rows\nCal Bike\nC. 21-15-9\nJack Knives\nWall Balls\nBurpees\nD. 21-15-9\nBox Jumps\nKBS\nK2E\n \n \n \nQuote of the day\n“The reason a lot of people do not recognize opportunity is because it usually goes around wearing overalls looking like hard work.”  – Thomas Edison',
		id: '237',
		userId: '103641054784067776862'
	},
	{
		title: 'BACK TO FRONT',
		description:
			'A. 3 rounds:\n12 DB RDL\n12 DB weighted lunges per leg\n12 DB squats\nB. 3 rounds:\n12 Dips\n12 push ups\n12 strict press\nC. 3 rounds:\n400m run\n25 weighted sit ups\n400m row\n25 KBS\n \n \nQuote of the day\n“The reason a lot of people do not recognize opportunity is because it usually goes around wearing overalls looking like hard work.”  – Thomas Edison',
		id: '238',
		userId: '103641054784067776862'
	},
	{
		title: 'THIRTY SOMETHING',
		description:
			'A. AMRAP in 10 min\n100m run\n15 sit ups\n100m run\n:30 plank\nB. AMRAP in 15 min\n1 lap farmers carry\n15 side bends each side\n20 goblet lunges 10/10\n*at the start and every 5 min, run 200m\nC. AMRAP in 15 min\n10 Ab wheels\n15 Bench press\n20 battle rope, 2-arm wave\n*at the start and every 5 min, 10 burpees\n \n \nQuote of the day\n“Without hard work, nothing grows but weeds.”  – Gordon B. Hinckley',
		id: '239',
		userId: '103641054784067776862'
	},
	{
		title: 'HANGIN TOUGH',
		description:
			'A. 1 min @ each x 3 rounds:\nWeighted sit ups\nBurpee\nBox Jumps\nDouble Unders\nRest\nB. 4 rounds:\n15 cals\n15 KBDL\n15 KB goblet squats\n400m run each round\nC. 10-1\nknees to elbows\npush ups\n \n \n \nQuote of the day\n“The longer you hang in there, the greater your chance that something will happen in your favor.  No matter how hard it seems, the longer you persist, the more likely your success.”  – Jack Canfield',
		id: '240',
		userId: '103641054784067776862'
	},
	{
		title: 'HANG 10',
		description:
			'*Final week of time trials!\nA. 500m row for time\nB. 1000m C2 bike for time\nC. 21-15-9\nD.  21-15-9\n**400m run between rounds\nE. 21-15-9\n \n \n \nQuote of the day\n“Look deep into nature and you will understand everything better”  – Eistein',
		id: '241',
		userId: '103641054784067776862'
	},
	{
		title: 'CLEAN AND BURPS',
		description:
			'A. 3 rounds\n30 sec battle rope alt wave\n30 sec air squats\n1 min plank\nB. 3 sets:\n15 strict press\n15 ring rows\nC. 3 rounds:\n400m run\n30 lunges\n30 KBS\n20 wall balls\n20 burpees\n \n \nQuote of the day\n“Great effort springs naturally from great attitude.”  – Pat Riley',
		id: '242',
		userId: '103641054784067776862'
	},
	{
		title: 'MESSED AROUND AND GOT A TRIPLE DOUBLE',
		description:
			'AMRAP in 45 min\n50 sit ups\n50 cals\n50 box jumps\n50 push press\n50 DBDL\n50 squats\n50 body rows\n50 KBS\n50 push ups\n*at the start and every 15 min, run 800m (3 runs total)\n \n \nQuote of the day\n“You can control two things:  your work ethic and your attitude about anything.”  – Ali Krieger',
		id: '243',
		userId: '103641054784067776862'
	},
	{
		title: 'GOING UP!',
		description:
			'A. 4 rounds, :40 at each\nWeighted step ups\nSit ups\nPlank\nB. 4 rounds, :40 at each\ncurl to press\nPush ups\nAir squats\nC. AMRAP in 24 min\n5 pull ups\n10 cals\n15 KBS\n20 lunges 10/10\n*at the start and every 6 min, run 400m\n \n \nQuote of the day\n“The supreme quality for leadership is unquestionable integrity.  Without it, no real success is possible, no matter whether it is on a section gang, a football field, in an army, or in an office.  – Dwight D. Eisenhower',
		id: '244',
		userId: '103641054784067776862'
	},
	{
		title: 'PRESSIN ON..',
		description:
			'A. 15, 12, 9, 6, 3\nBench press\nAb wheels\nB. 15, 12, 9, 6, 3\nDB ground to OH\nRussian twists, each side\nC. 15, 12, 9, 6, 3\nCal row\nBurpees\nD. 15, 12, 9, 6, 3\nWall balls\n200m run each round',
		id: '245',
		userId: '103641054784067776862'
	},
	{
		title: 'TIME TRIALS',
		description:
			'Time trials, week 2 of 3\nA. 500m row for time\nB. 1,000m on concept 2 bike\nTry to beat your time from last week!\nC. Ab circuit:\n3 sets:\n15 Ab wheels\n15 side bends each side\n20 weighted sit ups\n1 min plank\nD. 1 round\n50 cals\n50 push ups\n50 lunges\n25 cals\n25 push ups\n25 lunges\nE. 21-15-9\nKBS\nGoblet squats',
		id: '246',
		userId: '103641054784067776862'
	},
	{
		title: 'SPRINT',
		description:
			'1k row\n4 rounds:\n10 strict press\n10 thrusters\n10 weighted squats\n800m run\n4 rounds:\n10 pull ups\n15 wall balls\n20 sit ups\n1k row\n4 rounds:\n500m c2 bike\n15 KBS\n15 box jumps',
		id: '247',
		userId: '103641054784067776862'
	},
	{
		title: 'GET QUICK',
		description:
			'A. 4 sets:\n10 DB bench press\n15 tri ext\n21 curls (7 series)\nB. 4 sets:\n10 RDL\n20 weighted lunges\nC. For time:\n25 Thrusters\n25 Cals\n25 burpees\n25 cals\n25 pull ups or body rows\n25 cals\n25 push ups\n25 cals',
		id: '248',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE DOWN',
		description:
			'A. 4 sets:\n10 strict press\n10 pull ups\nB. 4 sets:\n10 Bul. split squats each leg\n10 pistols each leg\nC. 3 rounds:\n15 thrusters\n15 push ups\n400m run\nD. 3 rounds:\n15 weighted sit ups\n15 ab wheels\n400m row',
		id: '249',
		userId: '103641054784067776862'
	},
	{
		title: 'HINGING AT THE WAIST',
		description:
			'A. 1 min @ each x 4 rounds:\nsit ups\nplank\ngoblet squats\nburpees\nrest\nB. AMRAP in 15 min\n400m run\n15 KBS\n400m row\n15 box jumps\nC. AMRAP in 10 min\n5 knees 2 elbows\n10 cal bike\n15 body rows',
		id: '250',
		userId: '103641054784067776862'
	},
	{
		title: 'THURSDAY SPECIAL',
		description:
			'A. AMRAP in 10 min\n10 bench press\n15 sit ups\n200m row\nB. AMRAP in 10 min\n10 seated OH press\n10 weighted squats\n200m run\nC. AMRAP in 20 min\n50 cal bike buy in\n+\nAMRAP with time remaining:\n:45 plank\n10 curl to press\n10 box jumps\n10 lunges per leg\n10 cal bike',
		id: '251',
		userId: '103641054784067776862'
	},
	{
		title: '',
		description:
			'A. Sport time trials\nweek 1 of 3\n– 500m row for time\n– 1,000m on concept 2 bike\n*record your times, goal will be to improve times over the next 3 weeks\nB. 40-30-20-10\nDB hang squat cleans\nSit ups\nC. 40-30-20-10\nKBS\nGoblet lunges\n400m run each round',
		id: '252',
		userId: '103641054784067776862'
	},
	{
		title: 'ALL THE MAXES!',
		description:
			'A. 100 Wall balls for time:\n* at the start, and every min = 5 push ups\n10 min cap\nB. 4 sets:\n10 cals\n15 curls\n20 lunges, 10 per leg\n400m run\nC. 4 sets:\n10 burpees\n15 DB ground to OH (two arms)\n20 sit ups\n400m run\nD. 4 sets:\n10 Ab wheels\n15 Pull ups\n20 Tri ext.\n400m run',
		id: '253',
		userId: '103641054784067776862'
	},
	{
		title: 'FULL PRESS',
		description:
			'C. AMRAP 12 min\n400m row\n15 box jumps\n15 KBS\nD. AMRAP 12 min\n10 Bench Press\n20 alternating wave Battle rope\n10 Burpees\n20 two arm wave battle rope',
		id: '254',
		userId: '103641054784067776862'
	},
	{
		title: 'FOR THE LADIES!',
		description:
			'400m run\n3 rounds:\n25 sit ups\n10 pistols each leg\n400m run\n3 rounds:\n25 sit ups\n10 weighted lunges each leg\n400m run\n3 rounds:\n:45 Plank\n10 curl to press\n400m run\n3 rounds:\n:45 plank\n15 KBS',
		id: '255',
		userId: '103641054784067776862'
	},
	{
		title: 'UNCOMFORTABLE',
		description:
			'15 min clock\n5 knees to elbows\n10 HR push ups\n15 sit ups\n*at the start, and every 5 min, run 200m\n30-20-10\nCals\nThrusters\nKBS swings\n:90 plank each round',
		id: '256',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLET THURSDAY',
		description:
			'A. every :90 x 6 sets\n100m run + AMRAP sit ups with time left\nB. every :90 x 6 sets\n8 burpees + AMRAP plank with time left\nB. 21-15-9\nCals\nDB bench press\nbox jumps\nC. 21-15-9\nPull ups\nlunges per leg\n200m run each round\nD. 21-15-9\ncal Bike\nPush ups\nside bends each side',
		id: '257',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER HOUR',
		description:
			'A. Final Week – Strength Cycle\n3 sets:\n5-8 bench press\n5-8 weight squats\n+\n1 set:\n1 min max reps push ups\n1 min max reps air squats\nB. 4 rounds:\n15 RDL\n25 sit ups\n400m run\nC. 4 rounds:\n10 burpees\n1 min plank\n500m row',
		id: '258',
		userId: '103641054784067776862'
	},
	{
		title: 'FEEL THE BURN',
		description:
			'A. Every 2 min x 4 sets (8 min clock)\n300/250m row + AMRAP box jumps w time left\nB. every 2 min x 4 sets (8 min clock)\n200m run + AMRAP wtd. sit up\nC. Every 2 min x 4 sets (8 min clock)\n20/15 cal + AMRAP walking lunges\nD. 15 min:\n1 min plank\n15 kbs\n15 air squat\n15 seated OH press\n50 jump rope',
		id: '259',
		userId: '103641054784067776862'
	},
	{
		title: 'SOMETHING DIFFERENT',
		description:
			'A. 4 sets:\n10 S.A. kneeling arnold press each arm\n10 Push ups\n15 tri ext.\nB. 4 sets:\n10 SL RDL each leg\n10 floor glute bridges with band\n10 goblet squats\nC. 3 rounds\nRun 800m, 400m, 200m\n15 Body rows\n20 DB weighted step ups\n25 Sit ups\n30 Russian twists',
		id: '260',
		userId: '103641054784067776862'
	},
	{
		title: 'DERBY DAY! ITS A LONG SHOT!',
		description:
			'A. 12-10-8-6-4-2\nBench press\nClapping push ups\n15 tri ext. each round\nB. 12-10-8-6-4-2\nWeighted lunges – per leg\nJumping squats\n:30 wall sit each round\nC. 3 rounds:\n1k/ 750m/ 500m ROW or bike (x2)\n40 sit ups\n30 Alt DB Snatches 10/10\n20 Good mornings\n10 K2E',
		id: '261',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE DOWN',
		description:
			'A. 8 min\n10 lateral band walks- each leg\n10 glute bridges with band\n10 Front raises with Plate\nB. AMRAP in 15 min\n50 Jump rope\n25 Jumping CTB pull ups\n10 Ball Slams\n*at the start, and every 5 min, run 200m\nC. 4 rounds:\n10 Cals\n10 2 arm DB ground to OH\n10 Jack Knives',
		id: '262',
		userId: '103641054784067776862'
	},
	{
		title: 'THURSDAY TRIPLE',
		description:
			'A. 3 rounds:\n1 min goblet squats\n1 min Weighted sit ups\n1 min burpees\n1 min rest\nB. 30-20-10\nCal bike\nDB hang squat cleans\nC. 30-20-10\nCal Row\nDevils Press\nD. 3 rounds:\n200m run\n15 GHD sit ups',
		id: '263',
		userId: '103641054784067776862'
	},
	{
		title: 'SHORT REST',
		description:
			'A. Strength Cycle (week 3 of 4)\n3 sets:\n5-8 bench press\n5-8 weight squats\n+\n1 set:\n1 min max reps bench press\n1 min max reps air squats\nB. 15, 12, 9, 6, 3\nBurpees\nBox jumps\n200m run each round\nC. 15, 12, 9 , 6, 3\nDB ground to OH\nAb wheels\n200m row each round\nD. 3-4 sets:\n10 side bends each side\n:30 side plank each side',
		id: '264',
		userId: '103641054784067776862'
	},
	{
		title: 'SAME, BUT DIFFERENT..',
		description:
			'A. AMRAP in 12 min:\n5 Burpees\n10 Lunges\n15 sit ups\n*at the start, and every 3 min, run 100m\nB. AMRAP in 12 min:\n5 ab wheels\n10 Wall Balls\n15 alt wave Battle rope, each arm\n*at the start, and every 3 min, run 100m\nC. AMRAP in 24 min\nBig block run buy in\n+\nAMRAP w time remaining:\n10 Push press\n10 Box Jumps\n15 Russian KBS\n15 Egg beater battle rope\n200m run',
		id: '265',
		userId: '103641054784067776862'
	},
	{
		title: 'GET OFF YOUR FEET AND JUMP AROUND!',
		description:
			'A. AMRAP in 7 min\n21 curls (7s series)\n15 KB high pull\n9 Push up to Renegade rows\nB. AMRAP in 7 min\n21 sit ups\n15 Thrusters\n9 Dips\nC. AMRAP in 14 min\n400m row or run\n30 Russian twists 15/15\n30 side bends 15/15\n10 Pull ups\nD. AMRAP in 14 min\n400m row or run\n20 single arm floor press 10/10\n20 single arm rows 10/10\n1 min plank',
		id: '266',
		userId: '103641054784067776862'
	},
	{
		title: 'SATURDAYS ARE FOR THE GIRLS?!',
		description:
			'A. 100 KBS\nat the start, and every time you break the set, 15 sit ups\nB. 100 DB hang sq cleans\nat the start, and every time you break the set, 10 burpees\nC. 30-20-10\nK2E\nBox jumps\n400m run each round',
		id: '267',
		userId: '103641054784067776862'
	},
	{
		title: 'FRIYAY',
		description:
			'A. 4 rounds of 1 min @ each:\nSit ups\nJump rope\n2 lunges + 2 squats\nB. AMRAP in 15 min\n400m run\nAMRAP push ups, 1 attempt each round\nAMRAP unbroken plank hold, 1 attempt each round\nC. AMRAP in 15 min\n10 seated OH press\n15 Hamstring curls\n15 cals bike or row',
		id: '268',
		userId: '103641054784067776862'
	},
	{
		title: '5 MINUTE MAJOR',
		description:
			'A. 10 min clock:\n1750m/1500m row\nAMRAP Devils press w time remaining\nB. 10 min clock:\nBlock run\nAMRAP burpee box jump overs with time left\nC. 4 rounds:\n20 Weighted sit ups\n20 shoulder taps 10/10\n15 front raises with plate\n15 Cal bike',
		id: '269',
		userId: '103641054784067776862'
	},
	{
		title: 'INVERTED REST',
		description:
			'A. Strength Cycle (week 2 of 4)\n3 sets:\n5-8 bench press\n5-8 weight squats\n+\n1 set:\n1 min max reps bench press\n1 min max reps air squats\nB. 21-15-9\nWeighted sit ups\nCal Row\n400m run\nC. 21-15-9\nKBDL\nCal Bike\n400m run\nD. 21-15-9\nAb Wheels\nKBS',
		id: '270',
		userId: '103641054784067776862'
	},
	{
		title: 'TUESDAY SPRINTS',
		description:
			'A. 10 min:\n10 side bends each side\n10 SA kneeling arnold press each arm\n10 Back ext\nB. 10 min:\n10 RDL\n20 Weighted sit ups\n30 Russian twists 15/side\nC. 10 min:\n10 Bench press\n10 SA rows each arm\n200m run\nD. 10 min:\n10 Thrusters\n10 pull ups\n200m row',
		id: '271',
		userId: '103641054784067776862'
	},
	{
		title: 'EARTHDAY MUPHISH DAY',
		description:
			'A. :40 at each x 4 rounds:\nBurpees\nBattle Rope\nSit ups\nB. :40 at each x 4 rounds:\nWall Balls\nPlank\nCurl to Press\nC. AMRAP in 20 min\nBlock run buy in\n+\nAMRAP with time remaining:\n15 DB hang squat cleans\n15 Push press\n15 Push ups\n200m run\nD. AMRAP Plank hold in 5 min',
		id: '272',
		userId: '103641054784067776862'
	},
	{
		title: 'SYNCHRO N SYNC',
		description:
			'A. Cindy ish\nAMRAP 20 min\n5 pull ups\n10 push ups\n15 air squats\n*at the start and every 5 min, run 200m\nB. “Annie”\nC. Helen ish\n3 rounds:\n400m row\n21 KBS\n12 toes thru rings',
		id: '273',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER HOUR',
		description:
			'A. 3 sets:\n10 strict press\n15 tri ext\nB. 3 sets:\n10 bent over 2 arm rows\n10 DBDL\nC. 3 sets:\n15 sit ups\n:30 side plank each side\nD. 3 sets:\n15 thrusters\n200m run\nE. 3 sets:\n15 box jumps\n200m row',
		id: '274',
		userId: '103641054784067776862'
	},
	{
		title: '1.17',
		description:
			'A. 10 min AMRAP\n:30 battle rope\n10 single arm rows each side\n200m run\nB. 10 min AMRAP\n:45 plank\n15 wall balls\n200m row\nC. 10 min AMRAP\n:30 Superman hold\n10 side bends each side\n400m c2 bike\nD. 10 min AMRAP\n10 push ups\n15 GHD sit ups\n20 alt. Step ups 10/10',
		id: '275',
		userId: '103641054784067776862'
	},
	{
		title: 'PUMP DAY',
		description:
			'A. New strength cycle (week 1 of 4)\n3 sets:\n5-8 bench press\n5-8 weight squats\n+\n1 set:\n1 min max reps bench press\n1 min max reps air squats\nB. For time:\n1k row\n50 sit ups\n50 lunges\n50 double unders\n800m run\n40 sit ups\n40 step ups\n40 Russian kbs\n2k c2 bike\n30 sit ups\n30 burpees\n30 body rows',
		id: '276',
		userId: '103641054784067776862'
	},
	{
		title: 'TUESDAY PYRAMID SCHEME',
		description:
			'A. EMOM X 12 min\n1st: 100m run\n2nd: 8-10 push ups\n3rd: 15 goblet squats\n4th: 40s plank\nB. 21-15-9\nKnees to elbows\nBox jumps\nRussian twists each side\n400m run each round\nC. 21-15-9\nSeated overhead press\nAb wheels\nRDL\n400m row each round',
		id: '277',
		userId: '103641054784067776862'
	},
	{
		title: 'CLEAN WEEK',
		description:
			'A. Every 3 min\nx 3 sets\n250/200m row\nB. Every 3 min x 3 sets\n10 weighted sit ups + 10 burpees\nC. Every 3 min x 3 min\n20/15 cal bike sprint\nD. 3 rounds:\n10 bench press\n15 kbs\n20 lunges 10 each leg\n400m run',
		id: '278',
		userId: '103641054784067776862'
	},
	{
		title: 'YOU GO, I GO',
		description:
			'10 rounds:\n5 burpee pull ups\n10 squats\n15 sit ups\n800m run or row\n5 rounds:\n10 KBS\n20 lunges 10/10\n30 Russian twists 15/15\n800m run or row\n1 round:\n50 wall balls\n50 good mornings, hands on hips\n50 banded strict press',
		id: '279',
		userId: '103641054784067776862'
	},
	{
		title: 'PRESS INTO THE WEEKEND',
		description:
			'A. 3 rd:\nrow: 1k/750,/500m\nThrusters: 30/20/10\nsit ups: 50/50/50\nB. 3 rd:\nrun: big block run/400m/200m\nbox jumps: 30/20/10\nCal bike: 30/20/10',
		id: '280',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLE THURSDAY',
		description:
			'40 min running clock\nABCD are all 10 min AMRAPS\nBegin each 10 min with 400m run/row buy inA. 10 bench press\n10 pull ups\n10 burpees\nB. 10 goblet squats\n15 sit ups\n20 DUs\nC. 10 KBS\n1 min plank\n10 curl to press\nD. 10 cals\n10 box jumps\n10 dips',
		id: '281',
		userId: '103641054784067776862'
	},
	{
		title: '12.4 ISH..',
		description:
			'A. 100 sit ups for time\n*at the start, and every min, 5 burpeesB. 21-15-9\nDB ground to OH\nBox jumps\n400m run\nC. 21-15-9\nCal bike\n:30 battle rope each round\n400m run\nD. 21-15-9\nBody rows\nThrusters\n400m run',
		id: '282',
		userId: '103641054784067776862'
	},
	{
		title: 'BEACH SEASON',
		description:
			'A. :40 at each x 4 rounds\nJumping lunges\nAir squats\nPlank\nB. 12, 10, 8, 6, 4, 2\nSeated OH press\nPush ups\nC. 12, 10, 8, 6, 4, 2\nWall Balls\nPull ups\nD. 3 rounds:\n30 Russian Twists 15/15\n200m run\n20 weighted sit ups\n200m row',
		id: '283',
		userId: '103641054784067776862'
	},
	{
		title: 'HANGING ON TO THE WEEKEND',
		description:
			'A. AMRAP in 15 min\n800m run or row buy in\n+\n20 sit ups\n15 OHS\n10 burpees\n100m run or row\nB. AMRAP in 15 min\n800m run or row buy in\n+\n20 Goblet lunges 10/10\n15 RDL\n10 Cals\n100m run or row\nC. AMRAP in 15 min\n800m run or row buy in\n+\n20 KBS\n15 Bench press\n10 Ab wheels\n100m run or row',
		id: '284',
		userId: '103641054784067776862'
	},
	{
		title: 'TAG TEAM',
		description:
			'A. 4 sets:\n10 PVS OHS\n10-15 GHD sit ups\nB. 4 sets\n10 Single arm rows each side\n10 side bends each side\nC. 4 sets:\n400m run\nMax reps unbroken push ups in 1 attempt per round\nD. 100 wall balls\n*each time you break a set = 10 burpees',
		id: '285',
		userId: '103641054784067776862'
	},
	{
		title: 'FAST & DIZZY',
		description:
			'A. 1 min at each x 3 rounds:\nPlank\nCurl to press\nWall sit\nrest\nB. 1 min at each x 3 rounds:\nSit ups\nLunges\nShuttle run (20 yd)\nRest\nC. AMRAP in 20 min\n15 Bench press\n15 Body rows\n15 Cals\n400m run',
		id: '286',
		userId: '103641054784067776862'
	},
	{
		title: 'COUNTDOWN',
		description:
			'A. 4 sets:\n20 Alt DB bench press 10/arm\n20 weighted sit ups\nB. 4 sets:\n10 Bulgarian Split squats each leg\n30 Russian twists 15/side\nC. 40-30-20-10\nCals\nNo push up burpees\nWeighted Step ups',
		id: '287',
		userId: '103641054784067776862'
	},
	{
		title: 'ACCESSORY DAY',
		description:
			'AMRAP in 45 min\nAt the start, and every 15 min, complete a block run\n50 HR push ups\n50 KBS\n50 Goblet Lunges 25/leg\n50 Wall Balls\n50 Box jumps\n50 Pull ups/ body rows\n50 Cals\n50 Sit ups\n2 min Plank',
		id: '288',
		userId: '103641054784067776862'
	},
	{
		title: 'GET OFF THE SEAT AND JUMP AROUND',
		description:
			'A. :40 at each exercise x 4 rounds:\nGoblet squats\nPush up to renegade rows\nStep ups\nB. :40 at each exercise x 4 rounds:\nSit ups\nJump rope\nBurpees\nC. 15, 12, 9, 6, 3:\nCals\nAb Wheels\nK2E\nD. 3 rounds:\n200m run\n10 DB RDL\n200m row\n1 min plank',
		id: '289',
		userId: '103641054784067776862'
	},
	{
		title: 'UNCOMFORTABLE',
		description:
			'A. Strength cycle: (week 4 of 4)\n4 sets;\n10 strict press\n10 weighted squats\n*final week, go as heavy as possible!\nB. 3 sets:\n15 hamstring curls\n15 Floor press\nC. 3 rounds:\n20 lunges per leg\n20 DB ground to OH\n400m run\nD. 3 rounds:\n10 pull ups\n20 KBS\n300m row',
		id: '290',
		userId: '103641054784067776862'
	},
	{
		title: 'TEAM TO BEAT..',
		description:
			'AMRAP in 45 min\n50 Push ups\n–400m run\n50 sit ups\n–400m run\n50 Lunges each leg\n–400m run\n50 JPU\n–400m run\n50 DB ground to OH\n–400m run\n50 cals\n–400m run',
		id: '291',
		userId: '103641054784067776862'
	},
	{
		title: 'HANG IN THERE, ITS FRIDAY',
		description:
			'A. ALT. TABATA x 8 rounds\nPush Ups\nBurpees\nB. ALT. TABATA x 8 rounds\nRussian Twists\nKBS\nC. 3 sets:\n10 Bulgarian Split Squats each Leg\n10 Russian Step ups each leg\nD. 3 sets:\n15 tri ext.\n15 Bench press\nE. 30-20-10\nCals\nWall Balls\nDUs, singles x 3',
		id: '292',
		userId: '103641054784067776862'
	},
	{
		title: 'MAGIC HOUR',
		description:
			'A. 10 min\n10 Seated OH press\n1 min plank\n200m run\nB. 10 min\n10 side bends each side\n10 K2E\n200m row\nC. 10 min\n10 DBDL\n10 single arm DB rows\n10 Bench press\nD. 10 min\n10 Cal bike\n10 Russian KBS\n10 Push ups',
		id: '293',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMP DAY PUMP DAY',
		description:
			'A. Every :90 x 5 sets\n100m run + AMRAP plank w/ time left\nB. Every :90 x 5 sets\n10/8 Cals + AMRAP DB ground to OH w/ time left\nC. AMRAP in 20 min\nBig block run buy in\n+\nAMRAP w time left:\n15 Goblet squats\n15 push ups\n15 sit ups\n200m run',
		id: '294',
		userId: '103641054784067776862'
	},
	{
		title: 'ALL THE FUN STUFF',
		description:
			'45 min running clock\nA/B/C are all 15 min AMRAP\nBegin each AMRAP with a block run or 800m row\nA. 15 min\n1 min plank\n10 ab wheels\n15 lunges per leg\n15 Wall Balls\nB. 15 min\n15 curls\n:30 “gun” hold\n15 body rows\n10 Cals\nC. 15 min\n15 box jumps\n15 DB snatch, each side\n15 no push up burpees\n100m run',
		id: '295',
		userId: '103641054784067776862'
	},
	{
		title: 'BACK TO NORMAL…',
		description:
			'A. Strength cycle: (week 3 of 4)\n4 sets;\n10 strict press\n10 weighted squats\n*goal is to increase each week\nB. 3 sets:\n15 RDL\n15 side bends each side\nC. 21-15-9\nCals on rower\nKBS\nWeighted sit ups\n400m run\nD. 21-15-9\nBurpees\nRussian twists – each side\nBox jumps',
		id: '296',
		userId: '103641054784067776862'
	},
	{
		title: 'OPEN WRAP!!',
		description:
			'A – For time:\n33/27/21/15/9\nThrusters\nPullups\n \nB –20 Minutes\n400m Run\n15 Kb Swing\n500 M Row\n15 Bench Press',
		id: '297',
		userId: '103641054784067776862'
	},
	{
		title: 'THRUSTERS AND PULL-UPS HERE WERE COME!!!',
		description:
			'A. 10 rounds\n5 bench press\n10 alt. curls 5/5\n15 jump rope\n800m run\nB. 10 rounds:\n5 burpees\n10 KBS\n15 sit ups\n800m run',
		id: '298',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER HOUR',
		description:
			'A. As a warm up\nALT TABATA x 6 rounds\nShoulder Taps\nAir squats\nplate front raise\nB. 15, 12, 9, 6, 3\nDevils press\n200m row each round\nC. 15, 12, 9 6, 3\nFilly press each side\n200m run each round\nD. 15, 12, 9, 6, 3,\nBench press\n500m c2 bike each round',
		id: '299',
		userId: '103641054784067776862'
	},
	{
		title: 'NATE DOGG',
		description:
			'40 min running clock\nABCD are all 10 min AMRAP\nBegin each AMRAP with a buy in\nbuy in options: 400m run, 500m row, .5 mile air bike, 1k c2 bike\nA. 10 min\n10 Lat. raise to OH\n10 rev lunge to glute activation, ea. side\n:45 plank\nB. 10 min\n10 weighted step ups 5/5\n10 DB burpees\n10 push press\nC. 10 min\n10 cals\n10 ab wheels\n10 air squats\nD. 10 min\n10 back ext.\n10 alt curls each side\n10 SA rows each side',
		id: '300',
		userId: '103641054784067776862'
	},
	{
		title: 'TUESDAY THRUSTAS',
		description:
			'A. 10 min cap\n50 DB hang squat cleans\n*at the start, and every min= 5 burpees\nB. 10 min cap\n100 sit ups\n*at the start, and every min = 6 step ups 3/3\nC. AMRAP in 20 min\n15 RDL\n15 Push press\n15 Pull ups\n15 Russian twists each side\n*at the start, and every 5 min, run 400m',
		id: '301',
		userId: '103641054784067776862'
	},
	{
		title: 'MONDAY – BUY IN',
		description:
			'A. Strength cycle: (week 2 of 4)\n4 sets;\n10 strict press\n10 weighted squats\n*goal is to increase each week\nB. 3 sets:\n15 Tri Ext.\n10 Push up to renegade row\nC. 3 rounds for time:\nBike: 2k,1k, 500m\nbox jumps: 30, 20 10\nGHD sit up: 30, 20 10\nD. 3 rounds for time:\nRow: 1k, 500m, 250m\nOH wtd. lunges: 30, 20 ,10\nKBS: 30, 20, 10',
		id: '302',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER HOUR',
		description:
			'A. 3 sets:\n1 min burpees\n1 min KBS\n1 min Plank\n1 min rest\nB. 3 sets:\n1 min push up to renegade row\n1 min sit up\n1 min weighted step ups\n1 min rest\nC. For time:x\n800m run\n+\n5 rounds “cindy”\n+\n800m run',
		id: '303',
		userId: '103641054784067776862'
	},
	{
		title: '19 DOT 4',
		description: '19.4',
		id: '304',
		userId: '103641054784067776862'
	},
	{
		title: 'TRY NEW THINGS THURSDAY..',
		description:
			'A. EMOM x 6 min\n5 DB hang squat clean (heavy) + Plank remainder of min\nB. EMOM x 6 min\n8 ab wheels + sit ups remainder of min\nC. 3 sets:\n20 thrusters\n20 push ups\n20 cals\n400m run\nD. 3 sets:\n20 KBS\n20 box jumps\n20 bent over 2- arm row\n400m run',
		id: '305',
		userId: '103641054784067776862'
	},
	{
		title: '15.1 MASHUP',
		description:
			'A. 4 sets:\n10 curl to press\n20 alt. battle rope each side\nB. 4 sets:\n20 shoulder taps\n20 egg beater battle rope\nC. 4 sets:\n20 weighted lunges 10/10\n20 2-arm battle rope\nD. 3 rds:\n10 ab wheels\n20 k2E\n30 cals\n40 sit ups',
		id: '306',
		userId: '103641054784067776862'
	},
	{
		title: 'MIX IT UP',
		description:
			'A. Every 2 min x 4 sets (8 min clock)\n300m row + AMRAP box jumps w time left\nB. every 2 min x 4 sets (8 min clock)\n200m run + AMRAP wtd. sit up\nC. Every 2 min x 4 sets (8 min clock)\n20/15 cal + AMRAP walking lunges\nD. 15 min:\n1 min plank\n15 kbs\n15 air squat\n15 bench press\n50 jump rope',
		id: '307',
		userId: '103641054784067776862'
	},
	{
		title: 'DIZZYNESS',
		description:
			'A. New strength cycle: (week 1 of 4)\n4 sets;\n10 strict press\n10 weighted squats\n*goal is to increase each week\nB. 3 sets:\n15 hamstring curls\n15 side bends per side\nC. 21-15-9\nPull ups\nburpees\n800m run\nD. 21-15-9\nRDL\nPush ups',
		id: '308',
		userId: '103641054784067776862'
	},
	{
		title: 'CONTINUOUS..',
		description:
			'Block run\n1 Lap Farmer’s carry\n30 DB hang squat clean\n30 K2E\n30 weighted sit ups\n1 Lap Farmer’s carry\n30 Burpees\n30 Cals\n30 Burpees\n1 Lap Farmer’s carry\n30 DB hang squat cleans\n30 K2E\n30 Weighted sit ups\n1 Lap farmer’s carry\nBlock run',
		id: '309',
		userId: '103641054784067776862'
	},
	{
		title: '19 DOT 3',
		description: '',
		id: '310',
		userId: '103641054784067776862'
	},
	{
		title: 'SHAKE IT OFF',
		description:
			'A. 100 Thrusters\n*at the start, and top of every minute 3 burpees\n*10 min cap\nB. 100 Sit ups\n*at the start, and top of every min 5 push ups\n*10 min cap\nC. 30-20-10\nWeighted step ups each leg\nKBS\nAir bike Cals\n400m Run each round',
		id: '311',
		userId: '103641054784067776862'
	},
	{
		title: 'FIGHT GONE WRONG',
		description:
			'A. Final week of this Strength Cycle\n4 sets:\n10 Bench press\n10 RDL\nGo as heavy as possible\nB. 4 sets:\n15 tri ext.\n20 alt. curls 10/10\nC. For Time\nBig Block run\n50 Cals\n40 Wall Balls\n30 K2E\n40 Wall Balls\n50 Cals',
		id: '312',
		userId: '103641054784067776862'
	},
	{
		title: 'CAN YOU HANG?',
		description:
			'A. ALT. TABATA x 8 rounds:\nGoblet squats\nKB high pull\nSit Ups\nB. 21-15-9\nPull ups\nWall Balls\n400m run\nC. 21-15-9\nSeated OH press\n:45 Plank each round\n400m run\nD. 21-15-9\nBox Jumps\nCals\n400m run',
		id: '313',
		userId: '103641054784067776862'
	},
	{
		title: 'RIDE THE WAVE',
		description:
			'A. 1 min @ each x 3 sets:\nSit ups\nThrusters\nPush up to renegade rows\nB. 1 min @ each x 3 sets\nBurpees\nPlank\nbox jump/step ups\nC. AMRAP in 10 min\n150m row\n30 Russian Twists\n30 Lunges\nD. AMRAP in 10 min\n15 Cal bike\n15 KBS\n10 Push ups',
		id: '314',
		userId: '103641054784067776862'
	},
	{
		title: 'PUSH & PULL',
		description:
			'A. 3 rounds:\n200m run\n25 push ups\n200m row\n25 push press\nB. 3 rounds:\n200m run\n25 sit ups\n200m row\n25 KBS\nC. 3 rounds:\n1 min plank\n15 ab wheels\n15 Hollow rocks',
		id: '315',
		userId: '103641054784067776862'
	},
	{
		title: '19 DOT 2',
		description:
			'8 min clock:\n25 k2e\n50 du\n15 DU hang squat clean\n25 k2e\n50 du\n15 dB hang squat clean\n8 min clock\n1k row\n50 weighted lunges\n50 HR push ups\n8 min clock\n50 cal bike\n50 Russian kbs\n50 sit ups\n8 min clock\n800m run\n50 Russian twists\n50 body rows',
		id: '316',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLET THURSDAY',
		description:
			'A. 4 sets:\n10 Back ext, add weight if possible\n10 pull ups\n:60 Plank\nB. 4 sets:\n10 Lateral Band walk each way\n10 floor glute bridges with band\n15 jack knives\nC. 3 rounds for time:\n400m run\n30 Wall Balls\n30 cal bike\n30 Step ups 15/15',
		id: '317',
		userId: '103641054784067776862'
	},
	{
		title: 'TEN',
		description:
			'A. C-SPORT STRENGTH CYCLE\n4 sets:\n10 bench press\n10 RDL\n*remember your weights, this is week 3 of 4. The goal is to increase weights each week.\nB. 3 sets:\n10 Rev. Lunges each leg (w. band)\n15 side bends each side\nC. 40-30-20-10\nCals\nPush press\nair squats\nsit ups',
		id: '318',
		userId: '103641054784067776862'
	},
	{
		title: 'TUESDAY SPRINTS',
		description:
			'A. AMRAP in 10 min:\n50 cals\n40 KBS\n30 burpees\nB. AMRAP in 10 min:\nAccumulate :90s plank\n50 lunges\n40 sit ups\n30 Push ups\nC. AMRAP in 10 min\n400m run\n30 DUs\n20 Wall Balls\n10 K2E\nD. AMRAP in 10 min\n10 ab wheels\n15 tri ext.\n20 box jumps\n30 Mtn climbers',
		id: '319',
		userId: '103641054784067776862'
	},
	{
		title: 'TEST OF FITNESS',
		description:
			'A. 1 set every 3 min x 3 sets:\n15 Thrusters\n250/200m row sprint\nrest the remainder of the interval\nB. 1 set every 3 min x 3 sets\n15 weighted sit ups\n20/15 cal bike sprint\nrest the remainder of the interval\nC. 1 set every 3 min x 3 sets\n15 KBS\n200m run\nrest the remainder of the interval\nD. 3 sets:\n10 Seated OH press\n10 weighted step ups each leg\nE. 3 sets:\n10 S.A. row each side\n:45 side plank each side',
		id: '320',
		userId: '103641054784067776862'
	},
	{
		title: 'WITH YOUR SQUAD SATURDAY',
		description:
			'AMRAP in 45 min:\n5 push up to R Row\n10 step ups each leg\n15 Pull ups\n20 Push press\n250m Row\n30 sit ups\n35 DUs\n40 Lunges\n*at the start, and every 10 min, run 400m',
		id: '321',
		userId: '103641054784067776862'
	},
	{
		title: '19.1',
		description:
			'A. 15 minutes\n19 wall balls 20/14\n19 cal row\nB. 800m run\n5 sets:\n5 Pull ups\n10 KB swings\n15 DUs\n800m run\n5 sets:\n5 curl to press\n10 DB hang squat cleans\n15 hamstring curls',
		id: '322',
		userId: '103641054784067776862'
	},
	{
		title: 'OPEN SZN!!!',
		description:
			'A. 1 min @ each x 3 rounds\nDevils Press\nDB box step overs\nJump rope\nrest\nB. 1 min @ each x 3 rounds\nKB high pull\nPlank\nWall Balls\nRest\nC. 21-15-9\nCal\nWeighted sit ups\nD. 21-15-9\nSA KB row each arm\nCossack squats – each side',
		id: '323',
		userId: '103641054784067776862'
	},
	{
		title: 'REPEAT PERFORMANCE',
		description:
			'A. C-SPORT STRENGTH CYCLE IS BACK!\n4 sets:\n10 bench press\n10 RDL\n*remember your weights, this is week 2 of 4. The goal is to increase weights each week.\nB. 4 sets:\n15 tri ext.\n10 ab wheels\nC. 2 rounds:\n50 Russian KBS\n30 Burpees\nD. 2 rounds:\n50 sit ups\n30 cals',
		id: '324',
		userId: '103641054784067776862'
	},
	{
		title: '',
		description:
			'A. 15,12,9,6, 3\nSeated Arnold press\nJack knives\nBox jumps\nB. 15, 12, 9, 6, 3\nBody rows- elevate feet to increase difficulty\nPush ups\nBack ext\nC. 15, 12, 9 , 6, 3\nCals\nBul. split squat each leg\nweighted sit ups\nD. 15, 12, 9, 6, 3\nGoblet squats\nK2E\n:30 side plank each side each round',
		id: '325',
		userId: '103641054784067776862'
	},
	{
		title: '17 DOT 3',
		description:
			'A. 18 min clock:\nBuy in: 1k row/Block run/40 cal bike\n+\nAMRAP with time left\n7 curls series (21s)\n:30 DB “gun hold”\n1 min plank\n10 cals (bike or row)\nB. 18 min clock:\nBuy in: 1k row/Block run/40 cal bike\n+\nAMRAP with time left:\n20 Lunges 10/10\n15 box jumps\n10 side bends each side\n10 cals (bike or row)\nC. 5 min to accumulate as much of a plank as possible\n*each break, complete 5 burpees then continue in plank',
		id: '326',
		userId: '103641054784067776862'
	},
	{
		title: 'CLOSER AND CLOSER',
		description:
			'A. 3 rd:\nrow: 1k/750,/500m\nThrusters: 30/20/10\nsit ups: 50/50/50\nB. 3 rd:\nrun: big block run/400m/200m\nbox jumps: 30/20/10\nCal bike: 30/20/10',
		id: '327',
		userId: '103641054784067776862'
	},
	{
		title: 'FLYING INTO THE WEEKEND',
		description:
			'A. 10 min:\n10 rev. lunge to glute activation ea. leg\n10 curl to press\n200m row\nB. 10 min:\n10 tricep kick backs ea. side\n10 jack knives\n10 cal bike\nC. for time:\nblock run\n+\n5 rds:\n“cindy”\n+\nBlock run\n+\n5 rds\n“cindy”',
		id: '328',
		userId: '103641054784067776862'
	},
	{
		title: 'EVERY MINUTE ON THE MINUTE',
		description:
			'A. 4 sets:\n10 lateral raise to overhead\n10 body rows\n15 weighted sit ups\nB. 4 sets:\n10 back ext.\n10 bulgarian split squats per leg\n1 min plank\nC. 40-30-20-10\nCals\nNo push up burpees\n400m run each round',
		id: '329',
		userId: '103641054784067776862'
	},
	{
		title: 'SPRING REST SPRING',
		description:
			'A. C-SPORT STRENGTH CYCLE IS BACK!\n4 sets:\n10 bench press\n10 RDL\n*remember your weights, this is week 1 of 4. The goal is to increase weights each week.\nB. 4 sets:\n10 floor glute bridges with sling shot band\n20 shoulder taps in plank\nC. 4 rounds:\n15 sit ups\n200m row\n15 wall balls\n200m run',
		id: '330',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPLET TUESDAY',
		description:
			'40 min clock;\nA/B/C/D are all 10 min AMRAPS beginning with a 400m run “buy in”\nNo rest between A/B/C/D\nA. 10 min\n10 HRPU\n10 box jumps\n15 sit up\nB. 10 min\n10 KBS\n10 SA KB row\n:45 plank\nC. 10 min\n10 k2e\n15 air squats\n20 DU\nD. 10 min\n5 cals\n10 lunges per leg\n20 Russian twists',
		id: '331',
		userId: '103641054784067776862'
	},
	{
		title: 'MONDAY: BUY IN',
		description:
			'A. 11 min clock:\n2k/1750m ROW\n+\nAMRAP Devil’s press w time remaining\nB. 11 min clock:\n4k/3500m C2 bike erg\n+\nAMRAP weighted sit ups with time left\nC. 4 sets:\n10 seated overhead press\n10-15 hamstring curls\nD. 4 sets:\n10 ab wheels\n15 tri ext.',
		id: '332',
		userId: '103641054784067776862'
	},
	{
		title: 'SUCCESSORY SATURDAY',
		description:
			'AMRAP in 45 min\n—1k row\n30 sit ups\n30 Lunges\n30 HR push ups\n—Block run\n30 sit ups\n30 Lunges\n30 HR push ups\n—-1k Row\n30 Wall balls\n30 Box Jumps\n30 Russian twists per side\n—Block Run\n30 Wall balls\n30 Box jumps\n30 Russian Twists per side',
		id: '333',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE IT UP',
		description:
			'A. :40 at each x 4 rounds\nKBS\nPlank\nPush up –> R.Row\nB. :40 at each x 4 rounds\nJump rope\nBent over 2-arm row\nweighted sit up\nC. 21-15-9\nCals\nPull ups\nThrusters\n400m run each round',
		id: '334',
		userId: '103641054784067776862'
	},
	{
		title: '13.4',
		description:
			'A. 4 sets:\n10 Cossack Squats\n:45 wall sit\nB. 4 sets:\n10 Filly press each side\n15 K2E\nC. 3 rounds:\n400m row\n20 alt. rev. goblet lunges\n800m c2 bike\n20 push press',
		id: '335',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMPDAY!',
		description:
			'A. 8 min\n7s curl series\n20ft “gun walk”\n30 Russian Twists\nB. 8 min:\n10 side bends each side\n10 pike up on rower\n20 level changes\nC. 20 min\n400 m run\n1 rd:\n5 box jump\n10 ring rows\n15 sit ups\n400m run\n2 rd:\n5 box jump\n10 ring row\n15 sit ups\n400m run\n3 rd:….\netc, until time expires',
		id: '336',
		userId: '103641054784067776862'
	},
	{
		title: 'TUESDAYS TRIPS',
		description:
			'A. 1 min @ each x 3 rounds:\nWeighted step up\nDB RDL\nCurl to press\n-Rest\nB. 1 min @ each x3 rounds:\nPlank\nAb wheels\nBall slam\n-Rest\nC. 3 rounds;\nrun 400-400-400\nThrusters 30-20-10\nHR push ups 30-20-10',
		id: '337',
		userId: '103641054784067776862'
	},
	{
		title: 'KELLIE?',
		description:
			'A. Every 4 min x 3 sets (12 min)\n20 KBS\n400m/300m row sprint\nB. Every 4 min x 3 sets (12 min)\n200m run\n15 burpees- high effort\nC. 4 sets:\n10 Seated Arnold Press\n15 jack knives\nD. 4 sets:\n10 Bulgarian Split squats each leg\n:45 ring plank',
		id: '338',
		userId: '103641054784067776862'
	},
	{
		title: 'SQUAD SATURDAY',
		description:
			'A. 4 sets:\n30 sec jump rope\n30 sec air squats\n30 sec rest\nB. 4 sets:\n30 sec plank\n30 sec superman hold\n30 sec rest\nC. For time in any order and partition the reps in any way\n50 cal row\n50 push ups\n50 box jumps\n50 weighted squats\n50 sit ups\n50 body rows',
		id: '339',
		userId: '103641054784067776862'
	},
	{
		title: 'FIRST FRIDAY',
		description:
			'A. 3 sets\n10 heavy goblet squat\n20 lunges\n200 run\n*rest 2 min*\nB. 3 sets\n10 ring rows\n20 band pulldowns\n50 jump rope\nC. Jackie\n1k row\n50 thrusters\n30 pull-ups',
		id: '340',
		userId: '103641054784067776862'
	},
	{
		title: 'SHAKE IT OUT',
		description:
			'A. 5 sets:\n5 single leg DL curl to press (each leg)\n10 strict press\nB. 5 sets:\n10 pull ups\n4 TGU\nC. 4 rounds for time:\n200m run\n25 sit ups\n50 mtn climbers\n200m run\n25 wall balls\n50 DUs',
		id: '341',
		userId: '103641054784067776862'
	},
	{
		title: 'MARY',
		description:
			'A. 4 sets\n15 DB Bench Press\n10 Push Ups\n*Rest ~ 90 sec b.t sets\nB. For Time\nBlock Run\n100 Step Ups\n100 DUs\n75 mtn climbers\n75 Sit Ups\n50 Box Jumps\n50 Wall Balls\n25 cal airbike\n25 Burpees',
		id: '342',
		userId: '103641054784067776862'
	},
	{
		title: 'TROT 200',
		description:
			'A. “Cindy”\nAMRAP in 20 min\n5 pull ups\n10 push ups\n15 air squats\n*at the start and top of every 5 min, run 200m\nB. AMRAP in 18 min\n400m row\n15 one arm DB row ea. sid\n25 sit ups\n*at the start and top of every 5 min, 1 suicide liner',
		id: '343',
		userId: '103641054784067776862'
	},
	{
		title: 'OPPOSITES ATTRACT',
		description:
			'For time:\n40 wall balls\n40 box jumps\n40 KBS\n—400m run or row\n30 burpees\n30 K2E\n30 DB lunges\n—400m run or row\n20 wall balls\n20 box jumps\n20 KBS\n—400m run or row\n10 burpees\n10 K2E\n10 DB lunges\n—400m run',
		id: '344',
		userId: '103641054784067776862'
	},
	{
		title: 'GO FAST, REST MORE',
		description:
			'A. Alternate Minutes for 12 Min:\nMin 1 – 15 squats\nMin 2 – 15 KBS\nMin 3 – 5 box jumps + 100m run\nB. 3 rounds:\n1 min max burpees\nrest 2 min\nC. 10 rounds:\n5 pushups\n10 lunges\nD. 10 rounds:\n10 situps\n30 sec plank hold',
		id: '345',
		userId: '103641054784067776862'
	},
	{
		title: 'COUNT DOWN TO THE WEEKEND',
		description:
			'A. 4 rounds:\n40 sec push up –> renegade row\n40 sec Thrusters\n40 sec alt. DB snatch\nB. 4 rounds:\n40 sec Jump rope\n40 sec hollow rock or hold\n40 sec superman hold\nC. AMRAP in 20 min\n1500m row buy in\n+\n30 sec dead hang\n30 OH plate lunges\n15 burpees- jump on plate\n200m run',
		id: '346',
		userId: '103641054784067776862'
	},
	{
		title: 'CHIP ON THRU TO THE OTHER SIDE..',
		description:
			'A. Every 2 min complete 1 round:\n5 burpees\n10 lunges\n15 sit ups\nx 4 (8 min)\nB. Every 2 min complete 1 round of:\n350/300m row\nx 4 (8 min)\nC. Every 2 min complete 1 round\n20 Wall balls\n20 KBS\nx 4 (8 min)\nD. AMRAP in 10 min\n800m run buy in\n+\n10 toes through rings\n10 pistols each leg',
		id: '347',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMPDAY SANDWICH',
		description:
			'A. 21-15-9:\nSeated OH press\nPull ups\nB. 21-15-9:\nBack ext\nRussian twists ea. side\nC. 21-15-9:\nCal bike\nMtn climbers (x2)\nWeighted sit ups\nD. 21-15-9:\nBox jumps\nball slams\n250m row between rounds',
		id: '348',
		userId: '103641054784067776862'
	},
	{
		title: '12.4 REPEAT',
		description:
			'A. 3 sets:\n10 step ups ea leg (no alternating)\n10 floor bridges ea leg\nB. 3 sets:\n15 DB deadlift\n15 bent over 2-arm DB row\nC. 3 rounds for time:\n15 K2E\n20 OH weighted lunges\n1 suicide liner (5-10-15-20yds)\n15 box jumps\n20 thrusters\n1 suicide liner (5-10-15-20yds)',
		id: '349',
		userId: '103641054784067776862'
	},
	{
		title: 'MIDLINE MASH MONDAY',
		description:
			'A. 4 rounds:\n1 min jump rope\n1 min plank\nB. AMRAP in 40 min\n35 KBS\n200m run\n35 cal row/bike\n200m run\n35 HR push ups\n200m run\n35 Pullups\n200m run\n35 box jumps\n200m run\n35 weighted sit ups\n200m run\n35 goblet squats\n200m run',
		id: '350',
		userId: '103641054784067776862'
	},
	{
		title: 'SATURDAY SWOLE',
		description:
			'A. 4 rounds:\n15 dips\n10 DB lateral raise\nB. 3 rounds:\n15 push press\n10 burpees\n200m row sprint\nrest 60-90 sec bt rounds\nC. 3 sets:\n15 kb deadlifts\n10 box jumps\n200m run sprint\nrest 60-90 sec b.t sets\nD. 3 rounds:\n3o russian twists\n15 v- ups',
		id: '351',
		userId: '103641054784067776862'
	},
	{
		title: 'FRIDAY FLEX',
		description:
			'A. AMRAP in 12 min\n2000m/1750m row\n30 burpees\nB. AMRAP in 12 min\nBig block run\n40 sit ups\n40 kettlebell deadlifts\nC. AMRAP in 12 min\n100 cal C2 bike\n40 SA DB snatches\n40 pull-ups',
		id: '352',
		userId: '103641054784067776862'
	},
	{
		title: 'THURSDAY RESET',
		description:
			'A. 4 sets:\n30 lateral band walk steps (15/side)\n20 alt. step ups\nB. 4 sets:\n12 Tempo Ring Rows 333\n12 Jumping Pullups\nC. AFAP in any order:\n50 Wall Balls\n100 double-unders\n50 weighted sit ups\n100 double-unders\n50 KBS\n100 double-unders\n50 box jumps\n100 double-unders',
		id: '353',
		userId: '103641054784067776862'
	},
	{
		title: 'STAY WITH THE THREES',
		description:
			'A. 20-15-10:\nheavy DB front squats\npush ups @ 30X1B. 20-15-10\ncal row\nno push up burpees\nB. 20-15-10\nlunges (per leg)\n200m run b.t sets\nC. 20-15-10\nk2e\nab wheel\nD. 2 x 30 sec side plank per side',
		id: '354',
		userId: '103641054784067776862'
	},
	{
		title: 'COUNT UM DOWN',
		description:
			'A. AMRAP in 8 min\n5 step ups ea. leg\n10 GHD sit ups\n12 cal airbike\nB. AMRAP in 8 min\n5 burpees\n10 KBS\n30 reps battle rope alt wave\nC. AMRAP in 8 min\n5 pull ups\n10 push ups\n20 double unders\nD. AMRAP in 8 min\n5 DB bench press\n10 renegade rows\n150m row',
		id: '355',
		userId: '103641054784067776862'
	},
	{
		title: 'ANGIE',
		description:
			'A. 3 sets:\n30 sec air squats\n30 sec step ups\n1 min sec plank\nB. 3 rounds for time\nBlock Run – 800m – 400m\n50 KB Lunges (hold one KB any way you like)\n40 double unders\n30 Wall Balls\n20 cal airbike',
		id: '356',
		userId: '103641054784067776862'
	},
	{
		title: '10 FOR 30',
		description:
			'A. 3 Rounds:\n400m Run\n15 Thrusters\n15 Knees 2 Elbows\nB. 1 Round:\n50 Sit ups\n10 Ab Wheels\n10 V-Ups\n10 Ab Wheels\n50 Sit Ups\nC. 3 Rounds:\n400m Row\n15 Burpees\n15 Box Jumps',
		id: '357',
		userId: '103641054784067776862'
	},
	{
		title: 'FAST FRIDAYS',
		description:
			'A. 10-1 Ladder\nTGU\nK2E\n400m run\nB. 10-1 Ladder\nBox jumps\nPushups\n400m run\nC. 10-1 Ladder\nWall Balls\nToes to bar\n400m run\nD. 10-1 Ladder\nKBS\nAb Wheels',
		id: '358',
		userId: '103641054784067776862'
	},
	{
		title: 'SNATCHES OF ALL TYPES',
		description:
			'A. 3 sets:\n30 sec plank\n30 sec level changes\n30 sec mtn climbers\nB. for time:\n—Block run\n50 sit ups\n50 lunges\n50 push ups\n—-Block run\n50 pull ups\n50 lunges\n50 KBS\n—-Block run\n50 cal row\n50 thrusters\n50 dips\n*within each triplet, you may do the movements in any order\n**35 min time cap',
		id: '359',
		userId: '103641054784067776862'
	},
	{
		title: 'THRUSTAJERKS',
		description:
			'A. 3 rounds:\n1 min AMRAP pullups\n1 min row sprint\n1 min rest\nB.3 rounds:\n1 min AMRAP man makers\n1 min AMRAP DB box step ups\n1 min rest\nC. 3 rounds:\n30 lunges\n20 GHD sit ups\n15 burpees\n10 ring dips\n400m run',
		id: '360',
		userId: '103641054784067776862'
	},
	{
		title: 'JUST 20',
		description:
			'A. 20-15-10:\nheavy DB front squats\npush ups @ 30X1B. 20-15-10\ncal row\nno push up burpees\nC. 20-15-10\nlunges (per leg)\n200m run b.t sets\nD. 20-15-10\nk2e\nab wheel\nE. 2 x 30 sec side plank per side',
		id: '361',
		userId: '103641054784067776862'
	},
	{
		title: 'MIDLINE MONDAY',
		description:
			'A. 5 sets:\n10 seated OH press\n10 pull upsB. For time:\nBig block run\n20 burpees\n30 dips\n40 wall balls\n50 sit ups\n40 step ups (20/leg)\n30 KBS\n20 devils press',
		id: '362',
		userId: '103641054784067776862'
	},
	{
		title: '7 FOR 7',
		description:
			'A. 3 sets @ high effort\n15 burpees\n250m row sprint\n*rest 1-2 min bt sets\nB. 3 sets @ high effort\n15 KBS\n200m run sprint\n*rest 1-2 min bt sets\nC. 4 rounds AFAP\n15 back ext\n15 box jumps\n25 sit ups\n25 pushups\n35 squats\n35 DU’s',
		id: '363',
		userId: '103641054784067776862'
	},
	{
		title: 'FRIDAY FLEX',
		description:
			'A. 25-15-10\nWall Balls\nWeighted sit ups\n400m run\nB. 25-15-10\nKnees 2 elbows\nCal row\n400m run\nC. 25-15-10\nAb wheels\nPush press\n400m run\nD. 25-15-10\nKBS\nLunges (per leg)\n400m run',
		id: '364',
		userId: '103641054784067776862'
	},
	{
		title: 'SUMMER BODIES ARE MADE IN WINTER..',
		description:
			'A. For time:\n20ft DB walking lunges\n10 DB thrusters\n20ft DB walking lunges\n9 DB thrusters\n20ft DB walking lunges\n8 DB thrusters\n…\n20ft walking lunges\n1 DB thruster\nB. 3 rounds for time:\n400m run\n15 pull ups\n15 bench press\n15 push ups',
		id: '365',
		userId: '103641054784067776862'
	},
	{
		title: 'BACK TO WORK',
		description:
			'A. For time:\n50 DB hang squat cleans\n400m run\n50 push ups\n400m run\n50 cals\n400m run\n50 push press\n400m run\n50 sit ups\n400m run\n50 lunges\n**40 min time cap',
		id: '366',
		userId: '103641054784067776862'
	},
	{
		title: 'LAST DAY OF 2018',
		description:
			'A. 10-1 Ladder- KBS\n*30 DUs b.t each set\nB. 10-1 Ladder- K2E\n*15 sit ups b.t each set\nC. 10-1 Ladder- Wall Balls\n*5 box jumps\nD. 3 rounds for time:\n25 bench press\n400m run',
		id: '367',
		userId: '103641054784067776862'
	},
	{
		title: 'FEELING CHIPPY?',
		description:
			'AMRAP in 40 min:\n2 rounds:\n800m row\n50 KBS\n30 wall balls\n+\n2 rounds:\n800m run\n1 Lap farmer’s carry\n90 sec plank\n+\n2 rounds:\n30 cal bike\n30 GHD sit ups\n30 box jumps',
		id: '368',
		userId: '103641054784067776862'
	},
	{
		title: 'FAST FRIDAY..',
		description:
			'A. 4 rounds:\n1 min KBS\n1 min burpees\n1 min sit ups\n1 min box jumps\n1 min rest\nB. AMRAP in 20 min\nBig block run buy in\n+\n15 body rows\n15 OHS with PVC\n15 push ups\n1 min plank',
		id: '369',
		userId: '103641054784067776862'
	},
	{
		title: 'THE COOKIE BURN',
		description:
			'A. 3 sets:\n20 bench dips\n15 skull crushers\nB. 3 sets:\n10 split squats each leg (rear leg on riser)\n15 back ext\nC. For time:\n800m run\n70 sit ups\n60 KBDL\n50 wall balls\n40 box jumps\n30 knees 2 elbows\n20 burpees',
		id: '370',
		userId: '103641054784067776862'
	},
	{
		title: 'TWELVE DAYS OF CHRISTMAS',
		description:
			'Twelve Days of Christmas\n1 – 200m run\n2 – hang squat cleans\n3 – Ball Slams\n4 – Thrusters\n5 – Burpee\n6 – k2e\n7 – Pullups\n8 – Pistols\n9 – Box Jumps\n10 – KBS\n11 – Push Press\n12 – Man Maker\nLike the song.. 1 Then 2,1. 3,2,1… 12 down to 1',
		id: '371',
		userId: '103641054784067776862'
	},
	{
		title: 'SATURDAY SEVENS',
		description:
			'A. 5 rounds:\nSled push:100yd, 80yd, 60yd, 40yd, 20 yd\n10 DB burpee box step ups\n15 thrusters\n20 sit ups',
		id: '372',
		userId: '103641054784067776862'
	},
	{
		title: 'WINTER WORKOUT TIME',
		description:
			'Fot Time:\nBig block run\n50 lunges\n40 KB swings\n30 cal row\n20 burpees\n10 man makers\n20 burpees\n30 cal row\n40 KB swings\n50 lunges\nBig block run',
		id: '373',
		userId: '103641054784067776862'
	},
	{
		title: 'A REAL BURNER!',
		description:
			'A. 3 rounds:\n15 dips\n200m run\nB. 3 rounds:\n15 pull ups\n15 box jumps\nC. 3 rounds:\n30 sit ups\n20 KBS\nD. 3 rounds:\n250m row\n15 burpees\nE. 3 rounds:\n15 thrusters\n20 SA DB snatches (10/side)',
		id: '374',
		userId: '103641054784067776862'
	},
	{
		title: 'SQUAT IS KING!',
		description:
			'A. 3 sets for quality:\n15 bench press @ 30X1\n15 body rows @ 30X1\nB. 3 sets AFAP:\n15 DB push press\n15 KBS\nC. 3 sets for quality:\n15 rev lunges Rt leg @ 30X1\n15 rev lunges Lt leg @ 30X1\n10 back extensions @ 2011\nD.  3 sets AFAP:\n25 squats\n200 m run\nE.  3 sets\n10 ab wheels\n10 hollow rocks',
		id: '375',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE UP ON 8',
		description:
			'A. Against a 10 min clock\nBig block run\nAMRAP box jumps with time left\n*scale run if needed to allow for at least 2 min of box jumps\nB. Against a 10 min clock\n1500m row\nAMRAP push ups with time left\nC. AMRAP in 10 min\n20 sit ups\n15 wall balls\n10 pullups',
		id: '376',
		userId: '103641054784067776862'
	},
	{
		title: 'TEST WEEK!!!!!',
		description:
			'A. Against a 17 min clock:\n“death by burpees”, then max double-unders with time remaining.\nB. 40-30-20-10 rep rounds AFAP:\nDB weighted lunges\nDB push press\nKBS\nsquats\nsitups\ncal row or airbike',
		id: '377',
		userId: '103641054784067776862'
	},
	{
		title: 'MINUS 3',
		description:
			'AMRAP in 4 min, 7 min, 10 min, then 1 full round\n*Rest 1 min bt each AMRAP\n**Begin each AMRAP at the start of the work out (400m run)\n400m run\n15 pull ups\n15 curl to press\n20 wall balls\n20 push ups\n30 back ext\n30 dips\n40 sit ups\n40 mtn climbers\n50 lunges\n50 cal row',
		id: '378',
		userId: '103641054784067776862'
	},
	{
		title: 'TIMES TEN',
		description:
			'A. AMRAP in 10 min\n10 bench press\n20 renegade rows\n200m run\nB. AMRAP in 10 min\n10 DB weighted squats\n20 alt. DB weighted step ups\n200m row\nC. 30-20-10\nK2E\nKBS\nBurpees',
		id: '379',
		userId: '103641054784067776862'
	},
	{
		title: '13.1',
		description:
			'A. 3 rounds:\n1 min plank\n1 min box jumps\n1 min thrusters\n1 min burpees\n1 min rest\n3-5 min rest\nB. AMRAP in 20 min\nblock run buy in\nthen w/ time left AMRAP:\n1 Lap Farmer’s carry\n10 KBS\n20 lunges\n200m run',
		id: '380',
		userId: '103641054784067776862'
	},
	{
		title: 'LUCKY NUMBER 7',
		description:
			'A. 4 Rounds:\n400m Run\n15 pushups\n15 JPUs\nB. 1 Round:\n50 Sit ups\n10 Ab Wheels\n10 V-Ups\n10 Ab Wheels\n50 Sit Ups\nC. 4 Rounds:\n400m Row\n20 SA DB snatches (10/side)\n20 alt. reverse lunges',
		id: '381',
		userId: '103641054784067776862'
	},
	{
		title: '50’S',
		description:
			'A. 3 sets:\n1 min AMRAP TGU right arm\n1 min AMRAP TGU left arm\n1 min Plank\nB. 4 rounds for time:\n400m run\n15 bench press\n20-15-10-5 burpees (decrease reps by 5 each round)\n25 wall balls\n30 sit ups',
		id: '382',
		userId: '103641054784067776862'
	},
	{
		title: 'CALM BEFORE THE STORM',
		description:
			'A. EMOM x 8 min\n100m run + AMRAP KBS w/ time left\nB. EMOM x 8 min\n10 push ups+ AMRAP sit ups with time left\nC. 30-20-10\nthrusters\ncal row\nD. 3 rounds:\n15 dips\n15 DB hang pwr cleans',
		id: '383',
		userId: '103641054784067776862'
	},
	{
		title: 'MAX TGU!!!!!! OH NO!',
		description:
			'A. 6 min max TGU’s\nB. 3 min max reps at each, rest 1 min bt exercises\nWall Balls\nPush Ups\nWeighted Sit ups\nKnees 2 Elbows\nC. AMRAP in 15 min\n200m Run\n10 Burpees\n1 min Plank',
		id: '384',
		userId: '103641054784067776862'
	},
	{
		title: 'DIRTY 30',
		description:
			'A. As a warm up\n3 sets:\n30 sec mtn climbers\n30 sec speed step\n30 sec squats\nB. 3 sets:\n15 push press\n15 KBS\nC. 3 sets:\n15 back ext\n15 K2E\nD. 3 rounds:\n400m run\n25 wall balls\n20 pull ups\n15 burpees',
		id: '385',
		userId: '103641054784067776862'
	},
	{
		title: 'DOUBLE PUMP',
		description:
			'1k row\nA. 4 rounds:\n5 man makers\n15 box jumps\nBlock run\nB. 4 rounds:\n10 burpees\n15 GHD sit ups\n1k row\nC. 4 rounds:\n15 KBS\n20 walking lunges with a kb pass bt the legs\nBlock run',
		id: '386',
		userId: '103641054784067776862'
	},
	{
		title: 'CRAZY 8S',
		description: '20 GHD\n15 kBS (70/53)\n+\nAMRAP 8 min\n15 toes to bar\n10 squat cleans\n*rest 8 min bt couplets',
		id: '387',
		userId: '103641054784067776862'
	},
	{
		title: 'ROW, CLIMB, CLEAN',
		description:
			'A. EMOM x 10 min\nODD: 5 burpee pullups\nEVEN: 20 air squats\nB. 3 x Farley hill sprints\n*rest/walk on the way down\nC. 3 rounds for time:\n10 pull ups\n15 cal row\n20 step ups\n25 push press\n30 sit ups',
		id: '388',
		userId: '103641054784067776862'
	},
	{
		title: 'CINDY',
		description:
			'A. 10-1 Ladder\nBox Jumps\nK2E\n3 min plank\nB. 10-1 ladder\npush ups\nwall balls\n30 cal airbike or row\nC. 10-1 Ladder\nKBS\nburpees\n3 min plank\nD. 10-1 Ladder\nSeated OH Press\nDB row per side\n30 cal airbike or row',
		id: '389',
		userId: '103641054784067776862'
	},
	{
		title: 'GET UP!',
		description:
			'A. 15.5\n27-21-15-9\nCal row\nthrusters\nB. 3 rounds:\n20 pull ups\n20 bench press\nrest 2-3 min\nC. 4 rds:\n10 ab wheel reps\n20 situps\n30 mtn climbers',
		id: '390',
		userId: '103641054784067776862'
	},
	{
		title: 'FLEX FRIDAY',
		description:
			'A.  AMRAP in 40 min\nBig block run buy-in\nthen AMRAP w/time left\n80 lunges\n70 DUs\n60 sit ups\n500m row\n40 box jumps\n30 no pushup burpees\n200m run\n \nB. Ab Finisher Coaches Choice',
		id: '391',
		userId: '103641054784067776862'
	},
	{
		title: 'PYRAMID SCHEME',
		description:
			'A. 4 rds:\n20 sec pushups\n30 sec plank\n10 sec rest\nB. 4 rounds for time:\n200m run\n20-15-10-5 ring dips (scale as needed, but make them challenging!)\n10 box jumps\nC. 4 rounds for time:\n10 burpees\n15 cal airbike\n20 KBS',
		id: '392',
		userId: '103641054784067776862'
	},
	{
		title: 'CLEAN IT UP!',
		description:
			'A. AMRAP in 9 min:\n200m run\n20 wall balls\nB. AMRAP in 9 min:\n400m Row\n30 sit ups\nC. For time:\n50 double unders\n2 min plank\n30 steps OH walking lunges\n2 min wall sit\n30 steps OH walking lunges\n2 min plank\n50 double unders',
		id: '393',
		userId: '103641054784067776862'
	},
	{
		title: 'TABATA TUESDAY',
		description:
			'A. 21-15-9\nbench press\nclapping pushups (scale as needed)\n400m run\nB. 21-15-9\nKBS\nbox jumps\n400m run\nC. 21-15-9\nhollow rocks\nGHD situps\n400m run\nD. 21-15-9\npull ups\ncal row',
		id: '394',
		userId: '103641054784067776862'
	},
	{
		title: 'FIGHT GONE BAD!!!',
		description:
			'A. AMRAP in 90 sec; 30 sec rest b.t exercises\nAir Squats\nBox Jumps\nRow/Airbike\nDouble unders\nx 2 rounds\nB. 10 rounds for time:\n3 burpees\n6 KBS\n9 sit ups\n100m run',
		id: '395',
		userId: '103641054784067776862'
	},
	{
		title: 'STRICTY SATURDAY',
		description:
			'A. 4 rounds:\nAgainst a 3 min clock, run 400m then:\nAMRAP box jumps w/ time left\nor\nAMRAP k2e w/ time left\n** complete 2 rounds with each exercise, in any order\nB. 3 sets:\n15 skull crushers\n15 push ups\nC. 3 sets:\n15 back ext\n10 ab wheels\nD. 3 sets:\n200m row\n15 wall balls',
		id: '396',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMP DAY PUMP DAY',
		description:
			'For Time:\n50 Lunges each leg\n400m Run\n50 Box Jumps\n400m Run\n50 Thrusters\n400m Run\n50 Weighted Sit Ups\n400m Run\n50 Knees 2 Elbows\n400m Run\n50 Double Unders',
		id: '397',
		userId: '103641054784067776862'
	},
	{
		title: 'PULL PULL PULL',
		description:
			'A. 4 sets:\n15 sec superman hold\n15 sec level changes\n15 sec hollow rocks\n15 sec rest\nB. Against a 6 min clock\n800m Run\nAMRAP air squats w time remaining\nC. 4 sets:\n1 min max reps box jumps\n1 min max reps thrusters\n1 min max reps wtd. sit ups\n1 min rest\nD. 2 rounds for time\n30 cal row or airbike (1 round of each)\n15 chin ups (sup. grip)\n20 burpees\n25 alt. single arm DB snatches',
		id: '398',
		userId: '103641054784067776862'
	},
	{
		title: 'FRAN ON A MONDAY!',
		description:
			'A. 4 rounds:\n10 DB curl to press\n10 push ups\n*rest 1-2 min bt rounds\nB. 4 rounds:\n10/7 strict pullups\n10 pistols ea. leg\nC. 3 rounds:\n30 sit ups\n10 turkish get-ups\n10 burpees\n400m run',
		id: '399',
		userId: '103641054784067776862'
	},
	{
		title: 'PICK YOUR POISON',
		description:
			'A. AMRAP in 8 min\n5 pull ups\n10 push ups\n15 squats\nB. AMRAP in 8 min\n10 burpees\n200m run\nC. AMRAP in 8 min\n10 push press\n15 sit ups\n20 double unders\nD. AMRAP in 8 min\n45 sec plank\n30 sec battle rope\n15 ball slams',
		id: '400',
		userId: '103641054784067776862'
	},
	{
		title: 'FUN RUN',
		description:
			'For time:\n50 box jumps\n50 cal row\n50 pushups\nblock run\n50 wall balls\n50 KBS\n50 wtd. lunges\nblock run\n50 jumping pullups\n50 situps\n50 back extensions\nblock run',
		id: '401',
		userId: '103641054784067776862'
	},
	{
		title: 'MIDLINE',
		description:
			'A. 3 sets:\n20 sec hollow rocks\n20 sec superman hold\n20 sec single leg bridge hold ea. side\nB. 10-1 Ladders\npush ups\nbox jumps\nC. 10-1 Ladders\nsingle arm Db snatch (per arm)\nlunges (per leg)\nD. 10-1 Ladders\ncal row\nburpees\nE. 10-1 Ladders\nback ext\ntoes through rings',
		id: '402',
		userId: '103641054784067776862'
	},
	{
		title: 'LETS MIX IT UP',
		description:
			'A. 4 burpees AFAP every 30 sec x 5 min\nB. AMRAP in 30 min\nBlock Run buy-in\n10 ab wheels\n20 pull ups\n30 air squats\n40 situps\n50 double unders\n1 suicide liner (5-10-15-20yds)',
		id: '403',
		userId: '103641054784067776862'
	},
	{
		title: 'SNATCH OFF..',
		description:
			'A. 4 rounds:\n15 dips\n10 DB lateral raise\nB. 3 rounds:\n15 push press\n10 no push up burpees\n200m row sprint\nrest 60-90 sec bt rounds\nC. 3 sets:\n15 k2e\n10 box jumps\n200m run sprint\nrest 60-90 sec b.t sets\nD. 3 rounds:\n15 heavy weighted situps\n15 bw situps AFAP!',
		id: '404',
		userId: '103641054784067776862'
	},
	{
		title: 'DELOAD WEEK!',
		description:
			'A. 30-20-10\nburpees\nball slams\n400m run\nB. 30-20-10\ndouble unders x 3\npull ups\n400m run\nC. 30-20-10\nDB thrusters\nrenegade rows\n400m run\nD. 2 min plank hold + 50 situps AFAP',
		id: '405',
		userId: '103641054784067776862'
	},
	{
		title: 'STEP UP',
		description:
			'For time:\nBlock run\n100 squats\n90 sit ups\n80 lunges\n70 double unders\n60 push ups\n50 KBS\n40 cal row\n30 pull ups\n20 toes to bar\n10 burpee box jump overs',
		id: '406',
		userId: '103641054784067776862'
	},
	{
		title: 'FOUR FOR FRIDAY',
		description:
			'A. 3 rounds:\n50 double unders\n250m row\n400m run\nB. 3 rounds:\n20 wall balls\n20 alt. step ups (10/leg)\n75  situps\nC. 3 rounds:\n15 skull crushers\n15 body rows\n400m run\nD. 3 rounds:\n15 back ext\n15 KB high pull\n75  situps',
		id: '407',
		userId: '103641054784067776862'
	},
	{
		title: 'RUNNIN WITH THE DEVIL…',
		description:
			'A. 10 rounds:\n4 thrusters\n6 renegade rows\n8 sit ups\n800m run or row\nB. 10 rounds:\n4 burpees\n6 box jumps\n8 OH lunges per leg\n800m run or row',
		id: '408',
		userId: '103641054784067776862'
	},
	{
		title: 'WINDY WEDNESDAY',
		description:
			'A. 4 sets\n30 sec Mtn Climbers\n45 sec plank\n15 sec rest\nB. Alt. 1-10 Ladders\nBurpees\nBox Jumps\nC. Alt. 1-10 Ladders\nWall Balls\nKBS\nD. Complete 1 set AFAP:\n50 Push Ups\n500m Row\n100 Lunges',
		id: '409',
		userId: '103641054784067776862'
	},
	{
		title: 'STRONGER BY THE DOZEN',
		description:
			'A. 30-20-10\nCal row\nburpees\nB. 30-20-10\ndb ground to overhead\nbox jumps\nC. 30-20-10\nback ext\n1/2 reps ab wheels (15-10-5)\nD. 30-20-10\nWall Balls\nPush ups',
		id: '410',
		userId: '103641054784067776862'
	},
	{
		title: 'MINUS 3',
		description:
			'A. AMRAP in 8 min\n20 single arm DB row (10/side)\n10 single arm OHS (5/side)\n10 alt. step ups\nB. AMRAP in 8 min\n5 bench press\n7 knees 2 elbows\n9 KBS\nC. AMRAP in 8 min\n10 plyo push ups\n15 sit ups\n30 double unders\nD. 3 Farley hill runs\nsprint from the bottom, to the top. rest/walk on the way down',
		id: '411',
		userId: '103641054784067776862'
	},
	{
		title: 'NO REST BARBARA',
		description:
			'AMRAP in 2 min, 4 min, 6 min, 8 min, and 10 min *resting 1, 2, 3, and 4 min bt each AMRAP, respectively.\n10 burpees\n10 pullups\n15 goblet squats\n15 KB swings\n20 hand release pushups\n20 DB weighted lunges\n25 GHD situps\n25 box jumps/step ups\nAMRAP cal row *you may switch up the order of the movements with the same rep count (pullups before burpees, etc), but start with the 10’s and move up each round.',
		id: '412',
		userId: '103641054784067776862'
	},
	{
		title: '1,2,3,4 PICK THAT BAR UP OFF THE FLOOR…',
		description:
			'A. 10 rounds for time:\n5 bench press\n7 burpees\n9 box jumps\n800m run or row\nB. 10 rounds for time:\n5 knees 2 elbows\n7 wall balls\n9 lunges per leg\n800m run or row',
		id: '413',
		userId: '103641054784067776862'
	},
	{
		title: 'FLIP INTO FALL',
		description:
			'5 rounds for time:\n100m run\n15 Db hang squat cleans\n15 push ups\n100m run\n15 KBS\n15 box jumps\n100m run\n15 cal row\n15 push press',
		id: '414',
		userId: '103641054784067776862'
	},
	{
		title: 'LUCKY 13',
		description:
			'A. 7 min clock\n1k/800m Row\nAMRAP burpees with time remaining\nrest 2 min\nB. 7 min clock\n800m Run\nAMRAP thrusters with time remaining\nrest 2 min\nC. 7 min clock\n100 sit ups\nAMRAP DUs with time remaining\nrest 2 min\nD. EMOM x 7 min\n100m run\nAMRAP box jumps with time left',
		id: '415',
		userId: '103641054784067776862'
	},
	{
		title: 'UNBROKEN',
		description:
			'A. 4 rounds:\n5 heavy strict press\n8 heavy push press\n10 K2E\n*rest 1-2 min bt rounds\nB. 4 rounds:\n5 heavy squats\n8 jump squats\n10 back ext\n*rest 1-2 min bt rounds\nC. 4 rounds:\n250m row\n10 no-pushup burpees\n15 push ups\n20 KBS',
		id: '416',
		userId: '103641054784067776862'
	},
	{
		title: 'DO IT FOR DT',
		description:
			'AMRAP in 40 min:\n1 min plank\n10 burpee box jump overs\n20 pullups\n30 pushups\n40 lunges\n50 situps\n1 lap farmer carry',
		id: '417',
		userId: '103641054784067776862'
	},
	{
		title: 'CHIPPY SATURDAY',
		description:
			'3 sets:\n10 bench press\n15 pushup\n*400m run\n3 sets:\n15 wall balls\n15 cal row\n*400m run\n3 sets:\n15 KBS\n15 pullups\n*400m run\n3 sets:\n30 situps\n1 min plank\n*400m run',
		id: '418',
		userId: '103641054784067776862'
	},
	{
		title: 'EVERY 5 FRIDAYS',
		description:
			'5 rounds each for time:\n400m run\n50 double unders\n20 push ups\n20 KBS\n20 Thrusters\n*90 sec rest b.t rounds\n*mix up order of movements each round',
		id: '419',
		userId: '103641054784067776862'
	},
	{
		title: 'THRUST-DAY',
		description:
			'A. 4 sets:\n20 sec jumping jacks\n20 sec high knees\n20 sec mtn climbers\nB. For time:\n60 sec Plank\n50 weighted Lunges\n40 situps\n30 Push Press\n20 Burpees\n800m run or row\n20 Burpees\n30 Push Press\n40 situps\n50 weighted Lunges\n60 sec Plank',
		id: '420',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMP DAY',
		description:
			'A.  3 rounds:\n1 min situps\n15 sec rest\n45 sec plank\n15 sec rest\n30 sec side plank\n15 sec rest\n30 sec other side plank\n*rest 30 sec bt rounds\nB. 3 rounds:\n10 pushups @ 30×1\n20 sumo deadlift high pull\n10 pullups @ 30×1\n20 cal row\n10 DB front squats @ 30×1\n20 lunges\n10 lateral band steps ea. side\n20 air squats',
		id: '421',
		userId: '103641054784067776862'
	},
	{
		title: 'TORQUED TUESDAY..',
		description:
			'B. 10 rounds for time:\n20 sec airbike or row sprint\nrest 1 min\n+\n100 unbroken abmat situps + 50 ab wheel reps',
		id: '422',
		userId: '103641054784067776862'
	},
	{
		title: 'SATURDAY SLED RIDE',
		description: 'B. 5 rounds for time:\n60yd sled push (225/135)\n20 pullups',
		id: '423',
		userId: '103641054784067776862'
	},
	{
		title: 'PUSH IT TO THE LIMIT..',
		description: 'Jerry\nFor time\n1 mile run\n2k row\n1 mile run',
		id: '424',
		userId: '103641054784067776862'
	},
	{
		title: 'HAMMER DOWN',
		description:
			'Hammer\n5 rounds, each for time\n5 power cleans 135/95\n10 FS 135/95\n5 jerks 135/95\n20 pullups\nrest 90 sec',
		id: '425',
		userId: '103641054784067776862'
	},
	{
		title: 'GET YOUR ROLL ON..',
		description:
			'For time\n100 Lunges\n90 Squats\n80 Sit Ups\n70 Push Ups\n60 KBS\n50 Pull Ups/Body Rows\n40 Box jumps\n30 K2E\n20 burpees\n1k row',
		id: '426',
		userId: '103641054784067776862'
	},
	{
		title: 'MIDLINE MONDAY',
		description:
			'A. 3 rounds 30 sec on / 30 sec off at each:\nRussian KBS\nrow\nburpees\nbike erg\nthrusters\nDUs\n*complete 2 times through',
		id: '427',
		userId: '103641054784067776862'
	},
	{
		title: 'NUTTS',
		description:
			'Nutts\n10 handstand push-ups\n250-lb. deadlifts, 15 reps\n25 box jumps, 30-inch box\n50 pull-ups\n100 wall-ball shots, 20-lb. ball\n200 double-unders\nRun 400 meters with a 45-lb. plate',
		id: '428',
		userId: '103641054784067776862'
	},
	{
		title: 'BRIAN’S SONG',
		description:
			'A. 4 Rounds\n10 KBS\n30 Lunges\nB.  21-15-9\nPull Ups\nBurpees\nC.  21-15-9\nWall Ball\nBox Jumps\nD.  4 Rounds:\n250m Row Sprint\nRest 1 Minute',
		id: '429',
		userId: '103641054784067776862'
	},
	{
		title: 'DG',
		description:
			'A.  12 min AMRAP:\n15 push press\n200m run\n15 cal row\n200m run\nB.  12 min AMRAP:\n5 Dips\n10 Pull Ups\n15 KB Swings\n20 Lunges\nC.  12 min AMRAP:\n5 Ab Wheels\n10 Back Ext\n15 Box Jumps\n20 Renegade Rows',
		id: '430',
		userId: '103641054784067776862'
	},
	{
		title: 'RUN FAST, LIFT QUICK',
		description:
			'40 Minute AMRAP:\n400m Run\n15 KBS\n15 HR pushups\n15 K2E\n15 weighted situps\n15 thrusters\n15 cal air bike\n50 double-unders',
		id: '431',
		userId: '103641054784067776862'
	},
	{
		title: 'JT',
		description:
			'A. 10-1 Ladder- KBS\n*30 DUs b.t each set\nB. 10-1 Ladder- K2E\n*15 sit ups b.t each set\nC. 10-1 Ladder- Wall Balls\n*5 box jumps\nD. 3 rounds for time:\n25 bench press\n400m run',
		id: '432',
		userId: '103641054784067776862'
	},
	{
		title: 'LUMBER THRU…',
		description:
			'LUMBERJACK 20\nFor time:\n20 DL (275/185)\n400m run\n20 KBS (70/53)\n400m run\n20 OHS (115/85)\n400m run\n20 burpees\n400m run\n20 C2B pullups\n400m run\n20 box jumps (24/20)\n400m run\n20 DB SC (40/25)\n400m run',
		id: '433',
		userId: '103641054784067776862'
	},
	{
		title: 'ITS ALL IN THE HIPS…',
		description:
			'Deadlift\n5 sets of 5 @ 80%\n“Witten”\n7 rounds for time\n15 KBS (53/35)\n15 Power cleans (95/65)\n15 box jumps (24/20)',
		id: '434',
		userId: '103641054784067776862'
	},
	{
		title: 'FRIDAY FUN',
		description: '“Helton”\n3 rounds for time\n800M run\n30 DB squat cleans (50/35)\n30 burpees',
		id: '435',
		userId: '103641054784067776862'
	},
	{
		title: 'ROB PETER TO PAY PAUL..',
		description:
			'A. 8min AMRAP:\n200m Row\n10 V-Ups\n10 Ball Slams\nB. 8min AMRAP:\n200m Run\n10 Box Jumps\n10 KB Swings\nC. 8min AMRAP:\n50 DUs\n12 Lunges\n10 Good Mornings\nD. 8min AMRAP:\n10 Cal Airbike\n20 Sit Ups\n10 Thrusters',
		id: '436',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMPDAY OR GUT BUSTER?',
		description:
			'A. 21-15-9\nBench press\nPush ups\nB. 21-15-9\nBack Ext\nWeighted step up per leg\nC. 21-15-9\nPush press\nNo push up burpees\nD. 21-15-9\nGoblet Squats\nKBS\nE. 21-15-9\nWeighted sit ups\nAb wheels\n*400m run in between each*',
		id: '437',
		userId: '103641054784067776862'
	},
	{
		title: 'CAN YOU HANG?',
		description:
			'A. Every 2 min complete 1 round:\n5 burpees\n10 lunges\n15 sit ups\nx 4 (8 min)\nB. Every 2 min complete 1 round of:\n350/300m row\nx 4 (8 min)\nC. Every 2 min complete 1 round\n20 Wall balls\n20 KBS\nx 4 (8 min)\nD. AMRAP in 10 min\n800m run buy in\n+\n10 toes through rings\n10 pistols each leg',
		id: '438',
		userId: '103641054784067776862'
	},
	{
		title: 'START THE WEEK OFF RIGHT',
		description:
			'AMRAP in 40 min:\n2 rounds:\n30 cal bike\n30 GHD sit ups\n30 box jumps\n+\n2 rounds:\n800m run\n1 Lap farmer’s carry\n90 sec plank\n+\n2 rounds:\n800m row\n50 KBS\n30 wall balls',
		id: '439',
		userId: '103641054784067776862'
	},
	{
		title: 'IF THIS DOESN’T GIVE ME ABS…',
		description:
			'A. TABATA:\nDB burpees\nDB push press\nHollow rocks\nAir squats\n*all 8 sets at once, before moving onto the next\nB. 4 rounds for time:\n400m run\n30 Lunges\n20 SA KBS (10/arm)\n10 Pull ups',
		id: '440',
		userId: '103641054784067776862'
	},
	{
		title: 'HIGH JUMP',
		description:
			'A. AMRAP in 7 min\n15 bent over rear delt flyes\n10 dips\n15 body rows\nB. AMRAP in 7 min\n15 back ext\n15 lunges each leg\n15 goblet squats\nC. AMRAP in 20 min\nblock run buy in\n+\n10 heavy sandbag/med ball G2S\n20 renegade rows\n25 sit ups\n200m run',
		id: '441',
		userId: '103641054784067776862'
	},
	{
		title: 'LET THE FUN BEGIN!',
		description:
			'A. Against a 10 min clock:\n300 jump rope singles\nWith time remaining, AMRAP:\n20 KBS\n10 pullups\nB. Against a 10 min clock:\n800m Run\nWith time remaining, AMRAP:\n5 push ups\n8 burpees\nC. Against a 10 min clock:\n60 cal row or C2 bike\nWith time remaining, AMRAP:\n5 weighted DB squats\n5 push press\n10 renegade Rows',
		id: '442',
		userId: '103641054784067776862'
	},
	{
		title: 'AHH THE OLE SUMO DEADLIFT HIGH PULL…',
		description:
			'A. Fight Gone Badish\n3 rounds:\n1 min wall balls\n1 min KB high pull\n1 min box jumps\n1 min push press\n1 min rowing\n1 min rest between rounds\nB. 30-20-10\nBench press\nGHD sit ups\nAlt rev lunge with KB pass through',
		id: '443',
		userId: '103641054784067776862'
	},
	{
		title: 'THE TRUE FILTHY FIFTY!',
		description:
			'A. 21-15-9:\nSeated OH press\nPull ups\nB. 21-15-9:\nBack ext\nbanded torso rotation ea. side\nC. 21-15-9:\nCal bike\nMtn climbers (x2)\nWeighted sit ups\nD. 21-15-9:\nBox jumps\nball slams\n200m run each round',
		id: '444',
		userId: '103641054784067776862'
	},
	{
		title: 'SATURDAYS ARE FOR THE GIRLS',
		description:
			'A. EMOM x 6 min\n8-12 burpees\nB. EMOM x 6 min\n40 sec row or airdyne sprint\nC. EMOM x 6 min\n15 wall balls\nD. 4 rounds for time:\n400m run\n10 box jumps\n20 sit ups\n30 sec plank (add weight to increase difficulty)',
		id: '445',
		userId: '103641054784067776862'
	},
	{
		title: 'BATTLE SLEDS',
		description:
			'A. 40 sec @ each (20 sec rest bt) x 3 rounds:\nRenegade rows\nDB weighted burpees\nDB curl to press\nB. AMRAP in 12 min\n10 ab wheels\n15 bench press\n20 sit ups\n200m run\nC. AMRAP in 12 min\n10 weighted step ups (5/leg)\n15 wall balls\n20 2 arm waves w/ battle rope\n200m row',
		id: '446',
		userId: '103641054784067776862'
	},
	{
		title: 'COUNT UM DOWN',
		description:
			'A. 3 sets:\n10 step ups ea leg (no alternating)\n10 floor bridges ea leg\nB. 3 sets:\n15 push ups\n15 bent over 2-arm DB row\nC. 3 rounds for time:\n15 K2E\n20 OH weighted lunges\n1 suicide liner (5-10-15-20yds)\n15 box jumps\n20 thrusters\n1 suicide liner (5-10-15-20yds)',
		id: '447',
		userId: '103641054784067776862'
	},
	{
		title: 'HUMPDAY TABATA',
		description:
			'A. For time:\n50 DB hang squat cleans\n400m run\n50 push ups\n400m run\n50 cals\n400m run\n50 push press\n400m run\n50 sit ups\n400m run\n50 lunges\n**40 min time cap',
		id: '448',
		userId: '103641054784067776862'
	},
	{
		title: 'HOP SKIP AND A PULL',
		description:
			'A. 4 rounds:\n1 min KBS\n1 min burpees\n1 min sit ups\n1 min box jumps\n1 min rest\nB. AMRAP in 20 min\nBig block run buy in\n+\n15 body rows\n15 OHS with PVC\n15 push ups\n1 min plank',
		id: '449',
		userId: '103641054784067776862'
	},
	{
		title: 'THE ICING ON THE CAKE',
		description:
			'A. 12-10-8-6-4-2 reps of:\nBench press\nPush ups\nPull ups\nB. 12-10-8-6-4-2\ngoblet squats\nswitch lunges (each side)\nback ext\nC. 3 rounds:\n10 ab wheels\n200m run\n1 min plank\n300m row or 12 cal air bike\n30 sit ups',
		id: '450',
		userId: '103641054784067776862'
	},
	{
		title: 'THE SWING OF SUMMER',
		description:
			'A. 3 sets:\n30 sec row or bike @ 75%\n30 sec row or bike @ 90%\n \nB. 3 sets:\n30 sec sit ups\n30 sec level changes\n \nC. For time:\nBig Block run\n+\n30-20-10\nPush ups\nPull ups\nGoblet squats',
		id: '451',
		userId: '103641054784067776862'
	},
	{
		title: 'CARRY ON',
		description: '15-12-9-6-3',
		id: '452',
		userId: '103641054784067776862'
	},
	{
		title: 'RACE YA TO THE TOP..',
		description:
			'A. EMOM x 10 min\n3 DB ground to shoulders\n3 thrusters\nB. AMRAP in 12 min\n20 seated OH press\n20 KB high pull\n400m run\nC. AMRAP in 12 min\n20 cal row or bike\n20 pistols (10 each leg)\n20 weighted sit ups',
		id: '453',
		userId: '103641054784067776862'
	},
	{
		title: 'DUB SANDWICH',
		description:
			'A. 3 sets:\n20 bench dips\n15 skull crushers\nB. 3 sets:\n10 split squats each leg (rear leg on riser)\n15 back ext\nC. For time:\n800m run\n70 sit ups\n60 KBDL\n50 wall balls\n40 box jumps\n30 knees 2 elbows\n20 burpees',
		id: '454',
		userId: '103641054784067776862'
	},
	{
		title: 'CARRIED AWAY',
		description:
			'A. 4 rounds:\n1 min jump rope\n1 min plank\nB. AMRAP in 30 min\n35 KBS\n200m run\n35 cal row/bike\n200m run\n35 HR push ups\n200m run\n35 dips\n200m run\n35 box jumps\n200m run\n35 GHD sit ups\n200m run\n35 goblet squats\n200m run',
		id: '455',
		userId: '103641054784067776862'
	},
	{
		title: 'PERFECT 10',
		description:
			'A. AMRAP in 10 min\n15 bench press\n15 bent over rows\n1 min plank\nB. AMRAP in 10 min\n20 OH weighted lunges\n20 weighted plate squats\n20 weighted sit ups\nC. AMRAP in 15 min\nBlock run buy in\n+\n50 DUs\n40 KBS\n30 pull ups\n200m run',
		id: '456',
		userId: '103641054784067776862'
	},
	{
		title: 'BENCHMARK',
		description:
			'A. EMOM x 10 min\nodd:15 seated OH press\neven: 12 no push up burpees\nB. 1 round for time, or AMRAP in 30 min (whichever comes first)\n100 sit ups\n400m run\n80 wall balls\n400m row\n60 KBS\n400m run\n40 JPU\n400m row\n20 ab wheel',
		id: '457',
		userId: '103641054784067776862'
	},
	{
		title: '10 ROUNDS DOWN',
		description:
			'A. For time:\n500m row\n+\n5 rounds\n15-12-9-6-3 burpees\n15-12-9-6-3 k2e\n15-12-9-6-3 thrusters\n+\n500m row\nB. For time:\n2 min plank\n+\n5 rounds\n15-12-9-6-3 pullups\n15-12-9-6-3 box jumps\n15-12-9-6-3 ab wheels\n+\n2 min plank',
		id: '458',
		userId: '103641054784067776862'
	},
	{
		title: 'SUPER 8S',
		description: 'A. death by burpees (12 min cap)\nB. 4 rounds for time (25 min cap)',
		id: '459',
		userId: '103641054784067776862'
	},
	{
		title: 'REP GAME',
		description:
			'A. EMOM x 5 min\n10 knees 2 elbows\nHold plank remainder of minute\n\nB. EMOM x 5 min\n100m run\nFinish each 1 min interval with max reps push ups\nC. 4 rounds:\n1 lap farmer carry\n20 stepups\n20 body rows\n250m row/600m bike erg/ 12 cal air bike',
		id: '460',
		userId: '103641054784067776862'
	},
	{
		title: 'DELTS ON DUBS',
		description:
			'A. 3 rounds:\n1 min HR push ups\n1 min KBS\n1 min sit ups\nB. 3 rounds:\n1 min wall balls\n1 min plank\n1 min box jumps\nC. AMRAP in 18 min\n400m run\n10 ab wheels\n20 push press\n30 DUs',
		id: '461',
		userId: '103641054784067776862'
	},
	{
		title: 'BAD MEDICINE',
		description:
			'A. AMRAP in 8 min\n20 DUs\n15 bench press\n10 push ups\nB. AMRAP in 8 min\n200m run\n8 lunges per leg (off riser)\n10 DB stiff legged DL\nC. AMRAP in 8 min\n200m row\n15 dips\n15 box jumps\nD. AMRAP in 8 min\n8 cal air bike\n20 sit ups\n1 Lap Farmer carry',
		id: '462',
		userId: '103641054784067776862'
	},
	{
		title: 'ISABEL',
		description:
			'A. 3 sets:\n20 bench press\n20 pull ups\nB. 3 sets:\n20 weighted squats\n20 weighted lunges\nC. 3 rounds:\n400m run\n15 box jumps\n15 burpees\n30 sit ups',
		id: '463',
		userId: '103641054784067776862'
	},
	{
		title: 'ONE ARM BANDIT',
		description:
			'A. 5 sets:\n10 pistols per leg\n10 push ups\n200m run\nB. 5 sets:\n10 k2e\n10 KBS\n10 cals air bike or 200m row\nC. 3 sets:\n30 sit ups\n30 sec battle rope double wave',
		id: '464',
		userId: '103641054784067776862'
	},
	{
		title: 'RUB-A-DUB-DUB',
		description:
			'Filthy Fifty\n50 Box jumps\n50 Jumping pull-ups\n50 Kettlebell swings\n50 Walking Lunges\n50 Knees to elbows\n50 Push press\n50 Back extensions\n50 Wall balls\n50 Burpees\n50 Double unders\n*45 min time cap',
		id: '465',
		userId: '103641054784067776862'
	},
	{
		title: '16.NO THANKS',
		description:
			'40 min running clock:\n*A,B,C,D are all 10 min AMRAPs\n*Begin each 10 min with 400m run/row buy in\nA.\n20 OH plate lunges (10/leg)\n20 Weighted sit ups\n20 HR push ups\nB.\n5 pull ups\n10 KBS\n15 push press\nC.\n10 pistols or single leg box squats each leg\n10 K2E\n10 cal bike\nD.\n10 OHS w/PVC\n10 weighted step ups\n10 renegade rows',
		id: '466',
		userId: '103641054784067776862'
	},
	{
		title: 'GRIN AND BEAR IT',
		description:
			'A. 3 sets:\n15 bench press\n1 min ring plank hold\n400m run\nB. 3 sets:\n10 back ext.\n10 squat jumps\n400m run\nC. 3 sets:\n20 hollow rocks\n30  mtn climbers\n400m run\nD. 3 rounds:\n25 wall balls\n1 min airbike or C2 bike sprint',
		id: '467',
		userId: '103641054784067776862'
	},
	{
		title: 'BENCHMARK SANDWICH',
		description:
			'A. 4 sets:\n10 Bulg. split squats each leg (rear leg on riser)\n10 ab wheels\n10 ball slams\nB. 4 rounds:\n400m run\n10 burpee box jumps\n20 pushups\n25 situps\n30 air squats',
		id: '468',
		userId: '103641054784067776862'
	},
	{
		title: 'SIMPLE SAUCE',
		description:
			'4 rounds for time:\n80 yd sled push\n25 wall balls\n25 weighted sit ups\n25 push press\n400m run\n*35 min time cap',
		id: '469',
		userId: '103641054784067776862'
	},
	{
		title: 'DEAD BALL',
		description:
			'A. 75 burpees for time\n*at the start and top of every min, do 10 sit ups\n*10 min cap\nB. 4 sets:\n10 bench press\n10 body rows\nC. 4 sets:\n10 single leg floor bridge ea. side\n10 KBDL\nD. 4 rounds:\n15 KBS\n15 box jumps\n200m run',
		id: '470',
		userId: '103641054784067776862'
	},
	{
		title: 'BETTER LATE THAN…',
		description:
			'A. Alternating TABATA x 8 rounds:\nRenegade rows\nDB ground to OH\nMtn climbers\nB. AMRAP in 20 min\n400m run or row\nmax UB reps push ups\nmax UB reps pull ups\nC. 3 sets:\n10 seated OH press\n10 K2E',
		id: '471',
		userId: '103641054784067776862'
	},
	{
		title: 'EXTRA PLATE',
		description:
			'A. 10 rounds:\n5 DB front squats\n7 DB push press\n9 DB  walking lunges\n800m run or row\nB. 10 rounds:\n5 pull ups\n7 pushups\n9 sit ups\n800m run or row',
		id: '472',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER TUESDAY',
		description:
			'A. 3 rounds:\n2 min “cardio”\n2 min burpee box jumps\n1 min KBS\n1 min plank\n1 min rest\n*cardio options:\nsuicide liners 0-5-10-15-20-25\njump rope\nwatt bike\nair bike\nrower\nB. 3 rounds:\nrun: block run, 400m, 200m\n10 bench press\n15 wall balls\n20 hollow rocks',
		id: '473',
		userId: '103641054784067776862'
	},
	{
		title: 'BENCHMARK SATURDAY!',
		description:
			'A. 3 sets:\n1 min max reps thrusters\n1 min max reps burpees\nB. 3 sets:\n1 min max reps sit ups\n1 min max reps DUs\nC. 3 sets:\n1 min max reps KBS\n1 min max reps box jumps\nD. AMRAP in 15 min\nbuy in\n+\nAMRAP with time left:\n20 push ups\n20 lunges\n10 ab wheels\n*buy in options:\n(choose 1)\n2k row\nBig block run\n4k watt bike\n60/50 cal bike',
		id: '474',
		userId: '103641054784067776862'
	},
	{
		title: 'GRIN AND BEAR IT',
		description:
			'A. 100 sit ups for time\n*at the start and every min, run 100m\n*10 min cap\nB. For time:\n2k bike erg\n+\n50 wall balls\n50 JPU\n50 no push up burpees\n+\n40 cal airbike',
		id: '475',
		userId: '103641054784067776862'
	},
	{
		title: 'BACK TO BACK',
		description:
			'A,B,C are all 12 min AMRAPs\n1 continuous clock\nAt every 4 min interval, run/row 200m or bike 10 cals\nA.12 min\n5 burpees\n10 box jumps\n15 sit ups\nB.12 min\n5 dips\n10 KBS\n15 air squats\nC. 12 min\n5 split squats each leg\n10 HR push ups\n15 mtn climbers each side',
		id: '476',
		userId: '103641054784067776862'
	},
	{
		title: 'TRAP QUEENS… AND KINGS.',
		description:
			'A. 3 sets:\n12 bench press\n8 clapping push ups\nB. 3 sets:\n12 body rows\n8 pull ups\nC. 3 sets:\n12 goblet squats\n8 goblet lunges each leg\nD. 3 sets:\n10 jack knives\n20 sit ups\nE. 3 sets:\n200m run\n20/15 cal bike',
		id: '477',
		userId: '103641054784067776862'
	},
	{
		title: 'BIKE TRIP',
		description:
			'A. 4 sets:\nmax L-sit hold\n20 sec hollow rocks\nrest 1 min\nB. AMRAP in 30 min\nBig block run buy in\n+\nAMRAP with time left:\n800m row\n70 weighted lunges\n60 step ups\n50 wall balls\n40 KBS\n30 burpees\n20 ball slams\n10 SA DB snatches each arm',
		id: '478',
		userId: '103641054784067776862'
	},
	{
		title: 'C’MON BACK NOW',
		description:
			'A. 10-1\nbox jumps\n*30 sec battle rope wave (2 arm or alt.) between sets\nB. 10-1\npush up to renegade rows\npush press\nC. 10-1\nGHD sit ups\n*20 DUs between each set\nD. 10-1\ndips\nab wheels',
		id: '479',
		userId: '103641054784067776862'
	},
	{
		title: 'PARTNER SATURDAY',
		description:
			'A. AMRAP in 20 min\n5 ball slams\n10 lateral plyo pushup over plate\n15 situps\n*at the start and top of every 4 min, run 200m\nB. AMRAP in 15 min\n200m row\n10yds crab walk or bear crawl\n15 air squats\n*at the start and top of every 3 min, 1/2 lap heavy farmer’s carry (come up srtairs)',
		id: '480',
		userId: '103641054784067776862'
	},
	{
		title: 'BABY BELL',
		description:
			'800m run\n15 burpees\n20 wall balls\n25 box jumps\n30 pull ups\n35 double unders\n40 lunges\n45 sit ups\n50 mtn climbers\n45 sit ups\n40 lunges\n35 mtn climbers\n30 pull ups\n25 box jumps\n20 thrusters\n15 burpees\nA. AMRAP in 5 min\nB. AMRAP in 10 min\nC. AMRAP in 20 min (or 1 rd whichever comes first)\n**rest 90 sec between A, B, C\n*start from the beginning for each AMRAP',
		id: '481',
		userId: '103641054784067776862'
	},
	{
		title: 'SUMMER BURPEES (SOME ARE HERE… SOME ARE THERE)',
		description:
			'A. 20-15-10:\nDB hang squat clean\npush ups\nB. 20-15-10\nbox jumps\nKB high pull\nC. 20-15-10\npush press\n200m run b.t sets\nD. 20-15-10\nk2e\nbench press\nE. 3 sets:\n8 TGUs\n1 min plank',
		id: '482',
		userId: '103641054784067776862'
	},
	{
		title: 'LETTING THE AIR OUT',
		description:
			'A. 10 min cap\n60 DB thrusters\n*first 30 sec of every minute do a plank hold, second 30 sec work towards your thruster total\nB. 4 rounds for time:\n15 KBS\n15 burpees\n15 cals\n400m run\n*20 min cap',
		id: '483',
		userId: '103641054784067776862'
	},
	{
		title: 'CHEF’S CHOICE',
		description:
			'TBA\n \n*Sorry guys, no WiFi on the redeye kept me from posting in time.  Today’s WODs will be coaches choice!',
		id: '484',
		userId: '103641054784067776862'
	},
	{
		title: 'PUNCHED OUT',
		description:
			'A. 3 sets:\n15 thrusters\n15 dips\n15 rev lunges ea. side\n400m run\nB. 3 sets:\n10 k2e\n20 push ups\n30 sit ups\n400m run\nC. 3 sets:\n10 burpees\n15 KBDL\n250m row\n400m run',
		id: '485',
		userId: '103641054784067776862'
	},
	{
		title: 'JUST THE TWO OF US',
		description: 'Partner Saturday!\nIn teams of 2, ARMAP in 25 min:',
		id: '486',
		userId: '103641054784067776862'
	},
	{
		title: 'CINDY TO THE MAX',
		description: 'A. “Cindy”\nAMRAP in 20 min:\nB. AMRAP in 10 min',
		id: '487',
		userId: '103641054784067776862'
	},
	{
		title: 'ROPADOPE',
		description:
			'A. “DB DT”\n5 rounds for time\n12 DB DL\n9 DB Hang Power Cleans\n6 DB shoulder to OH\nB. For Time:\n800m Run\n21 K2E\n21 med ball squat clean\n21 cal row\n400m Run\n15 K2E\n15 med ball squat clean\n15 cal row\n200m Run\n9 K2E\n9 med ball squat clean\n9 cal row',
		id: '488',
		userId: '103641054784067776862'
	},
	{
		title: '5 MIN GLIMPSE',
		description:
			'A. Every 2 min, run 200m\n*Plank hold for the remainder of the 2 min interval; x 3 sets (6 min)\nB. 40-30-20-10\nPush ups\nBox jumps/step ups\nwall balls\nSit ups\nCal row',
		id: '489',
		userId: '103641054784067776862'
	},
	{
		title: 'UNDER PRESSURE',
		description:
			'A. 10 min\n8 T2B\n10 ab wheels\n12 sit ups\nB. 10 min\n8 thrusters\n10 renegade rows\n12 Mtn climbers\nC. 10 min\nbuy in: 400m run\n3 ball slams\n5 no pushup burpees\n7 lunges with slam ball held above shoulder height',
		id: '490',
		userId: '103641054784067776862'
	},
	{
		title: 'BELL HOP',
		description:
			'A. 4 sets:\n10 DB curl to press\n10 DB 2-arm bent over row\n10 dips\nB. 4 sets:\n10 good mornings\n10 single leg bridges per leg\n10 single leg box squats per leg\nC. For time:\nBig block run\n50 sit ups\n40 JPU\n30 KBS\n20 ab wheels\n10 burpee box jumps',
		id: '491',
		userId: '103641054784067776862'
	},
	{
		title: 'POWER CORED',
		description:
			'A. 10-1\nSA DB row ea. side\npull ups\nB. 4 rounds:\n15 cals on bike or rower\n20 wall balls\n25 sit ups\nC. 4 rounds:\n200m run\n8 burpee box jumps\n16 alt. single arm DB snatches (8 ea. arm)\n60 sec plank\nD. 3 x 10 ab wheels',
		id: '492',
		userId: '103641054784067776862'
	},
	{
		title: 'BETTER LATE THAN…',
		description:
			'A. AMRAP in 20 min\n400m run or row\nB. AMRAP in 20 min\n12 cal airbike or 100 double unders\n*For both A & B, complete 1 set of the cardio, then 1-2-3… rounds of the triplets, increasing by 1 each round.',
		id: '493',
		userId: '103641054784067776862'
	},
	{
		title: 'HANGIN TOUGH',
		description:
			'AMRAP in 40 min\nbuy in: Lunge up Farley, then finish the block run from the top\n+\nAMRAP w/time left:\n50 HR push ups\n50 sit ups\n50 cal row\n50 DUs\n50 JPU\n50 push press\n400m run',
		id: '494',
		userId: '103641054784067776862'
	},
	{
		title: 'NO BREAKY',
		description:
			'A. 4 sets\n10 bench press\n10 pushups\n15 skull crushers\nB. AMRAP in 9 min\n40 yd sled push\n10 burpees\n40 yd sled push\n10 body rows\nC. AMRAP in 9 min\n5 box jumps\n10 thrusters\n200m row\nD. 3 rounds\n10 k2e\n25 sit ups',
		id: '495',
		userId: '103641054784067776862'
	},
	{
		title: 'ONLINE QUALIFIER EVENT 3',
		description:
			'A. 30-20-10\nDB lunges per leg\ndips\nblock run\nB. 30-20-10\nweighted sit ups\nDB hang clean to overhead\nblock run\nC. 30-20-10\nDB front squat\npull ups',
		id: '496',
		userId: '103641054784067776862'
	},
	{
		title: 'QUALITY TIME',
		description:
			'A. TABATA x 5 sets at each (no alternating)\npushups\nLevel changes\nB. 1 min @ each x 3 sets (6 min)\nBurpee box jumps\nplank hold\nC. 1 min @ each x 3 sets (6 min)\nWall balls\nKBS\nD. For time:\n1 Farley hill run\n+\n3 rounds:\n15 Knees 2 elbows\n30 Mtn climbers\n300m row\n+\n1 Farley hill run',
		id: '497',
		userId: '103641054784067776862'
	},
	{
		title: 'INTO THIN AIR',
		description:
			'A. Every 3 min x 4 sets\n60 yds sled push\n10 T2B\nB. 75 wall balls\n*each time you break a set, do 20 sit ups\nC. 3 rounds;\n500m row\n12 burpees\n12 box jumps',
		id: '498',
		userId: '103641054784067776862'
	},
	{
		title: 'HANG TIGHT',
		description:
			'AMRAP in 40 min\n50 Wall balls\n50 back extensions\n50 Push ups\n50 Body rows\n50 KBS\n50 Push press\n50 cals air bike\n50 yards bear crawl\n50 lunges\n\n**at the start and every 6 min interval, row or run 400m',
		id: '499',
		userId: '103641054784067776862'
	},
	{
		title: 'SCOUT’S HONOR',
		description:
			'A. 1 round (10 min cap)\n40/30 cal bike\n60 sit ups\n30 no pushup burpees\nB. 1 round (10 min cap)\n800m run\n40 DB thrusters\n30 DB bench press\nD. 1 round (10 min cap)\n3 min plank\n25 heavy slam ball G2S\n50 box jumps/step ups',
		id: '500',
		userId: '103641054784067776862'
	},
	{
		title: 'ALL SEVENS',
		description:
			'A. AMRAP in 18 min\n400m run\nMax reps UB pull ups (if less than 10, scale to banded or jumping)\nMax UB air squats (50 rep cap)\nB. AMRAP in 18 min\n400m row\nMax reps UB push ups (if less than 10, scale to knees)\nMax reps UB weighted situps (if more than 25, increase weight!)',
		id: '501',
		userId: '103641054784067776862'
	},
	{
		title: 'MASTER’S QUALIFIER WEEKEND',
		description:
			'A. 10-1 ladder:\ncurl to press\nweighted sit ups\nB. 10-1 ladder:\nwall balls\nburpees\nC. 3 rounds:\n400m run/500m row\n20 renegade rows\n20 UB KBS\n20 lunges holding the KB',
		id: '502',
		userId: '103641054784067776862'
	},
	{
		title: 'COUPLET THERAPY',
		description:
			'A. 3 x Farley hill sprint\n*rest/walk on the way down\nB. AMRAP in 25 min\n100 Lunges\n80 Sit ups\n60 Air squats\n40 Push ups\n20 Box jumps\n500m row',
		id: '503',
		userId: '103641054784067776862'
	},
	{
		title: 'PRAY FOR BURPEES',
		description:
			'A. 15, 12, 9, 6, 3:\nBench press\nKBS\nWeighted sit ups\n45 sec battle rope 2-arm wave + 200m run\nB. 15, 12, 9, 6, 3:\nhollow rock\nball slam\nWeighted reverse lunges ea. leg\n45 sec battle rope 2-arm wave + 200m run\nC. 15, 12, 9, 6, 3;\nCals\nDUs (x3)\nWall balls\n45 sec battle rope 2-arm wave + 200m run',
		id: '504',
		userId: '103641054784067776862'
	},
	{
		title: 'SLED JAMMER',
		description:
			'A. 3 sets:\n15 DB bench press\n15 bent over 2-arm DB row\nB. 3 sets:\n15 back ext\n15 DB weighted floor bridge\nC. For time:\nBig block run\n60 air squats\n60 sit ups\n30 box jumps\n30 SA SB snatch\n20 cal row\n20 cal airbike',
		id: '505',
		userId: '103641054784067776862'
	},
	{
		title: 'HAVE A BALL',
		description:
			'A. EMOM x 15 min\n1st 5 min: 200m row sprint\n2nd 5 min: 10 wall balls\n3rd 5 min: 10 DB G2OH\nB. 3 rounds for time\n10 ab wheels\n15 bench press\n20 step ups\n400m run',
		id: '506',
		userId: '103641054784067776862'
	},
	{
		title: 'PULLING A FAST ONE',
		description:
			'A. 21-15-9\npull ups\nseated floor DB OH press\n2 min jump rope\nB. 21-15-9\nKB high pull\nbox jumps\n2 min jump rope\nC. 21-15-9\nGHD sit ups\nlunges each leg\n2 min jump rope\nD. 21-15-9\nab wheels\ncal row\n2 min jump rope',
		id: '507',
		userId: '103641054784067776862'
	},
	{
		title: 'PARTNER SATURDAY',
		description:
			'A. ALT TABATA x 4 sets @ each:\nLevel changes\nair squats\nB. 3 sets:\n15 bench press\n15 push ups\nC. 5 rounds:\n10 burpees\n15 push press\n15 KBS\nsled push: 100yd, 80yd, 60yd, 40yd, 20yd',
		id: '508',
		userId: '103641054784067776862'
	},
	{
		title: 'L SPACED',
		description:
			'A. 10-1\nab wheel\nbox jumps\nB. 10-1\nDB push up to renegade rows\nDB push press\nC. 10-1\nGHD sit ups\nDUs (x 4)\nD. 10-1\ndips\npullups\nE. 3 rds AFAP:\n200m run\n45 sec plank',
		id: '509',
		userId: '103641054784067776862'
	},
	{
		title: 'STRICTER SCALE',
		description:
			'A. AMRAP in 10 min\n5 pull ups\n10 push ups\n15 air squats\nB. AMRAP in 10 min\n5 burpees\n10 dips\n15 DUs\nC. AMRAP in 10 min\n5 ab wheels\n10 cal bike\n15 sit ups\n*Begin each AMRAP with 200m run/row',
		id: '510',
		userId: '103641054784067776862'
	},
	{
		title: 'GET ON UP',
		description:
			'A. 10-1\nDB curl to press\nDB front squat\nB. For time:\n50 JPU\n400m run or row\n50 weighted sit ups\n400m run or row\n50 box jumps\n400m run or row\n50 back extensions\n400m run or row',
		id: '511',
		userId: '103641054784067776862'
	},
	{
		title: 'SMOOTH SAILING',
		description:
			'A.  4 sets:\n10 bench press\n10 DB split squats ea. side (rear leg on riser)\nB. 30-20-10\nThrusters\nGHD sit ups\nKBS\nRenegade rows\n400m run each round',
		id: '512',
		userId: '103641054784067776862'
	},
	{
		title: 'DEADLIEST CATCH',
		description:
			'A. 4 rounds for quality\n5 supermans\n10 mtn climbers\n5 OHS w/PVC\nB. 2 rounds of:\n5 min on; 1 min off between couplets\nreps: 1, 1, 2, 2, 3, 3…\nbox jumps\nKB swings\nball slam\nburpees\npullups\nWall Balls',
		id: '513',
		userId: '103641054784067776862'
	},
	{
		title: 'WONDER TWIN POWER',
		description:
			'A. 3 rounds:\n2 min cardio of choice\n2 min plank\n1 min weighted step ups\n1 min burpees\nB. 3 rounds for time\n400m run\n15 seated OH press\n15 strict chinups (sup. grip)\n30 sit ups\n30 lunges',
		id: '514',
		userId: '103641054784067776862'
	},
	{
		title: 'CLIMB ABOARD',
		description:
			'A. 15, 12, 9, 6, 3\nthrusters\nno-pushup burpees\nB. 15, 12, 9, 6, 3\nab wheels\nHR pushups\nC. 15, 12, 9, 6, 3\nKBS\nbox jumps\nD. 15, 12, 9, 6, 3\npull ups\n200m run each round',
		id: '515',
		userId: '103641054784067776862'
	},
	{
		title: 'TRIPPIN OUT',
		description:
			'A. Every 2 min, run 200m\n*Plank hold for the remainder of the 2 min interval; x 3 sets (6 min)\nB. 40-30-20-10\nPush ups\nBox jumps\nGoblet squats\nSit ups\nC. 3 sets:\n10-15 DB skull crushers\n10-15 dips',
		id: '516',
		userId: '103641054784067776862'
	},
	{
		title: 'CLEANING HOUSE',
		description:
			'400m run\n25 box jumps\n25 KBS\n25 push ups\n25 weighted sit ups\n25 thrusters\n25 ab wheels\n50 lunges\n50 DUs\n800m row/40 cal bike\nA. AMRAP in 5 min; rest 1 min\nB. AMRAP in 7 min; rest 2 min\nC. AMRAP in 10 min; rest 3 min\nD. 1 round for time\n*Start at the beginning each time (400m run)',
		id: '517',
		userId: '103641054784067776862'
	},
	{
		title: 'BAR TALK',
		description:
			'A. Against a 4 min clock:\nRow/Run 400m\nAMRAP wall balls with time left\nrest 1 min; x 2 sets\nB. Against a 4 min clock:\nRow/Row 400m\nAMRAP burpees with time left\nrest 1 min; x 2 sets\nC. 21-15-9\nCal bike\nKBS',
		id: '518',
		userId: '103641054784067776862'
	},
	{
		title: 'HANGER 100',
		description:
			'A. 3 rounds:\n1 min alt. step ups\n1 min sit ups\n1 min thrusters\n1 min knees 2 elbows\n1 min rest\nB. 3 rounds\n400m run\n30 pushups\n20 body rows\n10 no-pushup burpees',
		id: '519',
		userId: '103641054784067776862'
	},
	{
		title: 'FEELS LIKE REGIONALS',
		description:
			'AMRAP in 40 min\n\n50 lunges\n50 box jumps\n50 sit ups\n50 K2E\n50 KBS\n50 push ups\n50 Body rows\n50 no push up burpees\n\n**at the start, and every 10 min interval, run/row 800m',
		id: '520',
		userId: '103641054784067776862'
	},
	{
		title: '12 PACK',
		description:
			'Like the 12 Days of Christmas:\n1. 5 burpees\n2. 5 thrusters\n3. 10 KBS\n4. 10 goblet squats\n5. 50 DUs\n6. 30 Mountain Climbers\n7. 20 Wall Balls\n8. 20 Calorie Row\n9. Big block run\nRound 1= 1\nRound 2= 2 +1\nRound 3 = 3 + 2 + 1\nRound 4= 4 +3+2+1\n…\nRound 9 = 9 +8+7+6+5+4+3+2+1',
		id: '521',
		userId: '103641054784067776862'
	},
	{
		title: 'STUCK IN THE MIDDLE WITH YOU',
		description:
			'A. 3 sets:\n30 sec row @ 75%\n30 sec row @ 90%\nC. 3 sets:\n30 sec sit ups\n30 sec level changes\nD. For time:\nBig Block run\n+\n30-20-10\npush ups\npull ups\nDB front squats',
		id: '522',
		userId: '103641054784067776862'
	},
	{
		title: 'SEEING RED',
		description:
			'A. 3 sets as a warm up:\n20 sec squat hold\n20 sec superman hold\n20 sec plank\nB. For time:\nBig block run\n100 walking lunges\n90 sit ups\n80 squats\n70 alt. step ups\n60 push press\n50 pull ups\n40 KBS\n30 cals\n20 burpees',
		id: '523',
		userId: '103641054784067776862'
	},
	{
		title: 'BOOTYFUL',
		description:
			'A. EMOM x 5 min\n150m row sprint\nB. EMOM x 5 min\n10 burpees\nC. EMOM x 5 min\n9/6 air bike cals\nD. for time:\n50 JPU\n400m run\n50 HR push ups\n400m run\n50 sit ups\n400m run',
		id: '524',
		userId: '103641054784067776862'
	},
	{
		title: 'EL QUATRO',
		description:
			'AMRAP in 35 min\n–400m run\n15 DB hang squat cleans\n15 box jumps\n–500m row\n15 wall balls\n15 KBS\n–20 cal airbike\n15 dips\n15 burpees',
		id: '525',
		userId: '103641054784067776862'
	},
	{
		title: '18.5',
		description:
			'Block run\n100 lunges\n90 sit ups\n800m row\n70 push ups\n60 wall balls\n50 box jumps\n40 pull ups\n30 burpees\n200m farmer’s carry\n10 man makers\n*45 min time cap',
		id: '526',
		userId: '103641054784067776862'
	},
	{
		title: 'PSYCHED OUT',
		description:
			'A. 3, 6, 9, 12, 15:\npullups\nthrusters\nB. 3, 6, 9, 12, 15:\nKBS\nring push ups\nC. 3, 6, 9, 12, 15\nburpees\nbench press\nD. 3 rounds:\n10 back ext\n10 pistols per leg',
		id: '527',
		userId: '103641054784067776862'
	},
	{
		title: 'SHOTGUN FINISH',
		description:
			'Big block run\n3 sets:\n25 sit ups\n20 KBS\n15 push ups\n800m run\n3 sets:\n15 burpees\n15 pull ups\n15 thrusters\n400m run\n3 sets:\n250m row\n20 alt. weighted step ups\n1 min plank\n200m run',
		id: '528',
		userId: '103641054784067776862'
	},
	{
		title: '',
		description:
			'A. 3 sets:\n15 bench press\n15 DB push press\n15 push-ups\nB. 3 sets:\n15 jumping pull-ups\n15 body rows\n15 KBS\nC. 3 sets:\n30 squats\n20 alt. reverse lunges\n10 single leg floor bridge ea. side\nD. 3 rounds AFAP:\n30 situps\n200m run\n100 jump rope speed step',
		id: '529',
		userId: '103641054784067776862'
	},
	{
		title: 'NO BREAKY',
		description:
			'A. 3 sets:\n10 single leg KBDL per leg\n15 KBS\n20 sit ups\nB. 3 rounds:\n1 min airbike sprint\n1 min plank\nC. 21-15-9\nK2E\nWall balls\nPush ups',
		id: '530',
		userId: '103641054784067776862'
	},
	{
		title: 'THIN AIR',
		description:
			'A. ALT TABATA x 6 sets @ each:\nLevel changes\npushups\nB. 3 sets:\n15 bench press\n30 UB air squats\nC. 4 rounds:\n10 burpees\n12 T2B\n60 yds sled push',
		id: '531',
		userId: '103641054784067776862'
	},
	{
		title: 'TEAMWORK MAKES THE DREAMWORK',
		description:
			'A. AMRAP in 8 min\n100m run\n15 sit ups\n10 push ups\nB. AMRAP in 8 min\n200m row\n10 ball slams\n10 pullups\nC. AMRAP in 8 min\n40 DUs\n10 no push up burpees\n10 box jumps\nD. AMRAP in 8 min\n10 ab wheels\n15 back ext\n15 thrusters',
		id: '532',
		userId: '103641054784067776862'
	},
	{
		title: '18.4',
		description:
			'A. 4 sets:\n10 seated floor DB press\n10 body rows @ 30×1\nB. 3 rounds:\n50 double unders\n40 lunges\n30 KBS\n20 wall ball\n10 burpee box jumps',
		id: '533',
		userId: '103641054784067776862'
	},
	{
		title: 'MAPQUEST',
		description:
			'A. 3 sets as a warm up:\n20 sec squats\n20 mtn climbers\n20 sec push ups\nB. 10 rounds:\n3 burpees\n5 KBS\n7 box jumps\n>800m run\nC. 10 rounds:\n3 thrusters\n5 pullups\n7 sit ups\n>800m run',
		id: '534',
		userId: '103641054784067776862'
	},
	{
		title: 'PERFECT 10',
		description:
			'A. 15, 12, 9, 6, 3\nthrusters\nbox jumps\nB. 15, 12, 9, 6, 3\nab wheels\nring dips\nC. 15, 12, 9, 6, 3\nSA KB snatch ea. side\nHR pushups\nD. 15, 12, 9, 6, 3\npull ups\n200m run each round',
		id: '535',
		userId: '103641054784067776862'
	},
	{
		title: 'MACHINE LEARNING',
		description:
			'A. 4 sets:\n3 TGU per arm\n15 KBS\n2 min plank hold:\nB. 4 sets:\n20/15 cal airbike\n15 burpees\nrest 1 min\n2 min plank hold\nC. 4 sets:\n20 UB wall balls\n50 double unders\n1 min rest\n2 min plank hold',
		id: '536',
		userId: '103641054784067776862'
	},
	{
		title: 'JACKIE',
		description: 'For time:\n**40 min cap**',
		id: '537',
		userId: '103641054784067776862'
	},
	{
		title: 'RELAY HOLLEYMAN',
		description: 'A. 3 sets:\nB. 3 sets:\nC. AMRAP in 20 min:',
		id: '538',
		userId: '103641054784067776862'
	},
	{
		title: '18.3',
		description:
			'Like the 12 Days of Christmas:\n1. 5 burpees\n2. 5 thrusters\n3. 10 KBS\n4. 10 goblet squats\n5. 50 DUs\n6. 30 Mountain Climbers\n7. 20 Wall Balls\n8. 20 Calorie Row\n9. Big block run\nRound 1= 1\nRound 2= 2 +1\nRound 3 = 3 + 2 + 1\nRound 4= 4 +3+2+1\n…\nRound 9 = 9 +8+7+6+5+4+3+2+1',
		id: '539',
		userId: '103641054784067776862'
	},
	{
		title: 'JUMP TO IT',
		description:
			'A. 40 sec at each movement / 20 sec between x 3 rounds:\nLunges\nPull ups\nPlank\nSquats\nPush ups\nB. 3 rounds:\n400m run\n15 KB high pull\n15 curl –> press\n15 ab wheel reps',
		id: '540',
		userId: '103641054784067776862'
	},
	{
		title: 'HANG SEVEN',
		description:
			'A. 4 sets:\n25 sit ups\n25 push ups\n400m run\nB. 4 sets:\n15 wall balls\n10 ball slams\n400m run\nC. 4 sets:\n10 single arm DB snatch/side\n1 min plank\n400m run\nD. 4 sets:\n250m row\n50 double unders',
		id: '541',
		userId: '103641054784067776862'
	},
	{
		title: 'COUNT REPULA',
		description:
			'A. AMRAP in 8 min\n10 bench press\n10 renegade rows\n150m row\nB. AMRAP in 8 min\n5 burpees\n10 KBS\n100m run\nC. AMRAP in 8 min\n5 pull ups\n10 push ups\n20 Double unders\nD. AMRAP in 8 min\n5 DB G2O\n10 GHD sit ups\n20 mtn climbers',
		id: '542',
		userId: '103641054784067776862'
	},
	{
		title: 'DATE WITH NATE',
		description:
			'A. 3 sets:\n30 sec air squat\n30 sec plank\n30 sec step ups\nB. 3 rounds for time\nRun: Block Run, 800m, 400m\n50 KB Lunges (hold it anyhow)\n40 Sit Ups\n30 Wall Balls\n20 Burpees',
		id: '543',
		userId: '103641054784067776862'
	},
	{
		title: 'WEEKEND WARS',
		description: 'A. 4 Rounds:\nB. 1 Round:\nC. 4 Rounds:',
		id: '544',
		userId: '103641054784067776862'
	},
	{
		title: '18.2',
		description:
			'A. 10-1 Ladder\nWall balls\nK2E\n400m run\nB. 10-1 Ladder\nBox jumps\nPush Ups\n400m run\nC. 10-1 Ladder\nburpees\n10 Lunges every round (not part of the ladder)\n400m run\nD. 10-1 Ladder\nKBS\nAb Wheels',
		id: '545',
		userId: '103641054784067776862'
	},
	{
		title: 'SWING BIKE RUN',
		description:
			'A. 21-15-9\nGHD situps\nK2E\n400m run\nB. 21-15-9\nKBS\ngoblet squat\n400m run\nC. 21-15-9\npush press\nbox jumps\n400m run\nD. 21-15-9\nno push up burpees\ncal row\n400m run',
		id: '546',
		userId: '103641054784067776862'
	},
	{
		title: 'NEARLY HEROIC',
		description:
			'3 sets:\n10 bench press\n15 skull crushers\nB. 3 sets:\n15 back ext\n10 pistols per leg\nC. 3 rounds:\n30 wall balls\n30 situps\n30 cal airbike or row\n30 sec battle rope move of choice',
		id: '547',
		userId: '103641054784067776862'
	},
	{
		title: 'FEELIN JUMPY',
		description:
			'A. 3 rounds:\n2 min cardio\n2 min TGU\n2 min plank\n2 min box jump overs\n*cardio options: assault bike, watt bike, row, jump rope\nB. AMRAP in 20 min\n5 ball slams\n10 pullups\n15 air squats\n*at the start and top of every 5 min interval, run 400m',
		id: '548',
		userId: '103641054784067776862'
	},
	{
		title: 'DIANE ‘N STUFF',
		description:
			'A. Alternating TABATA x 8 rounds\nKBS\nStep ups\nB. Alternating TABATA x 8 rounds\npushups\nKnees 2 elbows\nC. Alternating TABATA x 8 rounds\nWall balls\nMtn climbers\nD. 3 rounds for time\n200m run\n200m row\n40 lunges',
		id: '549',
		userId: '103641054784067776862'
	},
	{
		title: 'TEAM WES',
		description:
			'A. 20-15-10\npush press\npull ups\nFarley hill run\nB. 20-15-10\nback ext\npush ups\nFarley hill run\nC. 20-15-10\nab wheels\nKBS\nFarley hill run\nD. 20-15-10\ngoblet squats\ndips\nFarley hill run',
		id: '550',
		userId: '103641054784067776862'
	},
	{
		title: '18.1',
		description: 'A. 3 rounds:\nB. 5 rounds:',
		id: '551',
		userId: '103641054784067776862'
	},
	{
		title: 'OPENING DAY',
		description:
			'Big block run\n50 lunges\n40 KB swings\n30 cal row\n20 burpees\n10 man makers\n20 burpees\n30 cal row\n40 KB swings\n50 lunges\nBlock run',
		id: '552',
		userId: '103641054784067776862'
	},
	{
		title: 'MONKEY RUN',
		description:
			'A. AMRAP in 10 min\n*25 burpee buy in\nthen w/ time left\nKBDL: 3, 6, 9, 12…\nK2E: 3, 6, 9, 12…\nPush ups: 3, 6, 9, 12…\nB. AMRAP in 10 min\n400m run buy in\nthen w/ time left\nWall balls: 3, 6, 9, 12….\nball slam: 3, 6, 9, 12…\nbox jumps: 3, 6, 9, 12…\nC. 50-40-20-10\nDUs\nMtn climbers\nD. 3 sets:\n20 GHD sit ups\n1 min plank',
		id: '553',
		userId: '103641054784067776862'
	},
	{
		title: '17.5',
		description:
			'A. 3 sets for quality:\nB. 3 sets AFAP:\nC. 3 sets for quality:\nD.  3 sets AFAP:\nE.  3 sets for quality',
		id: '554',
		userId: '103641054784067776862'
	},
	{
		title: 'CRAZY EIGHTS',
		description:
			'A. Against a 10 min clock\nBig block run\nAMRAP box jumps with time left\n*scale run if needed to allow for at least 2 min of box jumps\nrest 2 min\nB. Against a 10 min clock\n1750/1500m row\nAMRAP push ups with time left\nrest 2 min\nC. AMRAP in 10 min\n20 sit ups\n15 bench press\n10 wall balls\n*ABC in any order, save D for last\nD. 3 sets:\n10 back ext (add weight to increase difficulty)\n10 ab wheels\n30 sec side plank per side (add weight to increase difficulty)',
		id: '555',
		userId: '103641054784067776862'
	},
	{
		title: 'AIR PUMP',
		description:
			'A. AMRAP in 10 min\n10 bench press\n20 renegade rows\n200m run\nB. AMRAP in 10 min\n10 DB front squats @ 3211 tempo\n20 alt. weighted step ups\n200m row\nC. 30-20-10\nK2E\nKBS\nno-pushup burpees',
		id: '556',
		userId: '103641054784067776862'
	},
	{
		title: '17.2',
		description:
			'A. 3 rounds:\n1 min plank\n1 min box jumps\n1 min thrusters\n1 min burpees\n1 min rest\nB. AMRAP in 20 min\nblock run buy in\nthen w/ time left AMRAP:\n1 Lap Farmer’s carry\n10 KBS\n20 lunges\n100m run',
		id: '557',
		userId: '103641054784067776862'
	},
	{
		title: 'PREP SCHOOL',
		description: 'A. 4 Rounds:\nB. 1 Round:\nC. 4 Rounds:',
		id: '558',
		userId: '103641054784067776862'
	},
	{
		title: 'FANCY NANCY',
		description:
			'A. 2 sets:\n1 min AMRAP TGU right arm\n1 min AMRAP TGU left arm\n1 min Plank\nB. 4 rounds for time:\n400m run\n15 bench press\n20 burpees (decrease reps by 5 each round)\n25 Wall balls\n30 sit ups',
		id: '559',
		userId: '103641054784067776862'
	},
	{
		title: 'HALF LIFE',
		description:
			'A. EMOM x 8 min\n100m run + AMRAP KBS w/ time left\nB. EMOM x 8 min\n10 push ups+ AMRAP sit ups with time left\nC. 30-20-10\nthrusters\ncal row\nD. 3 rounds:\n15 dips\n15 pushups',
		id: '560',
		userId: '103641054784067776862'
	},
	{
		title: 'IT TAKES TWO',
		description:
			'A. As a warm up\n3 sets:\n30 sec mtn climbers\n30 sec push ups\n30 sec squats\nB. 3 sets:\n15 seated OH press\n30 sec 2 hand battle rope wave\nC. 3 sets:\n15 back ext\n15 goblet squats\nD. 3 rounds:\n400m run\n30 wall balls\n20 pull ups\n10 heavy sandbag/slam ball ground to shoulder',
		id: '561',
		userId: '103641054784067776862'
	},
	{
		title: 'UPS AND DOWNS',
		description:
			'A. 4 sets @ high effort:\n15 box jumps\n60 yd sled push\n10 pullups\n10 burpees\nrest 2-3 min b.t sets\nC. 4 sets:\n10 ab wheels\n15 k2e\n45 sec plank',
		id: '562',
		userId: '103641054784067776862'
	},
	{
		title: 'OH BABY A TRIPLE',
		description:
			'3 rounds for time:\n25 burpees\n50 walking lunges\n100 DUs\nARSENAL (You’ll need all the things)\n*We’re adding this program this week for some of you who may have access to a larger array of equipment at a home gym.  Today’s workout is inherently low equipment, but going forward this program won’t be limited by equipment availability.\n3 rounds for time:\n20 burpee pullups\n30 KBS (53/35)\n40 walking lunges\nNOTES:\n*If you don’t have a box to jump over, use whatever is available… it could be anything from a bench, to a pillow, to a line on the ground.  Just pick something that requires you to jump over it!',
		id: '563',
		userId: '103641054784067776862'
	},
	{
		title: 'REACH FOR THE SKY',
		description:
			'A. 10 rounds for time:\n10-9-8-7-6-5-4-3-2-1 prisoner squat jump***\n100-90-80…20-10 single unders\n200m run\nB. 10 rounds for time:\n10-9-8-7-6-5-4-3-2-1 V-Ups\nContralateral Plank March (Opp arm / leg extends)**\nARSENAL (You’ll need all the things)\n*We’re adding this program this week for some of you who may have access to a larger array of equipment at a home gym.  Today’s workout is inherently low equipment, but going forward this program won’t be limited by equipment availability.\nA. 10-9-8-7-6-5-4-3-2-1 rep rounds for time\nhang squat snatch (115/85)\n200m run\nB. 10-9-8-7-6-5-4-3-2-1 rep rounds for time:\ntoes to bar\nGHD situps\nNOTES:\n*Single Arm squat snatch – you can do these with a DB or KB.  If what you have is too heavy, try finding an alternative item – water bottle, etc.  Or you can use a broom handle and sub for standard snatch.\n**You can do these from standard plank position or from more of a pushup position.  Lift the opposite arm and leg off the floor, hold for a count of 3 making sure you have your balance, then switch slowly (that’s 1 rep).\n***Hands behind your head, and leave the ground at the top of the squat.',
		id: '564',
		userId: '103641054784067776862'
	},
	{
		title: 'TOO BADA, TABATA',
		description:
			'A. 8 rounds tabata at each on a running clock:\ndouble unders\npushups\nsitups\nsquats\ndouble unders\nB. 4 sets\n25 yds bear crawl\n15 bench dips**\nARSENAL (You’ll need all the things)\n*We’re adding this program this week for some of you who may have access to a larger array of equipment at a home gym.  Today’s workout is inherently low equipment, but going forward this program won’t be limited by equipment availability.\nA. split jerk: 10 min to a heavy single, then 1 attempt max reps power jerk @ 75%\nB. 8 rounds tabata at each on a running clock:\npullups\npushups\nsitups\nsquats\ndouble unders\nNOTES:\n*You can do these single arm, two-arm, alternating, whatever.  Use what’s available to you and find your best option.\n**don’t have a bench?  Use a chair, or the back of the couch, or a truck tail gate… any flat edge will work. Just know the higher your feet, the harder the movement.  So prop them up if needed.',
		id: '565',
		userId: '103641054784067776862'
	},
	{
		title: 'RUN THE SHOW',
		description:
			'A. EMOM for 10 min:\n15 situps\n20 double unders\nB. 5 rounds for time:\n30 sec handstand hold*\n10 pushups\n100m sprint\n1 min rest',
		id: '566',
		userId: '103641054784067776862'
	}
];

export default workouts;
