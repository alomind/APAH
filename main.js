
const toBeDelivered = [
  {
    addr: 'Amruthapuram, Sabbavaram, Anakapalli, Andhra Pradesh, India',
    lat: 17.7568549,
    lng: 83.1153029,
  },
  {
    addr: 'Amalapuram, Narsipatnam, Anakapalli, Andhra Pradesh, India',
    lat: 17.5828745,
    lng: 82.57808779999999,
  },
  {
    addr: 'Yerakanapalem, Narsipatnam, Anakapalli, Andhra Pradesh, India',
    lat: 17.6676424,
    lng: 82.6106868,
  },
  {
    addr: 'Kusarlapudi, Rolugunta, Anakapalli, Andhra Pradesh, India',
    lat: 17.6702153,
    lng: 82.6922177,
  },
  {
    addr: 'Krishnapuram, Yelamanchili, Anakapalli, Andhra Pradesh, India',
    lat: 17.5472347,
    lng: 82.857308,
  },
  {
    addr: 'Kothuru, Yelamanchili, Anakapalli, Andhra Pradesh, India',
    lat: 17.5257385,
    lng: 82.9014211,
  },
  {
    addr: 'Jaithavam, Cheedikada,  Anakapalli, Andhra Pradesh, India',
    lat: 17.9276548,
    lng: 82.8910959,
  },
  {
    addr: 'Turuvolu, Cheedikada,  Anakapalli, Andhra Pradesh, India',
    lat: 17.9267564,
    lng: 82.9246084,
  },
  {
    addr: 'Thanam, Parawada, Anakapalli, Andhra Pradesh, India',
    lat: 17.6463247,
    lng: 83.06969389999999,
  },
  {
    addr: 'Venelapalem, Parawada, Anakapalli, Andhra Pradesh, India',
    lat: 17.6217306,
    lng: 83.0817699,
  },
  {
    addr: 'P.NARAYANAPURAM, Kudair, Ananthapur, Andhra Pradesh, India',
    lat: 14.7323365,
    lng: 77.4314497,
  },
  {
    addr: 'GOTUKURU, Kudair, Ananthapur, Andhra Pradesh, India',
    lat: 14.7430851,
    lng: 77.4988753,
  },
  {
    addr: 'Kammuru, Kudair, Ananthapur, Andhra Pradesh, India',
    lat: 14.7458414,
    lng: 77.4838202,
  },
  {
    addr: 'Kurugunta, Ananthapuram, Ananthapur, Andhra Pradesh, India',
    lat: 14.6927174,
    lng: 77.5105669,
  },
  {
    addr: 'Somuladoddi, Ananthapuram, Ananthapur, Andhra Pradesh, India',
    lat: 14.7259547,
    lng: 77.60234659999999,
  },
  {
    addr: 'Mannila, Ananthapuram, Ananthapur, Andhra Pradesh, India',
    lat: 14.5594151,
    lng: 77.6886853,
  },
  {
    addr: 'Upparapalli, Ananthapuram, Ananthapur, Andhra Pradesh, India',
    lat: 14.6498169,
    lng: 77.6400098,
  },
  {
    addr: 'Bommalatapalli, Bukkarayasamudram, Ananthapur, Andhra Pradesh, India',
    lat: 14.703513,
    lng: 77.7644299,
  },
  {
    addr: 'Rekulakunta, Bukkarayasamudram, Ananthapur, Andhra Pradesh, India',
    lat: 14.6938463,
    lng: 77.66946850000001,
  },
  {
    addr: 'Reddypalli-1, Bukkarayasamudram, Ananthapur, Andhra Pradesh, India',
    lat: 14.7243611,
    lng: 77.668645,
  },
  {
    addr: 'Gugudu, Narpala, Ananthapur, Andhra Pradesh, India',
    lat: 14.6675465,
    lng: 77.86236559999999,
  },
  {
    addr: 'Nayanpalli, Narpala, Ananthapur, Andhra Pradesh, India',
    lat: 14.8008623,
    lng: 77.8131404,
  },
  {
    addr: 'Siddiracherla, Narpala, Ananthapur, Andhra Pradesh, India',
    lat: 14.6808559,
    lng: 77.5983858,
  },
  {
    addr: 'Chamaluru, Narpala, Ananthapur, Andhra Pradesh, India',
    lat: 14.7610696,
    lng: 77.7726307,
  },
  {
    addr: 'H.Sodanpalli, Narpala, Ananthapur, Andhra Pradesh, India',
    lat: 14.7994669,
    lng: 77.7602283,
  },
  {
    addr: 'Bethapalli, Gooty, Ananthapur, Andhra Pradesh, India',
    lat: 15.0740695,
    lng: 77.6475273,
  },
  {
    addr: 'Karidikonda, Gooty, Ananthapur, Andhra Pradesh, India',
    lat: 15.0740695,
    lng: 77.6475273,
  },
  {
    addr: 'Kojjepalli, Gooty, Ananthapur, Andhra Pradesh, India',
    lat: 15.0740695,
    lng: 77.6475273,
  },
  {
    addr: 'Teliki, Peddavadugur, Ananthapur, Andhra Pradesh, India',
    lat: 15.0197123,
    lng: 77.6732438,
  },
  {
    addr: 'Appecherla, Peddavadugur, Ananthapur, Andhra Pradesh, India',
    lat: 15.0197123,
    lng: 77.6732438,
  },
  {
    addr: 'Ramrajpalli, Pamidi, Ananthapur, Andhra Pradesh, India',
    lat: 14.6757944,
    lng: 77.6307018,
  },
  {
    addr: 'VANKARAJUKALAVA, Pamidi, Ananthapur, Andhra Pradesh, India',
    lat: 14.6757944,
    lng: 77.6307018,
  },
  {
    addr: 'MUTTALA, Atmakur, Ananthapur, Andhra Pradesh, India',
    lat: 14.5952143,
    lng: 77.3776729,
  },
  {
    addr: 'Sanapa, Atmakur, Ananthapur, Andhra Pradesh, India',
    lat: 14.6077182,
    lng: 77.46948010000001,
  },
  {
    addr: 'Talupuru, Atmakur, Ananthapur, Andhra Pradesh, India',
    lat: 14.2957736,
    lng: 79.6937075,
  },
  {
    addr: 'Prasannayapalli, Rapthadu, Ananthapur, Andhra Pradesh, India',
    lat: 14.6375091,
    lng: 77.61065119999999,
  },
  {
    addr: 'Maroor, Rapthadu, Ananthapur, Andhra Pradesh, India',
    lat: 14.6164005,
    lng: 77.6056407,
  },
  {
    addr: 'West Narsapuram, Singanamala, Ananthapur, Andhra Pradesh, India',
    lat: 14.818194,
    lng: 77.6658587,
  },
  {
    addr: 'Sodanpalli, Singanamala, Ananthapur, Andhra Pradesh, India',
    lat: 14.8003189,
    lng: 77.71697309999999,
  },
  {
    addr: 'Kallur-1, Garladinne, Ananthapur, Andhra Pradesh, India',
    lat: 13.57601,
    lng: 79.0129685,
  },
  {
    addr: 'Budedu, Garladinne, Ananthapur, Andhra Pradesh, India',
    lat: 14.8498556,
    lng: 77.55943429999999,
  },
  {
    addr: 'Nagaruru, Yadiki, Ananthapur, Andhra Pradesh, India',
    lat: 14.9904167,
    lng: 77.8310104,
  },
  {
    addr: 'Rayalacheruvu, Yadiki, Ananthapur, Andhra Pradesh, India',
    lat: 15.0533885,
    lng: 77.81853989999999,
  },
  {
    addr: 'Sajjaladinne, Tadipatri, Ananthapur, Andhra Pradesh, India',
    lat: 14.9091024,
    lng: 78.0092047,
  },
  {
    addr: 'Gangadevipalli, Tadipatri, Ananthapur, Andhra Pradesh, India',
    lat: 14.9091024,
    lng: 78.0092047,
  },
  {
    addr: 'CHIKKEPALLI, Peddapappur, Ananthapur, Andhra Pradesh, India',
    lat: 14.8897888,
    lng: 77.86745610000001,
  },
  {
    addr: 'NARASAPURAM, Peddapappur, Ananthapur, Andhra Pradesh, India',
    lat: 14.9289346,
    lng: 77.8620466,
  },
  {
    addr: 'KADAVAKALLU, Putlur, Ananthapur, Andhra Pradesh, India',
    lat: 14.8116485,
    lng: 77.9209138,
  },
  {
    addr: 'YELLUTLA, Putlur, Ananthapur, Andhra Pradesh, India',
    lat: 14.6702876,
    lng: 77.9076213,
  },
  {
    addr: 'DANTHALAPALLI, Yellanur, Ananthapur, Andhra Pradesh, India',
    lat: 14.5747019,
    lng: 78.04450109999999,
  },
  {
    addr: 'VENAPUSAPALLI, Yellanur, Ananthapur, Andhra Pradesh, India',
    lat: 14.7000169,
    lng: 78.0733647,
  },
  {
    addr: 'Rayadurgam, Rayadurgam, Ananthapur, Andhra Pradesh, India',
    lat: 14.7005847,
    lng: 76.8500725,
  },
  {
    addr: 'BN.Halli, Rayadurgam, Ananthapur, Andhra Pradesh, India',
    lat: 14.6623054,
    lng: 76.9154576,
  },
  {
    addr: 'Udegolam, Rayadurgam, Ananthapur, Andhra Pradesh, India',
    lat: 14.6872167,
    lng: 76.8761131,
  },
  {
    addr: 'D.Hirehal, D.Hirehal, Ananthapur, Andhra Pradesh, India',
    lat: 15.0096592,
    lng: 76.8379942,
  },
  {
    addr: 'Somlapuram, D.Hirehal, Ananthapur, Andhra Pradesh, India',
    lat: 15.0096592,
    lng: 76.8379942,
  },
  {
    addr: 'Kadalur, D.Hirehal, Ananthapur, Andhra Pradesh, India',
    lat: 15.0096592,
    lng: 76.8379942,
  },
  {
    addr: 'Muradi, D.Hirehal, Ananthapur, Andhra Pradesh, India',
    lat: 15.0096592,
    lng: 76.8379942,
  },
  {
    addr: 'Nimbagal, Uravakonda, Ananthapur, Andhra Pradesh, India',
    lat: 14.8898534,
    lng: 77.2086839,
  },
  {
    addr: 'Lathavaram, Uravakonda, Ananthapur, Andhra Pradesh, India',
    lat: 14.9416069,
    lng: 77.2600481,
  },
  {
    addr: 'Palthur, Vidapanakal, Ananthapur, Andhra Pradesh, India',
    lat: 15.0563214,
    lng: 77.18332199999999,
  },
  {
    addr: 'Kattalapalli, Vidapanakal, Ananthapur, Andhra Pradesh, India',
    lat: 15.0563214,
    lng: 77.18332199999999,
  },
  {
    addr: 'Mulakalapenta, Guntakal, Ananthapur, Andhra Pradesh, India',
    lat: 15.2002402,
    lng: 77.5130593,
  },
  {
    addr: 'Nelagonda, Guntakal, Ananthapur, Andhra Pradesh, India',
    lat: 15.089217,
    lng: 77.4357739,
  },
  {
    addr: 'Chabala, Vajrakarur, Ananthapur, Andhra Pradesh, India',
    lat: 15.0349592,
    lng: 77.2807776,
  },
  {
    addr: 'Konakondla, Vajrakarur, Ananthapur, Andhra Pradesh, India',
    lat: 15.1052635,
    lng: 77.36402570000001,
  },
  {
    addr: 'Gummagatta, Gummagatta, Ananthapur, Andhra Pradesh, India',
    lat: 14.5676959,
    lng: 76.86424629999999,
  },
  {
    addr: 'Veerapuram, Gummagatta, Ananthapur, Andhra Pradesh, India',
    lat: 14.5676959,
    lng: 76.86424629999999,
  },
  {
    addr: 'Bommiganipalli, Bramhasamudram, Ananthapur, Andhra Pradesh, India',
    lat: 14.5964235,
    lng: 77.03338959999999,
  },
  {
    addr: 'Vepulaparthy-1, Bramhasamudram, Ananthapur, Andhra Pradesh, India',
    lat: 14.5676026,
    lng: 76.8879496,
  },
  {
    addr: 'Yatakallu, Settur, Ananthapur, Andhra Pradesh, India',
    lat: 15.5657853,
    lng: 77.43003569999999,
  },
  {
    addr: 'Perugupalyam, Settur, Ananthapur, Andhra Pradesh, India',
    lat: 14.3766048,
    lng: 76.92145140000001,
  },
  {
    addr: 'Kundurpi, Kundurpi, Ananthapur, Andhra Pradesh, India',
    lat: 14.2910193,
    lng: 77.03532990000001,
  },
  {
    addr: 'Mahananthapuram, Kundurpi, Ananthapur, Andhra Pradesh, India',
    lat: 14.6818877,
    lng: 77.6005911,
  },
  {
    addr: 'Yerragunta, Kanekal, Ananthapur, Andhra Pradesh, India',
    lat: 14.8048632,
    lng: 77.0730524,
  },
  {
    addr: 'Sollapuram, Kanekal, Ananthapur, Andhra Pradesh, India',
    lat: 14.8048632,
    lng: 77.0730524,
  },
  {
    addr: 'Hulikera, Kanekal, Ananthapur, Andhra Pradesh, India',
    lat: 14.7621779,
    lng: 76.9945473,
  },
  {
    addr: 'Ganigera, Kanekal, Ananthapur, Andhra Pradesh, India',
    lat: 14.8048632,
    lng: 77.0730524,
  },
  {
    addr: 'Sreedharghatta, Bommanahal, Ananthapur, Andhra Pradesh, India',
    lat: 14.9993236,
    lng: 76.978726,
  },
  {
    addr: 'Govindawada, Bommanahal, Ananthapur, Andhra Pradesh, India',
    lat: 14.9192559,
    lng: 77.1093233,
  },
  {
    addr: 'Unthakal, Bommanahal, Ananthapur, Andhra Pradesh, India',
    lat: 14.9869445,
    lng: 76.96070540000001,
  },
  {
    addr: 'Lingadahal, Bommanahal, Ananthapur, Andhra Pradesh, India',
    lat: 14.9993236,
    lng: 76.978726,
  },
  {
    addr: 'Duradakunta, Kalyandurg, Ananthapur, Andhra Pradesh, India',
    lat: 14.4846603,
    lng: 77.1957676,
  },
  {
    addr: 'Narayanapuram, Kalyandurg, Ananthapur, Andhra Pradesh, India',
    lat: 14.5519565,
    lng: 77.1107476,
  },
  {
    addr: 'Ankampalli, Beluguppa, Ananthapur, Andhra Pradesh, India',
    lat: 14.702606,
    lng: 77.23800059999999,
  },
  {
    addr: 'Narsapuram, Beluguppa, Ananthapur, Andhra Pradesh, India',
    lat: 14.6523871,
    lng: 77.0651479,
  },
  {
    addr: 'Palluru, Kambadur, Ananthapur, Andhra Pradesh, India',
    lat: 14.4367573,
    lng: 77.22901929999999,
  },
  {
    addr: 'Ralla Ananthapuramu, Kambadur, Ananthapur, Andhra Pradesh, India',
    lat: 14.3449454,
    lng: 77.2314696,
  },
  {
    addr: 'Anantapuram, Ananthapuram, Ananthapur, Andhra Pradesh, India',
    lat: 14.6801789,
    lng: 77.5936665,
  },
  {
    addr: 'Rayadurgam, Rayadurgam, Ananthapur, Andhra Pradesh, India',
    lat: 14.7005847,
    lng: 76.8500725,
  },
  {
    addr: 'Uravakonda, Uravakonda, Ananthapur, Andhra Pradesh, India',
    lat: 14.9441154,
    lng: 77.2577817,
  },
  {
    addr: 'Guntakal, Guntakal, Ananthapur, Andhra Pradesh, India',
    lat: 15.1660706,
    lng: 77.3769836,
  },
  {
    addr: 'Kalyanadurgam, Kalyanadurgam, Ananthapur, Andhra Pradesh, India',
    lat: 14.5519565,
    lng: 77.1107476,
  },
  {
    addr: 'Raptadu, Raptadu, Ananthapur, Andhra Pradesh, India',
    lat: 14.6164005,
    lng: 77.6056407,
  },
  {
    addr: 'Singanamala, Singanamala, Ananthapur, Andhra Pradesh, India',
    lat: 14.8003189,
    lng: 77.71697309999999,
  },
  {
    addr: 'Tadipatri, Tadipatri, Ananthapur, Andhra Pradesh, India',
    lat: 14.9091024,
    lng: 78.0092047,
  },
  {
    addr: 'Gorlamudiveedu, Cherlopalli, Rayachoty, Annamayya, Andhra Pradesh, India',
    lat: 14.0274516,
    lng: 78.7006907,
  },
  {
    addr: 'Yandapalli, Rayachoty, Annamayya, Andhra Pradesh, India',
    lat: 14.0435838,
    lng: 78.68678609999999,
  },
  {
    addr: 'Araveedu, Galiveedu, Annamayya, Andhra Pradesh, India',
    lat: 14.0185642,
    lng: 78.5141328,
  },
  {
    addr: 'Korlakunta, Galiveedu, Annamayya, Andhra Pradesh, India',
    lat: 14.0234061,
    lng: 78.5052852,
  },
  {
    addr: 'Maddirevula, Lakkireddipalli, Annamayya, Andhra Pradesh, India',
    lat: 14.1853427,
    lng: 78.69699729999999,
  },
  {
    addr: 'Edigapalli, Lakkireddipalli, Annamayya, Andhra Pradesh, India',
    lat: 14.1853427,
    lng: 78.69699729999999,
  },
  {
    addr: 'Chitlooru, Ramapuram, Annamayya, Andhra Pradesh, India',
    lat: 14.8082709,
    lng: 78.7066818,
  },
  {
    addr: 'Suryanarayanapuram, Ramapuram, Annamayya, Andhra Pradesh, India',
    lat: 18.4612804,
    lng: 84.1277049,
  },
  {
    addr: 'T.Sakibanda, Chinnamandem, Annamayya, Andhra Pradesh, India',
    lat: 14.0062012,
    lng: 78.64554749999999,
  },
  {
    addr: 'Kothapalli,  Chinnamandem, Annamayya, Andhra Pradesh, India',
    lat: 13.9421331,
    lng: 78.678839,
  },
  {
    addr: 'Narayanareddypalli, Sambepalli, Annamayya, Andhra Pradesh, India',
    lat: 13.4148742,
    lng: 79.1211735,
  },
  {
    addr: 'Routhukunta, Dinnemidapalli, Sambepalli, Annamayya, Andhra Pradesh, India',
    lat: 13.9244805,
    lng: 78.7306158,
  },
  {
    addr: 'Peddinenukalva, Reddivaripalli,  T Sundupalli, Annamayya, Andhra Pradesh, India',
    lat: 13.9815716,
    lng: 78.9146798,
  },
  {
    addr: 'T Sundupalli 2, Edigapalli, T Sundupalli, Annamayya, Andhra Pradesh, India',
    lat: 13.9815716,
    lng: 78.9146798,
  },
  {
    addr: 'Somavaram, Puthavandlapalli, Veeraballi,  Annamayya, Andhra Pradesh, India',
    lat: 14.1576711,
    lng: 78.8566661,
  },
  {
    addr: 'Odiveedu Kaspa, Veeraballi,  Annamayya, Andhra Pradesh, India',
    lat: 14.1576711,
    lng: 78.8566661,
  },
  {
    addr: 'Kona, Kalakada, Annamayya, Andhra Pradesh, India',
    lat: 13.8322317,
    lng: 78.7270728,
  },
  {
    addr: 'Vepurikota, Molakalacheruvu, Annamayya, Andhra Pradesh, India',
    lat: 13.7984923,
    lng: 78.26663529999999,
  },
  {
    addr: 'Rangasamudram, PTM, Annamayya, Andhra Pradesh, India',
    lat: 14.9851973,
    lng: 78.9764656,
  },
  {
    addr: 'Arogyavaram, Madanapalli, Annamayya, Andhra Pradesh, India',
    lat: 13.597175,
    lng: 78.5303385,
  },
  {
    addr: 'Bommanacheruvu, Madanapalli, Annamayya, Andhra Pradesh, India',
    lat: 13.4972248,
    lng: 78.4732408,
  },
  {
    addr: 'Mustoor, Nimmanapalli, Annamayya, Andhra Pradesh, India',
    lat: 13.5699361,
    lng: 78.6704093,
  },
  {
    addr: 'K C Palli, Ramasamudram, Annamayya, Andhra Pradesh, India',
    lat: 13.3657952,
    lng: 78.4943735,
  },
  {
    addr: 'Amilepalli, Gurramkonda, Annamayya, Andhra Pradesh, India',
    lat: 13.7817971,
    lng: 78.58959229999999,
  },
  {
    addr: 'T Pasalavandlapalli, Gurramkonda, Annamayya, Andhra Pradesh, India',
    lat: 13.8378758,
    lng: 78.5992612,
  },
  {
    addr: 'Kattavaripalli, Penagalur, Annamayya, Andhra Pradesh, India',
    lat: 14.3016211,
    lng: 79.2687152,
  },
  {
    addr: 'Mudrapalli, Penagalur, Annamayya, Andhra Pradesh, India',
    lat: 14.2325237,
    lng: 79.2542773,
  },
  {
    addr: 'Peddaorampadu, Obulavaripalli, Annamayya, Andhra Pradesh, India',
    lat: 14.0374777,
    lng: 79.2648481,
  },
  {
    addr: 'Gadela,  Obulavaripalli, Annamayya, Andhra Pradesh, India',
    lat: 14.0374777,
    lng: 79.2648481,
  },
  {
    addr: 'K C Agraharam/Reddivaripalli, Rly Kodur, Annamayya, Andhra Pradesh, India',
    lat: 13.9597733,
    lng: 79.3499861,
  },
  {
    addr: 'K.Buduguntapalli, Rly Kodur, Annamayya, Andhra Pradesh, India',
    lat: 13.9344092,
    lng: 79.3332889,
  },
  {
    addr: 'Rly Kodur, Rly Kodur, Annamayya, Andhra Pradesh, India',
    lat: 13.9597733,
    lng: 79.3499861,
  },
  {
    addr: 'Kuchivaripalli, Rajampet, Annamayya, Andhra Pradesh, India',
    lat: 14.1826394,
    lng: 79.1418005,
  },
  {
    addr: 'Madanapalli, Madanapalli, Annamayya, Andhra Pradesh, India',
    lat: 13.5560496,
    lng: 78.50100069999999,
  },
  {
    addr: 'Baski, Arakuvalley, ASR, Andhra Pradesh, India',
    lat: 18.2153301,
    lng: 82.887512,
  },
  {
    addr: 'Lotheru, Arakuvalley, ASR, Andhra Pradesh, India',
    lat: 18.3382598,
    lng: 83.053589,
  },
  {
    addr: 'Arakuvalley, Arakuvalley, ASR, Andhra Pradesh, India',
    lat: 18.3222221,
    lng: 82.88017649999999,
  },
  {
    addr: 'Getuvalasa, Borrra, Anathagiri, ASR, Andhra Pradesh, India',
    lat: 18.2383312,
    lng: 83.0178423,
  },
  {
    addr: 'Kondiba, Anathagiri, ASR, Andhra Pradesh, India',
    lat: 18.2031318,
    lng: 83.0280816,
  },
  {
    addr: 'Guntaseema, Dumbriguda, ASR, Andhra Pradesh, India',
    lat: 18.265629,
    lng: 82.6874942,
  },
  {
    addr: 'Gasaba, Dumbriguda, ASR, Andhra Pradesh, India',
    lat: 18.4116554,
    lng: 82.8413618,
  },
  {
    addr: 'Kothapalem-2, Chinthpalli, ASR, Andhra Pradesh, India',
    lat: 17.7437315,
    lng: 83.2135699,
  },
  {
    addr: 'Tajangi, Chinthpalli, ASR, Andhra Pradesh, India',
    lat: 17.8709056,
    lng: 82.4942263,
  },
  {
    addr: 'Seleeru, G. K. Veedi, ASR, Andhra Pradesh, India',
    lat: 17.859715,
    lng: 82.1946829,
  },
  {
    addr: 'Rinthada-2, G. K. Veedi, ASR, Andhra Pradesh, India',
    lat: 17.8590575,
    lng: 82.2848061,
  },
  {
    addr: 'Bakuluru, Koyyuru, ASR, Andhra Pradesh, India',
    lat: 17.6607325,
    lng: 82.208338,
  },
  {
    addr: 'Bangarampet-1, Koyyuru, ASR, Andhra Pradesh, India',
    lat: 17.6607325,
    lng: 82.208338,
  },
  {
    addr: 'Bheeram, G. Madugula, ASR, Andhra Pradesh, India',
    lat: 18.0785102,
    lng: 82.50976539999999,
  },
  {
    addr: 'Gondhipadu, G. Madugula, ASR, Andhra Pradesh, India',
    lat: 18.0124337,
    lng: 82.533076,
  },
  {
    addr: 'Boithali, G. Madugula, ASR, Andhra Pradesh, India',
    lat: 18.0124337,
    lng: 82.533076,
  },
  {
    addr: 'Sukuru, Hukumpeta, ASR, Andhra Pradesh, India',
    lat: 18.1520865,
    lng: 82.69376969999999,
  },
  {
    addr: 'Ganneruputtu, Hukumpeta, ASR, Andhra Pradesh, India',
    lat: 18.1520865,
    lng: 82.69376969999999,
  },
  {
    addr: 'Iradapalli, Paderu, ASR, Andhra Pradesh, India',
    lat: 18.071089,
    lng: 82.7077992,
  },
  {
    addr: 'Thumpada, Paderu, ASR, Andhra Pradesh, India',
    lat: 18.0669593,
    lng: 82.7016829,
  },
  {
    addr: 'Gondeli, Paderu, ASR, Andhra Pradesh, India',
    lat: 18.0975113,
    lng: 82.6185074,
  },
  {
    addr: 'Pedaguda, Munchingiputtu, ASR, Andhra Pradesh, India',
    lat: 18.1216697,
    lng: 82.6290665,
  },
  {
    addr: 'Vanugumma, Munchingiputtu, ASR, Andhra Pradesh, India',
    lat: 18.4785365,
    lng: 82.4645843,
  },
  {
    addr: 'Rudakota, Pedabayalu, ASR, Andhra Pradesh, India',
    lat: 18.2853641,
    lng: 82.5875496,
  },
  {
    addr: 'Kimudapalli, Pedabayalu, ASR, Andhra Pradesh, India',
    lat: 18.2853641,
    lng: 82.5875496,
  },
  {
    addr: 'Tungamadugula, Addateegala, ASR, Andhra Pradesh, India',
    lat: 17.4776411,
    lng: 82.0234825,
  },
  {
    addr: 'Timmapuram, Addateegala, ASR, Andhra Pradesh, India',
    lat: 17.4776411,
    lng: 82.0234825,
  },
  {
    addr: 'Nellipaka, Yetapaka,  ASR, Andhra Pradesh, India',
    lat: 17.6598107,
    lng: 81.00506320000001,
  },
  {
    addr: 'Yetapaka, Yetapaka,  ASR, Andhra Pradesh, India',
    lat: 17.6934752,
    lng: 80.90832999999999,
  },
  {
    addr: 'Jaddangi, Rajavommangi, ASR, Andhra Pradesh, India',
    lat: 17.4812621,
    lng: 82.1523251,
  },
  {
    addr: 'Rajavommangi, Rajavommangi, ASR, Andhra Pradesh, India',
    lat: 17.5467283,
    lng: 82.2331198,
  },
  {
    addr: 'Tummala, Chinthuru,  ASR, Andhra Pradesh, India',
    lat: 17.7688956,
    lng: 81.30968279999999,
  },
  {
    addr: 'Chinthuru, Chinthuru,  ASR, Andhra Pradesh, India',
    lat: 17.7202468,
    lng: 81.47183869999999,
  },
  {
    addr: 'Rekhapalli, Vararamachandrapuram, ASR, Andhra Pradesh, India',
    lat: 17.5683533,
    lng: 81.2996955,
  },
  {
    addr: 'Mulakanapalli, Vararamachandrapuram, ASR, Andhra Pradesh, India',
    lat: 17.5644225,
    lng: 81.2973009,
  },
  {
    addr: 'Chavitidibbalu, Y.Ramavaram, ASR, Andhra Pradesh, India',
    lat: 17.5571824,
    lng: 81.9943847,
  },
  {
    addr: 'yerramreddypalem, Y.Ramavaram, ASR, Andhra Pradesh, India',
    lat: 17.6797658,
    lng: 81.956891,
  },
  {
    addr: 'kundada, Maredumilli,  ASR, Andhra Pradesh, India',
    lat: 17.5553896,
    lng: 81.6665149,
  },
  {
    addr: 'Tadepalli, Maredumilli,  ASR, Andhra Pradesh, India',
    lat: 17.6058315,
    lng: 81.7489164,
  },
  {
    addr: 'Jaggampalem, Gangavaram,  ASR, Andhra Pradesh, India',
    lat: 17.2879484,
    lng: 81.8688751,
  },
  {
    addr: 'Lakkonda, Gangavaram,  ASR, Andhra Pradesh, India',
    lat: 17.3892475,
    lng: 81.9070966,
  },
  {
    addr: 'Bvkota, Rampachodavaram, ASR, Andhra Pradesh, India',
    lat: 17.439996,
    lng: 81.7771574,
  },
  {
    addr: 'akuru, Rampachodavaram, ASR, Andhra Pradesh, India',
    lat: 17.439996,
    lng: 81.7771574,
  },
  {
    addr: 'Rampachodavaram, Rampachodavaram, ASR, Andhra Pradesh, India',
    lat: 17.439996,
    lng: 81.7771574,
  },
  {
    addr: 'Inturu, Amarthaluru, Bapatla, Andhra Pradesh, India',
    lat: 16.0630791,
    lng: 80.6285931,
  },
  {
    addr: 'Thurumella, Amarthaluru, Bapatla, Andhra Pradesh, India',
    lat: 16.1114768,
    lng: 80.6395695,
  },
  {
    addr: 'Jammula Plaem, Bapatla, Bapatla, Andhra Pradesh, India',
    lat: 15.9365023,
    lng: 80.4409967,
  },
  {
    addr: 'Maruproluvaripalem, Bapatla, Bapatla, Andhra Pradesh, India',
    lat: 15.8684966,
    lng: 80.4799273,
  },
  {
    addr: 'Vellaturu, Bhatiprolu, Bapatla, Andhra Pradesh, India',
    lat: 16.1160073,
    lng: 80.81411,
  },
  {
    addr: 'Surepalli, Bhatiprolu, Bapatla, Andhra Pradesh, India',
    lat: 16.0781426,
    lng: 80.7865558,
  },
  {
    addr: 'Balusulapalem, Cherukupalli, Bapatla, Andhra Pradesh, India',
    lat: 15.9983668,
    lng: 80.6576623,
  },
  {
    addr: 'Chinnaganjam, Chinnaganjam, Bapatla, Andhra Pradesh, India',
    lat: 15.6929955,
    lng: 80.24185779999999,
  },
  {
    addr: 'Bolayapalem, Karlapalem, Bapatla, Andhra Pradesh, India',
    lat: 15.9916056,
    lng: 80.5861979,
  },
  {
    addr: 'Pesaralanka, Kolluru, Bapatla, Andhra Pradesh, India',
    lat: 16.0937203,
    lng: 80.85265509999999,
  },
  {
    addr: 'Juvvala Palem, Kolluru, Bapatla, Andhra Pradesh, India',
    lat: 16.1077506,
    lng: 80.85267979999999,
  },
  {
    addr: 'Nagaram, Nagaram, Bapatla, Andhra Pradesh, India',
    lat: 15.9039445,
    lng: 80.46713749999999,
  },
  {
    addr: 'Pedapalli Gollapalem, Nagaram, Bapatla, Andhra Pradesh, India',
    lat: 15.955117,
    lng: 80.641239,
  },
  {
    addr: 'Dhulipudi, Nagaram, Bapatla, Andhra Pradesh, India',
    lat: 16.0363285,
    lng: 80.7616247,
  },
  {
    addr: 'Pallapatla, Nizampatnam, Bapatla, Andhra Pradesh, India',
    lat: 15.9850026,
    lng: 80.7519272,
  },
  {
    addr: 'Nizampatna, Nizampatnam, Bapatla, Andhra Pradesh, India',
    lat: 15.9069453,
    lng: 80.6690697,
  },
  {
    addr: 'Mantenavari Palem, Pittalavani Palem, Bapatla, Andhra Pradesh, India',
    lat: 15.9867963,
    lng: 80.65295379999999,
  },
  {
    addr: 'Petaru 1, Repelle, Bapatla, Andhra Pradesh, India',
    lat: 15.9039445,
    lng: 80.46713749999999,
  },
  {
    addr: 'Munagivaripalem, Tsundur, Bapatla, Andhra Pradesh, India',
    lat: 16.1588948,
    lng: 80.5833296,
  },
  {
    addr: 'vemuru, Vemuru, Bapatla, Andhra Pradesh, India',
    lat: 16.1792758,
    lng: 80.7399885,
  },
  {
    addr: 'Pandillapalli, Vetapalem, Bapatla, Andhra Pradesh, India',
    lat: 15.7575949,
    lng: 80.2711588,
  },
  {
    addr: 'Enamadala, Yeddanapudi, Bapatla, Andhra Pradesh, India',
    lat: 16.0042142,
    lng: 80.1538502,
  },
  {
    addr: 'Poluru, Yeddanapudi, Bapatla, Andhra Pradesh, India',
    lat: 15.9931889,
    lng: 80.211131,
  },
  {
    addr: 'AVH Bapatla, Bapatla, Bapatla, Andhra Pradesh, India',
    lat: 15.9039445,
    lng: 80.46713749999999,
  },
  {
    addr: 'Kanipakam, Irala, Chittoor, Andhra Pradesh, India',
    lat: 13.2775912,
    lng: 79.035548,
  },
  {
    addr: 'Keelapatla, Gangavaram, Chittoor, Andhra Pradesh, India',
    lat: 13.2381083,
    lng: 78.7748934,
  },
  {
    addr: 'Jagamarla, Palamaner, Chittoor, Andhra Pradesh, India',
    lat: 13.2008143,
    lng: 78.7440118,
  },
  {
    addr: 'Peddapanjani, Peddapanjani, Chittoor, Andhra Pradesh, India',
    lat: 13.2983433,
    lng: 78.68467299999999,
  },
  {
    addr: 'Rallabuduguru, Santhipuram, Chittoor, Andhra Pradesh, India',
    lat: 12.8570109,
    lng: 78.3422633,
  },
  {
    addr: 'Gunjarlapalli, Santhipuram, Chittoor, Andhra Pradesh, India',
    lat: 12.8657718,
    lng: 78.3771569,
  },
  {
    addr: 'Avulakuppam, Ramakuppam, Chittoor, Andhra Pradesh, India',
    lat: 12.8717533,
    lng: 78.492243,
  },
  {
    addr: 'CheldiganiPalli, Ramakuppam, Chittoor, Andhra Pradesh, India',
    lat: 12.9304392,
    lng: 78.4496168,
  },
  {
    addr: 'Kotaluru, Kuppam, Chittoor, Andhra Pradesh, India',
    lat: 12.7461129,
    lng: 78.342291,
  },
  {
    addr: 'Vasanadu, Kuppam, Chittoor, Andhra Pradesh, India',
    lat: 12.6952326,
    lng: 78.37568999999999,
  },
  {
    addr: 'Kuppiganipalli, Gudupalli, Chittoor, Andhra Pradesh, India',
    lat: 12.8163067,
    lng: 78.3017101,
  },
  {
    addr: 'Gundlasagaram, Gudupalli, Chittoor, Andhra Pradesh, India',
    lat: 12.7672186,
    lng: 78.33204169999999,
  },
  {
    addr: 'Gaddur, Baireddypalli, Chittoor, Andhra Pradesh, India',
    lat: 12.9024411,
    lng: 78.4606288,
  },
  {
    addr: 'Gollachemanapalli, Baireddypalli, Chittoor, Andhra Pradesh, India',
    lat: 13.0907255,
    lng: 78.60836119999999,
  },
  {
    addr: 'Kongatam, V.Kota, Chittoor, Andhra Pradesh, India',
    lat: 12.942526,
    lng: 78.46666929999999,
  },
  {
    addr: 'Thotakanuma, V.Kota, Chittoor, Andhra Pradesh, India',
    lat: 13.0697463,
    lng: 78.52349029999999,
  },
  {
    addr: 'Annemmagariapalli, Somala, Chittoor, Andhra Pradesh, India',
    lat: 13.476537,
    lng: 78.8081964,
  },
  {
    addr: 'Palamanda,  Sodam,  Chittoor , Andhra Pradesh, India',
    lat: 13.6025164,
    lng: 78.8536584,
  },
  {
    addr: 'Mapakshi, Chittoor, Chittoor, Andhra Pradesh, India',
    lat: 13.1434968,
    lng: 79.0906305,
  },
  {
    addr: 'A L Puram, Gudipala, Chittoor, Andhra Pradesh, India',
    lat: 13.1254326,
    lng: 79.20070009999999,
  },
  {
    addr: 'Katiperi, Chowdeapalli, Chittoor, Andhra Pradesh, India',
    lat: 13.4175985,
    lng: 78.6171753,
  },
  {
    addr: 'Parikidona, Chowdeapalli, Chittoor, Andhra Pradesh, India',
    lat: 13.4502166,
    lng: 78.6981566,
  },
  {
    addr: 'Eatavakili, Punganur, Chittoor, Andhra Pradesh, India',
    lat: 13.368608,
    lng: 78.5713232,
  },
  {
    addr: 'Bainapalli, Punganur, Chittoor, Andhra Pradesh, India',
    lat: 13.368608,
    lng: 78.5713232,
  },
  {
    addr: 'Chittoor, Chittoor, Chittoor, Andhra Pradesh, India',
    lat: 13.217176,
    lng: 79.1003289,
  },
  {
    addr: 'Patharcot, Vijyapuram, Chittoor, Andhra Pradesh, India',
    lat: 13.2710717,
    lng: 79.6992736,
  },
  {
    addr: 'VKR Puram, Nagari, Chittoor, Andhra Pradesh, India',
    lat: 13.2911042,
    lng: 79.58317009999999,
  },
  {
    addr: 'VNR Peta, Nagari, Chittoor, Andhra Pradesh, India',
    lat: 13.2712999,
    lng: 79.58216100000001,
  },
  {
    addr: 'GD Nellore, GD Nellore, Chittoor, Andhra Pradesh, India',
    lat: 13.2307824,
    lng: 79.1808757,
  },
  {
    addr: 'Penakanametta, Kovvuru, East Godavari, Andhra Pradesh, India',
    lat: 17.0125618,
    lng: 81.727383,
  },
  {
    addr: 'Arikarevula, Kovvuru, East Godavari, Andhra Pradesh, India',
    lat: 16.8852195,
    lng: 82.05195069999999,
  },
  {
    addr: 'S.Muppavaram, Chagallu, East Godavari, Andhra Pradesh, India',
    lat: 16.9484511,
    lng: 81.66856609999999,
  },
  {
    addr: 'Nelaturu, Chagallu, East Godavari, Andhra Pradesh, India',
    lat: 16.9918555,
    lng: 81.6652051,
  },
  {
    addr: 'Katakoteswaram, Nidadavolu, East Godavari, Andhra Pradesh, India',
    lat: 16.9285497,
    lng: 81.6251147,
  },
  {
    addr: 'Pandalaparru, Nidadavolu, East Godavari, Andhra Pradesh, India',
    lat: 16.8952678,
    lng: 81.71434699999999,
  },
  {
    addr: 'Palangi, Undrajavaram, East Godavari, Andhra Pradesh, India',
    lat: 16.7653041,
    lng: 81.6938933,
  },
  {
    addr: 'Chivatam, Undrajavaram, East Godavari, Andhra Pradesh, India',
    lat: 16.7763431,
    lng: 81.67746749999999,
  },
  {
    addr: 'Kanuru, Peravali, East Godavari, Andhra Pradesh, India',
    lat: 16.8368908,
    lng: 81.72365610000001,
  },
  {
    addr: 'Mukkamala, Peravali, East Godavari, Andhra Pradesh, India',
    lat: 16.7464896,
    lng: 81.7718663,
  },
  {
    addr: 'Singarajupalem, Nallajerla, East Godavari, Andhra Pradesh, India',
    lat: 16.8806873,
    lng: 81.41093959999999,
  },
  {
    addr: 'Prakasaraopalem, Nallajerla, East Godavari, Andhra Pradesh, India',
    lat: 16.9172763,
    lng: 81.4332754,
  },
  {
    addr: 'Yernagudem, Devarapalli, East Godavari, Andhra Pradesh, India',
    lat: 16.9990752,
    lng: 81.5054822,
  },
  {
    addr: 'Yadavole, Devarapalli, East Godavari, Andhra Pradesh, India',
    lat: 17.0639605,
    lng: 81.4743361,
  },
  {
    addr: 'Gopavaram, Gopalapuram, East Godavari, Andhra Pradesh, India',
    lat: 16.7095152,
    lng: 81.8117027,
  },
  {
    addr: 'Vellachintalagudem, Gopalapuram, East Godavari, Andhra Pradesh, India',
    lat: 16.7095152,
    lng: 81.8117027,
  },
  {
    addr: 'Ragolapalli, Tallapudi, East Godavari, Andhra Pradesh, India',
    lat: 17.1236876,
    lng: 81.6644839,
  },
  {
    addr: 'Vegeswarapuram, Tallapudi, East Godavari, Andhra Pradesh, India',
    lat: 17.1236876,
    lng: 81.6644839,
  },
  {
    addr: 'CADDL Rajamahendravaram Rural, Rajamahendravaram Rural, East Godavari, Andhra Pradesh, India',
    lat: 17.0005383,
    lng: 81.8040345,
  },
  {
    addr: 'VH Rajanagaram,  Rajanagaram, East Godavari, Andhra Pradesh, India',
    lat: 17.0806322,
    lng: 81.90177059999999,
  },
  {
    addr: 'CADDL Anaparthy, Anaparthy, East Godavari, Andhra Pradesh, India',
    lat: 16.9340866,
    lng: 81.9555307,
  },
  {
    addr: 'CADDL Korukonda, Korukonda, East Godavari, Andhra Pradesh, India',
    lat: 17.1687858,
    lng: 81.83104209999999,
  },
  {
    addr: 'CADDL Rajahmundry Urban, Rajahmundry Urban, East Godavari, Andhra Pradesh, India',
    lat: 17.0057961,
    lng: 81.77015569999999,
  },
  {
    addr: 'Polasanipalli, Bhimadole, Eluru, Andhra Pradesh, India',
    lat: 16.7106604,
    lng: 81.0952431,
  },
  {
    addr: 'Bhimadole, Bhimadole, Eluru, Andhra Pradesh, India',
    lat: 16.8108022,
    lng: 81.2636995,
  },
  {
    addr: 'Gunnampalli, Dwaraka Tirumala, Eluru, Andhra Pradesh, India',
    lat: 16.8748311,
    lng: 81.3186241,
  },
  {
    addr: 'Raghavapuram, Dwaraka Tirumala, Eluru, Andhra Pradesh, India',
    lat: 16.7106604,
    lng: 81.0952431,
  },
  {
    addr: 'Yerramillipadu, Unguturu, Eluru, Andhra Pradesh, India',
    lat: 16.8851372,
    lng: 81.3454278,
  },
  {
    addr: 'Bommidi, Unguturu, Eluru, Andhra Pradesh, India',
    lat: 16.8218926,
    lng: 81.4230383,
  },
  {
    addr: 'Mandalaparru, Nidamarru, Eluru, Andhra Pradesh, India',
    lat: 16.719664,
    lng: 81.4393278,
  },
  {
    addr: 'PN Kolanu -2, Nidamarru, Eluru, Andhra Pradesh, India',
    lat: 16.7327497,
    lng: 81.39372279999999,
  },
  {
    addr: 'Eluru, Eluru, Eluru, Andhra Pradesh, India',
    lat: 16.7106604,
    lng: 81.0952431,
  },
  {
    addr: 'Ponangi, Eluru, Eluru, Andhra Pradesh, India',
    lat: 16.6634028,
    lng: 81.10719519999999,
  },
  {
    addr: 'Vatluru, Pedapadu, Eluru, Andhra Pradesh, India',
    lat: 16.7020312,
    lng: 81.0547656,
  },
  {
    addr: 'Vasanthawada, Pedapadu, Eluru, Andhra Pradesh, India',
    lat: 16.6207914,
    lng: 80.9995387,
  },
  {
    addr: 'Kamayyapalem, Jeelugumilli, Eluru, Andhra Pradesh, India',
    lat: 17.2114615,
    lng: 81.13477560000001,
  },
  {
    addr: 'Mulagalampalli, Jeelugumilli, Eluru, Andhra Pradesh, India',
    lat: 17.2114615,
    lng: 81.13477560000001,
  },
  {
    addr: 'Kukkunuru, Kukkunuru, Eluru, Andhra Pradesh, India',
    lat: 17.5550074,
    lng: 81.16163619999999,
  },
  {
    addr: 'Peda Ravigudem, Kukkunuru, Eluru, Andhra Pradesh, India',
    lat: 17.5550074,
    lng: 81.16163619999999,
  },
  {
    addr: 'Sridhara Velair, Kukkunuru, Eluru, Andhra Pradesh, India',
    lat: 17.5550074,
    lng: 81.16163619999999,
  },
  {
    addr: 'Rudramakota, Velairpadu, Eluru, Andhra Pradesh, India',
    lat: 17.562937,
    lng: 81.2470647,
  },
  {
    addr: 'Kaikaluru, Kaikaluru, Eluru, Andhra Pradesh, India',
    lat: 16.7106604,
    lng: 81.0952431,
  },
  {
    addr: 'Vemavarapadu, Kaikaluru, Eluru, Andhra Pradesh, India',
    lat: 16.5527275,
    lng: 81.2129374,
  },
  {
    addr: 'Tadinada, Kalidindi, Eluru, Andhra Pradesh, India',
    lat: 16.5064829,
    lng: 81.2915992,
  },
  {
    addr: 'Sanarudravaram, Kaldiindi, Eluru, Andhra Pradesh, India',
    lat: 16.5101708,
    lng: 81.2463763,
  },
  {
    addr: 'koruturu,  polavaram,  Eluru, Andhra Pradesh, India',
    lat: 17.435799,
    lng: 81.5348157,
  },
  {
    addr: 'L N D Peta, Polavaram,  Eluru, Andhra Pradesh, India',
    lat: 17.2072123,
    lng: 81.51163749999999,
  },
  {
    addr: 'Reddy ganapavaram,  Buttayagudem,  Eluru, Andhra Pradesh, India',
    lat: 17.2071621,
    lng: 81.25394829999999,
  },
  {
    addr: 'Doramamidi,  Buttayagudem,  Eluru, Andhra Pradesh, India',
    lat: 17.2111316,
    lng: 81.3242942,
  },
  {
    addr: 'Gopannapalem, Denduluru,  Eluru, Andhra Pradesh, India',
    lat: 16.7709427,
    lng: 81.1182889,
  },
  {
    addr: 'Challachinthalapudi, Denduluru,  Eluru, Andhra Pradesh, India',
    lat: 16.7608986,
    lng: 81.16648099999999,
  },
  {
    addr: 'Vegiwada, Pedavegi, Eluru, Andhra Pradesh, India',
    lat: 16.8099463,
    lng: 81.10755549999999,
  },
  {
    addr: 'Koppaka, Pedavegi, Eluru, Andhra Pradesh, India',
    lat: 16.7506112,
    lng: 81.02991829999999,
  },
  {
    addr: 'Mandavalli, Mandavalli, Eluru, Andhra Pradesh, India',
    lat: 16.5133571,
    lng: 81.155844,
  },
  {
    addr: 'Chavalipadu, Mandavalli, Eluru, Andhra Pradesh, India',
    lat: 16.5476309,
    lng: 81.19203329999999,
  },
  {
    addr: 'Guraja, Mudinepalli, Eluru, Andhra Pradesh, India',
    lat: 16.4158322,
    lng: 81.1105493,
  },
  {
    addr: 'Alluru, Mudinepalli, Eluru, Andhra Pradesh, India',
    lat: 16.4578863,
    lng: 81.1830178,
  },
  {
    addr: 'Pallerlamudi, Nuzvid, Nuzvid, Andhra Pradesh, India',
    lat: 16.6850663,
    lng: 80.9836539,
  },
  {
    addr: 'Meerjapuram, Nuzvid, Nuzvid, Andhra Pradesh, India',
    lat: 16.7052463,
    lng: 80.9276861,
  },
  {
    addr: 'Seetharamapuram, Nuzvid, Nuzvid, Andhra Pradesh, India',
    lat: 16.6781999,
    lng: 80.960166,
  },
  {
    addr: 'NUZVID, Nuzvid, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Chittapur, Chatrai, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Chatrai, Chatrai, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Ravichrla, Nuzvid, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Marlapalem, Chatrai, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Chinthlavalli, Musunuru, Nuzvid, Andhra Pradesh, India',
    lat: 16.8273552,
    lng: 80.9343322,
  },
  {
    addr: 'Yallapuram, Musunuru, Nuzvid, Andhra Pradesh, India',
    lat: 16.8273552,
    lng: 80.9343322,
  },
  {
    addr: 'Ravikampadu, Kamavarapukota, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'VENKATADRIGUDEM, Chintalapudi, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'UTASAMUDRAM, Chintalapudi, Nuzvid, Andhra Pradesh, India',
    lat: 17.1671127,
    lng: 81.02577629999999,
  },
  {
    addr: 'Borramapalem-2, T Narasapuram, Nuzvid, Andhra Pradesh, India',
    lat: 17.1012215,
    lng: 81.07746039999999,
  },
  {
    addr: 'Velagapadu, T Narasapuram, Nuzvid, Andhra Pradesh, India',
    lat: 17.1012215,
    lng: 81.07746039999999,
  },
  {
    addr: 'Chintalapudi, Chintalapudi, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Taduvai, Jangareddygudem, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Lakkavaram, Jangareddygudem, Nuzvid, Andhra Pradesh, India',
    lat: 17.1205268,
    lng: 81.2983022,
  },
  {
    addr: 'Bayyanagudem, Koyyalagudem, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Ponguturu, Koyyalagudem, Nuzvid, Andhra Pradesh, India',
    lat: 17.0893791,
    lng: 81.4265248,
  },
  {
    addr: 'Rajavaram-2, Koyyalagudem, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Yarrampeta- 2, Ponguturu, Koyyalagudem, Nuzvid, Andhra Pradesh, India',
    lat: 17.0893791,
    lng: 81.4265248,
  },
  {
    addr: 'KOYYALAGUDEM, Koyyalagudem, Nuzvid, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'Dokiparru, Medikonduru, Guntur, Andhra Pradesh, India',
    lat: 16.3176431,
    lng: 80.3157397,
  },
  {
    addr: 'Jangamguntlapalem, Medikonduru, Guntur, Andhra Pradesh, India',
    lat: 16.3657015,
    lng: 80.2690685,
  },
  {
    addr: 'Lingayapalem, Thulluru, Guntur, Andhra Pradesh, India',
    lat: 16.5256505,
    lng: 80.4688061,
  },
  {
    addr: 'Harischandrapuram(Borupalem), Thulluru, Guntur, Andhra Pradesh, India',
    lat: 16.5256505,
    lng: 80.4688061,
  },
  {
    addr: 'PAMULPADU, TADIKONDA, Guntur, Andhra Pradesh, India',
    lat: 16.4170758,
    lng: 80.45315500000001,
  },
  {
    addr: 'DAMARAPALLI, TADIKONDA, Guntur, Andhra Pradesh, India',
    lat: 16.3772989,
    lng: 80.39439519999999,
  },
  {
    addr: 'TADIKONDA, TADIKONDA, Guntur, Andhra Pradesh, India',
    lat: 16.4170758,
    lng: 80.45315500000001,
  },
  {
    addr: '113 THALLURU, PHIRANGIPURAM, Guntur, Andhra Pradesh, India',
    lat: 16.3172899,
    lng: 80.2309293,
  },
  {
    addr: 'ERRAGUNTLPADU, PHIRANGIPURAM, Guntur, Andhra Pradesh, India',
    lat: 16.2890087,
    lng: 80.2627973,
  },
  {
    addr: 'Nadimpalem, prathipadu, Guntur, Andhra Pradesh, India',
    lat: 16.1813812,
    lng: 80.3358008,
  },
  {
    addr: 'Mallayapalem, prathipadu, Guntur, Andhra Pradesh, India',
    lat: 16.1758423,
    lng: 80.3396595,
  },
  {
    addr: 'prathipadu, prathipadu, Guntur, Andhra Pradesh, India',
    lat: 16.181359,
    lng: 80.335893,
  },
  {
    addr: 'Thurakapalem, Guntur Rural, Guntur, Andhra Pradesh, India',
    lat: 16.3302483,
    lng: 80.0661011,
  },
  {
    addr: 'Jonnalagadda,  Guntur Rural, Guntur, Andhra Pradesh, India',
    lat: 16.3736337,
    lng: 80.4576835,
  },
  {
    addr: 'VADLAMUDI, chebrolu, Guntur, Andhra Pradesh, India',
    lat: 16.2355855,
    lng: 80.5605111,
  },
  {
    addr: 'GODAVARRU, chebrolu, Guntur, Andhra Pradesh, India',
    lat: 16.216921,
    lng: 80.4688061,
  },
  {
    addr: 'THOTLAPALEM, chebrolu, Guntur, Andhra Pradesh, India',
    lat: 16.1964393,
    lng: 80.525286,
  },
  {
    addr: 'VK PURAM, Pedakakani, Guntur, Andhra Pradesh, India',
    lat: 16.3014767,
    lng: 80.4896088,
  },
  {
    addr: 'VENIGANDLA, Pedakakani, Guntur, Andhra Pradesh, India',
    lat: 16.3513438,
    lng: 80.4799273,
  },
  {
    addr: 'ANNAPARRU, Pedanandipadu, Guntur, Andhra Pradesh, India',
    lat: 16.0936217,
    lng: 80.3081393,
  },
  {
    addr: 'PALAPARRU, Pedanandipadu, Guntur, Andhra Pradesh, India',
    lat: 16.0614657,
    lng: 80.287392,
  },
  {
    addr: 'Anantavarapadu, Vatticherukuru, Guntur, Andhra Pradesh, India',
    lat: 16.1804779,
    lng: 80.4470827,
  },
  {
    addr: 'KORNEPADU, Vatticherukuru, Guntur, Andhra Pradesh, India',
    lat: 16.245852,
    lng: 80.3846542,
  },
  {
    addr: 'Jaggadiguntapalem, Tenali, Guntur, Andhra Pradesh, India',
    lat: 16.2165473,
    lng: 80.65616279999999,
  },
  {
    addr: 'Nandivelugu, Tenali, Guntur, Andhra Pradesh, India',
    lat: 16.29474,
    lng: 80.6465652,
  },
  {
    addr: 'Chinatalapudi, Duggirala, Guntur, Andhra Pradesh, India',
    lat: 16.3042655,
    lng: 80.6368894,
  },
  {
    addr: 'Pedakonduru, Duggirala, Guntur, Andhra Pradesh, India',
    lat: 16.3905133,
    lng: 80.6874785,
  },
  {
    addr: 'Pidaparru, Kollipara, Guntur, Andhra Pradesh, India',
    lat: 16.3163919,
    lng: 80.7302571,
  },
  {
    addr: 'Chakryapalem, Kollipara, Guntur, Andhra Pradesh, India',
    lat: 16.2872181,
    lng: 80.749466,
  },
  {
    addr: 'Chinakakani, Mangalagiri, Guntur, Andhra Pradesh, India',
    lat: 16.4023599,
    lng: 80.55541830000001,
  },
  {
    addr: 'Atmakur 1, Mangalagiri, Guntur, Andhra Pradesh, India',
    lat: 16.4328599,
    lng: 80.5865884,
  },
  {
    addr: 'Chirravuru, Tadepalli, Guntur, Andhra Pradesh, India',
    lat: 16.4222467,
    lng: 80.6514517,
  },
  {
    addr: 'Prathuru, Tadepalli, Guntur, Andhra Pradesh, India',
    lat: 16.4669189,
    lng: 80.6361602,
  },
  {
    addr: 'Mangalagiri, Mangalagiri, Guntur, Andhra Pradesh, India',
    lat: 16.4345712,
    lng: 80.5662454,
  },
  {
    addr: 'Nidubrolu, Ponnuru, Guntur, Andhra Pradesh, India',
    lat: 16.0612839,
    lng: 80.5645254,
  },
  {
    addr: 'Pedaravuru, Tenali, Guntur, Andhra Pradesh, India',
    lat: 16.209266,
    lng: 80.65627529999999,
  },
  {
    addr: 'Chinalingayapalem, Kakumanu, Guntur, Andhra Pradesh, India',
    lat: 16.1122003,
    lng: 80.4437264,
  },
  {
    addr: 'Returu, Kakumanu, Guntur, Andhra Pradesh, India',
    lat: 15.9857837,
    lng: 80.4382153,
  },
  {
    addr: 'Doppalapudi, Ponnuru, Guntur, Andhra Pradesh, India',
    lat: 16.0994966,
    lng: 80.5213169,
  },
  {
    addr: 'Vallabharaopalem, Ponnuru, Guntur, Andhra Pradesh, India',
    lat: 16.0557909,
    lng: 80.52509169999999,
  },
  {
    addr: 'Pedabrahmadevam, Samalkot, Kakinada, Andhra Pradesh, India',
    lat: 17.0500453,
    lng: 82.1679386,
  },
  {
    addr: 'VD PS Pudi, Prathipadu, Kakinada, Andhra Pradesh, India',
    lat: 17.2325342,
    lng: 82.1888288,
  },
  {
    addr: 'VD Yerravaram, Yeleshwaram, Kakinada, Andhra Pradesh, India',
    lat: 16.9890648,
    lng: 82.2474648,
  },
  {
    addr: 'Pedanapalli, Yeleshwaram, Kakinada, Andhra Pradesh, India',
    lat: 17.2881415,
    lng: 82.1064293,
  },
  {
    addr: 'VD Pyna, Pedapudi, Kakinada, Andhra Pradesh, India',
    lat: 16.9890648,
    lng: 82.2474648,
  },
  {
    addr: 'VD Anuru, Peddapuram, Kakinada, Andhra Pradesh, India',
    lat: 17.0801333,
    lng: 82.1298451,
  },
  {
    addr: 'VD Bhupalapatnam, Kirlampudi, Kakinada, Andhra Pradesh, India',
    lat: 17.1958935,
    lng: 82.1488586,
  },
  {
    addr: 'AVH Tuni, Tuni, Kakinada, Andhra Pradesh, India',
    lat: 17.3531446,
    lng: 82.5472151,
  },
  {
    addr: 'AVH Shankavaram, Shankavaram, Kakinada, Andhra Pradesh, India',
    lat: 17.3145488,
    lng: 82.36303319999999,
  },
  {
    addr: 'CADDL Karapa, Karapa, Kakinada, Andhra Pradesh, India',
    lat: 16.9020745,
    lng: 82.16827579999999,
  },
  {
    addr: 'CADDL Samalkot, Samalkot, Kakinada, Andhra Pradesh, India',
    lat: 17.0500453,
    lng: 82.1679386,
  },
  {
    addr: 'CADDL Pithapuram, Pithapuram, Kakinada, Andhra Pradesh, India',
    lat: 17.1145559,
    lng: 82.2521517,
  },
  {
    addr: 'CADDL Tuni, Tuni, Kakinada, Andhra Pradesh, India',
    lat: 16.9890648,
    lng: 82.2474648,
  },
  {
    addr: 'CADDL Jaggampeta, Jaggapeta, Kakinada, Andhra Pradesh, India',
    lat: 17.171159,
    lng: 82.0644394,
  },
  {
    addr: 'CADDL Sankhavaram, Sankhavaram, Kakinada, Andhra Pradesh, India',
    lat: 17.3145488,
    lng: 82.36303319999999,
  },
  {
    addr: 'VCP Kakinada, Kakinada Urban, Kakinada, Andhra Pradesh, India',
    lat: 16.9890648,
    lng: 82.2474648,
  },
  {
    addr: 'Kapileswarapuram, Kapileswarapuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.7400262,
    lng: 81.92012989999999,
  },
  {
    addr: 'Machara, Kapileswarapuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.7400262,
    lng: 81.92012989999999,
  },
  {
    addr: 'Komaragiripatnam, Allavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.443952,
    lng: 81.9998367,
  },
  {
    addr: 'Amalapuram, Amalapuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.5774798,
    lng: 82.0031455,
  },
  {
    addr: 'Ganti, Kothapeta, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 17.0002802,
    lng: 81.77699319999999,
  },
  {
    addr: 'Moolapolam, Ainavilli, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.6643795,
    lng: 82.0665903,
  },
  {
    addr: 'Kothapeta, Kothapeta, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 17.0002802,
    lng: 81.77699319999999,
  },
  {
    addr: 'Malkipuram, Malkipuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.4097361,
    lng: 81.8042341,
  },
  {
    addr: 'Kesanapalli, Malkipuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.3960382,
    lng: 81.8934484,
  },
  {
    addr: 'Antharvedipalem, Sakhinetipalli, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.4010472,
    lng: 81.7780186,
  },
  {
    addr: 'Dangeru, K.Gangavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.7338855,
    lng: 82.0475816,
  },
  {
    addr: 'Velicheru, Ravulapalem, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.8768213,
    lng: 81.7561415,
  },
  {
    addr: 'Ravulapalem, Ravulapalem, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.7415185,
    lng: 81.8625157,
  },
  {
    addr: 'Rayavaram, Rayavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.9046804,
    lng: 82.000856,
  },
  {
    addr: 'Velagathodu, Rayavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.9015267,
    lng: 81.8797976,
  },
  {
    addr: 'P.Gannavaram, P.Gannavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.5891247,
    lng: 81.8905145,
  },
  {
    addr: 'Narendrapuram, P.Gannavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.6345452,
    lng: 81.9002728,
  },
  {
    addr: 'Razole, Razole, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.478491,
    lng: 81.84071759999999,
  },
  {
    addr: 'Nagaram1, Mamidikuduru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.5032065,
    lng: 81.91885169999999,
  },
  {
    addr: 'Magatapalli, Mamidikuduru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.4652449,
    lng: 81.9452981,
  },
  {
    addr: 'Kandikuppa, katrenikona, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.5828372,
    lng: 82.15368509999999,
  },
  {
    addr: 'Alamuru, Alamuru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.7870575,
    lng: 81.88345609999999,
  },
  {
    addr: 'Jonnada, Alamuru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India',
    lat: 16.7968931,
    lng: 81.86204769999999,
  },
  {
    addr: 'Kandulapalem, Ramachandrapuram, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.8180368,
    lng: 82.0849707,
  },
  {
    addr: 'DRAKSHARAMA,  DRAKSHARAMA, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.7914449,
    lng: 82.0597816,
  },
  {
    addr: 'MANDAPETA,  MANDAPETA, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.8626906,
    lng: 81.9263789,
  },
  {
    addr: 'AMALAPURAM,  AMALAPURAM, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.5774798,
    lng: 82.0031455,
  },
  {
    addr: 'MUMMIDIVARAM,  MUMMIDIVARAM, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.643385,
    lng: 82.1035342,
  },
  {
    addr: 'RAVULAPALEM,  RAVULAPALEM, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.7415185,
    lng: 81.8625157,
  },
  {
    addr: 'RAZOLE,  RAZOLE, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India',
    lat: 16.478491,
    lng: 81.84071759999999,
  },
  {
    addr: 'Chandrala, Gudlavalleru, Krishna, Andhra Pradesh, India',
    lat: 16.3773616,
    lng: 81.0554557,
  },
  {
    addr: 'Lingavaram, Gudivada, Krishna, Andhra Pradesh, India',
    lat: 16.4580064,
    lng: 80.997467,
  },
  {
    addr: 'Nujella, Gudivada, Krishna, Andhra Pradesh, India',
    lat: 16.3839361,
    lng: 81.0181762,
  },
  {
    addr: 'Kanumuru, Pamarru, Krishna, Andhra Pradesh, India',
    lat: 16.3394693,
    lng: 80.9027988,
  },
  {
    addr: 'Korimerla, Pamarru, Krishna, Andhra Pradesh, India',
    lat: 16.2643741,
    lng: 81.0279533,
  },
  {
    addr: 'Mantada, Pamidimukkala, Krishna, Andhra Pradesh, India',
    lat: 16.3549418,
    lng: 80.87306219999999,
  },
  {
    addr: 'Gurajada, Pamidimukkala, Krishna, Andhra Pradesh, India',
    lat: 16.3595543,
    lng: 80.8785955,
  },
  {
    addr: 'Kalavapamula, Vuyyuru, Krishna, Andhra Pradesh, India',
    lat: 16.4390338,
    lng: 80.8792871,
  },
  {
    addr: 'China Ogirala, Vuyyuru, Krishna, Andhra Pradesh, India',
    lat: 16.3769107,
    lng: 80.8253222,
  },
  {
    addr: 'Marlapalem, Gannavaram, Krishna, Andhra Pradesh, India',
    lat: 16.5569821,
    lng: 80.8087103,
  },
  {
    addr: 'Savarigudem, Gannavaram, Krishna, Andhra Pradesh, India',
    lat: 16.5359156,
    lng: 80.7283712,
  },
  {
    addr: 'Unguturu, Unguturu, Krishna, Andhra Pradesh, India',
    lat: 16.5135034,
    lng: 80.8843928,
  },
  {
    addr: 'Peddavutapalli, Unguturu, Krishna, Andhra Pradesh, India',
    lat: 16.5135034,
    lng: 80.8843928,
  },
  {
    addr: 'Chiriwada, Bapulapadu,  krishna, Andhra Pradesh, India',
    lat: 16.5581309,
    lng: 80.93459779999999,
  },
  {
    addr: 'Mallavalli, Bapulapadu,  krishna, Andhra Pradesh, India',
    lat: 16.6721236,
    lng: 80.88827770000002,
  },
  {
    addr: 'Gundupalem,  Machilipatnam, Krishna, Andhra Pradesh, India',
    lat: 16.1430194,
    lng: 81.079605,
  },
  {
    addr: 'Bandarkota, Machilipatnam, Krishna, Andhra Pradesh, India',
    lat: 16.1553824,
    lng: 81.151753,
  },
  {
    addr: 'Kaza, Movva, Krishna, Andhra Pradesh, India',
    lat: 16.198141,
    lng: 81.00506320000001,
  },
  {
    addr: 'Pedasangallu, Movva, Krishna, Andhra Pradesh, India',
    lat: 16.2245157,
    lng: 80.9172463,
  },
  {
    addr: 'Lankapalli, Ghantasala, Krishna, Andhra Pradesh, India',
    lat: 16.1360339,
    lng: 80.98296309999999,
  },
  {
    addr: 'Kodali, Ghantasala, Krishna, Andhra Pradesh, India',
    lat: 16.1835265,
    lng: 80.901416,
  },
  {
    addr: 'Pedana, Pedana, Krishna, Andhra Pradesh, India',
    lat: 16.2577195,
    lng: 81.14536770000001,
  },
  {
    addr: 'Machilipatnam, Machilipatnam, Krishna, Andhra Pradesh, India',
    lat: 16.1808917,
    lng: 81.1302716,
  },
  {
    addr: 'Pamarru, Pamarru, Krishna, Andhra Pradesh, India',
    lat: 16.3229167,
    lng: 80.9610355,
  },
  {
    addr: 'Jalimanchi, Adoni, Kurnool, Andhra Pradesh, India',
    lat: 15.7050229,
    lng: 77.26448599999999,
  },
  {
    addr: 'Doddanageri, Adoni, Kurnool, Andhra Pradesh, India',
    lat: 15.6318824,
    lng: 77.27588329999999,
  },
  {
    addr: 'K Nagalapuram, Adoni, Kurnool, Andhra Pradesh, India',
    lat: 15.6646772,
    lng: 77.3541449,
  },
  {
    addr: 'Kogilathota, Holagunda, Kurnool, Andhra Pradesh, India',
    lat: 15.4802149,
    lng: 77.051123,
  },
  {
    addr: 'Gajjehalli, Holagunda, Kurnool, Andhra Pradesh, India',
    lat: 15.6010678,
    lng: 77.0506896,
  },
  {
    addr: 'Kammarachedu, Alur, Kurnool, Andhra Pradesh, India',
    lat: 15.5307722,
    lng: 77.2232709,
  },
  {
    addr: 'Kuruvalli, Alur, Kurnool, Andhra Pradesh, India',
    lat: 15.3667401,
    lng: 77.19262959999999,
  },
  {
    addr: 'Beladona, Chippagiri, Kurnool, Andhra Pradesh, India',
    lat: 15.2628952,
    lng: 77.28505150000001,
  },
  {
    addr: 'TANGARADONA, Aspari, Kurnool, Andhra Pradesh, India',
    lat: 15.5676901,
    lng: 77.38350120000001,
  },
  {
    addr: 'Chinnahoturu, Aspari, Kurnool, Andhra Pradesh, India',
    lat: 15.4568951,
    lng: 77.30172,
  },
  {
    addr: 'Hardagiri, Halaharvi, Kurnool, Andhra Pradesh, India',
    lat: 15.8267656,
    lng: 77.4465074,
  },
  {
    addr: 'VD Gulyam, Halaharvi, Kurnool, Andhra Pradesh, India',
    lat: 15.8267656,
    lng: 77.4465074,
  },
  {
    addr: 'Duddi,  Kosigi,  Kurnool, Andhra Pradesh, India',
    lat: 15.897732,
    lng: 77.20027449999999,
  },
  {
    addr: 'Vandhagalu,  Kosigi, Kurnool, Andhra Pradesh, India',
    lat: 15.8569708,
    lng: 77.2423814,
  },
  {
    addr: 'VD Mantralayam, Mantralayam, Kurnool, Andhra Pradesh, India',
    lat: 15.9408818,
    lng: 77.4245972,
  },
  {
    addr: 'Rachumarri, Mantralayam, Kurnool, Andhra Pradesh, India',
    lat: 15.9066219,
    lng: 77.3496708,
  },
  {
    addr: 'Chakralla, Pathikonda,  Kurnool, Andhra Pradesh, India',
    lat: 15.3963743,
    lng: 77.5007739,
  },
  {
    addr: 'M.Agraharam, Maddikera, Kurnool, Andhra Pradesh, India',
    lat: 15.262947,
    lng: 77.4372084,
  },
  {
    addr: 'Burujula, Maddikera, Kurnool, Andhra Pradesh, India',
    lat: 15.3479314,
    lng: 77.44151180000001,
  },
  {
    addr: 'Edduladoddi, Tuggali,  Kurnool, Andhra Pradesh, India',
    lat: 15.3496426,
    lng: 77.57340479999999,
  },
  {
    addr: 'Bondimadugula, Tuggali,  Kurnool, Andhra Pradesh, India',
    lat: 15.4224869,
    lng: 77.680097,
  },
  {
    addr: 'Doddimekala, Peddakadubur,  Kurnool, Andhra Pradesh, India',
    lat: 15.7632213,
    lng: 77.3909496,
  },
  {
    addr: 'Urukunda, Kowthalam, Kurnool, Andhra Pradesh, India',
    lat: 15.8028588,
    lng: 77.17871140000001,
  },
  {
    addr: 'Soganur, Yemmiganur, Kurnool, Andhra Pradesh, India',
    lat: 15.7846836,
    lng: 77.4930923,
  },
  {
    addr: 'K. Thimmapuram, Yemmiganur, Kurnool, Andhra Pradesh, India',
    lat: 15.7734175,
    lng: 77.4719551,
  },
  {
    addr: 'Devibetta, Yemmiganur, Kurnool, Andhra Pradesh, India',
    lat: 15.6293748,
    lng: 77.28385349999999,
  },
  {
    addr: 'Peddakothili, Nandavaram, Kurnool, Andhra Pradesh, India',
    lat: 15.3748563,
    lng: 78.2801561,
  },
  {
    addr: 'Gurajala, Nandavaram, Kurnool, Andhra Pradesh, India',
    lat: 16.5580212,
    lng: 79.6371314,
  },
  {
    addr: 'K.Markapuram, Kallur, Kurnool, Andhra Pradesh, India',
    lat: 15.7529743,
    lng: 77.93674089999999,
  },
  {
    addr: 'Bollavaram, Kallur, Kurnool, Andhra Pradesh, India',
    lat: 15.7126689,
    lng: 77.9299705,
  },
  {
    addr: 'Somayajulapalli, Orvakal, Kurnool, Andhra Pradesh, India',
    lat: 15.5812817,
    lng: 78.1765035,
  },
  {
    addr: 'Meedivemula, Orvakal, Kurnool, Andhra Pradesh, India',
    lat: 15.672368,
    lng: 78.1013286,
  },
  {
    addr: 'Veldurthi, Veldhurthi, Kurnool, Andhra Pradesh, India',
    lat: 15.5533014,
    lng: 77.9292916,
  },
  {
    addr: 'Boyanapalli, Veldhurthi, Kurnool, Andhra Pradesh, India',
    lat: 15.5459804,
    lng: 78.0106547,
  },
  {
    addr: 'Cherukulapadu, Veldhurthi, Kurnool, Andhra Pradesh, India',
    lat: 15.5533014,
    lng: 77.9292916,
  },
  {
    addr: 'Edurur, Kurnool, Kurnool, Andhra Pradesh, India',
    lat: 15.8807238,
    lng: 77.899604,
  },
  {
    addr: 'Yerukulacheruvu, Krishnagiri, Kurnool, Andhra Pradesh, India',
    lat: 15.5654877,
    lng: 77.8310104,
  },
  {
    addr: 'Sh Yerragudi, Krishnagiri, Kurnool, Andhra Pradesh, India',
    lat: 15.6245828,
    lng: 77.84337649999999,
  },
  {
    addr: 'T Gokulapadu, Krishnagiri, Kurnool, Andhra Pradesh, India',
    lat: 15.7943178,
    lng: 77.9538767,
  },
  {
    addr: 'Koilakonda, Krishnagiri, Kurnool, Andhra Pradesh, India',
    lat: 15.4698517,
    lng: 77.7911187,
  },
  {
    addr: 'Ch Yerragudi, Krishnagiri, Kurnool, Andhra Pradesh, India',
    lat: 15.5432537,
    lng: 77.7938376,
  },
  {
    addr: 'Ternekal, Devanakonda, Kurnool, Andhra Pradesh, India',
    lat: 15.6392745,
    lng: 77.5318463,
  },
  {
    addr: 'Potlapadu, Devanakonda, Kurnool, Andhra Pradesh, India',
    lat: 15.6055935,
    lng: 77.5218127,
  },
  {
    addr: 'Palledoddi, Devanakonda, Kurnool, Andhra Pradesh, India',
    lat: 15.5435108,
    lng: 77.5898809,
  },
  {
    addr: 'B.Agraharam, Gonegandla, Kurnool, Andhra Pradesh, India',
    lat: 14.6216173,
    lng: 79.319093,
  },
  {
    addr: 'Byluppla, Gonegandla, Kurnool, Andhra Pradesh, India',
    lat: 15.7105641,
    lng: 77.59323780000001,
  },
  {
    addr: 'Chinnamarriveedu, Gonegandla, Kurnool, Andhra Pradesh, India',
    lat: 15.7105641,
    lng: 77.59323780000001,
  },
  {
    addr: 'O/o DDAH, Kurnool, Kurnool, Kurnool, Andhra Pradesh, India',
    lat: 15.8281257,
    lng: 78.0372792,
  },
  {
    addr: 'Kurnool (U), Kurnool (U), Kurnool, Andhra Pradesh, India',
    lat: 15.8281257,
    lng: 78.0372792,
  },
  {
    addr: 'Manthralayam, Manthralayam, Kurnool, Andhra Pradesh, India',
    lat: 15.9409036,
    lng: 77.4246142,
  },
  {
    addr: 'Aluru, Aluru, Kurnool, Andhra Pradesh, India',
    lat: 15.393291,
    lng: 77.22749329999999,
  },
  {
    addr: 'Pattikonda, Pattikonda, Kurnool, Andhra Pradesh, India',
    lat: 15.3963743,
    lng: 77.5007739,
  },
  {
    addr: 'Sripathiraopeta, Beside Village Secretariat, Atmakur, Nandyal, Andhra Pradesh, India',
    lat: 15.8958134,
    lng: 78.62426909999999,
  },
  {
    addr: 'Bapananthapuram, Near Village Secretariat, Atmakur, Nandyal, Andhra Pradesh, India',
    lat: 15.8568751,
    lng: 78.585247,
  },
  {
    addr: 'Gorlagutta, Near Anganwadi Centre 1, Bethamcherla, Nandyal, Andhra Pradesh, India',
    lat: 15.4062465,
    lng: 78.1917102,
  },
  {
    addr: 'Gutupalli, Near Water Tank, Bethamcherla, Nandyal, Andhra Pradesh, India',
    lat: 15.4247199,
    lng: 78.0382841,
  },
  {
    addr: 'Gummakonda, Near Village Secretariat, Dhone, Nandyal, Andhra Pradesh, India',
    lat: 15.4802132,
    lng: 77.8240479,
  },
  {
    addr: 'Ch.Malkapuram, Near Village Secretariat, Dhone, Nandyal, Andhra Pradesh, India',
    lat: 15.353607,
    lng: 77.95673239999999,
  },
  {
    addr: 'Gadigarevula, Opposite Anjaneya Swami Temple, Gadivemula, Nandyal, Andhra Pradesh, India',
    lat: 15.6165241,
    lng: 78.4434856,
  },
  {
    addr: 'Thangedancha, Near Village Secretariat, Jupadu Bunglow, Nandyal, Andhra Pradesh, India',
    lat: 15.8575395,
    lng: 78.35506629999999,
  },
  {
    addr: 'Masapeta, Near MPUP School, Midthur, Nandyal, Andhra Pradesh, India',
    lat: 15.7709108,
    lng: 78.2889005,
  },
  {
    addr: 'K.Bijinavemula, Near ZPHS School, Nandikotkur, Nandyal, Andhra Pradesh, India',
    lat: 15.8992775,
    lng: 78.2725305,
  },
  {
    addr: 'Vaddemanu, Near Village Secretariat, Nandikotkur, Nandyal, Andhra Pradesh, India',
    lat: 15.850465,
    lng: 78.2120102,
  },
  {
    addr: 'Laxmapuram 1, Near Village Secretariat, Pagidyala, Nandyal, Andhra Pradesh, India',
    lat: 15.9059821,
    lng: 78.3557775,
  },
  {
    addr: 'Sankirenipalli, Near Village Secretariat, Pagidyala, Nandyal, Andhra Pradesh, India',
    lat: 15.9361551,
    lng: 78.34222729999999,
  },
  {
    addr: 'Maddur, Opposite Sai Baba Temple, Panyam, Nandyal, Andhra Pradesh, India',
    lat: 15.5181643,
    lng: 78.3498378,
  },
  {
    addr: 'Garladinne, Near MPUP School, Peapully, Nandyal, Andhra Pradesh, India',
    lat: 15.4776876,
    lng: 78.487285,
  },
  {
    addr: 'Gudipadu, Near Sunkulamma Temple, Peapully, Nandyal, Andhra Pradesh, India',
    lat: 15.2361852,
    lng: 77.73907679999999,
  },
  {
    addr: 'Koilkuntla -1, VH Koilkuntla, Koilkuntla, Nandyal, Andhra Pradesh, India',
    lat: 15.2316281,
    lng: 78.31872039999999,
  },
  {
    addr: 'Govindinne, govindinne, 518176, Banaganapalli, Nandyal, Andhra Pradesh, India',
    lat: 15.318372,
    lng: 78.2279193,
  },
  {
    addr: 'Enakandla, Enakandla, 518124, Banaganapalli, Nandyal, Andhra Pradesh, India',
    lat: 15.318372,
    lng: 78.2279193,
  },
  {
    addr: 'Sangapatnam, Sangapatnam, 518196, Owk, Nandyal, Andhra Pradesh, India',
    lat: 15.1521595,
    lng: 78.1427633,
  },
  {
    addr: 'Singanapalli, Singanapalli, 518196, Owk, Nandyal, Andhra Pradesh, India',
    lat: 15.1532517,
    lng: 78.1906417,
  },
  {
    addr: 'Kanala, Rural Livestock unit Kanala Main Road, Sanjamala, Nandyal, Andhra Pradesh, India',
    lat: 15.4228751,
    lng: 78.4546554,
  },
  {
    addr: 'Giddaluru, Near Old Bustand Perusomula, Sanjamala, Nandyal, Andhra Pradesh, India',
    lat: 15.0861595,
    lng: 78.254734,
  },
  {
    addr: 'Ahobilam, Rural Livestock unit, Ahobilam, Allagadda, 518543, Allagadda, Nandyal, Andhra Pradesh, India',
    lat: 15.1337667,
    lng: 78.6741657,
  },
  {
    addr: 'MITTAPALLI, RBK- MITTAPALLI-518543, ALLAGADDA, Nandyal, Andhra Pradesh, India',
    lat: 15.1305389,
    lng: 78.5127559,
  },
  {
    addr: 'R.KRISHNAPURAM, RBK-R. KRISHNAPURAM -518543, ALLAGADDA, Nandyal, Andhra Pradesh, India',
    lat: 15.0842317,
    lng: 78.5861785,
  },
  {
    addr: 'Area Veterinary Hospital,  Opp: Busstand, Nandyal, ,  Nandyal, Nandyal, Andhra Pradesh, India',
    lat: 15.1469287,
    lng: 78.29906900000002,
  },
  {
    addr: 'Dr YSR CADDL, MV Nagar, MPDO Compound, Koilakuntla Road, Allagadda, Allagadda, Nandyal, Andhra Pradesh, India',
    lat: 15.1357766,
    lng: 78.4959834,
  },
  {
    addr: 'Dr YSR CADDL, Near Agriculture AD Office, Nandikotkur,  Nandikotkur, Nandyal, Andhra Pradesh, India',
    lat: 15.4712471,
    lng: 78.4835299,
  },
  {
    addr: 'Dr YSR CADDL,  Old Chandamama Hotel back side, near Panyam-2  Sachivalayam,  Kurnool Road, ,  Panyam, Nandyal, Andhra Pradesh, India',
    lat: 15.5181643,
    lng: 78.3498378,
  },
  {
    addr: 'Assistant director (AH), Area Veterinary Hospital, Near Police Station, Dhone, Dhone, Nandyal, Andhra Pradesh, India',
    lat: 15.3960427,
    lng: 77.8732414,
  },
  {
    addr: 'Nellore, Nellore, SPS Nellore, Andhra Pradesh, India',
    lat: 14.4425987,
    lng: 79.98645599999999,
  },
  {
    addr: 'Nellore, Nellore, SPS Nellore, Andhra Pradesh, India',
    lat: 14.4425987,
    lng: 79.98645599999999,
  },
  {
    addr: 'Kovur, Kovur, SPS Nellore, Andhra Pradesh, India',
    lat: 14.5021374,
    lng: 79.9852855,
  },
  {
    addr: 'KOVUR, Kovur,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5021374,
    lng: 79.9852855,
  },
  {
    addr: 'VEGUR, Kovur,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5347275,
    lng: 80.0573016,
  },
  {
    addr: 'Gurivindapudi, Manubolu, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.2635913,
    lng: 79.9136731,
  },
  {
    addr: 'Venkannapalem, Manubolu, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.1719875,
    lng: 79.90317759999999,
  },
  {
    addr: 'Akkampeta, Manubolu, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.2837437,
    lng: 79.8223206,
  },
  {
    addr: 'CherloPalli, Manubolu, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.2242374,
    lng: 79.8660836,
  },
  {
    addr: 'Anikepalli, Venkatachalam, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.3324823,
    lng: 79.9968926,
  },
  {
    addr: 'Venkatachalam, Venkatachalam, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.3258569,
    lng: 79.9231886,
  },
  {
    addr: 'Pelleru, Chejerla, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5397965,
    lng: 79.6558242,
  },
  {
    addr: 'Nagulavellaturu, Chejerla, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5204301,
    lng: 79.5676966,
  },
  {
    addr: 'Punnuru, Indukurpeta, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5046595,
    lng: 80.1065646,
  },
  {
    addr: 'CHINNACHERUKURU,  T.P.GUDURU,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4302436,
    lng: 80.0479039,
  },
  {
    addr: 'T.P.GUDURU, T.P.GUDURU,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.1463424,
    lng: 79.85038089999999,
  },
  {
    addr: 'Narukuru, T.P.GUDURU,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.1463424,
    lng: 79.85038089999999,
  },
  {
    addr: 'Patur, Kovur,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5134588,
    lng: 79.9417362,
  },
  {
    addr: 'Cherlopalem, Kovur,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5289507,
    lng: 80.0178598,
  },
  {
    addr: 'Annareddypalem, Vidavaluru, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5783487,
    lng: 80.0960924,
  },
  {
    addr: 'Muthukur 3, Muthukur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.3912169,
    lng: 80.0309399,
  },
  {
    addr: 'Bramhadevam 2, Muthukur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4402163,
    lng: 79.9889178,
  },
  {
    addr: 'Thallapudi, Muthukur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.2897841,
    lng: 80.095126,
  },
  {
    addr: 'South mopur, Nellore Rural, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4316724,
    lng: 79.8128649,
  },
  {
    addr: 'Penubarthi, Nellore Rural, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4425987,
    lng: 79.98645599999999,
  },
  {
    addr: 'Kondlapudi, Nellore Rural, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4593441,
    lng: 79.9126236,
  },
  {
    addr: 'Madarajagudur, Nellore Rural, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4425987,
    lng: 79.98645599999999,
  },
  {
    addr: 'Inukurthy, Podalakur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.3348463,
    lng: 79.70072110000001,
  },
  {
    addr: 'Nedurupalle, Podalakur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5192707,
    lng: 79.7119419,
  },
  {
    addr: 'Gundavolu, Rapur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.282143,
    lng: 79.53013440000001,
  },
  {
    addr: 'Tegacherla, Rapur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.3853291,
    lng: 79.4141214,
  },
  {
    addr: 'Gonupalli, Rapur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.3436952,
    lng: 79.4700369,
  },
  {
    addr: 'Akilavalasa, Rapur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.2964954,
    lng: 79.4816378,
  },
  {
    addr: 'Utukuru, Sydapuram, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.1758227,
    lng: 79.7431862,
  },
  {
    addr: 'Indupr, Alluru, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.6831434,
    lng: 80.0533276,
  },
  {
    addr: 'Mungamuru, Bogole, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.8069508,
    lng: 80.0178598,
  },
  {
    addr: 'C.R palem, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.7623775,
    lng: 80.0848503,
  },
  {
    addr: 'padimati palem, sangam, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5706739,
    lng: 79.7917195,
  },
  {
    addr: 'Marripadu, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.6884713,
    lng: 79.3502201,
  },
  {
    addr: 'VD Vasili, Atmakur, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.6132097,
    lng: 79.6733648,
  },
  {
    addr: 'Battepadu, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5845647,
    lng: 79.6116069,
  },
  {
    addr: 'VD Chennuru, Dagadarthi, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.6667612,
    lng: 79.8796342,
  },
  {
    addr: 'VD Annagari palem, kavali, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.8640767,
    lng: 80.065576,
  },
  {
    addr: 'Kotha palli, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5862224,
    lng: 79.4805832,
  },
  {
    addr: 'VD chiramana, A.S Peta, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.684221,
    lng: 79.6707,
  },
  {
    addr: 'Bandaganipalli, Udayagiri, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.8788018,
    lng: 79.3030398,
  },
  {
    addr: 'RBKNemalladinne, S.R. Puram, SPSR Nellore, Andhra Pradesh, India',
    lat: 15.0146737,
    lng: 79.13662819999999,
  },
  {
    addr: 'China machanur, Marripdu, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.2580848,
    lng: 79.9192702,
  },
  {
    addr: 'D.C palli, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.6875773,
    lng: 79.5034293,
  },
  {
    addr: 'Chilakala  marri, Annatha sagaram, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.584959,
    lng: 79.3345858,
  },
  {
    addr: 'Varikunta padu, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.9930288,
    lng: 79.4208154,
  },
  {
    addr: 'Bukka puram, Vinjamuru, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.7765275,
    lng: 79.6080967,
  },
  {
    addr: 'Utukuru, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.5757441,
    lng: 80.14142609999999,
  },
  {
    addr: 'Srikolanu, A.S Peta, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.684221,
    lng: 79.6707,
  },
  {
    addr: 'Anumasamudram, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.6576266,
    lng: 79.6530174,
  },
  {
    addr: 'Somavarappa padu, Jaladanki, SPSR Nellore, Andhra Pradesh, India',
    lat: 14.4283366,
    lng: 79.5167763,
  },
  {
    addr: 'Chinnakraka, ,  SPSR Nellore, Andhra Pradesh, India',
    lat: 14.8454627,
    lng: 79.8443798,
  },
  {
    addr: 'Oguru, Kandukur, SPS Nellore, Andhra Pradesh, India',
    lat: 15.2351802,
    lng: 79.9570411,
  },
  {
    addr: 'Kondamudusupalem, Kandukur, SPS Nellore, Andhra Pradesh, India',
    lat: 15.1927009,
    lng: 79.89618,
  },
  {
    addr: 'Mannetikota, Ulavapadu, SPS Nellore, Andhra Pradesh, India',
    lat: 15.1910566,
    lng: 80.0045811,
  },
  {
    addr: 'Baddipudi, Ulavapadu, SPS Nellore, Andhra Pradesh, India',
    lat: 15.1160768,
    lng: 79.9269656,
  },
  {
    addr: 'Basireddy Palem, Gudluru, SPS Nellore, Andhra Pradesh, India',
    lat: 14.8350497,
    lng: 79.66003429999999,
  },
  {
    addr: 'Salipeta, Gudluru, SPS Nellore, Andhra Pradesh, India',
    lat: 15.0730151,
    lng: 79.9015646,
  },
  {
    addr: 'Badevaripalem, Valetivaripalem, SPS Nellore, Andhra Pradesh, India',
    lat: 15.192996,
    lng: 79.838778,
  },
  {
    addr: 'Polineni Palem, Valetivaripalem, SPS Nellore, Andhra Pradesh, India',
    lat: 15.1799417,
    lng: 79.75821250000001,
  },
  {
    addr: 'Yerrareddy Palem, Lingasamudram, SPS Nellore, Andhra Pradesh, India',
    lat: 13.6281067,
    lng: 79.4833364,
  },
  {
    addr: 'Pedapavani, Lingasamudram, SPS Nellore, Andhra Pradesh, India',
    lat: 15.0049852,
    lng: 79.8156667,
  },
  {
    addr: 'Veerannakollu, Nagasamudram, Kaligiri, SPS Nellore, Andhra Pradesh, India',
    lat: 14.8151167,
    lng: 79.6333674,
  },
  {
    addr: 'Velagapadu, Kaligiri, SPS Nellore, Andhra Pradesh, India',
    lat: 14.7844891,
    lng: 79.72284859999999,
  },
  {
    addr: 'Satyavolu, Kondapuram, SPS Nellore, Andhra Pradesh, India',
    lat: 14.9652371,
    lng: 79.757862,
  },
  {
    addr: 'Thurpu yerraballi, Kondapuram, SPS Nellore, Andhra Pradesh, India',
    lat: 14.9964022,
    lng: 79.6012473,
  },
  {
    addr: 'Yerukollu, Duttalur, SPS Nellore, Andhra Pradesh, India',
    lat: 14.8205395,
    lng: 79.461023,
  },
  {
    addr: 'Kothapeta, Duttalur, SPS Nellore, Andhra Pradesh, India',
    lat: 14.9209443,
    lng: 79.4767803,
  },
  {
    addr: 'Thotalacheruvupalli, Varikuntapadu, SPS Nellore, Andhra Pradesh, India',
    lat: 14.9927541,
    lng: 79.4227271,
  },
  {
    addr: 'Ramapuram, Varikuntapadu, SPS Nellore, Andhra Pradesh, India',
    lat: 15.0290888,
    lng: 79.42269689999999,
  },
  {
    addr: 'Chillakallu-2, Tirumalagiri, Jaggaiahpeta, NTR, Andhra Pradesh, India',
    lat: 16.8935957,
    lng: 80.13867139999999,
  },
  {
    addr: 'Balusupadu, Jaggaiahpeta, NTR, Andhra Pradesh, India',
    lat: 16.9212082,
    lng: 80.0465067,
  },
  {
    addr: 'Indugapulli, Vatsavai, NTR, Andhra Pradesh, India',
    lat: 16.9803242,
    lng: 80.24452339999999,
  },
  {
    addr: 'Chitela, Vatsavai, NTR, Andhra Pradesh, India',
    lat: 16.9803242,
    lng: 80.24452339999999,
  },
  {
    addr: 'Lingalapadu, Nandigama, NTR, Andhra Pradesh, India',
    lat: 16.7657488,
    lng: 80.2404959,
  },
  {
    addr: 'Gollamudi, Nandigama, NTR, Andhra Pradesh, India',
    lat: 16.782683,
    lng: 80.3519443,
  },
  {
    addr: 'Rudravaram, Nandigama, NTR, Andhra Pradesh, India',
    lat: 16.8012371,
    lng: 80.3505437,
  },
  {
    addr: 'Sanagapadu, Penuganchiprolu, NTR, Andhra Pradesh, India',
    lat: 16.8178965,
    lng: 80.2875032,
  },
  {
    addr: 'Anigandlapadu-1, Penuganchiprolu, NTR, Andhra Pradesh, India',
    lat: 16.893726,
    lng: 80.2873011,
  },
  {
    addr: 'Kollikulla, Penuganchiprolu, NTR, Andhra Pradesh, India',
    lat: 16.855174,
    lng: 80.26377049999999,
  },
  {
    addr: 'Gottimukkala, Kanchikacharla, NTR, Andhra Pradesh, India',
    lat: 16.6879459,
    lng: 80.3966269,
  },
  {
    addr: 'Paritala-1, Kanchikacharla, NTR, Andhra Pradesh, India',
    lat: 16.6572472,
    lng: 80.4090096,
  },
  {
    addr: 'Kodavatikallu, Chandarlapadu, NTR, Andhra Pradesh, India',
    lat: 16.6436452,
    lng: 80.194132,
  },
  {
    addr: 'Veladikothapalem, Chandarlapadu, NTR, Andhra Pradesh, India',
    lat: 16.6929864,
    lng: 80.2018485,
  },
  {
    addr: 'Thuralpadu, Chandarlapadu, NTR, Andhra Pradesh, India',
    lat: 16.6929864,
    lng: 80.2018485,
  },
  {
    addr: 'Jupudi, Ibrahimpatnam, NTR, Andhra Pradesh, India',
    lat: 16.6042459,
    lng: 80.497996,
  },
  {
    addr: 'Kethanakonda-2, Ibrahimpatnam, NTR, Andhra Pradesh, India',
    lat: 16.6179796,
    lng: 80.45904,
  },
  {
    addr: 'Guntupalli, Ibrahimpatnam, NTR, Andhra Pradesh, India',
    lat: 16.5665295,
    lng: 80.54825120000001,
  },
  {
    addr: 'Peedapuram, Veerullapadu, NTR, Andhra Pradesh, India',
    lat: 16.8192058,
    lng: 80.3948693,
  },
  {
    addr: 'Bodawada, Veerullapadu, NTR, Andhra Pradesh, India',
    lat: 16.7378697,
    lng: 80.36975840000001,
  },
  {
    addr: 'Ganapavaram, Mylavaram, NTR, Andhra Pradesh, India',
    lat: 16.7367354,
    lng: 80.69001519999999,
  },
  {
    addr: 'Velvadam-1, Mylavaram, NTR, Andhra Pradesh, India',
    lat: 16.7610364,
    lng: 80.6628624,
  },
  {
    addr: 'Cheruvu Madhavaram, G.Konduru, NTR, Andhra Pradesh, India',
    lat: 16.6911248,
    lng: 80.5480118,
  },
  {
    addr: 'G.Konduru-1, G.Konduru, NTR, Andhra Pradesh, India',
    lat: 16.725842,
    lng: 80.6801338,
  },
  {
    addr: 'Ramachandrapuram, A.Konduru, NTR, Andhra Pradesh, India',
    lat: 16.9659754,
    lng: 80.65211390000002,
  },
  {
    addr: 'Maddulaparva, Reddigudem, NTR, Andhra Pradesh, India',
    lat: 16.909046,
    lng: 80.7491563,
  },
  {
    addr: 'Rangapuram, Reddigudem, NTR, Andhra Pradesh, India',
    lat: 16.8563444,
    lng: 80.7271931,
  },
  {
    addr: 'Anneraopeta, Reddigudem, NTR, Andhra Pradesh, India',
    lat: 16.8861145,
    lng: 80.7580104,
  },
  {
    addr: 'KAKARLA, Tiruvuru, NTR, Andhra Pradesh, India',
    lat: 17.0528791,
    lng: 80.63546649999999,
  },
  {
    addr: 'Anjaneyapuram, Tiruvuru, NTR, Andhra Pradesh, India',
    lat: 17.0582112,
    lng: 80.62436629999999,
  },
  {
    addr: 'Mallela, Tiruvuru, NTR, Andhra Pradesh, India',
    lat: 17.0584873,
    lng: 80.6937177,
  },
  {
    addr: 'Konijerla, Gampalagudem, NTR, Andhra Pradesh, India',
    lat: 17.0482765,
    lng: 80.4045819,
  },
  {
    addr: 'Penugolanu1, Gampalagudem, NTR, Andhra Pradesh, India',
    lat: 16.9778743,
    lng: 80.4368245,
  },
  {
    addr: 'Kondaparva, Vissannapeta, NTR, Andhra Pradesh, India',
    lat: 16.889666,
    lng: 80.83777889999999,
  },
  {
    addr: 'Narasapuram-1, Vissannapeta, NTR, Andhra Pradesh, India',
    lat: 16.9382417,
    lng: 80.78744300000001,
  },
  {
    addr: 'K.Tadepalli, Vijayawada Rural, NTR, Andhra Pradesh, India',
    lat: 16.479932,
    lng: 80.6174393,
  },
  {
    addr: 'Ayodhyanagar, Vijayawada Urban, NTR, Andhra Pradesh, India',
    lat: 16.5276617,
    lng: 80.6286678,
  },
  {
    addr: 'Nunna, Vijayawada Rural, NTR, Andhra Pradesh, India',
    lat: 16.5762873,
    lng: 80.6853986,
  },
  {
    addr: 'Vijayawada, Vijayawada,  NTR, Andhra Pradesh, India',
    lat: 16.5160162,
    lng: 80.6696275,
  },
  {
    addr: 'Mylavaram, Mylavaram, NTR, Andhra Pradesh, India',
    lat: 16.7560489,
    lng: 80.6414006,
  },
  {
    addr: 'DIDUGU, AMARAVATHI, PALNADU, Andhra Pradesh, India',
    lat: 16.5803932,
    lng: 80.2976316,
  },
  {
    addr: 'MALLADI, AMARAVATHI, PALNADU, Andhra Pradesh, India',
    lat: 16.5823945,
    lng: 80.2781262,
  },
  {
    addr: 'CHERUKUMPALEM CHINTAPALLI, ATCHAMPETA, PALNADU, Andhra Pradesh, India',
    lat: 16.6907056,
    lng: 80.13938689999999,
  },
  {
    addr: 'TALLACHERVU, ATCHAMPETA, PALNADU, Andhra Pradesh, India',
    lat: 16.6284091,
    lng: 80.11885819999999,
  },
  {
    addr: 'CHENGISKHANPET, EDLAPADU, PALNADU, Andhra Pradesh, India',
    lat: 16.1700107,
    lng: 80.2250415,
  },
  {
    addr: 'KARUCHOLA, EDLAPADU, PALNADU, Andhra Pradesh, India',
    lat: 16.1517761,
    lng: 80.2619921,
  },
  {
    addr: 'GURIJAVOLU, NADENDLA, PALNADU, Andhra Pradesh, India',
    lat: 16.1748603,
    lng: 80.1847167,
  },
  {
    addr: 'IRLAPADU, NADENDLA, PALNADU, Andhra Pradesh, India',
    lat: 16.1823041,
    lng: 80.11151439999999,
  },
  {
    addr: 'GOGULAPADU, GURAZALA, PALNADU, Andhra Pradesh, India',
    lat: 16.5343779,
    lng: 79.7070224,
  },
  {
    addr: 'TELUKUTLA, GURAZALA, PALNADU, Andhra Pradesh, India',
    lat: 16.6345338,
    lng: 79.6017809,
  },
  {
    addr: 'MITTAGIDIPADU, Rentachintala, PALNADU, Andhra Pradesh, India',
    lat: 16.5544667,
    lng: 79.5524538,
  },
  {
    addr: 'RENTALA, Rentachintala, PALNADU, Andhra Pradesh, India',
    lat: 16.530282,
    lng: 79.5645585,
  },
  {
    addr: 'MUGACHINTAPALEM, BOLLAPALLI, PALNADU, Andhra Pradesh, India',
    lat: 15.6286197,
    lng: 79.5290804,
  },
  {
    addr: 'PERURIPADU, BOLLAPALLI, PALNADU, Andhra Pradesh, India',
    lat: 16.0955543,
    lng: 79.65499179999999,
  },
  {
    addr: 'AGNIGUNDALA, IPURU, PALNADU, Andhra Pradesh, India',
    lat: 16.1831795,
    lng: 79.7400383,
  },
  {
    addr: 'BOMMARAJUPALLI, IPURU, PALNADU, Andhra Pradesh, India',
    lat: 16.2723372,
    lng: 79.78764489999999,
  },
  {
    addr: 'Dharmavaram,  DURGI, Palnadu , Andhra Pradesh, India',
    lat: 16.4451264,
    lng: 79.5772008,
  },
  {
    addr: 'POLLIPALLI, DURGI, PALNADU, Andhra Pradesh, India',
    lat: 16.4245166,
    lng: 79.5406517,
  },
  {
    addr: 'Kambhampadu 1, Macherla, Palnadu , Andhra Pradesh, India',
    lat: 16.4589519,
    lng: 79.4669717,
  },
  {
    addr: 'Thallapali, Macherla, Palnadu , Andhra Pradesh, India',
    lat: 16.4760816,
    lng: 79.4365006,
  },
  {
    addr: 'KALLAKUNTA, VELDURTHI, PALNADU, Andhra Pradesh, India',
    lat: 15.5533014,
    lng: 77.9292916,
  },
  {
    addr: 'SIRIGIRIPADU, VELDURTHI, PALNADU, Andhra Pradesh, India',
    lat: 16.3219493,
    lng: 79.3240228,
  },
  {
    addr: 'GAMALAPADU, Dachepalli, PALNADU, Andhra Pradesh, India',
    lat: 16.61269,
    lng: 79.7154539,
  },
  {
    addr: 'MUTHYLAMPADU, Dachepalli, PALNADU, Andhra Pradesh, India',
    lat: 16.6146259,
    lng: 79.7974535,
  },
  {
    addr: 'PILLUTLA, Machavaram, PALNADU, Andhra Pradesh, India',
    lat: 16.539469,
    lng: 79.90265029999999,
  },
  {
    addr: 'PINNELLI-2, Machavaram, PALNADU, Andhra Pradesh, India',
    lat: 16.523166,
    lng: 80.65564700000002,
  },
  {
    addr: 'JONNALAGADDA, NARASARAOPET, PALNADU, Andhra Pradesh, India',
    lat: 16.2394415,
    lng: 80.07304909999999,
  },
  {
    addr: 'KONDAKAVURU, NARASARAOPET, PALNADU, Andhra Pradesh, India',
    lat: 16.1268767,
    lng: 80.0283415,
  },
  {
    addr: 'KARUMANCHI, SAVALYAPURAM, PALNADU, Andhra Pradesh, India',
    lat: 16.0578902,
    lng: 79.8898816,
  },
  {
    addr: 'KOTHALURU, SAVALYAPURAM, PALNADU, Andhra Pradesh, India',
    lat: 16.157415,
    lng: 79.811311,
  },
  {
    addr: 'CHIMALAMARRI, NEKARIKALLU,  PALNADU, Andhra Pradesh, India',
    lat: 16.3536831,
    lng: 79.9956754,
  },
  {
    addr: 'GUNDLAPALLI 2, NEKARIKALLU,  PALNADU, Andhra Pradesh, India',
    lat: 16.4097298,
    lng: 79.8823148,
  },
  {
    addr: 'EDWARDPETA, ROMPICHERLA,  PALNADU, Andhra Pradesh, India',
    lat: 16.2094457,
    lng: 79.91257390000001,
  },
  {
    addr: 'MACHAVARAM, ROMPICHERLA,  PALNADU, Andhra Pradesh, India',
    lat: 16.2094457,
    lng: 79.91257390000001,
  },
  {
    addr: 'GUDIPADU (VD DODLERU ), KROSURU, PALNADU, Andhra Pradesh, India',
    lat: 16.5414403,
    lng: 80.1386212,
  },
  {
    addr: 'PEESAPADU (VD KROSURU), KROSURU, PALNADU, Andhra Pradesh, India',
    lat: 16.5002136,
    lng: 80.14146269999999,
  },
  {
    addr: 'KASIPADU(VD 75-TYALLURU), PEDAKURAPADU,  PALNADU, Andhra Pradesh, India',
    lat: 16.5538622,
    lng: 80.28335129999999,
  },
  {
    addr: 'LAGADAPADU ( VD GARAPADU ), PEDAKURAPADU,  PALNADU, Andhra Pradesh, India',
    lat: 16.5071112,
    lng: 80.2105191,
  },
  {
    addr: 'GADEVARIPALLI,  KAREMPUDI,  PALNADU, Andhra Pradesh, India',
    lat: 16.4303446,
    lng: 79.71895409999999,
  },
  {
    addr: 'PETASANIGANDLA, KAREMPUDI,  PALNADU, Andhra Pradesh, India',
    lat: 16.4303446,
    lng: 79.71895409999999,
  },
  {
    addr: 'CHENNAYAPALEM, PIDUGURALLA,  PALNADU, Andhra Pradesh, India',
    lat: 16.5019766,
    lng: 79.8266601,
  },
  {
    addr: 'JANAPADU-1, PIDUGURALLA,  PALNADU, Andhra Pradesh, India',
    lat: 16.4791794,
    lng: 79.8852221,
  },
  {
    addr: 'Kandipadu, Bellamkonda, PALNADU, Andhra Pradesh, India',
    lat: 16.5340263,
    lng: 80.01087129999999,
  },
  {
    addr: 'Mannesulthan Palem, Bellamkonda, PALNADU, Andhra Pradesh, India',
    lat: 16.4770987,
    lng: 80.0072925,
  },
  {
    addr: 'Kubadpuram, RAJUPALEM, PALNADU, Andhra Pradesh, India',
    lat: 16.4683884,
    lng: 79.9626354,
  },
  {
    addr: 'Uppalapadu, RAJUPALEM, PALNADU, Andhra Pradesh, India',
    lat: 16.3855476,
    lng: 80.00005759999999,
  },
  {
    addr: 'Chagantivaripalem, MUPPALLA, PALNADU, Andhra Pradesh, India',
    lat: 16.3231693,
    lng: 80.099842,
  },
  {
    addr: 'Rudravaram, MUPPALLA, PALNADU, Andhra Pradesh, India',
    lat: 16.3763823,
    lng: 80.0902531,
  },
  {
    addr: 'L.GARLAPADU, SATTENAPALLI, PALNADU, Andhra Pradesh, India',
    lat: 16.3960329,
    lng: 80.1492601,
  },
  {
    addr: 'RENTAPALLA, SATTENAPALLI, PALNADU, Andhra Pradesh, India',
    lat: 16.4729803,
    lng: 80.1351821,
  },
  {
    addr: 'RAVVARAM, NUZENDLA, PALNADU, Andhra Pradesh, India',
    lat: 15.8855691,
    lng: 79.7294714,
  },
  {
    addr: 'V.APPAPURAM, NUZENDLA, PALNADU, Andhra Pradesh, India',
    lat: 15.9261267,
    lng: 79.7411237,
  },
  {
    addr: 'Pedakancherla, VINUKONDA, PALNADU, Andhra Pradesh, India',
    lat: 16.0424122,
    lng: 79.80866209999999,
  },
  {
    addr: 'Thimmayapalem, VINUKONDA, PALNADU, Andhra Pradesh, India',
    lat: 16.0328779,
    lng: 79.70072110000001,
  },
  {
    addr: 'Gurazala, Gurazala, Palnadu, Andhra Pradesh, India',
    lat: 16.5580212,
    lng: 79.6371314,
  },
  {
    addr: 'Chakalabelagam, Parvathipuram, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.7829598,
    lng: 83.4300877,
  },
  {
    addr: 'Seethanagaram, Seethanagaram, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.7829598,
    lng: 83.4300877,
  },
  {
    addr: 'Palakonda, Palakonda, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.602112,
    lng: 83.7535802,
  },
  {
    addr: 'Udayapuram, Kurupam, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.9530524,
    lng: 83.69507589999999,
  },
  {
    addr: 'Kurupam, Kurupam, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.8661991,
    lng: 83.5532656,
  },
  {
    addr: 'Kasipatanam, Makkuva, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.652913,
    lng: 83.2964174,
  },
  {
    addr: 'Pachipenta, Pachipenata, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.4795915,
    lng: 83.1126455,
  },
  {
    addr: 'Viswanadhapuram, Pachipenata, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.7829598,
    lng: 83.4300877,
  },
  {
    addr: 'Panchali, Pachipenata, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.7829598,
    lng: 83.4300877,
  },
  {
    addr: 'Thonam, Salur, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.6380765,
    lng: 83.14077640000001,
  },
  {
    addr: 'SALUR, SALUR, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.5169856,
    lng: 83.20394189999999,
  },
  {
    addr: 'PARVATHIPURAM, PARVATHIPURAM, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.7829598,
    lng: 83.4300877,
  },
  {
    addr: 'KURUPAM, KURUPAM, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.8661991,
    lng: 83.5532656,
  },
  {
    addr: 'PALAKONDA, PALAKONDA, Parvathipuram Manyam, Andhra Pradesh, India',
    lat: 18.602112,
    lng: 83.7535802,
  },
  {
    addr: 'K S Palli-1, Giddalur, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Mundlapadu-1, Giddalur, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Gadikota, Giddalur, Markapur, Andhra Pradesh, India',
    lat: 15.2583059,
    lng: 78.909245,
  },
  {
    addr: 'Uyyalawada, Giddalur, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Akaveedu-2, Racherla, Markapur, Andhra Pradesh, India',
    lat: 15.5624619,
    lng: 78.94155239999999,
  },
  {
    addr: 'Gudimetta, Racherla, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Nallamadugula, CS Puram, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Vaggam Palli, Pamur, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Pandillapalli, Bestavaripeta, Markapur, Andhra Pradesh, India',
    lat: 15.5503073,
    lng: 79.1026315,
  },
  {
    addr: 'JC.Agraharam, Bestavaripeta, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Pitikayagulla, Bestavaripeta, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Veligandla, Konakanamitla, Markapur, Andhra Pradesh, India',
    lat: 15.6498931,
    lng: 79.4885227,
  },
  {
    addr: 'Katragunta, Konakanamitla, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Pannuru, Marripudi, Markapur, Andhra Pradesh, India',
    lat: 15.5337447,
    lng: 79.7128189,
  },
  {
    addr: 'Chilamkuru, Marripudi, Markapur, Andhra Pradesh, India',
    lat: 15.5145786,
    lng: 79.78834549999999,
  },
  {
    addr: 'Chimata, Marripudi, Markapur, Andhra Pradesh, India',
    lat: 15.4770179,
    lng: 79.7119419,
  },
  {
    addr: 'Kakarla, Marripudi, Markapur, Andhra Pradesh, India',
    lat: 15.5236394,
    lng: 79.7498014,
  },
  {
    addr: 'Gundalsamudram, Marripudi, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Kambhalapadu, Podili, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Madalavaripalem, Podili, Markapur, Andhra Pradesh, India',
    lat: 15.6160719,
    lng: 79.56174879999999,
  },
  {
    addr: 'Thallur, Kanigiri, Markapur, Andhra Pradesh, India',
    lat: 15.7378884,
    lng: 79.2651514,
  },
  {
    addr: 'Chinna Irlapadu, Kanigiri, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Peda Irlapadu, P C Palli, Markapur, Andhra Pradesh, India',
    lat: 13.6630049,
    lng: 78.7240763,
  },
  {
    addr: 'Thalakondapadu, P C Palli, Markapur, Andhra Pradesh, India',
    lat: 13.6630049,
    lng: 78.7240763,
  },
  {
    addr: 'Guntupalli, P C Palli, Markapur, Andhra Pradesh, India',
    lat: 13.6630049,
    lng: 78.7240763,
  },
  {
    addr: 'Muppalapadu, H.M.Padu, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Hazeepuram, H.M.Padu, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Gudipatipalli, H.M.Padu, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'VD-Gajjalakonda, Markapur, Markapur, Andhra Pradesh, India',
    lat: 15.7518595,
    lng: 79.391367,
  },
  {
    addr: 'VH-Markapur, Markapur, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'RLU-Meerjapeta, Tarlupadu, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Rbk- Nikarampalli, Markapur, Markapur, Andhra Pradesh, India',
    lat: 15.737655,
    lng: 79.2699779,
  },
  {
    addr: 'Kurichedu, Kurichedu, Prakasham, Andhra Pradesh, India',
    lat: 15.9047135,
    lng: 79.5773632,
  },
  {
    addr: 'Inamanamellur, Maddipadu, Prakasam, Andhra Pradesh, India',
    lat: 15.6014477,
    lng: 80.07292919999999,
  },
  {
    addr: 'Ghadiyapudi, Maddipadu, Prakasam, Andhra Pradesh, India',
    lat: 15.6206676,
    lng: 80.0214829,
  },
  {
    addr: 'KARAVADI, Ongole, Prakasham, Andhra Pradesh, India',
    lat: 15.5450069,
    lng: 80.1131857,
  },
  {
    addr: 'ALOOR, Kothapatnam, Prakasham, Andhra Pradesh, India',
    lat: 15.5039955,
    lng: 80.11788489999999,
  },
  {
    addr: 'R.L.Puram, Chimakurthy, Prakasam, Andhra Pradesh, India',
    lat: 15.5716858,
    lng: 79.8201244,
  },
  {
    addr: 'Nippatlapadu, Chimakurthy, Prakasam, Andhra Pradesh, India',
    lat: 15.6017053,
    lng: 79.76311849999999,
  },
  {
    addr: 'K.V.Palem, Chimakurthy, Prakasam, Andhra Pradesh, India',
    lat: 15.5855375,
    lng: 79.8671813,
  },
  {
    addr: 'Bandlamudi, Chimakurthy, Prakasam, Andhra Pradesh, India',
    lat: 15.606506,
    lng: 79.89757949999999,
  },
  {
    addr: 'Anakarlapudi, Kondapi, Prakasam, Andhra Pradesh, India',
    lat: 15.4441397,
    lng: 79.8611832,
  },
  {
    addr: 'Chinakandlagunta, Kondapi, Prakasam, Andhra Pradesh, India',
    lat: 15.4131545,
    lng: 79.85591889999999,
  },
  {
    addr: 'Malapadu, Ponnaluru, Prakasam, Andhra Pradesh, India',
    lat: 15.2422815,
    lng: 79.7080849,
  },
  {
    addr: 'Ravulakollu, Ponnaluru, Prakasam, Andhra Pradesh, India',
    lat: 15.3185082,
    lng: 79.80235739999999,
  },
  {
    addr: 'Wollapalem, Sinagarayakonda, Prakasam, Andhra Pradesh, India',
    lat: 15.2418053,
    lng: 80.07304909999999,
  },
  {
    addr: 'Singarayakonda, Sinagarayakonda, Prakasam, Andhra Pradesh, India',
    lat: 15.2476081,
    lng: 80.0205089,
  },
  {
    addr: 'Srinivasacharyulapeta, Amadalavalasa, Srikakulam, Andhra Pradesh, India',
    lat: 18.4489436,
    lng: 83.8759712,
  },
  {
    addr: 'Cheemalavalasa, Amadalavalasa, Srikakulam, Andhra Pradesh, India',
    lat: 18.4212043,
    lng: 83.85724259999999,
  },
  {
    addr: 'Muddada,  Etcherla,  Srikakulam, Andhra Pradesh, India',
    lat: 18.2385697,
    lng: 83.8694752,
  },
  {
    addr: 'Ajjaram, Etcherla,  Srikakulam, Andhra Pradesh, India',
    lat: 18.2123277,
    lng: 83.8290562,
  },
  {
    addr: 'BURAVALLI, GARA, Srikakulam, Andhra Pradesh, India',
    lat: 18.3313111,
    lng: 84.0550885,
  },
  {
    addr: 'AMBATIVANIPETA, GARA, Srikakulam, Andhra Pradesh, India',
    lat: 18.3313111,
    lng: 84.0550885,
  },
  {
    addr: 'PATHRUNIVALASA, Srikakulam, Srikakulam, Andhra Pradesh, India',
    lat: 18.7150084,
    lng: 84.3631321,
  },
  {
    addr: 'NAIRA, Srikakulam, Srikakulam, Andhra Pradesh, India',
    lat: 18.390999,
    lng: 83.9551274,
  },
  {
    addr: 'BORIGIVALASA, Narasannapeta, Srikakulam, Andhra Pradesh, India',
    lat: 18.4048214,
    lng: 84.044804,
  },
  {
    addr: 'VN PURAM, Narasannapeta, Srikakulam, Andhra Pradesh, India',
    lat: 18.401323,
    lng: 83.9982326,
  },
  {
    addr: 'CHELLAYYAVALASA, POLAKI, Srikakulam, Andhra Pradesh, India',
    lat: 18.3763322,
    lng: 84.1019597,
  },
  {
    addr: 'JADURU, POLAKI, Srikakulam, Andhra Pradesh, India',
    lat: 18.4373775,
    lng: 84.0810159,
  },
  {
    addr: 'KURIGAM, KOTTURU,  Srikakulam, Andhra Pradesh, India',
    lat: 18.810014,
    lng: 83.9747668,
  },
  {
    addr: 'NERADI, kotturu,  Srikakulam, Andhra Pradesh, India',
    lat: 18.7370538,
    lng: 83.9203047,
  },
  {
    addr: 'miriyapalli,  lnpeta,  Srikakulam, Andhra Pradesh, India',
    lat: 18.638109,
    lng: 83.942742,
  },
  {
    addr: 'karakavalasa,  lnpeta,  Srikakulam, Andhra Pradesh, India',
    lat: 18.6021438,
    lng: 83.9929431,
  },
  {
    addr: 'Shalantri, Sarubujjili, Srikakulam, Andhra Pradesh, India',
    lat: 18.5101237,
    lng: 83.9115589,
  },
  {
    addr: 'Palavalasa, Sarubujjili, Srikakulam, Andhra Pradesh, India',
    lat: 18.4820711,
    lng: 83.92380659999999,
  },
  {
    addr: 'Kollivalasa, Burja, Srikakulam, Andhra Pradesh, India',
    lat: 18.5058237,
    lng: 83.8322254,
  },
  {
    addr: 'Palavalasa, Burja, Srikakulam, Andhra Pradesh, India',
    lat: 18.5647288,
    lng: 83.7955818,
  },
  {
    addr: 'Jangalapeta, Burja, Srikakulam, Andhra Pradesh, India',
    lat: 18.4794153,
    lng: 83.8642004,
  },
  {
    addr: 'Santhavuriti, G.Sigadam, Srikakulam, Andhra Pradesh, India',
    lat: 18.3778313,
    lng: 83.68138359999999,
  },
  {
    addr: 'TD Valasa, G.Sigadam, Srikakulam, Andhra Pradesh, India',
    lat: 18.3778313,
    lng: 83.68138359999999,
  },
  {
    addr: 'Rapaka, Ponduru, Srikakulam, Andhra Pradesh, India',
    lat: 18.3492061,
    lng: 83.77766869999999,
  },
  {
    addr: 'Lolugu, Ponduru, Srikakulam, Andhra Pradesh, India',
    lat: 18.3074808,
    lng: 83.7826776,
  },
  {
    addr: 'Krishnapuram, Ranasthalam,  Srikakulam, Andhra Pradesh, India',
    lat: 18.1975758,
    lng: 83.70383489999999,
  },
  {
    addr: 'Pathivadapalem, Ranasthalam,  Srikakulam, Andhra Pradesh, India',
    lat: 18.1975758,
    lng: 83.70383489999999,
  },
  {
    addr: 'Kothakunkam, Laveru, Srikakulam, Andhra Pradesh, India',
    lat: 18.3063978,
    lng: 83.71967160000001,
  },
  {
    addr: 'Murapaka - 2, Laveru, Srikakulam, Andhra Pradesh, India',
    lat: 18.2286082,
    lng: 83.79226489999999,
  },
  {
    addr: 'Kotturu, Kotturu, Srikakulam, Andhra Pradesh, India',
    lat: 18.5421915,
    lng: 83.9173367,
  },
  {
    addr: 'Sompeta, Sompeta, Srikakulam, Andhra Pradesh, India',
    lat: 18.9420835,
    lng: 84.5850037,
  },
  {
    addr: 'Tekkali, Tekkali, Srikakulam, Andhra Pradesh, India',
    lat: 18.6051444,
    lng: 84.2299771,
  },
  {
    addr: 'Srikakulam, Srikakulam, Srikakulam, Andhra Pradesh, India',
    lat: 18.2949165,
    lng: 83.89380179999999,
  },
  {
    addr: 'Ichapuram, Ichapuram, Srikakulam, Andhra Pradesh, India',
    lat: 19.1127596,
    lng: 84.68437229999999,
  },
  {
    addr: 'Eedupuram 1, Ichapuram, Srikakulam, Andhra Pradesh, India',
    lat: 19.0669366,
    lng: 84.701144,
  },
  {
    addr: 'Chandiputtuga, Kaviti, Srikakulam, Andhra Pradesh, India',
    lat: 19.0491935,
    lng: 84.6819074,
  },
  {
    addr: 'Silagam, Kaviti, Srikakulam, Andhra Pradesh, India',
    lat: 19.0214016,
    lng: 84.64268059999999,
  },
  {
    addr: 'Baruva, Sompeta, Srikakulam, Andhra Pradesh, India',
    lat: 18.8849403,
    lng: 84.5837904,
  },
  {
    addr: 'BRC Puram, Sompeta, Srikakulam, Andhra Pradesh, India',
    lat: 18.9253633,
    lng: 84.5471589,
  },
  {
    addr: 'Kolluru, Kanchili, Srikakulam, Andhra Pradesh, India',
    lat: 19.0078424,
    lng: 84.5723115,
  },
  {
    addr: 'Peddasrirampuram, Kanchili, Srikakulam, Andhra Pradesh, India',
    lat: 18.9809562,
    lng: 84.6220107,
  },
  {
    addr: 'Allukhola, Palasa, Srikakulam, Andhra Pradesh, India',
    lat: 18.8070432,
    lng: 84.38010489999999,
  },
  {
    addr: 'Ganguvada, Palasa, Srikakulam, Andhra Pradesh, India',
    lat: 18.7821542,
    lng: 84.4107008,
  },
  {
    addr: 'Baligam, Mandasa, Srikakulam, Andhra Pradesh, India',
    lat: 18.8699722,
    lng: 84.4614237,
  },
  {
    addr: 'Narayanapuram, Mandasa, Srikakulam, Andhra Pradesh, India',
    lat: 18.8699722,
    lng: 84.4614237,
  },
  {
    addr: 'Temburu, Nandigam, Srikakulam, Andhra Pradesh, India',
    lat: 18.6871245,
    lng: 84.3035831,
  },
  {
    addr: 'Dimmidijola, Nandigam, Srikakulam, Andhra Pradesh, India',
    lat: 18.7171687,
    lng: 84.2673851,
  },
  {
    addr: 'Amalapadu,  Vajrapukothuru,  Srikakulam, Andhra Pradesh, India',
    lat: 18.6390516,
    lng: 84.39732939999999,
  },
  {
    addr: 'Akkupalli, Vajrapukothuru,  Srikakulam, Andhra Pradesh, India',
    lat: 18.751131,
    lng: 84.4874743,
  },
  {
    addr: 'K. Kothuru, Tekkali, Srikakulam, Andhra Pradesh, India',
    lat: 18.7028487,
    lng: 84.23446570000002,
  },
  {
    addr: 'Narsingapalli, Tekkali, Srikakulam, Andhra Pradesh, India',
    lat: 18.6619117,
    lng: 84.2259036,
  },
  {
    addr: 'Santhabommali, Santhabommali, Srikakulam, Andhra Pradesh, India',
    lat: 18.5360844,
    lng: 84.2079298,
  },
  {
    addr: 'DG Puram, Santhabommali, Srikakulam, Andhra Pradesh, India',
    lat: 18.5360844,
    lng: 84.2079298,
  },
  {
    addr: 'Nimmada, Kotabommali, Srikakulam, Andhra Pradesh, India',
    lat: 18.4581491,
    lng: 84.1144854,
  },
  {
    addr: 'Tilaru, Kotabommali, Srikakulam, Andhra Pradesh, India',
    lat: 18.4708966,
    lng: 84.0728979,
  },
  {
    addr: 'Allada, Jalumuru, Srikakulam, Andhra Pradesh, India',
    lat: 18.4806438,
    lng: 83.97582650000001,
  },
  {
    addr: 'Syirigam, Jalumuru, Srikakulam, Andhra Pradesh, India',
    lat: 18.5111244,
    lng: 84.0400654,
  },
  {
    addr: 'Venkatapuram, Saravakota, Srikakulam, Andhra Pradesh, India',
    lat: 18.5511643,
    lng: 84.0558296,
  },
  {
    addr: 'Ramakrishnapuram, Saravakota, Srikakulam, Andhra Pradesh, India',
    lat: 18.5882966,
    lng: 84.13616789999999,
  },
  {
    addr: 'Ambavili, Hiramandalam, Srikakulam, Andhra Pradesh, India',
    lat: 18.6310343,
    lng: 83.96020399999999,
  },
  {
    addr: 'Kallata, Hiramandalam, Srikakulam, Andhra Pradesh, India',
    lat: 18.7124184,
    lng: 84.00847979999999,
  },
  {
    addr: 'Themburu, Pathapatnam, Srikakulam, Andhra Pradesh, India',
    lat: 18.6314777,
    lng: 84.1263623,
  },
  {
    addr: 'RL Puram, Pathapatnam, Srikakulam, Andhra Pradesh, India',
    lat: 18.7540526,
    lng: 84.0504419,
  },
  {
    addr: 'Jannibandha, Meliaputti, Srikakulam, Andhra Pradesh, India',
    lat: 18.7716214,
    lng: 84.1734287,
  },
  {
    addr: 'Karajada, Meliaputti, Srikakulam, Andhra Pradesh, India',
    lat: 18.7226031,
    lng: 84.2515861,
  },
  {
    addr: 'Sanjeevapuram, Bathalapalli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.5530316,
    lng: 77.7301859,
  },
  {
    addr: 'Ramapuram, Bathalapalli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.4719534,
    lng: 77.8557204,
  },
  {
    addr: 'Chillavaripalli, Tadimarri, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.6292231,
    lng: 77.8962781,
  },
  {
    addr: 'Tadimarri, Tadimarri, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.5616427,
    lng: 77.8593518,
  },
  {
    addr: 'Darsinamala, Dharmavaram, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.4124551,
    lng: 77.7201031,
  },
  {
    addr: 'KodavandlaPalli, Mudigubba, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.3510995,
    lng: 77.9959444,
  },
  {
    addr: 'Mallepalli,  Mudigubba, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.3510995,
    lng: 77.9959444,
  },
  {
    addr: 'Nyamaddala, C.K.Palli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.2783989,
    lng: 77.5877654,
  },
  {
    addr: 'Ganginepalli, C.K.Palli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.278509,
    lng: 77.7966975,
  },
  {
    addr: 'M.C.Palli, Ramagiri, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.3096006,
    lng: 77.50296639999999,
  },
  {
    addr: 'Peruru 2 (Dubbarlapalli), Ramagiri, Sri Satyasai Maddalacheruvu, Kanaganapalli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.4462143,
    lng: 77.5255245,
  },
  {
    addr: 'Maddalacheruvu 2 (Banukota), Kanaganapalli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.4462143,
    lng: 77.5255245,
  },
  {
    addr: 'Talamarla, Kothacheruvu, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.2140989,
    lng: 77.7244626,
  },
  {
    addr: 'Bandlapalli, Kothacheruvu, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1127743,
    lng: 77.6822442,
  },
  {
    addr: 'Marala, Bukkapatnam, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.291568,
    lng: 77.93959699999999,
  },
  {
    addr: 'Siddarampuram, Bukkapatnam, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.2706193,
    lng: 77.86531260000001,
  },
  {
    addr: 'CADDL, Dharmavaram, Dharmavaram, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.4261558,
    lng: 77.7160711,
  },
  {
    addr: 'CADDL, Kothacheruvu, Kothacheruvu, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1883776,
    lng: 77.7652346,
  },
  {
    addr: 'Bullasamudram, Madakasira, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9119844,
    lng: 77.3266991,
  },
  {
    addr: 'KADIREPALLI, Madakasira, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.952838,
    lng: 77.2230992,
  },
  {
    addr: 'IRIGEPALLI, Agali, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.7871685,
    lng: 77.0409755,
  },
  {
    addr: 'INAGALURU, Agali, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8358767,
    lng: 77.0434934,
  },
  {
    addr: 'M.RAYAPURAM, Rolla, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.886383,
    lng: 77.03315979999999,
  },
  {
    addr: 'KAKI, Rolla, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.7847416,
    lng: 77.12175979999999,
  },
  {
    addr: 'Madanakunta, Amarapuram, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1239335,
    lng: 76.9807302,
  },
  {
    addr: 'K Sivaram, Amarapuram, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1239335,
    lng: 76.9807302,
  },
  {
    addr: 'Madanakunta, Gudibanda, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9754375,
    lng: 77.1058705,
  },
  {
    addr: 'Mandalapalli, Gudibanda, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9279242,
    lng: 77.09098089999999,
  },
  {
    addr: 'GANGAMPALLI, Gorantla, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9846018,
    lng: 77.7705127,
  },
  {
    addr: 'MALLAPALLI, Gorantla, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9846018,
    lng: 77.7705127,
  },
  {
    addr: 'JULUKUNTA, Somandepalli, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9712856,
    lng: 77.53614619999999,
  },
  {
    addr: 'THUNGODU, Somandepalli, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0106722,
    lng: 77.6081315,
  },
  {
    addr: 'Konduru, Lepakshi, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8039436,
    lng: 77.60771969999999,
  },
  {
    addr: 'Kodipalli, Lepakshi, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8039436,
    lng: 77.60771969999999,
  },
  {
    addr: 'Somaghatta, Chilamathur, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8689886,
    lng: 77.8195739,
  },
  {
    addr: 'Koduru 1, Chilamathur, Sri Satyasai, Andhra Pradesh, India',
    lat: 16.0034471,
    lng: 81.0372849,
  },
  {
    addr: 'Seegipalli, Parigi, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8922114,
    lng: 77.4609304,
  },
  {
    addr: 'Moda, Pariigi, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8922114,
    lng: 77.4609304,
  },
  {
    addr: 'Maluguru, Hindupur, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8924637,
    lng: 77.553344,
  },
  {
    addr: 'Pulakunta, Hindupur, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.6259156,
    lng: 77.70156639999999,
  },
  {
    addr: 'Balasamudram, Tanakal, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.885743,
    lng: 78.2162833,
  },
  {
    addr: 'Ethodu, Tanakal, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8968036,
    lng: 78.15074229999999,
  },
  {
    addr: 'Javakulakothapalli, Amadaguru, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.8881668,
    lng: 78.0224776,
  },
  {
    addr: 'Thummala, Amadaguru, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9351454,
    lng: 78.0707395,
  },
  {
    addr: 'Thogatavaripalli, Talupula, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.2411289,
    lng: 78.25920099999999,
  },
  {
    addr: 'Lakkasamudram, Talupula, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.2731016,
    lng: 78.1393397,
  },
  {
    addr: 'Mekalacheruvu, Nambulapulakunta, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0557623,
    lng: 78.4119492,
  },
  {
    addr: 'Velichalamala, Nambulapulakunta, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0557623,
    lng: 78.4119492,
  },
  {
    addr: 'Mavaturu, Penukonda, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0408499,
    lng: 77.5046101,
  },
  {
    addr: 'Duddebanda, Penukonda, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1764627,
    lng: 77.590597,
  },
  {
    addr: 'R Locherla, Roddam, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0924576,
    lng: 77.4286016,
  },
  {
    addr: 'Reddipalli, Roddam, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0926193,
    lng: 77.4287157,
  },
  {
    addr: 'Vengalammacheruvu, Puttaparthy, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.168813,
    lng: 77.8109623,
  },
  {
    addr: 'Pedaballi1, Puttaparthy, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.168813,
    lng: 77.8109623,
  },
  {
    addr: 'Donnikota2, Nallamada, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.141446,
    lng: 77.9837469,
  },
  {
    addr: 'Reddipalli, Nallamada, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1765034,
    lng: 78.0366614,
  },
  {
    addr: 'AVH, Puttaparthi, Puttaparthy, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.168813,
    lng: 77.8109623,
  },
  {
    addr: 'Kodamanayanipalyam, Kadiri, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1137566,
    lng: 78.1610702,
  },
  {
    addr: 'Yerradoddi, Kadiri, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1672212,
    lng: 78.1364889,
  },
  {
    addr: 'Mittapalli, Obuladevaracheruvu, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0589289,
    lng: 78.0492551,
  },
  {
    addr: 'Gowrapuram, Obuladevaracheruvu, Sri SatyasaiUbicherla, Nallacheruvu, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.9956761,
    lng: 77.9417465,
  },
  {
    addr: 'M.Agraharam, Nallacheruvu, Sri Satyasai, Andhra Pradesh, India',
    lat: 15.262947,
    lng: 77.4372084,
  },
  {
    addr: 'Katarupalli, Gandlapenta, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1142348,
    lng: 78.2490385,
  },
  {
    addr: 'Somayajulapalli, Gandlapenta, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0741476,
    lng: 78.27608939999999,
  },
  {
    addr: 'CADDL, Kadiri, Kadiri, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.1122397,
    lng: 78.1562746,
  },
  {
    addr: 'CADDL, Penukonda, Penukonda, Sri Satyasai, Andhra Pradesh, India',
    lat: 14.0849002,
    lng: 77.5970586,
  },
  {
    addr: 'CADDL, Madakasira, Madakasira, Sri Satyasai, Andhra Pradesh, India',
    lat: 13.94083,
    lng: 77.27544259999999,
  },
  {
    addr: 'Thalarivettu, BN Kandriga, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Kukkambakam, BN Kandriga, Tirupati Santhavellore, Varadaiahpalem, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Chilamathuru, Varadaiahpalem, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Thondawada, Chandragiri, Tirupati , Andhra Pradesh, India',
    lat: 13.5880077,
    lng: 79.3159343,
  },
  {
    addr: 'Mittakandriga, Ramachandrapuram, Tirupati , Andhra Pradesh, India',
    lat: 13.5069709,
    lng: 79.4237948,
  },
  {
    addr: 'Gangireddipalli, Ramachandrapuram, Tirupati , Andhra Pradesh, India',
    lat: 13.5391757,
    lng: 79.4017881,
  },
  {
    addr: 'AVH, Chinnagottigallu, Chinnagottigallu, Tirupati Bhakarapeta, Chinnagottigallu, Tirupati , Andhra Pradesh, India',
    lat: 13.6534791,
    lng: 79.1547539,
  },
  {
    addr: 'Bodevandlapalli, Yerravaripalem, Tirupati Chilamanur, Balayapalli, Tirupati Balayapalli, Balayapalli, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Kommanetur, Gudur, Tirupati Momidi, Chillakur, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Perumalapalli, Tirupati Rural, Tirupati , Andhra Pradesh, India',
    lat: 13.6063582,
    lng: 79.3503509,
  },
  {
    addr: 'Kothuru, Tirupati Rural, Tirupati , Andhra Pradesh, India',
    lat: 13.5829739,
    lng: 79.4707401,
  },
  {
    addr: 'AVH, Naidupeta, Naidupeta, Tirupati Menakur, Naidupeta, Tirupati Vijjavaripalem, Ojili, Tirupati Karabalavolu, Ojili, Tirupati , Andhra Pradesh, India',
    lat: 13.6261279,
    lng: 79.4309039,
  },
  {
    addr: 'Vallivedu, Pakala, Tirupati , Andhra Pradesh, India',
    lat: 13.5282095,
    lng: 79.0694487,
  },
  {
    addr: 'Pantapalli, Pakala, Tirupati Doravarisathram, Doravarisatram, Tirupati Mavillapadu, Doravarisatram, Tirupati , Andhra Pradesh, India',
    lat: 13.5807913,
    lng: 78.5211001,
  },
  {
    addr: 'Pellakuru, Pellakur, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Punabaka, Pellakur, Tirupati Kovanur, KVB Puram, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Erikambattu, Narayanavanam, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Aranyam Kandriga, Narayanavanam, Tirupati , Andhra Pradesh, India',
    lat: 13.4135878,
    lng: 79.6417893,
  },
  {
    addr: 'Ramagiri, Pichatur, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'SR Kandriga, Pichatur, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'AVH, Puttur, Puttur, Tirupati PR Mangalam, Puttur, Tirupati , Andhra Pradesh, India',
    lat: 13.4381376,
    lng: 79.5521971,
  },
  {
    addr: 'AVH, Renigunta, Renigunta, Tirupati MD Puttur, Yerpedu, Tirupati , Andhra Pradesh, India',
    lat: 13.6371216,
    lng: 79.59311799999999,
  },
  {
    addr: 'Punguru, Yerpedu, Tirupati SBR Puram, Vadamalapeta, Tirupati , Andhra Pradesh, India',
    lat: 13.478951,
    lng: 79.5160801,
  },
  {
    addr: 'TC Agraharam, Vadamalapeta, Tirupati , Andhra Pradesh, India',
    lat: 13.5787034,
    lng: 79.5469968,
  },
  {
    addr: 'Surutupalli, Nagalapuram, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'SS Puram, Nagalapuram, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'AVH, Sathyavedu, Sathyavedu, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Cherlopalli, Srikalahasthi, Tirupati , Andhra Pradesh, India',
    lat: 13.6288841,
    lng: 79.4191209,
  },
  {
    addr: 'AVH, Srikalahasthi, Srikalahasthi, Tirupati , Andhra Pradesh, India',
    lat: 13.6288841,
    lng: 79.4191209,
  },
  {
    addr: 'Konathaneri, Thottambedu, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Chittathur, Thottambedu, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'AVH, Sullurupeta, Sullurupeta, Tirupati , Andhra Pradesh, India',
    lat: 13.621579,
    lng: 79.409832,
  },
  {
    addr: 'Mangalampadu, Sullurupeta, Tirupati Damanellore, Tada, Tirupati Gunapatipalem, Chittamur, Tirupati , Andhra Pradesh, India',
    lat: 13.9336567,
    lng: 79.96473309999999,
  },
  {
    addr: 'Eswarawaka, Chittamur, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'AVH, Vakadu, Vakadu, Tirupati Balireddipalem, Vakadu, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'Pulugodu, Dakkili, Tirupati Dakkili, Dakkili, Tirupati , Andhra Pradesh, India',
    lat: 13.6244611,
    lng: 79.4310052,
  },
  {
    addr: 'AVH, Venkatagiri, Venkatagiri, Tirupati , Andhra Pradesh, India',
    lat: 13.6506863,
    lng: 79.43344429999999,
  },
  {
    addr: 'Kalapadu, Venkatagiri, Tirupati , Andhra Pradesh, India',
    lat: 13.9972651,
    lng: 79.58843689999999,
  },
  {
    addr: 'AVH, Chandragiri, Chandragiri, Tirupati , Andhra Pradesh, India',
    lat: 13.6191188,
    lng: 79.4182108,
  },
  {
    addr: 'AVH, Gudur, Gudur, Tirupati , Andhra Pradesh, India',
    lat: 13.856854,
    lng: 79.6445398,
  },
  {
    addr: 'AVH, MR Palli, Tirupati Urban, Tirupati , Andhra Pradesh, India',
    lat: 13.6159292,
    lng: 79.4067338,
  },
  {
    addr: 'AVH, Sathyavedu, Sathyavedu, Tirupati , Andhra Pradesh, India',
    lat: 13.6287557,
    lng: 79.4191795,
  },
  {
    addr: 'AVH, Srikalahasthi, Srikalahasthi, Tirupati , Andhra Pradesh, India',
    lat: 13.6288841,
    lng: 79.4191209,
  },
  {
    addr: 'AVH, Sullurupeta, Sullurupeta, Tirupati , Andhra Pradesh, India',
    lat: 13.621579,
    lng: 79.409832,
  },
  {
    addr: 'AVH, Venkatagiri, Venkatagiri, Tirupati , Andhra Pradesh, India',
    lat: 13.6506863,
    lng: 79.43344429999999,
  },
  {
    addr: 'T.NAGARAPALEM, Bheemili, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.938372,
    lng: 83.412646,
  },
  {
    addr: 'SINGANABANDA, Bheemili, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.8888698,
    lng: 83.4524802,
  },
  {
    addr: 'Gorapalli, Pendurthi, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.8333261,
    lng: 83.1773875,
  },
  {
    addr: 'Pedagadi, Pendurthi, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.7965827,
    lng: 83.1776284,
  },
  {
    addr: 'Gandhavaram, Padmanabham, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.9812861,
    lng: 83.27802779999999,
  },
  {
    addr: 'Korada, Padmanabham, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.9976854,
    lng: 83.3799406,
  },
  {
    addr: 'Vemulavalasa, Anandapuram, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.8949109,
    lng: 83.38094219999999,
  },
  {
    addr: 'Kolavanipalem, Anandapuram, Visakhaptanam, Andhra Pradesh, India',
    lat: 17.8897265,
    lng: 83.2530531,
  },
  {
    addr: 'RADDL Visakhapatam, Visakhapatnam,  Visakhaptanam, Andhra Pradesh, India',
    lat: 17.6868159,
    lng: 83.2184815,
  },
  {
    addr: 'Vizianagaram, Vizianagaram, Vizianagaram, Andhra Pradesh, India',
    lat: 18.1066576,
    lng: 83.39555059999999,
  },
  {
    addr: 'Nelivada, Bondapalli, Vizianagaram, Andhra Pradesh, India',
    lat: 18.204703,
    lng: 83.3745687,
  },
  {
    addr: 'Garudabilli, Bondapalli, Vizianagaram, Andhra Pradesh, India',
    lat: 18.2043417,
    lng: 83.35355899999999,
  },
  {
    addr: 'Sthivada, Nellimarla, Vizianagaram, Andhra Pradesh, India',
    lat: 18.1647561,
    lng: 83.4482228,
  },
  {
    addr: 'Kondagumpam, Nellimarla, Vizianagaram, Andhra Pradesh, India',
    lat: 18.1874149,
    lng: 83.418992,
  },
  {
    addr: 'Govindapuram, Pusapatirega, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0939568,
    lng: 83.61189399999999,
  },
  {
    addr: 'Challavani thota, Pusapatirega, Vizianagaram, Andhra Pradesh, India',
    lat: 19.087408,
    lng: 83.6196138,
  },
  {
    addr: 'Chakivalasa, Bhogapuram, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0127802,
    lng: 83.48835780000002,
  },
  {
    addr: 'Savaravilli, Bhogapuram, Vizianagaram, Andhra Pradesh, India',
    lat: 17.9870977,
    lng: 83.4599109,
  },
  {
    addr: 'Pedathadivada, Denkada, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0843612,
    lng: 83.4409362,
  },
  {
    addr: 'JONNADA, Denkada, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0290168,
    lng: 83.4016388,
  },
  {
    addr: 'Mettapalli, Cheepurupalli, Vizianagaram, Andhra Pradesh, India',
    lat: 18.295261,
    lng: 83.62496159999999,
  },
  {
    addr: 'Karlam, Cheepurupalli, Vizianagaram, Andhra Pradesh, India',
    lat: 18.302361,
    lng: 83.6486698,
  },
  {
    addr: 'Bheemavaram, Merakamudidam, Vizianagaram, Andhra Pradesh, India',
    lat: 18.42116,
    lng: 83.5326722,
  },
  {
    addr: 'Ootapalli, Merakamudidam, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4115444,
    lng: 83.4622803,
  },
  {
    addr: 'Davalapeta, Gajapathinagaram, Vizianagaram, Andhra Pradesh, India',
    lat: 18.2802222,
    lng: 83.337057,
  },
  {
    addr: 'M.GUMADAM, Gajapathinagaram, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3131984,
    lng: 83.3609537,
  },
  {
    addr: 'T.Boorjavalasa, Dathirajeru, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5277948,
    lng: 83.3602389,
  },
  {
    addr: 'Ingilapalli, Dathirajeru, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3603987,
    lng: 83.3014319,
  },
  {
    addr: 'Iddannavalasa, Mentada, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3089785,
    lng: 83.2624579,
  },
  {
    addr: 'UDDANGI, Mentada, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4008806,
    lng: 83.235879,
  },
  {
    addr: 'chodavaram, Gurla, Vizianagaram, Andhra Pradesh, India',
    lat: 18.2382219,
    lng: 83.50945519999999,
  },
  {
    addr: 'Jammupeta, Gurla, Vizianagaram, Andhra Pradesh, India',
    lat: 18.2104937,
    lng: 83.45415129999999,
  },
  {
    addr: 'Vedullavalasa, Garividi, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3568557,
    lng: 83.5225421,
  },
  {
    addr: 'Dummeda, Garividi, Vizianagaram, Andhra Pradesh, India',
    lat: 18.2418335,
    lng: 83.5443287,
  },
  {
    addr: 'Korlam, Gantyada,  Vizianagaram, Andhra Pradesh, India',
    lat: 18.1484572,
    lng: 83.2733459,
  },
  {
    addr: 'P.S.R.Puram, Gantyada,  Vizianagaram, Andhra Pradesh, India',
    lat: 18.1209077,
    lng: 83.2551043,
  },
  {
    addr: 'Attada, Jami, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0683791,
    lng: 83.3108249,
  },
  {
    addr: 'VR Palem, Jami, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0714232,
    lng: 83.27569989999999,
  },
  {
    addr: 'Kothavalasa 3, Kothavalasa, Vizianagaram, Andhra Pradesh, India',
    lat: 18.083999,
    lng: 83.3857568,
  },
  {
    addr: 'Musiram, Kothavalasa, Vizianagaram, Andhra Pradesh, India',
    lat: 17.8899871,
    lng: 83.1903382,
  },
  {
    addr: 'RELLI Gowramma peta, L.Kota, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0196895,
    lng: 83.1533958,
  },
  {
    addr: 'Chanduluru, L.Kota, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0196895,
    lng: 83.1533958,
  },
  {
    addr: 'Pothanapalli, S.Kota, Vizianagaram, Andhra Pradesh, India',
    lat: 18.1111633,
    lng: 83.1393995,
  },
  {
    addr: 'Kummapalli, Vepada, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0118092,
    lng: 83.0817871,
  },
  {
    addr: 'Alugubilli, Vepada, Vizianagaram, Andhra Pradesh, India',
    lat: 18.0118092,
    lng: 83.0817871,
  },
  {
    addr: 'PAKKI, Bobbili, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5976746,
    lng: 83.47969119999999,
  },
  {
    addr: 'Dibbagudivalasa, Bobbili, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5967789,
    lng: 83.34821459999999,
  },
  {
    addr: 'Bhusaivalasa, Ramabhadrapuram, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4716284,
    lng: 83.2746836,
  },
  {
    addr: 'Kottakki, Ramabhadrapuram, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5137726,
    lng: 83.2352097,
  },
  {
    addr: 'Locharla, Terlam, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4850147,
    lng: 83.5323391,
  },
  {
    addr: 'Pamulavalasa, Terlam, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4815162,
    lng: 83.5706312,
  },
  {
    addr: 'Koduru, Badangi, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4728997,
    lng: 83.39496319999999,
  },
  {
    addr: 'Paltheru, Badangi, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5214901,
    lng: 83.3987481,
  },
  {
    addr: 'Soperu, Rajam, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3882975,
    lng: 83.634508,
  },
  {
    addr: 'Anthakapalli, Rajam, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4354307,
    lng: 83.6827094,
  },
  {
    addr: 'Kodisa, Regidi Amadalavalasa, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5543259,
    lng: 83.6601104,
  },
  {
    addr: 'Thokalavalasa, Regidi Amadalavalasa, Vizianagaram, Andhra Pradesh, India',
    lat: 18.505879,
    lng: 83.7124242,
  },
  {
    addr: 'Chittaripuram, Santhakavity, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3124634,
    lng: 83.8928511,
  },
  {
    addr: 'Bodduru, Santhakavity, Vizianagaram, Andhra Pradesh, India',
    lat: 18.1066576,
    lng: 83.39555059999999,
  },
  {
    addr: 'Kopparavalasa, Vangara, Vizianagaram, Andhra Pradesh, India',
    lat: 18.6530256,
    lng: 83.573934,
  },
  {
    addr: 'Sivvam, Vangara, Vizianagaram, Andhra Pradesh, India',
    lat: 18.7193408,
    lng: 83.5266765,
  },
  {
    addr: 'VIZIANAGARAM, VIZIANAGARAM, Vizianagaram, Andhra Pradesh, India',
    lat: 18.1066576,
    lng: 83.39555059999999,
  },
  {
    addr: 'CHEPURUPALLI, CHEPURUPALLI, Vizianagaram, Andhra Pradesh, India',
    lat: 18.3105327,
    lng: 83.56830099999999,
  },
  {
    addr: 'KOTTAVALASA,  KOTTAVALASA, Vizianagaram, Andhra Pradesh, India',
    lat: 17.8899871,
    lng: 83.1903382,
  },
  {
    addr: 'BOBBILI, BOBBILI, Vizianagaram, Andhra Pradesh, India',
    lat: 18.5727886,
    lng: 83.356381,
  },
  {
    addr: 'RAJAM, RAJAM, Vizianagaram, Andhra Pradesh, India',
    lat: 18.4497303,
    lng: 83.66077399999999,
  },
  {
    addr: 'Bhimavaram, Bhimavaram, W.G.District, Andhra Pradesh, India',
    lat: 16.544893,
    lng: 81.521241,
  },
  {
    addr: 'Undi, Undi, W.G.District, Andhra Pradesh, India',
    lat: 16.5859868,
    lng: 81.4672526,
  },
  {
    addr: 'Narsapuram, Narsapuarm, W.G.District, Andhra Pradesh, India',
    lat: 16.6025946,
    lng: 81.64734399999999,
  },
  {
    addr: 'Akividu, Akividu, W.G.District, Andhra Pradesh, India',
    lat: 16.5817724,
    lng: 81.3767431,
  },
  {
    addr: 'Palakole, Palakole, W.G.District, Andhra Pradesh, India',
    lat: 16.5179401,
    lng: 81.72534739999999,
  },
  {
    addr: 'Attili, Attili, W.G.District, Andhra Pradesh, India',
    lat: 16.6870295,
    lng: 81.6078635,
  },
  {
    addr: 'Ganapavaram,  Ganapavaram,  W.G.District, Andhra Pradesh, India',
    lat: 16.7005162,
    lng: 81.46052019999999,
  },
  {
    addr: 'Penumantra,  Penumantra,  W.G.District, Andhra Pradesh, India',
    lat: 16.643508,
    lng: 81.6504786,
  },
  {
    addr: 'Penugonda, Penugonda, W.G.District, Andhra Pradesh, India',
    lat: 16.6561394,
    lng: 81.7456892,
  },
  {
    addr: 'Poduru,  Poduru,  W.G.District, Andhra Pradesh, India',
    lat: 16.5887445,
    lng: 81.7532872,
  },
  {
    addr: 'Tadepalligudem, Tadepalligudem, W.G.District, Andhra Pradesh, India',
    lat: 16.8072523,
    lng: 81.5316033,
  },
  {
    addr: 'Gopavaram, Proddatur, YSR, Andhra Pradesh, India',
    lat: 14.7844632,
    lng: 78.5730079,
  },
  {
    addr: 'Upparapalli, Proddatur, YSR, Andhra Pradesh, India',
    lat: 14.7410457,
    lng: 78.6113885,
  },
  {
    addr: 'Proddatur, Proddatur, YSR, Andhra Pradesh, India',
    lat: 14.752624,
    lng: 78.5541053,
  },
  {
    addr: 'Venkupalli, Duvvur, YSR, Andhra Pradesh, India',
    lat: 14.8409522,
    lng: 78.65394200000001,
  },
  {
    addr: 'Chinthakunta-2, Duvvur, YSR, Andhra Pradesh, India',
    lat: 14.7833806,
    lng: 78.7029766,
  },
  {
    addr: 'Devagudi, Jammalamadugu, YSR, Andhra Pradesh, India',
    lat: 14.786511,
    lng: 78.4489062,
  },
  {
    addr: 'S.Uppalapadu, Jammalamadugu, YSR, Andhra Pradesh, India',
    lat: 14.9066349,
    lng: 78.3871054,
  },
  {
    addr: 'Dommaranandyala , Mylavaram, YSR, Andhra Pradesh, India',
    lat: 14.8648568,
    lng: 78.36573419999999,
  },
  {
    addr: 'Thalamanchipatnam, Mylavaram, YSR, Andhra Pradesh, India',
    lat: 14.8551624,
    lng: 78.3297752,
  },
  {
    addr: 'K.Thimmapuram, MUDDANUR, YSR, Andhra Pradesh, India',
    lat: 14.6850841,
    lng: 78.4155033,
  },
  {
    addr: 'VELPUCHERLA, MUDDANUR, YSR, Andhra Pradesh, India',
    lat: 14.6259964,
    lng: 78.3826765,
  },
  {
    addr: 'Kondapuram-1, R S Kondapuram , YSR, Andhra Pradesh, India',
    lat: 14.7749009,
    lng: 78.1935866,
  },
  {
    addr: 'Tallaprodutur-1, R S Kondapuram , YSR, Andhra Pradesh, India',
    lat: 14.7749009,
    lng: 78.1935866,
  },
  {
    addr: 'N.YERRABALLI, S MYDUKUR, YSR, Andhra Pradesh, India',
    lat: 14.7412665,
    lng: 78.8265217,
  },
  {
    addr: 'ANNALURU, S MYDUKUR, YSR, Andhra Pradesh, India',
    lat: 14.7264993,
    lng: 78.7321005,
  },
  {
    addr: 'BHADRIPALLI, CHAPADU, YSR, Andhra Pradesh, India',
    lat: 14.7307175,
    lng: 78.6581303,
  },
  {
    addr: 'PEDDAGURUVALURU, CHAPADU, YSR, Andhra Pradesh, India',
    lat: 14.7307175,
    lng: 78.6581303,
  },
  {
    addr: 'Kalamalla, Yerraguntla, YSR, Andhra Pradesh, India',
    lat: 14.7093885,
    lng: 78.47093199999999,
  },
  {
    addr: 'Kommaddi, Veerapunayunipalli, YSR, Andhra Pradesh, India',
    lat: 14.6107788,
    lng: 78.4902195,
  },
  {
    addr: 'THONDALADINNE, RAJUPALEM, YSR, Andhra Pradesh, India',
    lat: 14.8561631,
    lng: 78.61327349999999,
  },
  {
    addr: 'TANGUTURU, RAJUPALEM, YSR, Andhra Pradesh, India',
    lat: 14.2915409,
    lng: 79.1794684,
  },
  {
    addr: 'J.KOTHAPALLI, PEDDAMUDIUM, YSR, Andhra Pradesh, India',
    lat: 15.0117411,
    lng: 78.45047559999999,
  },
  {
    addr: 'Rampadu,Obulapuram, SAKN, YSR, Andhra Pradesh, India',
    lat: 15.0392496,
    lng: 78.948623,
  },
  {
    addr: 'Kondrajupalli, SAKN, YSR, Andhra Pradesh, India',
    lat: 14.5767233,
    lng: 78.8382644,
  },
  {
    addr: 'Kalasapadu, Kalasapadu, YSR, Andhra Pradesh, India',
    lat: 15.1039088,
    lng: 78.9435503,
  },
  {
    addr: 'E Tahmballapalli, Kalasapadu, YSR, Andhra Pradesh, India',
    lat: 15.1485648,
    lng: 78.9160943,
  },
  {
    addr: 'Ganugapenta, Porumamilla, YSR, Andhra Pradesh, India',
    lat: 14.8590881,
    lng: 79.09274839999999,
  },
  {
    addr: 'Rangasamudram 2, Porumamilla, YSR, Andhra Pradesh, India',
    lat: 14.9851973,
    lng: 78.9764656,
  },
  {
    addr: 'SAMBATUR, KAMALAPURAM, YSR, Andhra Pradesh, India',
    lat: 14.6415088,
    lng: 78.6430653,
  },
  {
    addr: 'DEVARAJUPALLI, KAMALAPURAM, YSR, Andhra Pradesh, India',
    lat: 14.545983,
    lng: 78.64496900000002,
  },
  {
    addr: 'TAPPETLA, VALLUR, YSR, Andhra Pradesh, India',
    lat: 14.5794388,
    lng: 78.701559,
  },
  {
    addr: 'LEBAKA, VALLUR, YSR, Andhra Pradesh, India',
    lat: 14.5411822,
    lng: 78.6965972,
  },
  {
    addr: 'Pennaperuru, Vontimitta, YSR, Andhra Pradesh, India',
    lat: 14.4420878,
    lng: 79.0249516,
  },
  {
    addr: 'Vontimitta, Vontimitta, YSR, Andhra Pradesh, India',
    lat: 14.3958667,
    lng: 79.0259293,
  },
  {
    addr: 'Ippapenta 1, C.K. Dinne, YSR, Andhra Pradesh, India',
    lat: 14.432844,
    lng: 78.7873429,
  },
  {
    addr: 'Rasoolpalli, C.K. Dinne, YSR, Andhra Pradesh, India',
    lat: 14.4250582,
    lng: 78.7758341,
  },
  {
    addr: 'Pendlimarri, C.K. Dinne, YSR, Andhra Pradesh, India',
    lat: 14.4324331,
    lng: 78.78894059999999,
  },
  {
    addr: 'Machunuru, Pendlimarri, YSR, Andhra Pradesh, India',
    lat: 14.5057921,
    lng: 78.6136077,
  },
  {
    addr: 'Yellatur, Pendlimarri, YSR, Andhra Pradesh, India',
    lat: 14.443955,
    lng: 78.6398677,
  },
  {
    addr: 'Patha Kadapa, Kadapa, YSR, Andhra Pradesh, India',
    lat: 14.4977388,
    lng: 78.83684869999999,
  },
  {
    addr: 'ANJANEYA KOTTALU, KHAJIPET, YSR, Andhra Pradesh, India',
    lat: 14.6677836,
    lng: 78.77891919999999,
  },
  {
    addr: 'CHEMULLAPALLI, KHAJIPET, YSR, Andhra Pradesh, India',
    lat: 14.6587411,
    lng: 78.7532884,
  },
  {
    addr: 'SHIVALAPALLI, CHENNUR, YSR, Andhra Pradesh, India',
    lat: 14.5654488,
    lng: 78.792467,
  },
  {
    addr: 'BALASINGANAPALLI, KANAPARTHI, CHENNUR, YSR, Andhra Pradesh, India',
    lat: 14.5654488,
    lng: 78.792467,
  },
  {
    addr: 'palugurallapalli , B mattam, YSR, Andhra Pradesh, India',
    lat: 14.8191384,
    lng: 78.880062,
  },
  {
    addr: 'Thotlapalli , B mattam, YSR, Andhra Pradesh, India',
    lat: 14.5767233,
    lng: 78.8382644,
  },
  {
    addr: 'b kodur, B kodur, YSR, Andhra Pradesh, India',
    lat: 14.8844489,
    lng: 78.9730553,
  },
  {
    addr: 'payalakunta , B kodur, YSR, Andhra Pradesh, India',
    lat: 14.8739373,
    lng: 79.0196143,
  },
  {
    addr: 'Puttayapalli, Badvel, YSR, Andhra Pradesh, India',
    lat: 14.7304949,
    lng: 79.05974049999999,
  },
  {
    addr: 'Kongalaveedu, Badvel, YSR, Andhra Pradesh, India',
    lat: 14.681101,
    lng: 79.0390799,
  },
  {
    addr: 'Kaluvapalli, Gopavaram, YSR, Andhra Pradesh, India',
    lat: 14.8223998,
    lng: 79.04755589999999,
  },
  {
    addr: 'Rachayapeta, Gopavaram, YSR, Andhra Pradesh, India',
    lat: 14.6620676,
    lng: 79.1534422,
  },
  {
    addr: 'Thambalagondi, Atloor, YSR, Andhra Pradesh, India',
    lat: 14.5579746,
    lng: 79.05462210000002,
  },
  {
    addr: 'Reddypalli, Atloor, YSR, Andhra Pradesh, India',
    lat: 14.5579746,
    lng: 79.05462210000002,
  },
  {
    addr: 'kumbagiri, Atloor, YSR, Andhra Pradesh, India',
    lat: 14.5999653,
    lng: 79.0397862,
  },
  {
    addr: 'Muthukuru, Atloor, YSR, Andhra Pradesh, India',
    lat: 14.5579746,
    lng: 79.05462210000002,
  },
  {
    addr: 'madapuru, Atloor, YSR, Andhra Pradesh, India',
    lat: 14.5579746,
    lng: 79.05462210000002,
  },
  {
    addr: 'vanthatipalli, SIDHOUT, YSR, Andhra Pradesh, India',
    lat: 14.4694087,
    lng: 78.9632996,
  },
  {
    addr: 'Nagulagttapalli, Chakrayapeta, YSR, Andhra Pradesh, India',
    lat: 14.2620071,
    lng: 78.4991247,
  },
  {
    addr: 'Kuppam, Chakrayapeta, YSR, Andhra Pradesh, India',
    lat: 14.2117537,
    lng: 78.516602,
  },
  {
    addr: 'Muthukuru, Vempalli, YSR, Andhra Pradesh, India',
    lat: 14.3642978,
    lng: 78.4557919,
  },
  {
    addr: 'Bakkannagaripalli, Vempalli, YSR, Andhra Pradesh, India',
    lat: 14.3313295,
    lng: 78.3899108,
  },
  {
    addr: 'Sunkesula, Simhadripuram, YSR, Andhra Pradesh, India',
    lat: 14.6525408,
    lng: 78.21088859999999,
  },
  {
    addr: 'Pydipalem, Simhadripuram, YSR, Andhra Pradesh, India',
    lat: 14.6190069,
    lng: 78.16454089999999,
  },
  {
    addr: 'Peddakudala, Lingala, YSR, Andhra Pradesh, India',
    lat: 14.4858517,
    lng: 78.1632037,
  },
  {
    addr: 'Komannuthala, Lingala, YSR, Andhra Pradesh, India',
    lat: 14.5092017,
    lng: 78.0093272,
  },
  {
    addr: 'BUCHUPALLI, THONDURU, YSR, Andhra Pradesh, India',
    lat: 14.6077254,
    lng: 78.2729584,
  },
  {
    addr: 'CHAGALERU, VEMULA, YSR, Andhra Pradesh, India',
    lat: 14.3989089,
    lng: 78.3671565,
  },
  {
    addr: 'KADAPA, Kadapa, YSR, Andhra Pradesh, India',
    lat: 14.4673154,
    lng: 78.8242089,
  },
  {
    addr: 'KADAPA, Kadapa, YSR, Andhra Pradesh, India',
    lat: 14.4673154,
    lng: 78.8242089,
  },
];
const deepFreezers = [
  {
    addr: 'Veterinary Dispenasry, Borivanka, Tekkali, Srikakulam District-532322, Andhra Pradesh, India',
    lat: 18.9830675,
    lng: 84.66698769999999,
  },
  {
    addr: 'Veterinary Polyclinic, 1st floor, Near BSNL Office, Fort back side, Vizianagaram PIN-535002, Andhra Pradesh, India',
    lat: 18.1102747,
    lng: 83.4124587,
  },
  {
    addr: 'O/o Area Veterinary Hospital Near Fire Station, Nakkapalli Village, Nakkapalli Mandal, Anakapalli District, PIN Code: 531081, Andhra Pradesh, India',
    lat: 17.4072904,
    lng: 82.7154634,
  },
  {
    addr: 'O/o The Area Veterinary Hospital, Near by Govt. High School, Atchutapuram Village, Atchutapuram Mandal, Anakapalli District PIN Code: 531011, Andhra Pradesh, India',
    lat: 17.5637797,
    lng: 82.97911909999999,
  },
  {
    addr: 'Office of the Deputy Director (AH) Veterinary Hospital Campus Opp ITDA, Post Office, Rampachodavaram, PIN Code: 533288, Andhra Pradesh, India',
    lat: 17.438239,
    lng: 81.78041979999999,
  },
  {
    addr: 'Office of the Assistant Director (AH) Area Veterinary Hospital Beside MPDO Office Addateegal, PIN Code: 533428, Andhra Pradesh, India',
    lat: 17.475937,
    lng: 82.02246350000001,
  },
  {
    addr: 'O/o The Assistant Director(AH), Area Veterinary Hospital (AVH) Zilla Parishad High School Road, Prathipadu Pin Code : 533432, Andhra Pradesh, India',
    lat: 17.2318726,
    lng: 82.1846508,
  },
  {
    addr: 'O/o The Veterinary Asst. Surgeon., Veterinary Dispensary, Thetagunta Beside Electric Substation Tuni (M) Pin Code: 533406, Andhra Pradesh, India',
    lat: 17.3140411,
    lng: 82.44209959999999,
  },
  {
    addr: 'Assistant Director(AH) Area Veterinary Hospital, Jaggaihapeta -521175, Andhra Pradesh, India',
    lat: 16.9177187,
    lng: 80.0646682,
  },
  {
    addr: 'Assistant Director(AH) Area Veterinary Hospital, Ibrahimpatnam-521456, Andhra Pradesh, India',
    lat: 16.5984626,
    lng: 80.5118178,
  },
  {
    addr: 'Assistant Director(AH) Area Veterinary Hospital, Thiruvuru-521235, Andhra Pradesh, India',
    lat: 17.1100522,
    lng: 80.6061147,
  },
  {
    addr: 'Veterinary Dispensary, Korisapadu, Korisapadu Mandal, Bapatla District, Pin Code.523212, Andhra Pradesh, India',
    lat: 15.7525204,
    lng: 80.042722,
  },
  {
    addr: 'Veterinary Dispensary, Medarametla, Somavarapadu, Korisapadu Mandal, Bapatla District, Pin Code.523212, Andhra Pradesh, India',
    lat: 15.7203593,
    lng: 80.02739389999999,
  },
  {
    addr: 'Veterinary Dispensary, Pittalavanipalem, 522329, Andhra Pradesh, India',
    lat: 15.9802888,
    lng: 80.6320135,
  },
  {
    addr: 'Veterinary Dispensary, Jammulapalem(v), Bapatla(m) 522113, Andhra Pradesh, India',
    lat: 15.9365023,
    lng: 80.4409967,
  },
  {
    addr: 'Rural Livestock Unit, Near Ankalamma Cheruvu, Cherukuru Village, Parchur Mandal, Andhra Pradesh, India',
    lat: 16.0958937,
    lng: 80.0937265,
  },
  {
    addr: 'Rural Livestock Unit, Near Water Tank, Veerannapalem Village, Parchur Mandal, Andhra Pradesh, India',
    lat: 15.9578328,
    lng: 80.3219567,
  },
  {
    addr: 'Veterinary Dispensary, Back side of Police station, Karamchedu Mandal, Bapatla District, Andhra Pradesh, India',
    lat: 15.8830894,
    lng: 80.3216102,
  },
  {
    addr: 'Veterinary Dispensary, Near NTR Statue, Daggupadu, Karamchedu (M), Bapatla District, Andhra Pradesh, India',
    lat: 15.8845305,
    lng: 80.3162572,
  },
  {
    addr: 'Near ZPH, School, Makkenavaripalem village, Santhamaguluru mandal, Bapatla District, Pin code.523303, Andhra Pradesh, India',
    lat: 16.0227228,
    lng: 79.9572748,
  },
  {
    addr: 'Veterinary Dispensary, K. Rajupalem village, Ballikurava mandal, Bapatla District, Pin code.523301, Andhra Pradesh, India',
    lat: 16.0057989,
    lng: 80.1083001,
  },
  {
    addr: 'Veterinary Dispensary-Bobbarlanka, Chodayapalem, (p.o)Repalle Mandal, Pin code: 522264, Andhra Pradesh, India',
    lat: 15.949205,
    lng: 80.8841283,
  },
  {
    addr: 'Veterinary Dispensary-Thummala, Thummala(p.o)Repalle Mandal, Pin code: 522264, Andhra Pradesh, India',
    lat: 15.9085847,
    lng: 80.8412688,
  },
  {
    addr: 'Rural Livestock Unit, Challa reddy palem(v), Vetapalem(m) Bapatla (d) pin;-523187, Andhra Pradesh, India',
    lat: 15.7716942,
    lng: 80.3268812,
  },
  {
    addr: 'Rural Livestock Unit, Gonasapudi(v), Chinnaganjam (m) Bapatla (d) pin:-523181, Andhra Pradesh, India',
    lat: 15.7471443,
    lng: 80.2222073,
  },
  {
    addr: 'Assistant Director(AH), AVH, Gooty - 515401., Andhra Pradesh, India',
    lat: 15.1220053,
    lng: 77.634687,
  },
  {
    addr: 'Assistant Director(AH), AVH, Singanamala - 515435, Andhra Pradesh, India',
    lat: 14.8003189,
    lng: 77.71697309999999,
  },
  {
    addr: 'Assistant Director(AH), AVH, Tadipatri - 515411., Andhra Pradesh, India',
    lat: 14.9091024,
    lng: 78.0092047,
  },
  {
    addr: 'Assistant Director(AH), AVH, Guntakal - 515801., Andhra Pradesh, India',
    lat: 15.1660706,
    lng: 77.3769836,
  },
  {
    addr: 'Assistant Director(AH), AVH, Kalyanadurgam - 515761., Andhra Pradesh, India',
    lat: 14.5519565,
    lng: 77.1107476,
  },
  {
    addr: 'Assistant Director(AH), AVH, Settur - 515767., Andhra Pradesh, India',
    lat: 14.4499954,
    lng: 76.98145389999999,
  },
  {
    addr: 'Assistant Director(AH), AVH, Kambadur - 515765., Andhra Pradesh, India',
    lat: 14.3449454,
    lng: 77.2314696,
  },
  {
    addr: 'Assistant Director(AH), AVH, Dharmavaram - 515671., Andhra Pradesh, India',
    lat: 14.4000475,
    lng: 77.71659249999999,
  },
  {
    addr: 'Assistant Director(AH), AVH, Kothacheruvu - 515133., Andhra Pradesh, India',
    lat: 14.1883776,
    lng: 77.7652346,
  },
  {
    addr: 'Assistant Director(AH), AVH, Kadiri - 515591., Andhra Pradesh, India',
    lat: 14.1137566,
    lng: 78.1610702,
  },
  {
    addr: 'Assistant Director(AH), AVH, Puttaparthi - 515134., Andhra Pradesh, India',
    lat: 14.168813,
    lng: 77.8109623,
  },
  {
    addr: 'Assistant Director(AH), AVH, Madakasira - 515301., Andhra Pradesh, India',
    lat: 13.94083,
    lng: 77.27544259999999,
  },
  {
    addr: 'Assistant Director(AH), AVH, Gorantla - 515231 ., Andhra Pradesh, India',
    lat: 13.9846018,
    lng: 77.7705127,
  },
  {
    addr: 'Assistant Director(AH), AVH, Lepakshi - 515331., Andhra Pradesh, India',
    lat: 13.8039436,
    lng: 77.60771969999999,
  },
  {
    addr: 'O/O Deputy Director, Animal Husbandry, Ambedkar junction, Near Head post office, Tekkali, Srikakulam District-532201, Andhra Pradesh, India',
    lat: 18.3063413,
    lng: 83.8942542,
  },
  {
    addr: 'O/O Deputy Director, Animal Husbandry, VPC Campus, Near Ambedkar Statue, Srikakulam-532001, Andhra Pradesh, India',
    lat: 17.7038861,
    lng: 83.3029361,
  },
  {
    addr: 'O/o Deputy Director (AH), Vizianagaram Division, VT.Agraharam, opp Reliance Petrol bunk, Vizianagaram 535004, Andhra Pradesh, India',
    lat: 18.0860227,
    lng: 83.3869516,
  },
  {
    addr: 'Deputy Director (AH), Bobbili Division, opp Samsthanam High school, Raja college road, Bobbili 535558, Andhra Pradesh, India',
    lat: 18.5708146,
    lng: 83.3500518,
  },
  {
    addr: 'District Animal Husbandry Officer, Parvathipuram Manyam District, 1st floor F3& F4, RCM School, Opp RTC Complex, Parvathipuram, Pin No- 535501., Andhra Pradesh, India',
    lat: null,
    lng: null,
  },
  {
    addr: 'Veterinary Assistant Surgeon, Veeragattam, Veeragattam Mandal, Pin Code -532460, Andhra Pradesh, India',
    lat: 18.72413,
    lng: 83.6561215,
  },
  {
    addr: 'Behind SBI, Vishalakhshinagar, Hanumanthawaka, Visakhapatnam- 530043, Andhra Pradesh, India',
    lat: 17.7618211,
    lng: 83.3068771,
  },
  {
    addr: 'Area Veterinary Hospital, Thotagaruvu, Opposite to Sri radha Krishna Kalyana Mandapam, Near ZPH School, Chinagadili, Visakhapatnam- 530040, Andhra Pradesh, India',
    lat: 17.7019982,
    lng: 83.29620369999999,
  },
  {
    addr: 'O/o TheArea Veterinary Hospital, Near Prema samajam, Gandhinagar, Anakapalli Dt. 531001, Andhra Pradesh, India',
    lat: 17.6997834,
    lng: 82.9998777,
  },
  {
    addr: 'O/o Area Veterinary Hopital, Opp.Seetaramanursing home, near old bus stop, chodavaram village, Chodavaram Mandal, Anakapalli Dt. 531036, Andhra Pradesh, India',
    lat: 17.8277288,
    lng: 82.93445229999999,
  },
  {
    addr: 'O/o The Area Veterinary Hospital, 5Road Junction, Beside Old Muncipal Office, Narsipatnam. 531116, Andhra Pradesh, India',
    lat: 17.67,
    lng: 82.60894669999999,
  },
  {
    addr: 'Area Veterinary Hospital, Araku, Arakuvaly Mandal ASR District- 531151, Andhra Pradesh, India',
    lat: 18.325654,
    lng: 82.88010469999999,
  },
  {
    addr: 'Area Veterinary Hopital, Chinthapalli, Chithapalli Mandal, ASR District-531111, Andhra Pradesh, India',
    lat: 17.8710309,
    lng: 82.3499325,
  },
  {
    addr: 'Area Veterinary Hospital, Sundriputt, Paderu Mandal ASR District-531024, Andhra Pradesh, India',
    lat: 18.0732491,
    lng: 82.6267345,
  },
  {
    addr: 'O/o The Deputy Director(AH), Veterinary Hospital Campus, Rajamahendravaram. Lakshmivarapu Pet, Seshayya Metta, Devichowk, Rajamahendravaram, A.P., Pin Code : 533101., Andhra Pradesh, India',
    lat: 16.9936831,
    lng: 81.7677645,
  },
  {
    addr: 'O/o Deputy Director(AH), Veterinary Hospital Campus, Kovvur - 534350, Andhra Pradesh, India',
    lat: 17.0125618,
    lng: 81.727383,
  },
  {
    addr: 'O/o The Deputy Director(AH), Regional Animal Disease Diagnostic Laboratory, Kakinada, A.P., Pin Code : 533004 Room Location : Ground floor, Room No. 2, Andhra Pradesh, India',
    lat: 16.9890648,
    lng: 82.2474648,
  },
  {
    addr: 'O/o The Deputy Director(AH), Ramarao peta, Veterinary Hospital Road, JD Office Campus, Gate-1, Kakinada, Pin code - 533004, Andhra Pradesh, India',
    lat: 16.9663046,
    lng: 82.22708850000001,
  },
  {
    addr: 'O/o The Deputy Director(AH), Beside Pasuvula Hospital Amalpuram, AHD, Near Nalla Vanthena Amalapuram, Pincode - 533201, Andhra Pradesh, India',
    lat: 16.5826526,
    lng: 82.02066320000002,
  },
  {
    addr: 'O/o AD (AH), Area Veterinary Hospital(AVH), Pasuvula Hospital Road, Ravulapalem, Pincode - 533238, Andhra Pradesh, India',
    lat: 16.762483,
    lng: 81.8423198,
  },
  {
    addr: 'Area Veterinary Hospital(AVH) Tadepalligudem, Tadepalligudem Mandal, W.G.Dist Pin code 534101, Andhra Pradesh, India',
    lat: 16.8114968,
    lng: 81.53502979999999,
  },
  {
    addr: 'O/o Deputy Director, Animal Husbandry Office, Bhimavaram, Bhimavaram Mandal, W.G.Dist Pin:534201, Andhra Pradesh, India',
    lat: 16.544893,
    lng: 81.521241,
  },
  {
    addr: 'O/o Deputy Director, Veterinary Hospital campus, opposite ASR stadium, pension line Pincode - 534005, Andhra Pradesh, India',
    lat: 16.7163183,
    lng: 81.1156178,
  },
  {
    addr: 'O/o Deputy Director (AH), Oppisite Fish market, Srinivasa center, Nuzvid, Eluru District - Pin code : 521201, Andhra Pradesh, India',
    lat: 16.7875689,
    lng: 80.8490357,
  },
  {
    addr: 'O/o Deputy Director (AH), Near rythu bazar, Machilipatnam, Krishna dt-521001, Andhra Pradesh, India',
    lat: 16.1904721,
    lng: 81.1390428,
  },
  {
    addr: 'O/o Deputy Director (AH), Pasuvula santha campus, Gudlavalleru post & Mandal, krishna District-521356, Andhra Pradesh, India',
    lat: 16.3437071,
    lng: 81.0544917,
  },
  {
    addr: 'O/o Deputy Director (AH), Joint Director (AH) campus, Muthyalampadu, Vijayawada-520011, Andhra Pradesh, India',
    lat: 16.5259875,
    lng: 80.63685389999999,
  },
  {
    addr: 'O/o Deputy Director (AH), Nandigama, Ramannapeta Road, Pin-521185, Andhra Pradesh, India',
    lat: 16.773025,
    lng: 80.2800921,
  },
  {
    addr: 'Veterinary Dispensary, Besides Bramham gari matam, Main road, Phirangipuram, Guntur Dt 522529, Andhra Pradesh, India',
    lat: 16.302918,
    lng: 80.2453776,
  },
  {
    addr: 'Veterinary Dispensary, PEDAPALEM, Duggirala Mandal, Guntur dt 522305, Andhra Pradesh, India',
    lat: 16.36123,
    lng: 80.6460408,
  },
  {
    addr: 'Area Veterinary Hospital, Vemuru, Bapatla District, Pin Code.522261, Andhra Pradesh, India',
    lat: 16.1792758,
    lng: 80.7399885,
  },
  {
    addr: 'Area Veterinary Hospital, Chirala, Bapatla District, Pin Code.523155, Andhra Pradesh, India',
    lat: 15.8298148,
    lng: 80.3507973,
  },
  {
    addr: 'Area Veterinary Hospital, Addanki, Bapatla District, Pin Code.523201, Andhra Pradesh, India',
    lat: 15.8527903,
    lng: 79.9416549,
  },
  {
    addr: 'O/o Assistant Director (AH), Area veterinary Hospital, Karempudi road, Gurazala, Pin code-522415, Andhra Pradesh, India',
    lat: 16.5814535,
    lng: 79.6277523,
  },
  {
    addr: 'O/o Assistant Director (AH), Area veterinary Hospital, Vaddavalli, 13th ward, Park centre, Sattenapalli, Pin code-522415, Andhra Pradesh, India',
    lat: 16.3916769,
    lng: 80.14739399999999,
  },
  {
    addr: 'O/o Divisinaol Deputy Director (AH), Near Rangarayudu cheruvu, Ongole Pin Code-523001, Andhra Pradesh, India',
    lat: 15.4813673,
    lng: 80.0590804,
  },
  {
    addr: 'Assistant Director (AH), Area Veterinary Hospital, Podili, Pin Code-523240, Andhra Pradesh, India',
    lat: 15.7684569,
    lng: 79.6816348,
  },
  {
    addr: 'O/o the Divisional Deputy Director, Nellore, VPC Campus, Railway Feeders Road, Santhapeta, Nellore-524001, Andhra Pradesh, India',
    lat: 14.4611349,
    lng: 79.9857165,
  },
  {
    addr: 'O/o the Divisional Deputy Director, Kavali, Opposite Municipal Office, Railway Road, Kavali-524201, Andhra Pradesh, India',
    lat: 14.9164627,
    lng: 79.99023360000001,
  },
  {
    addr: 'O/o the Divisional Deputy Director, Kandukur Veterinary Hospital Campus, Pamuru Bus stand, Ippagunta Road, Kandukur-523105, Andhra Pradesh, India',
    lat: 15.0948182,
    lng: 79.41100899999999,
  },
  {
    addr: 'O/o The Deputy Director (AH), 18-491, Near Murughan Petrol Bunk, Palamaner Road, Chittoor Dist- 517001, Andhra Pradesh, India',
    lat: 13.2030231,
    lng: 79.0833822,
  },
  {
    addr: 'O/o The Assistant Director (AH), Area Veterinary Hospital, Punganur Chittoor Dist - 517247, Andhra Pradesh, India',
    lat: 13.3644543,
    lng: 78.5671128,
  },
  {
    addr: 'O/o The Assistant Director (AH), Area Veterinary Hospital, Chandragiri Tirupati Dist - 517101, Andhra Pradesh, India',
    lat: 13.5918997,
    lng: 79.3381572,
  },
  {
    addr: 'O/o The Assistant Director (AH), Area Veterinary Hospital, Sri kalahasthi Tirupati Dist - 517644, Andhra Pradesh, India',
    lat: 13.7508392,
    lng: 79.6994622,
  },
  {
    addr: 'O/o The Assistant Director (AH), Area Veterinary Hospital, Gudur Tirupati Dist - 524101, Andhra Pradesh, India',
    lat: 14.1549535,
    lng: 79.8533917,
  },
  {
    addr: 'Deputy Director (AH) VPC Campus Kothapeta Kurnool - 518001, Andhra Pradesh, India',
    lat: 15.8346395,
    lng: 78.04717819999999,
  },
  {
    addr: 'Assistant Director (AH) Veterinary Hospital Opp to T.B. Colany Adoni Raod Yemmiganur - 518360, Andhra Pradesh, India',
    lat: 15.7572824,
    lng: 77.4600553,
  },
  {
    addr: 'O/o Deputy Director (AH), Animal Husbandry Department, opposite RTC Buss Stand, Nandyal Pin - 518501, Andhra Pradesh, India',
    lat: 15.4903641,
    lng: 78.479407,
  },
  {
    addr: 'O/o Deputy Director (AH), Animal Husbandry Department, Near Four road center, Allagadda Pin - 518543, Andhra Pradesh, India',
    lat: 15.1305389,
    lng: 78.5127559,
  },
  {
    addr: 'O/o Deputy Director (AH), Beside Collectorate near Rajendra prasad Govt. High School Anantapuram -515001, Andhra Pradesh, India',
    lat: 14.6841535,
    lng: 77.59725949999999,
  },
  {
    addr: 'O/o Deputy Director (AH), Near RTC Depot Uravakonda - 515812, Andhra Pradesh, India',
    lat: 14.9441154,
    lng: 77.2577817,
  },
  {
    addr: 'O/o. Assistant Director (AH), ADDL, Sai nagar, 4th cross, Veterinary hospital campus, Anantapuram - 515001, Andhra Pradesh, India',
    lat: 14.6735491,
    lng: 77.6011888,
  },
  {
    addr: 'O/o. Deputy Director (AH), Near Seri culture office, Dharmavaram - 515671, Andhra Pradesh, India',
    lat: 14.4124551,
    lng: 77.7201031,
  },
  {
    addr: 'O/o. Deputy Director (AH), Penukonda - 515110, Andhra Pradesh, India',
    lat: 14.0849002,
    lng: 77.5970586,
  },
  {
    addr: 'O/o. Deputy Director (AH), Near VPC, Flower Market Hindupuram - 515201, Andhra Pradesh, India',
    lat: 13.8222599,
    lng: 77.5009298,
  },
  {
    addr: 'O/o Deputy director, opp old junior college, PULIVENDULA 516390, Andhra Pradesh, India',
    lat: 14.4290487,
    lng: 78.2322961,
  },
  {
    addr: 'O/o Deputy director, beside RTO office, utukur, kadapa 516003, Andhra Pradesh, India',
    lat: 14.4442199,
    lng: 78.8058514,
  },
  {
    addr: 'O/o ASSISTANT DIRECTOR, AVH MADANAPALI opp CSI JCM church, avenue road, madanpalli 517325, Andhra Pradesh, India',
    lat: 13.5523871,
    lng: 78.5055575,
  },
  {
    addr: 'O/o Deputy director, Near Municipal office, Rayachoty 516269, Andhra Pradesh, India',
    lat: 14.0586263,
    lng: 78.7519382,
  },
];
const walkingColdRooms = [{
  addr: 'O/o The Deputy Director(AH), Beside the Sub collector Office,Opposite Govt Jr College,Penukonda,Sri Satya Sai .Dt, Pin-code-515110.',
  lat: 14.087641,
  lng: 77.595606,
},
{
  addr: 'O/o The Deputy Director(AH), Veterinary Hospital Campus, Rajamahendravaram. Lakshmivarapu Pet, Seshayya Metta, Devichowk , Rajamahendravaram, A.P., Pin Code : 533101. ',
  lat: 17.008994,
  lng: 81.774424,
},
{
  addr: 'O/o Deputy Director (AH) Tadepalligudem Near MRO Office Darsiparru road Pentapadu: W.G Dist, PIN Code 534166',
  lat: 16.787733,
  lng: 81.529202,
},
{
  addr: 'O/O Deputy Director (AH), Pasuvula santha road, Gudlavalleru -521356, Krishna district.',
  lat: 16.350862,
  lng: 81.054717,
},
{
  addr: 'O/O Deputy Director, Animal Husbandary, Veterinary Hospital compound, Ramannapeta Road, Nandigama, NTR District-521185',
  lat: 16.772874,
  lng: 80.284002,
},
{
  addr: 'O/O Deputy Director (AH), Mutyalampadu, Near Govt. Press, Opposite to sivalayam, Vijayawada, NTR District -520011',
  lat: 16.527888,
  lng: 80.638529,
},
{
  addr: 'Joint Director, Animal Husbandry Department GDF Premises, Hanumanthavaka, Visakhapatnam Pin: 530040',
  lat: 17.759047,
  lng: 83.334144,
},
{
  addr: 'O/o Deputy Director, Animal Husbandry, opposite R.T.C busstand Nandyal mandal, Nandyal-518501',
  lat: 15.488552,
  lng: 78.479627,
},
{
  addr: 'Veterinary poly clinc, First floor, Near BSNL office, Fort backside, VIZIANAGARAM Pin:535002, Andhra Pradesh, India',
  lat: 18.1102747,
  lng: 83.4124587,
},
{
  addr: 'Assistant director AVH Parvathipuram chakali belagam beside American hospital Parvathipuram manyam district, Andhra Pradesh, India',
  lat: 18.7691807,
  lng: 83.4219682,
},
{
  addr: 'O/o The Area Veterinary Hospital, 5 Road Junction, Besied Old Municipal Office, Narsipatnam-531116, Andhra Pradesh, India',
  lat: 17.67,
  lng: 82.60894669999999,
},
{
  addr: 'Area Veterinary Hospital, Near MRO office, Araku Valley Village and Mandal, Alluri Seetaramaraju District-531149 , Andhra Pradesh, India',
  lat: 18.317874,
  lng: 82.8889504,
},
{
  addr: 'O/o The Deputy Director(AH), Regional Animal Disease Diagnostic Laboratory, Kakinada, A.P., Pin Code: 533004, Room, Andhra Pradesh, India',
  lat: 16.9890648,
  lng: 82.2474648,
},
{
  addr: 'Area Veterinary Hospital, Chintalapudi, Gurubhatlagudem Road, Near Venkateswara Swamy Temple, Pin: 5744260, Andhra Pradesh, India',
  lat: 17.1090465,
  lng: 80.9090509,
},
{
  addr: 'RLU Taduvai Main Road, Taduvai, Pin Code-534447. Jangareddigudem Mandal., Andhra Pradesh, India',
  lat: 17.1351943,
  lng: 81.1981735,
},
{
  addr: 'VPC New Building 3rd Floor, Veterinary Polyclinic Campus, Kothapet, Guntur- 522001, Andhra Pradesh, India',
  lat: 16.2861218,
  lng: 80.44621169999999,
},
{
  addr: 'Area veterinary Hospital Campas, Nidubrolu Villag, Ponnur mandal, Guntur(Dt) Pin Code:-522124, Andhra Pradesh, India',
  lat: 16.0929365,
  lng: 80.4938267,
},
{
  addr: 'Darsi, Darsi (M) Prakasam-523247, Andhra Pradesh, India',
  lat: 15.7701491,
  lng: 79.67927050000002,
},
{
  addr: 'Area veterinary Hospital Campas, Indukurpet Village, Mandal, SPSRNellore (Dt) Pin Code:-524314, Andhra Pradesh, India',
  lat: 14.4702867,
  lng: 80.09713649999999,
},
{
  addr: 'Veterinary Hospital Rebala Village, Buchireddy palem Mandal, SPSRNellore (Dt) Pin Code:-524305, Andhra Pradesh, India',
  lat: 14.5260881,
  lng: 79.9010784,
},
{
  addr: 'Assistant Director (AH), Area Vetrinary Hospital Singanamala Anantapuram - 515435, Andhra Pradesh, India',
  lat: 14.8003189,
  lng: 77.71697309999999,
},
{
  addr: 'O/o. Assistant Director (AH), Are veterinary Hospital, Rayadurgam - 515865, Andhra Pradesh, India',
  lat: 18.4498566,
  lng: 83.6585315,
},
{
  addr: 'O/o. Assistant Director (AH), Area Veterinary Hospital, Guntakal -515801, Andhra Pradesh, India',
  lat: 15.1660706,
  lng: 77.3769836,
},
{
  addr: 'O/o. Assistant Director (AH), Area Veterinary Hospital, Gorantla -515231, Andhra Pradesh, India',
  lat: 13.9846018,
  lng: 77.7705127,
},
{
  addr: 'O/o. Assistant Director (AH), Area Veterinary Hospital, Puttaparthi -515134, Andhra Pradesh, India',
  lat: 14.168813,
  lng: 77.8109623,
},
{
  addr: 'O/o. Assistant Director (AH), Area Veterinary Hospital, Lepakshi -515331, Andhra Pradesh, India',
  lat: 13.8039436,
  lng: 77.60771969999999,
},
{
  addr: 'O/o. Assistant Director (AH), Area Veterinary Hospital, Near RTC Bustand, Dharmavaram -515672, Andhra Pradesh, India',
  lat: 14.4097874,
  lng: 77.7149827,
},
{
  addr: 'O/o Assistant Director (AH) I/c Dr YSR Agri Lab Constituency Animal Disease Diagnostic Laboratory, Agriculture Market, Committee Compound, Gooty Road, Pathikonda, Pin Code:518380, Andhra Pradesh, India',
  lat: 15.3963743,
  lng: 77.5007739,
},
{
  addr: 'O/o Assistant Director (AH) I/c Constituency Animal Disease Diagnostic Laboratory, Veterinary Hospital, H.No.304, 1st ward, Venkatapuram, near Sai Baba Temple, Adoni Road, Yemmiganur, Pin Code:518360, Andhra Pradesh, India',
  lat: 15.7662462,
  lng: 77.46159229999999,
},
{
  addr: 'O/o Assistant Director (AH) I/c Constituency Animal Disease Diagnostic Laboratory, Area Veterinary Hospital, Near Police Station, Dhone, Pin Code:518222, Andhra Pradesh, India',
  lat: 15.3960427,
  lng: 77.8732414,
},
{
  addr: 'ASSISTANT DIRECTOR, NEW AVH BUILDING, NEAR ZPHS SCHOOL, KOLIMI VEEDHI, PORUMAMILLA- 516193 YSR DISTRICT, Andhra Pradesh, India',
  lat: 14.1977565,
  lng: 79.1568427,
},
{
  addr: 'Veterinary Hospital, Palasa, 532221, Andhra Pradesh, India',
  lat: 18.7723549,
  lng: 84.4109252,
},
{
  addr: 'Veterinary Hospital, Narasanapeta, 532421, Andhra Pradesh, India',
  lat: 18.4055227,
  lng: 84.0378894,
},
{
  addr: 'Veterinary Hospital, Pathapatnam, 532213, Andhra Pradesh, India',
  lat: 18.7440593,
  lng: 84.0840723,
},
{
  addr: 'AREA VETERINAY HOSPITAL KOTHAVALASA, Village and Mandal, Andhra Pradesh, India',
  lat: 17.8899871,
  lng: 83.1903382,
},
{
  addr: 'Saluru Village and mandal, pin:535591, Andhra Pradesh, India',
  lat: 18.5169856,
  lng: 83.20394189999999,
},
{
  addr: 'VELAGAWADA Village PALAKONDA MANDAL Pin 532440, Andhra Pradesh, India',
  lat: 18.6175675,
  lng: 83.7733555,
},
{
  addr: 'Veterinary Dispensary Adduru, Chodavaram mandal, Anakapalli District Pin: 531035, Andhra Pradesh, India',
  lat: 17.7869686,
  lng: 83.0092803,
},
{
  addr: 'Rural Live stock unit, Sarabhannapalem, Koyyuru mandal, ASR district, Pin Code: 531084, Andhra Pradesh, India',
  lat: 17.6607539,
  lng: 82.2083365,
},
{
  addr: 'NEAR MRO OFFICE OPPOSITE AGRICULTURE DEPOT KAPAVARAM ROAD KORUKONDA, Andhra Pradesh, India',
  lat: 17.1649184,
  lng: 81.82646849999999,
},
{
  addr: 'VETERINARY HOSPITAL NALLAJERLA EAST GODAVARI DIST, Andhra Pradesh, India',
  lat: 16.9475376,
  lng: 81.4072346,
},
{
  addr: 'O/o Area veterinary hospital Attili W.G.Dist, Pincode , Andhra Pradesh, India',
  lat: 17.1003703,
  lng: 81.5417467,
},
{
  addr: '0/o Area Veterinary Hospitl Narsapuram. Near Muncipal office, Narsapuram town, W.G.Dist, Pincode -534275, Andhra Pradesh, India',
  lat: 16.4368557,
  lng: 81.6931559,
},
{
  addr: 'O/O Assistant Director, Area Veterinary Hospital, Elamarru, Pedaparupudi (M), Krishna(Dt), Andhra Pradesh, India',
  lat: 16.4272464,
  lng: 80.9557829,
},
{
  addr: 'O/O Assistant Director, Area Veterinary Hospital, A Konduru, A.Konduru (M), NTR(Dt), Andhra Pradesh, India',
  lat: 16.9659754,
  lng: 80.65211390000002,
},
{
  addr: 'O/O Assistant Director, Area Veterinary Hospital, Korukonda, Palnadu Dsit-522647, Andhra Pradesh, India',
  lat: 17.1687858,
  lng: 81.83104209999999,
},
{
  addr: 'Area Veterinary Hospital, Vykuntapuram, Back side of Fire station, Chirala, Bapatla District. PIN- 523155, Andhra Pradesh, India',
  lat: 15.8298148,
  lng: 80.3507973,
},
{
  addr: 'GIDDALUR, GIDDALUR, PRAKASAM, 523357, Andhra Pradesh, India',
  lat: 15.3757808,
  lng: 78.9236355,
},
{
  addr: 'SANKRANTHIPALLI, RAPUR MANDAL, SPSR NELLORE dist . pincode 524408 , Andhra Pradesh, India',
  lat: 14.1998609,
  lng: 79.5343786,
},
{
  addr: 'Assistant Director (AH), Area Veterinary Hospital, Kuppam Kuppam Mandal, Chittoor District - 517425, Andhra Pradesh, India',
  lat: 12.7461129,
  lng: 78.342291,
},
{
  addr: 'Assistant Director (AH), Area Veterinary Hospital, Somala Somala Mandal, Chittoor District - 517257, Andhra Pradesh, India',
  lat: 13.476537,
  lng: 78.8081964,
},
{
  addr: 'O/o Area Veterinary Hospital, Animal Husbandry, opposite R.T.C bustand Kodumur mandal, Kurnool-518464, Andhra Pradesh, India',
  lat: 15.6834009,
  lng: 77.7677288,
},
{
  addr: 'O/o Area Veterinary Hospital, Animal Husbandry, opposite R.T.C bus stand Bethamcherla mandal, Nandyal-518599, Andhra Pradesh, India',
  lat: 15.4575887,
  lng: 78.15184359999999,
},
{
  addr: 'Veterinary Dispensary, Molakalacheruvu(V), Molakalacheruvu (M), Annamayya Dist-517590, Andhra Pradesh, India',
  lat: 13.3175496,
  lng: 79.59405439999999,
},
{
  addr: 'AD (AH), Area Vety. Hospital, Pednandipadu, Guntur Dist-522235, Andhra Pradesh, India',
  lat: 16.0571109,
  lng: 80.3435908,
},
{
  addr: 'AD (AH), ADDL, Vizianagaram, Andhra Pradesh, India',
  lat: 18.1066576,
  lng: 83.39555059999999,
},
];

const installedILRs = [
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Amruthapuram, Sabbavaram, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1153029,
              17.7568549
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Amalapuram, Narsipatnam, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.57808779999999,
              17.5828745
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerakanapalem, Narsipatnam, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6106868,
              17.6676424
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kusarlapudi, Rolugunta, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6922177,
              17.6702153
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Krishnapuram, Yelamanchili, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.857308,
              17.5472347
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothuru, Yelamanchili, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.9014211,
              17.5257385
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jaithavam, Cheedikada,  Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8910959,
              17.9276548
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Turuvolu, Cheedikada,  Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.9246084,
              17.9267564
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thanam, Parawada, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.06969389999999,
              17.6463247
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Venelapalem, Parawada, Anakapalli, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0817699,
              17.6217306
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "P.NARAYANAPURAM, Kudair, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4314497,
              14.7323365
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GOTUKURU, Kudair, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4988753,
              14.7430851
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kammuru, Kudair, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4838202,
              14.7458414
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kurugunta, Ananthapuram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5105669,
              14.6927174
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somuladoddi, Ananthapuram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60234659999999,
              14.7259547
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mannila, Ananthapuram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6886853,
              14.5594151
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Upparapalli, Ananthapuram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6400098,
              14.6498169
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bommalatapalli, Bukkarayasamudram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7644299,
              14.703513
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rekulakunta, Bukkarayasamudram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.66946850000001,
              14.6938463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Reddypalli-1, Bukkarayasamudram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.668645,
              14.7243611
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gugudu, Narpala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.86236559999999,
              14.6675465
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nayanpalli, Narpala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8131404,
              14.8008623
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Siddiracherla, Narpala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5983858,
              14.6808559
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chamaluru, Narpala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7726307,
              14.7610696
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "H.Sodanpalli, Narpala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7602283,
              14.7994669
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bethapalli, Gooty, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6475273,
              15.0740695
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Karidikonda, Gooty, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6475273,
              15.0740695
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kojjepalli, Gooty, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6475273,
              15.0740695
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Teliki, Peddavadugur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6732438,
              15.0197123
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Appecherla, Peddavadugur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6732438,
              15.0197123
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ramrajpalli, Pamidi, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6307018,
              14.6757944
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VANKARAJUKALAVA, Pamidi, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6307018,
              14.6757944
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MUTTALA, Atmakur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3776729,
              14.5952143
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sanapa, Atmakur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.46948010000001,
              14.6077182
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Talupuru, Atmakur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6937075,
              14.2957736
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Prasannayapalli, Rapthadu, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.61065119999999,
              14.6375091
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maroor, Rapthadu, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6056407,
              14.6164005
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "West Narsapuram, Singanamala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6658587,
              14.818194
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sodanpalli, Singanamala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.71697309999999,
              14.8003189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kallur-1, Garladinne, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0129685,
              13.57601
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Budedu, Garladinne, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.55943429999999,
              14.8498556
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nagaruru, Yadiki, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8310104,
              14.9904167
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rayalacheruvu, Yadiki, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.81853989999999,
              15.0533885
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sajjaladinne, Tadipatri, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0092047,
              14.9091024
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gangadevipalli, Tadipatri, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0092047,
              14.9091024
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHIKKEPALLI, Peddapappur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.86745610000001,
              14.8897888
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "NARASAPURAM, Peddapappur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8620466,
              14.9289346
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KADAVAKALLU, Putlur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9209138,
              14.8116485
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "YELLUTLA, Putlur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9076213,
              14.6702876
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "DANTHALAPALLI, Yellanur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.04450109999999,
              14.5747019
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VENAPUSAPALLI, Yellanur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0733647,
              14.7000169
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rayadurgam, Rayadurgam, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8500725,
              14.7005847
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BN.Halli, Rayadurgam, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.9154576,
              14.6623054
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Udegolam, Rayadurgam, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8761131,
              14.6872167
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "D.Hirehal, D.Hirehal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8379942,
              15.0096592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somlapuram, D.Hirehal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8379942,
              15.0096592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kadalur, D.Hirehal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8379942,
              15.0096592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Muradi, D.Hirehal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8379942,
              15.0096592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nimbagal, Uravakonda, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2086839,
              14.8898534
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lathavaram, Uravakonda, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2600481,
              14.9416069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palthur, Vidapanakal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.18332199999999,
              15.0563214
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kattalapalli, Vidapanakal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.18332199999999,
              15.0563214
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mulakalapenta, Guntakal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5130593,
              15.2002402
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nelagonda, Guntakal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4357739,
              15.089217
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chabala, Vajrakarur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2807776,
              15.0349592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Konakondla, Vajrakarur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.36402570000001,
              15.1052635
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gummagatta, Gummagatta, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.86424629999999,
              14.5676959
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Veerapuram, Gummagatta, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.86424629999999,
              14.5676959
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bommiganipalli, Bramhasamudram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.03338959999999,
              14.5964235
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vepulaparthy-1, Bramhasamudram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8879496,
              14.5676026
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yatakallu, Settur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.43003569999999,
              15.5657853
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Perugupalyam, Settur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.92145140000001,
              14.3766048
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kundurpi, Kundurpi, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.03532990000001,
              14.2910193
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mahananthapuram, Kundurpi, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6005911,
              14.6818877
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerragunta, Kanekal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0730524,
              14.8048632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sollapuram, Kanekal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0730524,
              14.8048632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Hulikera, Kanekal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.9945473,
              14.7621779
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganigera, Kanekal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0730524,
              14.8048632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sreedharghatta, Bommanahal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.978726,
              14.9993236
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Govindawada, Bommanahal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1093233,
              14.9192559
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Unthakal, Bommanahal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.96070540000001,
              14.9869445
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lingadahal, Bommanahal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.978726,
              14.9993236
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Duradakunta, Kalyandurg, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1957676,
              14.4846603
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narayanapuram, Kalyandurg, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1107476,
              14.5519565
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ankampalli, Beluguppa, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.23800059999999,
              14.702606
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narsapuram, Beluguppa, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0651479,
              14.6523871
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palluru, Kambadur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.22901929999999,
              14.4367573
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ralla Ananthapuramu, Kambadur, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2314696,
              14.3449454
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anantapuram, Ananthapuram, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5936665,
              14.6801789
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rayadurgam, Rayadurgam, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8500725,
              14.7005847
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Uravakonda, Uravakonda, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2577817,
              14.9441154
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Guntakal, Guntakal, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3769836,
              15.1660706
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kalyanadurgam, Kalyanadurgam, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1107476,
              14.5519565
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Raptadu, Raptadu, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6056407,
              14.6164005
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Singanamala, Singanamala, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.71697309999999,
              14.8003189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tadipatri, Tadipatri, Ananthapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0092047,
              14.9091024
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gorlamudiveedu, Cherlopalli, Rayachoty, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7006907,
              14.0274516
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yandapalli, Rayachoty, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.68678609999999,
              14.0435838
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Araveedu, Galiveedu, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5141328,
              14.0185642
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Korlakunta, Galiveedu, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5052852,
              14.0234061
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maddirevula, Lakkireddipalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.69699729999999,
              14.1853427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Edigapalli, Lakkireddipalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.69699729999999,
              14.1853427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chitlooru, Ramapuram, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7066818,
              14.8082709
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Suryanarayanapuram, Ramapuram, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1277049,
              18.4612804
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T.Sakibanda, Chinnamandem, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.64554749999999,
              14.0062012
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothapalli,  Chinnamandem, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.678839,
              13.9421331
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narayanareddypalli, Sambepalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1211735,
              13.4148742
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Routhukunta, Dinnemidapalli, Sambepalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7306158,
              13.9244805
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddinenukalva, Reddivaripalli,  T Sundupalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9146798,
              13.9815716
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T Sundupalli 2, Edigapalli, T Sundupalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9146798,
              13.9815716
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somavaram, Puthavandlapalli, Veeraballi,  Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8566661,
              14.1576711
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Odiveedu Kaspa, Veeraballi,  Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8566661,
              14.1576711
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kona, Kalakada, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7270728,
              13.8322317
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vepurikota, Molakalacheruvu, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.26663529999999,
              13.7984923
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rangasamudram, PTM, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9764656,
              14.9851973
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Arogyavaram, Madanapalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5303385,
              13.597175
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bommanacheruvu, Madanapalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4732408,
              13.4972248
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mustoor, Nimmanapalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6704093,
              13.5699361
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K C Palli, Ramasamudram, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4943735,
              13.3657952
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Amilepalli, Gurramkonda, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.58959229999999,
              13.7817971
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T Pasalavandlapalli, Gurramkonda, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5992612,
              13.8378758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kattavaripalli, Penagalur, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2687152,
              14.3016211
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mudrapalli, Penagalur, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2542773,
              14.2325237
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddaorampadu, Obulavaripalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2648481,
              14.0374777
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gadela,  Obulavaripalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2648481,
              14.0374777
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K C Agraharam/Reddivaripalli, Rly Kodur, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3499861,
              13.9597733
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K.Buduguntapalli, Rly Kodur, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3332889,
              13.9344092
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rly Kodur, Rly Kodur, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3499861,
              13.9597733
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kuchivaripalli, Rajampet, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1418005,
              14.1826394
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Madanapalli, Madanapalli, Annamayya, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.50100069999999,
              13.5560496
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Baski, Arakuvalley, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.887512,
              18.2153301
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lotheru, Arakuvalley, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.053589,
              18.3382598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Arakuvalley, Arakuvalley, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.88017649999999,
              18.3222221
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Getuvalasa, Borrra, Anathagiri, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0178423,
              18.2383312
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondiba, Anathagiri, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0280816,
              18.2031318
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Guntaseema, Dumbriguda, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6874942,
              18.265629
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gasaba, Dumbriguda, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8413618,
              18.4116554
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothapalem-2, Chinthpalli, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2135699,
              17.7437315
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tajangi, Chinthpalli, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.4942263,
              17.8709056
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Seleeru, G. K. Veedi, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1946829,
              17.859715
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rinthada-2, G. K. Veedi, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2848061,
              17.8590575
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bakuluru, Koyyuru, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.208338,
              17.6607325
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bangarampet-1, Koyyuru, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.208338,
              17.6607325
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bheeram, G. Madugula, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.50976539999999,
              18.0785102
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gondhipadu, G. Madugula, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.533076,
              18.0124337
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Boithali, G. Madugula, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.533076,
              18.0124337
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sukuru, Hukumpeta, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.69376969999999,
              18.1520865
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganneruputtu, Hukumpeta, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.69376969999999,
              18.1520865
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Iradapalli, Paderu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.7077992,
              18.071089
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thumpada, Paderu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.7016829,
              18.0669593
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gondeli, Paderu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6185074,
              18.0975113
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedaguda, Munchingiputtu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6290665,
              18.1216697
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vanugumma, Munchingiputtu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.4645843,
              18.4785365
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rudakota, Pedabayalu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.5875496,
              18.2853641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kimudapalli, Pedabayalu, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.5875496,
              18.2853641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tungamadugula, Addateegala, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0234825,
              17.4776411
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Timmapuram, Addateegala, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0234825,
              17.4776411
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nellipaka, Yetapaka,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.00506320000001,
              17.6598107
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yetapaka, Yetapaka,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.90832999999999,
              17.6934752
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jaddangi, Rajavommangi, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1523251,
              17.4812621
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rajavommangi, Rajavommangi, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2331198,
              17.5467283
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tummala, Chinthuru,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.30968279999999,
              17.7688956
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinthuru, Chinthuru,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.47183869999999,
              17.7202468
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rekhapalli, Vararamachandrapuram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2996955,
              17.5683533
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mulakanapalli, Vararamachandrapuram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2973009,
              17.5644225
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chavitidibbalu, Y.Ramavaram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9943847,
              17.5571824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "yerramreddypalem, Y.Ramavaram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.956891,
              17.6797658
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "kundada, Maredumilli,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6665149,
              17.5553896
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tadepalli, Maredumilli,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7489164,
              17.6058315
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jaggampalem, Gangavaram,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8688751,
              17.2879484
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lakkonda, Gangavaram,  ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9070966,
              17.3892475
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bvkota, Rampachodavaram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7771574,
              17.439996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "akuru, Rampachodavaram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7771574,
              17.439996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rampachodavaram, Rampachodavaram, ASR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7771574,
              17.439996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Inturu, Amarthaluru, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6285931,
              16.0630791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thurumella, Amarthaluru, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6395695,
              16.1114768
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jammula Plaem, Bapatla, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4409967,
              15.9365023
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maruproluvaripalem, Bapatla, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4799273,
              15.8684966
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vellaturu, Bhatiprolu, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.81411,
              16.1160073
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Surepalli, Bhatiprolu, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7865558,
              16.0781426
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Balusulapalem, Cherukupalli, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6576623,
              15.9983668
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinnaganjam, Chinnaganjam, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.24185779999999,
              15.6929955
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bolayapalem, Karlapalem, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5861979,
              15.9916056
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pesaralanka, Kolluru, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.85265509999999,
              16.0937203
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Juvvala Palem, Kolluru, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.85267979999999,
              16.1077506
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nagaram, Nagaram, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.46713749999999,
              15.9039445
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedapalli Gollapalem, Nagaram, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.641239,
              15.955117
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dhulipudi, Nagaram, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7616247,
              16.0363285
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pallapatla, Nizampatnam, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7519272,
              15.9850026
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nizampatna, Nizampatnam, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6690697,
              15.9069453
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mantenavari Palem, Pittalavani Palem, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65295379999999,
              15.9867963
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Petaru 1, Repelle, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.46713749999999,
              15.9039445
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Munagivaripalem, Tsundur, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5833296,
              16.1588948
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "vemuru, Vemuru, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7399885,
              16.1792758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pandillapalli, Vetapalem, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2711588,
              15.7575949
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Enamadala, Yeddanapudi, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1538502,
              16.0042142
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Poluru, Yeddanapudi, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.211131,
              15.9931889
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH Bapatla, Bapatla, Bapatla, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.46713749999999,
              15.9039445
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kanipakam, Irala, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.035548,
              13.2775912
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Keelapatla, Gangavaram, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7748934,
              13.2381083
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jagamarla, Palamaner, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7440118,
              13.2008143
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddapanjani, Peddapanjani, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.68467299999999,
              13.2983433
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rallabuduguru, Santhipuram, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3422633,
              12.8570109
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gunjarlapalli, Santhipuram, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3771569,
              12.8657718
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Avulakuppam, Ramakuppam, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.492243,
              12.8717533
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CheldiganiPalli, Ramakuppam, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4496168,
              12.9304392
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kotaluru, Kuppam, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.342291,
              12.7461129
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vasanadu, Kuppam, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.37568999999999,
              12.6952326
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kuppiganipalli, Gudupalli, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3017101,
              12.8163067
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gundlasagaram, Gudupalli, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.33204169999999,
              12.7672186
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gaddur, Baireddypalli, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4606288,
              12.9024411
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gollachemanapalli, Baireddypalli, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.60836119999999,
              13.0907255
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kongatam, V.Kota, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.46666929999999,
              12.942526
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thotakanuma, V.Kota, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.52349029999999,
              13.0697463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Annemmagariapalli, Somala, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8081964,
              13.476537
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palamanda,  Sodam,  Chittoor , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8536584,
              13.6025164
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mapakshi, Chittoor, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0906305,
              13.1434968
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "A L Puram, Gudipala, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.20070009999999,
              13.1254326
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Katiperi, Chowdeapalli, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6171753,
              13.4175985
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Parikidona, Chowdeapalli, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6981566,
              13.4502166
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Eatavakili, Punganur, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5713232,
              13.368608
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bainapalli, Punganur, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5713232,
              13.368608
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chittoor, Chittoor, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1003289,
              13.217176
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Patharcot, Vijyapuram, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6992736,
              13.2710717
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VKR Puram, Nagari, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.58317009999999,
              13.2911042
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VNR Peta, Nagari, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.58216100000001,
              13.2712999
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GD Nellore, GD Nellore, Chittoor, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1808757,
              13.2307824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Penakanametta, Kovvuru, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.727383,
              17.0125618
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Arikarevula, Kovvuru, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.05195069999999,
              16.8852195
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "S.Muppavaram, Chagallu, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.66856609999999,
              16.9484511
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nelaturu, Chagallu, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6652051,
              16.9918555
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Katakoteswaram, Nidadavolu, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6251147,
              16.9285497
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pandalaparru, Nidadavolu, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.71434699999999,
              16.8952678
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palangi, Undrajavaram, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6938933,
              16.7653041
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chivatam, Undrajavaram, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.67746749999999,
              16.7763431
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kanuru, Peravali, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.72365610000001,
              16.8368908
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mukkamala, Peravali, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7718663,
              16.7464896
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Singarajupalem, Nallajerla, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.41093959999999,
              16.8806873
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Prakasaraopalem, Nallajerla, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4332754,
              16.9172763
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yernagudem, Devarapalli, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5054822,
              16.9990752
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yadavole, Devarapalli, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4743361,
              17.0639605
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gopavaram, Gopalapuram, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8117027,
              16.7095152
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vellachintalagudem, Gopalapuram, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8117027,
              16.7095152
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ragolapalli, Tallapudi, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6644839,
              17.1236876
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vegeswarapuram, Tallapudi, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6644839,
              17.1236876
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Rajamahendravaram Rural, Rajamahendravaram Rural, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8040345,
              17.0005383
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VH Rajanagaram,  Rajanagaram, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.90177059999999,
              17.0806322
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Anaparthy, Anaparthy, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9555307,
              16.9340866
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Korukonda, Korukonda, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.83104209999999,
              17.1687858
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Rajahmundry Urban, Rajahmundry Urban, East Godavari, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.77015569999999,
              17.0057961
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Polasanipalli, Bhimadole, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0952431,
              16.7106604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bhimadole, Bhimadole, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2636995,
              16.8108022
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gunnampalli, Dwaraka Tirumala, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3186241,
              16.8748311
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Raghavapuram, Dwaraka Tirumala, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0952431,
              16.7106604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerramillipadu, Unguturu, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3454278,
              16.8851372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bommidi, Unguturu, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4230383,
              16.8218926
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mandalaparru, Nidamarru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4393278,
              16.719664
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PN Kolanu -2, Nidamarru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.39372279999999,
              16.7327497
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Eluru, Eluru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0952431,
              16.7106604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ponangi, Eluru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.10719519999999,
              16.6634028
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vatluru, Pedapadu, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0547656,
              16.7020312
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vasanthawada, Pedapadu, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9995387,
              16.6207914
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kamayyapalem, Jeelugumilli, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.13477560000001,
              17.2114615
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mulagalampalli, Jeelugumilli, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.13477560000001,
              17.2114615
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kukkunuru, Kukkunuru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.16163619999999,
              17.5550074
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peda Ravigudem, Kukkunuru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.16163619999999,
              17.5550074
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sridhara Velair, Kukkunuru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.16163619999999,
              17.5550074
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rudramakota, Velairpadu, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2470647,
              17.562937
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kaikaluru, Kaikaluru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0952431,
              16.7106604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vemavarapadu, Kaikaluru, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2129374,
              16.5527275
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tadinada, Kalidindi, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2915992,
              16.5064829
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sanarudravaram, Kaldiindi, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2463763,
              16.5101708
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "koruturu,  polavaram,  Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5348157,
              17.435799
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "L N D Peta, Polavaram,  Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.51163749999999,
              17.2072123
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Reddy ganapavaram,  Buttayagudem,  Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.25394829999999,
              17.2071621
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Doramamidi,  Buttayagudem,  Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3242942,
              17.2111316
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gopannapalem, Denduluru,  Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1182889,
              16.7709427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Challachinthalapudi, Denduluru,  Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.16648099999999,
              16.7608986
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vegiwada, Pedavegi, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.10755549999999,
              16.8099463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Koppaka, Pedavegi, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.02991829999999,
              16.7506112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mandavalli, Mandavalli, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.155844,
              16.5133571
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chavalipadu, Mandavalli, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.19203329999999,
              16.5476309
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Guraja, Mudinepalli, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1105493,
              16.4158322
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Alluru, Mudinepalli, Eluru, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1830178,
              16.4578863
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pallerlamudi, Nuzvid, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9836539,
              16.6850663
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Meerjapuram, Nuzvid, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9276861,
              16.7052463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Seetharamapuram, Nuzvid, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.960166,
              16.6781999
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "NUZVID, Nuzvid, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chittapur, Chatrai, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chatrai, Chatrai, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ravichrla, Nuzvid, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Marlapalem, Chatrai, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinthlavalli, Musunuru, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9343322,
              16.8273552
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yallapuram, Musunuru, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9343322,
              16.8273552
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ravikampadu, Kamavarapukota, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VENKATADRIGUDEM, Chintalapudi, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "UTASAMUDRAM, Chintalapudi, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.02577629999999,
              17.1671127
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Borramapalem-2, T Narasapuram, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.07746039999999,
              17.1012215
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Velagapadu, T Narasapuram, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.07746039999999,
              17.1012215
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chintalapudi, Chintalapudi, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Taduvai, Jangareddygudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lakkavaram, Jangareddygudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2983022,
              17.1205268
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bayyanagudem, Koyyalagudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ponguturu, Koyyalagudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4265248,
              17.0893791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rajavaram-2, Koyyalagudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yarrampeta- 2, Ponguturu, Koyyalagudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4265248,
              17.0893791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KOYYALAGUDEM, Koyyalagudem, Nuzvid, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dokiparru, Medikonduru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3157397,
              16.3176431
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jangamguntlapalem, Medikonduru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2690685,
              16.3657015
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lingayapalem, Thulluru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4688061,
              16.5256505
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Harischandrapuram(Borupalem), Thulluru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4688061,
              16.5256505
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PAMULPADU, TADIKONDA, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.45315500000001,
              16.4170758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "DAMARAPALLI, TADIKONDA, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.39439519999999,
              16.3772989
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TADIKONDA, TADIKONDA, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.45315500000001,
              16.4170758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "113 THALLURU, PHIRANGIPURAM, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2309293,
              16.3172899
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "ERRAGUNTLPADU, PHIRANGIPURAM, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2627973,
              16.2890087
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nadimpalem, prathipadu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3358008,
              16.1813812
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mallayapalem, prathipadu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3396595,
              16.1758423
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "prathipadu, prathipadu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.335893,
              16.181359
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thurakapalem, Guntur Rural, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0661011,
              16.3302483
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jonnalagadda,  Guntur Rural, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4576835,
              16.3736337
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VADLAMUDI, chebrolu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5605111,
              16.2355855
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GODAVARRU, chebrolu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4688061,
              16.216921
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "THOTLAPALEM, chebrolu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.525286,
              16.1964393
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VK PURAM, Pedakakani, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4896088,
              16.3014767
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VENIGANDLA, Pedakakani, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4799273,
              16.3513438
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "ANNAPARRU, Pedanandipadu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3081393,
              16.0936217
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PALAPARRU, Pedanandipadu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.287392,
              16.0614657
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anantavarapadu, Vatticherukuru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4470827,
              16.1804779
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KORNEPADU, Vatticherukuru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3846542,
              16.245852
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jaggadiguntapalem, Tenali, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65616279999999,
              16.2165473
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nandivelugu, Tenali, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6465652,
              16.29474
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinatalapudi, Duggirala, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6368894,
              16.3042655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedakonduru, Duggirala, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6874785,
              16.3905133
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pidaparru, Kollipara, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7302571,
              16.3163919
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chakryapalem, Kollipara, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.749466,
              16.2872181
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinakakani, Mangalagiri, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.55541830000001,
              16.4023599
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Atmakur 1, Mangalagiri, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5865884,
              16.4328599
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chirravuru, Tadepalli, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6514517,
              16.4222467
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Prathuru, Tadepalli, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6361602,
              16.4669189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mangalagiri, Mangalagiri, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5662454,
              16.4345712
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nidubrolu, Ponnuru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5645254,
              16.0612839
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedaravuru, Tenali, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65627529999999,
              16.209266
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinalingayapalem, Kakumanu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4437264,
              16.1122003
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Returu, Kakumanu, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4382153,
              15.9857837
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Doppalapudi, Ponnuru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5213169,
              16.0994966
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vallabharaopalem, Ponnuru, Guntur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.52509169999999,
              16.0557909
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedabrahmadevam, Samalkot, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1679386,
              17.0500453
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD PS Pudi, Prathipadu, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1888288,
              17.2325342
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Yerravaram, Yeleshwaram, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2474648,
              16.9890648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedanapalli, Yeleshwaram, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1064293,
              17.2881415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Pyna, Pedapudi, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2474648,
              16.9890648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Anuru, Peddapuram, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1298451,
              17.0801333
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Bhupalapatnam, Kirlampudi, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1488586,
              17.1958935
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH Tuni, Tuni, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.5472151,
              17.3531446
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH Shankavaram, Shankavaram, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.36303319999999,
              17.3145488
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Karapa, Karapa, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.16827579999999,
              16.9020745
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Samalkot, Samalkot, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1679386,
              17.0500453
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Pithapuram, Pithapuram, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2521517,
              17.1145559
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Tuni, Tuni, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2474648,
              16.9890648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Jaggampeta, Jaggapeta, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0644394,
              17.171159
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL Sankhavaram, Sankhavaram, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.36303319999999,
              17.3145488
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VCP Kakinada, Kakinada Urban, Kakinada, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2474648,
              16.9890648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kapileswarapuram, Kapileswarapuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.92012989999999,
              16.7400262
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Machara, Kapileswarapuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.92012989999999,
              16.7400262
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Komaragiripatnam, Allavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9998367,
              16.443952
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Amalapuram, Amalapuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031455,
              16.5774798
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganti, Kothapeta, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.77699319999999,
              17.0002802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Moolapolam, Ainavilli, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0665903,
              16.6643795
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothapeta, Kothapeta, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.77699319999999,
              17.0002802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Malkipuram, Malkipuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8042341,
              16.4097361
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kesanapalli, Malkipuram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8934484,
              16.3960382
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Antharvedipalem, Sakhinetipalli, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7780186,
              16.4010472
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dangeru, K.Gangavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0475816,
              16.7338855
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Velicheru, Ravulapalem, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7561415,
              16.8768213
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ravulapalem, Ravulapalem, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8625157,
              16.7415185
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rayavaram, Rayavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.000856,
              16.9046804
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Velagathodu, Rayavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8797976,
              16.9015267
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "P.Gannavaram, P.Gannavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8905145,
              16.5891247
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narendrapuram, P.Gannavaram, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9002728,
              16.6345452
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Razole, Razole, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.84071759999999,
              16.478491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nagaram1, Mamidikuduru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.91885169999999,
              16.5032065
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Magatapalli, Mamidikuduru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9452981,
              16.4652449
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kandikuppa, katrenikona, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.15368509999999,
              16.5828372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Alamuru, Alamuru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.88345609999999,
              16.7870575
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jonnada, Alamuru, Dr.B.R.Ambedkar Konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.86204769999999,
              16.7968931
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kandulapalem, Ramachandrapuram, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0849707,
              16.8180368
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "DRAKSHARAMA,  DRAKSHARAMA, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0597816,
              16.7914449
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MANDAPETA,  MANDAPETA, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9263789,
              16.8626906
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AMALAPURAM,  AMALAPURAM, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031455,
              16.5774798
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MUMMIDIVARAM,  MUMMIDIVARAM, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1035342,
              16.643385
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RAVULAPALEM,  RAVULAPALEM, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8625157,
              16.7415185
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RAZOLE,  RAZOLE, Dr B.R.Ambedkar konaseema, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.84071759999999,
              16.478491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chandrala, Gudlavalleru, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0554557,
              16.3773616
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lingavaram, Gudivada, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.997467,
              16.4580064
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nujella, Gudivada, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0181762,
              16.3839361
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kanumuru, Pamarru, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9027988,
              16.3394693
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Korimerla, Pamarru, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0279533,
              16.2643741
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mantada, Pamidimukkala, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.87306219999999,
              16.3549418
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gurajada, Pamidimukkala, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8785955,
              16.3595543
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kalavapamula, Vuyyuru, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8792871,
              16.4390338
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "China Ogirala, Vuyyuru, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8253222,
              16.3769107
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Marlapalem, Gannavaram, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8087103,
              16.5569821
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Savarigudem, Gannavaram, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7283712,
              16.5359156
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Unguturu, Unguturu, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8843928,
              16.5135034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddavutapalli, Unguturu, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8843928,
              16.5135034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chiriwada, Bapulapadu,  krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.93459779999999,
              16.5581309
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mallavalli, Bapulapadu,  krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.88827770000002,
              16.6721236
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gundupalem,  Machilipatnam, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.079605,
              16.1430194
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bandarkota, Machilipatnam, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.151753,
              16.1553824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kaza, Movva, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.00506320000001,
              16.198141
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedasangallu, Movva, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9172463,
              16.2245157
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lankapalli, Ghantasala, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.98296309999999,
              16.1360339
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kodali, Ghantasala, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.901416,
              16.1835265
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedana, Pedana, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.14536770000001,
              16.2577195
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Machilipatnam, Machilipatnam, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1302716,
              16.1808917
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pamarru, Pamarru, Krishna, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9610355,
              16.3229167
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jalimanchi, Adoni, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.26448599999999,
              15.7050229
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Doddanageri, Adoni, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.27588329999999,
              15.6318824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K Nagalapuram, Adoni, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3541449,
              15.6646772
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kogilathota, Holagunda, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.051123,
              15.4802149
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gajjehalli, Holagunda, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0506896,
              15.6010678
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kammarachedu, Alur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2232709,
              15.5307722
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kuruvalli, Alur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.19262959999999,
              15.3667401
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Beladona, Chippagiri, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.28505150000001,
              15.2628952
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TANGARADONA, Aspari, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.38350120000001,
              15.5676901
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinnahoturu, Aspari, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.30172,
              15.4568951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Hardagiri, Halaharvi, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4465074,
              15.8267656
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Gulyam, Halaharvi, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4465074,
              15.8267656
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Duddi,  Kosigi,  Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.20027449999999,
              15.897732
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vandhagalu,  Kosigi, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2423814,
              15.8569708
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Mantralayam, Mantralayam, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4245972,
              15.9408818
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rachumarri, Mantralayam, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3496708,
              15.9066219
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chakralla, Pathikonda,  Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5007739,
              15.3963743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "M.Agraharam, Maddikera, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4372084,
              15.262947
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Burujula, Maddikera, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.44151180000001,
              15.3479314
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Edduladoddi, Tuggali,  Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.57340479999999,
              15.3496426
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bondimadugula, Tuggali,  Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.680097,
              15.4224869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Doddimekala, Peddakadubur,  Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3909496,
              15.7632213
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Urukunda, Kowthalam, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.17871140000001,
              15.8028588
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Soganur, Yemmiganur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4930923,
              15.7846836
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K. Thimmapuram, Yemmiganur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4719551,
              15.7734175
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Devibetta, Yemmiganur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.28385349999999,
              15.6293748
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddakothili, Nandavaram, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2801561,
              15.3748563
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gurajala, Nandavaram, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6371314,
              16.5580212
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K.Markapuram, Kallur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.93674089999999,
              15.7529743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bollavaram, Kallur, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9299705,
              15.7126689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somayajulapalli, Orvakal, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1765035,
              15.5812817
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Meedivemula, Orvakal, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1013286,
              15.672368
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Veldurthi, Veldhurthi, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9292916,
              15.5533014
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Boyanapalli, Veldhurthi, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0106547,
              15.5459804
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Cherukulapadu, Veldhurthi, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9292916,
              15.5533014
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Edurur, Kurnool, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.899604,
              15.8807238
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerukulacheruvu, Krishnagiri, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8310104,
              15.5654877
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sh Yerragudi, Krishnagiri, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.84337649999999,
              15.6245828
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T Gokulapadu, Krishnagiri, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9538767,
              15.7943178
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Koilakonda, Krishnagiri, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7911187,
              15.4698517
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ch Yerragudi, Krishnagiri, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7938376,
              15.5432537
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ternekal, Devanakonda, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5318463,
              15.6392745
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Potlapadu, Devanakonda, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5218127,
              15.6055935
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palledoddi, Devanakonda, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5898809,
              15.5435108
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "B.Agraharam, Gonegandla, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.319093,
              14.6216173
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Byluppla, Gonegandla, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.59323780000001,
              15.7105641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinnamarriveedu, Gonegandla, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.59323780000001,
              15.7105641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "O/o DDAH, Kurnool, Kurnool, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0372792,
              15.8281257
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kurnool (U), Kurnool (U), Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0372792,
              15.8281257
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Manthralayam, Manthralayam, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4246142,
              15.9409036
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Aluru, Aluru, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.22749329999999,
              15.393291
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pattikonda, Pattikonda, Kurnool, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5007739,
              15.3963743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sripathiraopeta, Beside Village Secretariat, Atmakur, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.62426909999999,
              15.8958134
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bapananthapuram, Near Village Secretariat, Atmakur, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.585247,
              15.8568751
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gorlagutta, Near Anganwadi Centre 1, Bethamcherla, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1917102,
              15.4062465
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gutupalli, Near Water Tank, Bethamcherla, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0382841,
              15.4247199
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gummakonda, Near Village Secretariat, Dhone, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8240479,
              15.4802132
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ch.Malkapuram, Near Village Secretariat, Dhone, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.95673239999999,
              15.353607
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gadigarevula, Opposite Anjaneya Swami Temple, Gadivemula, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4434856,
              15.6165241
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thangedancha, Near Village Secretariat, Jupadu Bunglow, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.35506629999999,
              15.8575395
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Masapeta, Near MPUP School, Midthur, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2889005,
              15.7709108
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K.Bijinavemula, Near ZPHS School, Nandikotkur, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2725305,
              15.8992775
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vaddemanu, Near Village Secretariat, Nandikotkur, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2120102,
              15.850465
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Laxmapuram 1, Near Village Secretariat, Pagidyala, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3557775,
              15.9059821
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sankirenipalli, Near Village Secretariat, Pagidyala, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.34222729999999,
              15.9361551
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maddur, Opposite Sai Baba Temple, Panyam, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3498378,
              15.5181643
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Garladinne, Near MPUP School, Peapully, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.487285,
              15.4776876
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gudipadu, Near Sunkulamma Temple, Peapully, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.73907679999999,
              15.2361852
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Koilkuntla -1, VH Koilkuntla, Koilkuntla, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.31872039999999,
              15.2316281
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Govindinne, govindinne, 518176, Banaganapalli, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2279193,
              15.318372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Enakandla, Enakandla, 518124, Banaganapalli, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2279193,
              15.318372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sangapatnam, Sangapatnam, 518196, Owk, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1427633,
              15.1521595
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Singanapalli, Singanapalli, 518196, Owk, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1906417,
              15.1532517
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kanala, Rural Livestock unit Kanala Main Road, Sanjamala, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4546554,
              15.4228751
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Giddaluru, Near Old Bustand Perusomula, Sanjamala, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.254734,
              15.0861595
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ahobilam, Rural Livestock unit, Ahobilam, Allagadda, 518543, Allagadda, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6741657,
              15.1337667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MITTAPALLI, RBK- MITTAPALLI-518543, ALLAGADDA, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5127559,
              15.1305389
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "R.KRISHNAPURAM, RBK-R. KRISHNAPURAM -518543, ALLAGADDA, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5861785,
              15.0842317
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Area Veterinary Hospital,  Opp: Busstand, Nandyal, ,  Nandyal, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.29906900000002,
              15.1469287
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dr YSR CADDL, MV Nagar, MPDO Compound, Koilakuntla Road, Allagadda, Allagadda, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4959834,
              15.1357766
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dr YSR CADDL, Near Agriculture AD Office, Nandikotkur,  Nandikotkur, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4835299,
              15.4712471
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dr YSR CADDL,  Old Chandamama Hotel back side, near Panyam-2  Sachivalayam,  Kurnool Road, ,  Panyam, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3498378,
              15.5181643
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Assistant director (AH), Area Veterinary Hospital, Near Police Station, Dhone, Dhone, Nandyal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8732414,
              15.3960427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nellore, Nellore, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98645599999999,
              14.4425987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nellore, Nellore, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98645599999999,
              14.4425987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kovur, Kovur, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9852855,
              14.5021374
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KOVUR, Kovur,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9852855,
              14.5021374
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VEGUR, Kovur,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0573016,
              14.5347275
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gurivindapudi, Manubolu, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9136731,
              14.2635913
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Venkannapalem, Manubolu, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.90317759999999,
              14.1719875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Akkampeta, Manubolu, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8223206,
              14.2837437
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CherloPalli, Manubolu, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8660836,
              14.2242374
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anikepalli, Venkatachalam, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9968926,
              14.3324823
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Venkatachalam, Venkatachalam, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9231886,
              14.3258569
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pelleru, Chejerla, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6558242,
              14.5397965
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nagulavellaturu, Chejerla, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5676966,
              14.5204301
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Punnuru, Indukurpeta, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1065646,
              14.5046595
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHINNACHERUKURU,  T.P.GUDURU,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0479039,
              14.4302436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T.P.GUDURU, T.P.GUDURU,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.85038089999999,
              14.1463424
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narukuru, T.P.GUDURU,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.85038089999999,
              14.1463424
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Patur, Kovur,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9417362,
              14.5134588
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Cherlopalem, Kovur,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0178598,
              14.5289507
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Annareddypalem, Vidavaluru, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0960924,
              14.5783487
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Muthukur 3, Muthukur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0309399,
              14.3912169
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bramhadevam 2, Muthukur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9889178,
              14.4402163
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thallapudi, Muthukur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.095126,
              14.2897841
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "South mopur, Nellore Rural, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8128649,
              14.4316724
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Penubarthi, Nellore Rural, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98645599999999,
              14.4425987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondlapudi, Nellore Rural, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9126236,
              14.4593441
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Madarajagudur, Nellore Rural, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98645599999999,
              14.4425987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Inukurthy, Podalakur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.70072110000001,
              14.3348463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nedurupalle, Podalakur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7119419,
              14.5192707
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gundavolu, Rapur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.53013440000001,
              14.282143
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tegacherla, Rapur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4141214,
              14.3853291
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gonupalli, Rapur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4700369,
              14.3436952
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Akilavalasa, Rapur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4816378,
              14.2964954
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Utukuru, Sydapuram, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7431862,
              14.1758227
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Indupr, Alluru, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0533276,
              14.6831434
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mungamuru, Bogole, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0178598,
              14.8069508
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "C.R palem, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0848503,
              14.7623775
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "padimati palem, sangam, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7917195,
              14.5706739
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Marripadu, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3502201,
              14.6884713
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Vasili, Atmakur, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6733648,
              14.6132097
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Battepadu, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6116069,
              14.5845647
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Chennuru, Dagadarthi, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8796342,
              14.6667612
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD Annagari palem, kavali, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.065576,
              14.8640767
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kotha palli, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4805832,
              14.5862224
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD chiramana, A.S Peta, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6707,
              14.684221
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bandaganipalli, Udayagiri, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3030398,
              14.8788018
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RBKNemalladinne, S.R. Puram, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.13662819999999,
              15.0146737
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "China machanur, Marripdu, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9192702,
              14.2580848
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "D.C palli, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5034293,
              14.6875773
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chilakala  marri, Annatha sagaram, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3345858,
              14.584959
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Varikunta padu, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4208154,
              14.9930288
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bukka puram, Vinjamuru, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6080967,
              14.7765275
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Utukuru, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.14142609999999,
              14.5757441
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Srikolanu, A.S Peta, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6707,
              14.684221
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anumasamudram, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6530174,
              14.6576266
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somavarappa padu, Jaladanki, SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5167763,
              14.4283366
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinnakraka, ,  SPSR Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8443798,
              14.8454627
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Oguru, Kandukur, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9570411,
              15.2351802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondamudusupalem, Kandukur, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.89618,
              15.1927009
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mannetikota, Ulavapadu, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0045811,
              15.1910566
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Baddipudi, Ulavapadu, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9269656,
              15.1160768
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Basireddy Palem, Gudluru, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.66003429999999,
              14.8350497
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Salipeta, Gudluru, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9015646,
              15.0730151
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Badevaripalem, Valetivaripalem, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.838778,
              15.192996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Polineni Palem, Valetivaripalem, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.75821250000001,
              15.1799417
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerrareddy Palem, Lingasamudram, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4833364,
              13.6281067
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedapavani, Lingasamudram, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8156667,
              15.0049852
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Veerannakollu, Nagasamudram, Kaligiri, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6333674,
              14.8151167
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Velagapadu, Kaligiri, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.72284859999999,
              14.7844891
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Satyavolu, Kondapuram, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.757862,
              14.9652371
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thurpu yerraballi, Kondapuram, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6012473,
              14.9964022
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerukollu, Duttalur, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.461023,
              14.8205395
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothapeta, Duttalur, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4767803,
              14.9209443
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thotalacheruvupalli, Varikuntapadu, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4227271,
              14.9927541
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ramapuram, Varikuntapadu, SPS Nellore, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.42269689999999,
              15.0290888
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chillakallu-2, Tirumalagiri, Jaggaiahpeta, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.13867139999999,
              16.8935957
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Balusupadu, Jaggaiahpeta, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0465067,
              16.9212082
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Indugapulli, Vatsavai, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.24452339999999,
              16.9803242
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chitela, Vatsavai, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.24452339999999,
              16.9803242
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lingalapadu, Nandigama, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2404959,
              16.7657488
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gollamudi, Nandigama, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3519443,
              16.782683
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rudravaram, Nandigama, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3505437,
              16.8012371
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sanagapadu, Penuganchiprolu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2875032,
              16.8178965
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anigandlapadu-1, Penuganchiprolu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2873011,
              16.893726
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kollikulla, Penuganchiprolu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.26377049999999,
              16.855174
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gottimukkala, Kanchikacharla, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3966269,
              16.6879459
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Paritala-1, Kanchikacharla, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4090096,
              16.6572472
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kodavatikallu, Chandarlapadu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.194132,
              16.6436452
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Veladikothapalem, Chandarlapadu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2018485,
              16.6929864
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thuralpadu, Chandarlapadu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2018485,
              16.6929864
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jupudi, Ibrahimpatnam, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.497996,
              16.6042459
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kethanakonda-2, Ibrahimpatnam, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.45904,
              16.6179796
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Guntupalli, Ibrahimpatnam, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.54825120000001,
              16.5665295
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peedapuram, Veerullapadu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3948693,
              16.8192058
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bodawada, Veerullapadu, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.36975840000001,
              16.7378697
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganapavaram, Mylavaram, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.69001519999999,
              16.7367354
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Velvadam-1, Mylavaram, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6628624,
              16.7610364
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Cheruvu Madhavaram, G.Konduru, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5480118,
              16.6911248
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "G.Konduru-1, G.Konduru, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6801338,
              16.725842
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ramachandrapuram, A.Konduru, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65211390000002,
              16.9659754
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maddulaparva, Reddigudem, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7491563,
              16.909046
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rangapuram, Reddigudem, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7271931,
              16.8563444
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anneraopeta, Reddigudem, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7580104,
              16.8861145
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KAKARLA, Tiruvuru, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63546649999999,
              17.0528791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anjaneyapuram, Tiruvuru, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.62436629999999,
              17.0582112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mallela, Tiruvuru, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6937177,
              17.0584873
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Konijerla, Gampalagudem, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4045819,
              17.0482765
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Penugolanu1, Gampalagudem, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4368245,
              16.9778743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondaparva, Vissannapeta, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.83777889999999,
              16.889666
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narasapuram-1, Vissannapeta, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.78744300000001,
              16.9382417
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K.Tadepalli, Vijayawada Rural, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6174393,
              16.479932
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ayodhyanagar, Vijayawada Urban, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6286678,
              16.5276617
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nunna, Vijayawada Rural, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6853986,
              16.5762873
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vijayawada, Vijayawada,  NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6696275,
              16.5160162
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mylavaram, Mylavaram, NTR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6414006,
              16.7560489
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "DIDUGU, AMARAVATHI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2976316,
              16.5803932
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MALLADI, AMARAVATHI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2781262,
              16.5823945
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHERUKUMPALEM CHINTAPALLI, ATCHAMPETA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.13938689999999,
              16.6907056
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TALLACHERVU, ATCHAMPETA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.11885819999999,
              16.6284091
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHENGISKHANPET, EDLAPADU, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2250415,
              16.1700107
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KARUCHOLA, EDLAPADU, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2619921,
              16.1517761
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GURIJAVOLU, NADENDLA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1847167,
              16.1748603
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "IRLAPADU, NADENDLA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.11151439999999,
              16.1823041
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GOGULAPADU, GURAZALA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7070224,
              16.5343779
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TELUKUTLA, GURAZALA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6017809,
              16.6345338
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MITTAGIDIPADU, Rentachintala, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5524538,
              16.5544667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RENTALA, Rentachintala, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5645585,
              16.530282
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MUGACHINTAPALEM, BOLLAPALLI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5290804,
              15.6286197
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PERURIPADU, BOLLAPALLI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.65499179999999,
              16.0955543
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AGNIGUNDALA, IPURU, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7400383,
              16.1831795
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BOMMARAJUPALLI, IPURU, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.78764489999999,
              16.2723372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dharmavaram,  DURGI, Palnadu , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5772008,
              16.4451264
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "POLLIPALLI, DURGI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5406517,
              16.4245166
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kambhampadu 1, Macherla, Palnadu , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4669717,
              16.4589519
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thallapali, Macherla, Palnadu , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4365006,
              16.4760816
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KALLAKUNTA, VELDURTHI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9292916,
              15.5533014
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SIRIGIRIPADU, VELDURTHI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3240228,
              16.3219493
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GAMALAPADU, Dachepalli, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7154539,
              16.61269
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MUTHYLAMPADU, Dachepalli, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7974535,
              16.6146259
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PILLUTLA, Machavaram, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.90265029999999,
              16.539469
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PINNELLI-2, Machavaram, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65564700000002,
              16.523166
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "JONNALAGADDA, NARASARAOPET, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.07304909999999,
              16.2394415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KONDAKAVURU, NARASARAOPET, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0283415,
              16.1268767
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KARUMANCHI, SAVALYAPURAM, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8898816,
              16.0578902
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KOTHALURU, SAVALYAPURAM, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.811311,
              16.157415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHIMALAMARRI, NEKARIKALLU,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9956754,
              16.3536831
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GUNDLAPALLI 2, NEKARIKALLU,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8823148,
              16.4097298
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "EDWARDPETA, ROMPICHERLA,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.91257390000001,
              16.2094457
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MACHAVARAM, ROMPICHERLA,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.91257390000001,
              16.2094457
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GUDIPADU (VD DODLERU ), KROSURU, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1386212,
              16.5414403
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PEESAPADU (VD KROSURU), KROSURU, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.14146269999999,
              16.5002136
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KASIPADU(VD 75-TYALLURU), PEDAKURAPADU,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.28335129999999,
              16.5538622
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "LAGADAPADU ( VD GARAPADU ), PEDAKURAPADU,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2105191,
              16.5071112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GADEVARIPALLI,  KAREMPUDI,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.71895409999999,
              16.4303446
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PETASANIGANDLA, KAREMPUDI,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.71895409999999,
              16.4303446
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHENNAYAPALEM, PIDUGURALLA,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8266601,
              16.5019766
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "JANAPADU-1, PIDUGURALLA,  PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8852221,
              16.4791794
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kandipadu, Bellamkonda, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.01087129999999,
              16.5340263
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mannesulthan Palem, Bellamkonda, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0072925,
              16.4770987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kubadpuram, RAJUPALEM, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9626354,
              16.4683884
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Uppalapadu, RAJUPALEM, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00005759999999,
              16.3855476
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chagantivaripalem, MUPPALLA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.099842,
              16.3231693
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rudravaram, MUPPALLA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0902531,
              16.3763823
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "L.GARLAPADU, SATTENAPALLI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1492601,
              16.3960329
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RENTAPALLA, SATTENAPALLI, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1351821,
              16.4729803
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RAVVARAM, NUZENDLA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7294714,
              15.8855691
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "V.APPAPURAM, NUZENDLA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7411237,
              15.9261267
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedakancherla, VINUKONDA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.80866209999999,
              16.0424122
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thimmayapalem, VINUKONDA, PALNADU, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.70072110000001,
              16.0328779
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gurazala, Gurazala, Palnadu, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6371314,
              16.5580212
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chakalabelagam, Parvathipuram, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4300877,
              18.7829598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Seethanagaram, Seethanagaram, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4300877,
              18.7829598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palakonda, Palakonda, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7535802,
              18.602112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Udayapuram, Kurupam, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.69507589999999,
              18.9530524
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kurupam, Kurupam, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5532656,
              18.8661991
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kasipatanam, Makkuva, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2964174,
              18.652913
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pachipenta, Pachipenata, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1126455,
              18.4795915
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Viswanadhapuram, Pachipenata, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4300877,
              18.7829598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Panchali, Pachipenata, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4300877,
              18.7829598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thonam, Salur, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.14077640000001,
              18.6380765
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SALUR, SALUR, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.20394189999999,
              18.5169856
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PARVATHIPURAM, PARVATHIPURAM, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4300877,
              18.7829598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KURUPAM, KURUPAM, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5532656,
              18.8661991
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PALAKONDA, PALAKONDA, Parvathipuram Manyam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7535802,
              18.602112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K S Palli-1, Giddalur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mundlapadu-1, Giddalur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gadikota, Giddalur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.909245,
              15.2583059
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Uyyalawada, Giddalur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Akaveedu-2, Racherla, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.94155239999999,
              15.5624619
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gudimetta, Racherla, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nallamadugula, CS Puram, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vaggam Palli, Pamur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pandillapalli, Bestavaripeta, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1026315,
              15.5503073
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "JC.Agraharam, Bestavaripeta, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pitikayagulla, Bestavaripeta, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Veligandla, Konakanamitla, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4885227,
              15.6498931
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Katragunta, Konakanamitla, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pannuru, Marripudi, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7128189,
              15.5337447
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chilamkuru, Marripudi, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.78834549999999,
              15.5145786
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chimata, Marripudi, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7119419,
              15.4770179
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kakarla, Marripudi, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7498014,
              15.5236394
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gundalsamudram, Marripudi, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kambhalapadu, Podili, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Madalavaripalem, Podili, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.56174879999999,
              15.6160719
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thallur, Kanigiri, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2651514,
              15.7378884
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinna Irlapadu, Kanigiri, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peda Irlapadu, P C Palli, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7240763,
              13.6630049
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thalakondapadu, P C Palli, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7240763,
              13.6630049
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Guntupalli, P C Palli, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7240763,
              13.6630049
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Muppalapadu, H.M.Padu, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Hazeepuram, H.M.Padu, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gudipatipalli, H.M.Padu, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VD-Gajjalakonda, Markapur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.391367,
              15.7518595
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VH-Markapur, Markapur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RLU-Meerjapeta, Tarlupadu, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rbk- Nikarampalli, Markapur, Markapur, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2699779,
              15.737655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kurichedu, Kurichedu, Prakasham, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5773632,
              15.9047135
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Inamanamellur, Maddipadu, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.07292919999999,
              15.6014477
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ghadiyapudi, Maddipadu, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0214829,
              15.6206676
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KARAVADI, Ongole, Prakasham, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1131857,
              15.5450069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "ALOOR, Kothapatnam, Prakasham, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.11788489999999,
              15.5039955
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "R.L.Puram, Chimakurthy, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8201244,
              15.5716858
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nippatlapadu, Chimakurthy, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.76311849999999,
              15.6017053
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K.V.Palem, Chimakurthy, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8671813,
              15.5855375
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bandlamudi, Chimakurthy, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.89757949999999,
              15.606506
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anakarlapudi, Kondapi, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8611832,
              15.4441397
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinakandlagunta, Kondapi, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.85591889999999,
              15.4131545
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Malapadu, Ponnaluru, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7080849,
              15.2422815
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ravulakollu, Ponnaluru, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.80235739999999,
              15.3185082
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Wollapalem, Sinagarayakonda, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.07304909999999,
              15.2418053
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Singarayakonda, Sinagarayakonda, Prakasam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0205089,
              15.2476081
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Srinivasacharyulapeta, Amadalavalasa, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8759712,
              18.4489436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Cheemalavalasa, Amadalavalasa, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.85724259999999,
              18.4212043
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Muddada,  Etcherla,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8694752,
              18.2385697
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ajjaram, Etcherla,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8290562,
              18.2123277
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BURAVALLI, GARA, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0550885,
              18.3313111
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AMBATIVANIPETA, GARA, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0550885,
              18.3313111
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PATHRUNIVALASA, Srikakulam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.3631321,
              18.7150084
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "NAIRA, Srikakulam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9551274,
              18.390999
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BORIGIVALASA, Narasannapeta, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.044804,
              18.4048214
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VN PURAM, Narasannapeta, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9982326,
              18.401323
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHELLAYYAVALASA, POLAKI, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1019597,
              18.3763322
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "JADURU, POLAKI, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0810159,
              18.4373775
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KURIGAM, KOTTURU,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9747668,
              18.810014
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "NERADI, kotturu,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9203047,
              18.7370538
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "miriyapalli,  lnpeta,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.942742,
              18.638109
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "karakavalasa,  lnpeta,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9929431,
              18.6021438
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Shalantri, Sarubujjili, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9115589,
              18.5101237
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palavalasa, Sarubujjili, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.92380659999999,
              18.4820711
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kollivalasa, Burja, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8322254,
              18.5058237
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palavalasa, Burja, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7955818,
              18.5647288
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jangalapeta, Burja, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8642004,
              18.4794153
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Santhavuriti, G.Sigadam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.68138359999999,
              18.3778313
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TD Valasa, G.Sigadam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.68138359999999,
              18.3778313
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rapaka, Ponduru, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.77766869999999,
              18.3492061
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lolugu, Ponduru, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7826776,
              18.3074808
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Krishnapuram, Ranasthalam,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.70383489999999,
              18.1975758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pathivadapalem, Ranasthalam,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.70383489999999,
              18.1975758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothakunkam, Laveru, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.71967160000001,
              18.3063978
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Murapaka - 2, Laveru, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.79226489999999,
              18.2286082
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kotturu, Kotturu, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9173367,
              18.5421915
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sompeta, Sompeta, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.5850037,
              18.9420835
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tekkali, Tekkali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.2299771,
              18.6051444
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Srikakulam, Srikakulam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.89380179999999,
              18.2949165
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ichapuram, Ichapuram, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.68437229999999,
              19.1127596
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Eedupuram 1, Ichapuram, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.701144,
              19.0669366
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chandiputtuga, Kaviti, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.6819074,
              19.0491935
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Silagam, Kaviti, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.64268059999999,
              19.0214016
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Baruva, Sompeta, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.5837904,
              18.8849403
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BRC Puram, Sompeta, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.5471589,
              18.9253633
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kolluru, Kanchili, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.5723115,
              19.0078424
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddasrirampuram, Kanchili, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.6220107,
              18.9809562
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Allukhola, Palasa, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.38010489999999,
              18.8070432
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganguvada, Palasa, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4107008,
              18.7821542
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Baligam, Mandasa, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4614237,
              18.8699722
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narayanapuram, Mandasa, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4614237,
              18.8699722
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Temburu, Nandigam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.3035831,
              18.6871245
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dimmidijola, Nandigam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.2673851,
              18.7171687
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Amalapadu,  Vajrapukothuru,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.39732939999999,
              18.6390516
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Akkupalli, Vajrapukothuru,  Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4874743,
              18.751131
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K. Kothuru, Tekkali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.23446570000002,
              18.7028487
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narsingapalli, Tekkali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.2259036,
              18.6619117
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Santhabommali, Santhabommali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.2079298,
              18.5360844
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "DG Puram, Santhabommali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.2079298,
              18.5360844
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nimmada, Kotabommali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1144854,
              18.4581491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tilaru, Kotabommali, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0728979,
              18.4708966
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Allada, Jalumuru, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.97582650000001,
              18.4806438
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Syirigam, Jalumuru, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0400654,
              18.5111244
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Venkatapuram, Saravakota, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0558296,
              18.5511643
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ramakrishnapuram, Saravakota, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.13616789999999,
              18.5882966
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ambavili, Hiramandalam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.96020399999999,
              18.6310343
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kallata, Hiramandalam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.00847979999999,
              18.7124184
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Themburu, Pathapatnam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1263623,
              18.6314777
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RL Puram, Pathapatnam, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0504419,
              18.7540526
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jannibandha, Meliaputti, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1734287,
              18.7716214
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Karajada, Meliaputti, Srikakulam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.2515861,
              18.7226031
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sanjeevapuram, Bathalapalli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7301859,
              14.5530316
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ramapuram, Bathalapalli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8557204,
              14.4719534
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chillavaripalli, Tadimarri, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8962781,
              14.6292231
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tadimarri, Tadimarri, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8593518,
              14.5616427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Darsinamala, Dharmavaram, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7201031,
              14.4124551
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KodavandlaPalli, Mudigubba, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9959444,
              14.3510995
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mallepalli,  Mudigubba, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9959444,
              14.3510995
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nyamaddala, C.K.Palli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5877654,
              14.2783989
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganginepalli, C.K.Palli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7966975,
              14.278509
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "M.C.Palli, Ramagiri, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.50296639999999,
              14.3096006
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peruru 2 (Dubbarlapalli), Ramagiri, Sri Satyasai Maddalacheruvu, Kanaganapalli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5255245,
              14.4462143
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maddalacheruvu 2 (Banukota), Kanaganapalli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5255245,
              14.4462143
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Talamarla, Kothacheruvu, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7244626,
              14.2140989
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bandlapalli, Kothacheruvu, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6822442,
              14.1127743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Marala, Bukkapatnam, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.93959699999999,
              14.291568
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Siddarampuram, Bukkapatnam, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.86531260000001,
              14.2706193
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL, Dharmavaram, Dharmavaram, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7160711,
              14.4261558
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL, Kothacheruvu, Kothacheruvu, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7652346,
              14.1883776
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bullasamudram, Madakasira, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3266991,
              13.9119844
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KADIREPALLI, Madakasira, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2230992,
              13.952838
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "IRIGEPALLI, Agali, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0409755,
              13.7871685
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "INAGALURU, Agali, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0434934,
              13.8358767
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "M.RAYAPURAM, Rolla, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.03315979999999,
              13.886383
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KAKI, Rolla, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.12175979999999,
              13.7847416
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Madanakunta, Amarapuram, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.9807302,
              14.1239335
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K Sivaram, Amarapuram, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.9807302,
              14.1239335
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Madanakunta, Gudibanda, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1058705,
              13.9754375
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mandalapalli, Gudibanda, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.09098089999999,
              13.9279242
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "GANGAMPALLI, Gorantla, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7705127,
              13.9846018
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "MALLAPALLI, Gorantla, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7705127,
              13.9846018
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "JULUKUNTA, Somandepalli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.53614619999999,
              13.9712856
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "THUNGODU, Somandepalli, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6081315,
              14.0106722
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Konduru, Lepakshi, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60771969999999,
              13.8039436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kodipalli, Lepakshi, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60771969999999,
              13.8039436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somaghatta, Chilamathur, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8195739,
              13.8689886
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Koduru 1, Chilamathur, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0372849,
              16.0034471
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Seegipalli, Parigi, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4609304,
              13.8922114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Moda, Pariigi, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4609304,
              13.8922114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Maluguru, Hindupur, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.553344,
              13.8924637
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pulakunta, Hindupur, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.70156639999999,
              14.6259156
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Balasamudram, Tanakal, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2162833,
              13.885743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ethodu, Tanakal, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.15074229999999,
              13.8968036
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Javakulakothapalli, Amadaguru, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0224776,
              13.8881668
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thummala, Amadaguru, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0707395,
              13.9351454
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thogatavaripalli, Talupula, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.25920099999999,
              14.2411289
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Lakkasamudram, Talupula, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1393397,
              14.2731016
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mekalacheruvu, Nambulapulakunta, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4119492,
              14.0557623
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Velichalamala, Nambulapulakunta, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4119492,
              14.0557623
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mavaturu, Penukonda, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5046101,
              14.0408499
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Duddebanda, Penukonda, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.590597,
              14.1764627
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "R Locherla, Roddam, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4286016,
              14.0924576
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Reddipalli, Roddam, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4287157,
              14.0926193
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vengalammacheruvu, Puttaparthy, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8109623,
              14.168813
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedaballi1, Puttaparthy, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8109623,
              14.168813
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Donnikota2, Nallamada, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9837469,
              14.141446
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Reddipalli, Nallamada, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0366614,
              14.1765034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Puttaparthi, Puttaparthy, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8109623,
              14.168813
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kodamanayanipalyam, Kadiri, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1610702,
              14.1137566
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yerradoddi, Kadiri, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1364889,
              14.1672212
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mittapalli, Obuladevaracheruvu, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0492551,
              14.0589289
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gowrapuram, Obuladevaracheruvu, Sri SatyasaiUbicherla, Nallacheruvu, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9417465,
              13.9956761
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "M.Agraharam, Nallacheruvu, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4372084,
              15.262947
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Katarupalli, Gandlapenta, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2490385,
              14.1142348
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Somayajulapalli, Gandlapenta, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.27608939999999,
              14.0741476
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL, Kadiri, Kadiri, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1562746,
              14.1122397
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL, Penukonda, Penukonda, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5970586,
              14.0849002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CADDL, Madakasira, Madakasira, Sri Satyasai, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.27544259999999,
              13.94083
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thalarivettu, BN Kandriga, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kukkambakam, BN Kandriga, Tirupati Santhavellore, Varadaiahpalem, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chilamathuru, Varadaiahpalem, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thondawada, Chandragiri, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3159343,
              13.5880077
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mittakandriga, Ramachandrapuram, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4237948,
              13.5069709
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gangireddipalli, Ramachandrapuram, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4017881,
              13.5391757
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Chinnagottigallu, Chinnagottigallu, Tirupati Bhakarapeta, Chinnagottigallu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1547539,
              13.6534791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bodevandlapalli, Yerravaripalem, Tirupati Chilamanur, Balayapalli, Tirupati Balayapalli, Balayapalli, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kommanetur, Gudur, Tirupati Momidi, Chillakur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Perumalapalli, Tirupati Rural, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3503509,
              13.6063582
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothuru, Tirupati Rural, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4707401,
              13.5829739
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Naidupeta, Naidupeta, Tirupati Menakur, Naidupeta, Tirupati Vijjavaripalem, Ojili, Tirupati Karabalavolu, Ojili, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4309039,
              13.6261279
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vallivedu, Pakala, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0694487,
              13.5282095
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pantapalli, Pakala, Tirupati Doravarisathram, Doravarisatram, Tirupati Mavillapadu, Doravarisatram, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5211001,
              13.5807913
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pellakuru, Pellakur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Punabaka, Pellakur, Tirupati Kovanur, KVB Puram, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Erikambattu, Narayanavanam, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Aranyam Kandriga, Narayanavanam, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6417893,
              13.4135878
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ramagiri, Pichatur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SR Kandriga, Pichatur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Puttur, Puttur, Tirupati PR Mangalam, Puttur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5521971,
              13.4381376
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Renigunta, Renigunta, Tirupati MD Puttur, Yerpedu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.59311799999999,
              13.6371216
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Punguru, Yerpedu, Tirupati SBR Puram, Vadamalapeta, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5160801,
              13.478951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TC Agraharam, Vadamalapeta, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5469968,
              13.5787034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Surutupalli, Nagalapuram, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SS Puram, Nagalapuram, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Sathyavedu, Sathyavedu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Cherlopalli, Srikalahasthi, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191209,
              13.6288841
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Srikalahasthi, Srikalahasthi, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191209,
              13.6288841
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Konathaneri, Thottambedu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chittathur, Thottambedu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Sullurupeta, Sullurupeta, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.409832,
              13.621579
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mangalampadu, Sullurupeta, Tirupati Damanellore, Tada, Tirupati Gunapatipalem, Chittamur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.96473309999999,
              13.9336567
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Eswarawaka, Chittamur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Vakadu, Vakadu, Tirupati Balireddipalem, Vakadu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pulugodu, Dakkili, Tirupati Dakkili, Dakkili, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4310052,
              13.6244611
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Venkatagiri, Venkatagiri, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.43344429999999,
              13.6506863
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kalapadu, Venkatagiri, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.58843689999999,
              13.9972651
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Chandragiri, Chandragiri, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4182108,
              13.6191188
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Gudur, Gudur, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6445398,
              13.856854
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, MR Palli, Tirupati Urban, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4067338,
              13.6159292
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Sathyavedu, Sathyavedu, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191795,
              13.6287557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Srikalahasthi, Srikalahasthi, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4191209,
              13.6288841
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Sullurupeta, Sullurupeta, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.409832,
              13.621579
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "AVH, Venkatagiri, Venkatagiri, Tirupati , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.43344429999999,
              13.6506863
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T.NAGARAPALEM, Bheemili, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.412646,
              17.938372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SINGANABANDA, Bheemili, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4524802,
              17.8888698
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gorapalli, Pendurthi, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1773875,
              17.8333261
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedagadi, Pendurthi, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1776284,
              17.7965827
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gandhavaram, Padmanabham, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.27802779999999,
              17.9812861
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Korada, Padmanabham, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3799406,
              17.9976854
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vemulavalasa, Anandapuram, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.38094219999999,
              17.8949109
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kolavanipalem, Anandapuram, Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2530531,
              17.8897265
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RADDL Visakhapatam, Visakhapatnam,  Visakhaptanam, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2184815,
              17.6868159
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vizianagaram, Vizianagaram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.39555059999999,
              18.1066576
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nelivada, Bondapalli, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3745687,
              18.204703
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Garudabilli, Bondapalli, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.35355899999999,
              18.2043417
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sthivada, Nellimarla, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4482228,
              18.1647561
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondagumpam, Nellimarla, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.418992,
              18.1874149
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Govindapuram, Pusapatirega, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.61189399999999,
              18.0939568
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Challavani thota, Pusapatirega, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6196138,
              19.087408
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chakivalasa, Bhogapuram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.48835780000002,
              18.0127802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Savaravilli, Bhogapuram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4599109,
              17.9870977
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pedathadivada, Denkada, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4409362,
              18.0843612
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "JONNADA, Denkada, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4016388,
              18.0290168
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Mettapalli, Cheepurupalli, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.62496159999999,
              18.295261
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Karlam, Cheepurupalli, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6486698,
              18.302361
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bheemavaram, Merakamudidam, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5326722,
              18.42116
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ootapalli, Merakamudidam, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4622803,
              18.4115444
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Davalapeta, Gajapathinagaram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.337057,
              18.2802222
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "M.GUMADAM, Gajapathinagaram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3609537,
              18.3131984
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "T.Boorjavalasa, Dathirajeru, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3602389,
              18.5277948
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ingilapalli, Dathirajeru, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3014319,
              18.3603987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Iddannavalasa, Mentada, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2624579,
              18.3089785
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "UDDANGI, Mentada, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.235879,
              18.4008806
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "chodavaram, Gurla, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.50945519999999,
              18.2382219
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Jammupeta, Gurla, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.45415129999999,
              18.2104937
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vedullavalasa, Garividi, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5225421,
              18.3568557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dummeda, Garividi, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5443287,
              18.2418335
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Korlam, Gantyada,  Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2733459,
              18.1484572
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "P.S.R.Puram, Gantyada,  Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2551043,
              18.1209077
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Attada, Jami, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3108249,
              18.0683791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VR Palem, Jami, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.27569989999999,
              18.0714232
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kothavalasa 3, Kothavalasa, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3857568,
              18.083999
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Musiram, Kothavalasa, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1903382,
              17.8899871
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RELLI Gowramma peta, L.Kota, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1533958,
              18.0196895
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chanduluru, L.Kota, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1533958,
              18.0196895
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pothanapalli, S.Kota, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1393995,
              18.1111633
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kummapalli, Vepada, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0817871,
              18.0118092
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Alugubilli, Vepada, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0817871,
              18.0118092
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PAKKI, Bobbili, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.47969119999999,
              18.5976746
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dibbagudivalasa, Bobbili, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.34821459999999,
              18.5967789
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bhusaivalasa, Ramabhadrapuram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2746836,
              18.4716284
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kottakki, Ramabhadrapuram, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2352097,
              18.5137726
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Locharla, Terlam, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5323391,
              18.4850147
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pamulavalasa, Terlam, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5706312,
              18.4815162
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Koduru, Badangi, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.39496319999999,
              18.4728997
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Paltheru, Badangi, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3987481,
              18.5214901
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Soperu, Rajam, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.634508,
              18.3882975
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Anthakapalli, Rajam, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6827094,
              18.4354307
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kodisa, Regidi Amadalavalasa, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6601104,
              18.5543259
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thokalavalasa, Regidi Amadalavalasa, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7124242,
              18.505879
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chittaripuram, Santhakavity, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8928511,
              18.3124634
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bodduru, Santhakavity, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.39555059999999,
              18.1066576
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kopparavalasa, Vangara, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.573934,
              18.6530256
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sivvam, Vangara, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5266765,
              18.7193408
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VIZIANAGARAM, VIZIANAGARAM, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.39555059999999,
              18.1066576
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHEPURUPALLI, CHEPURUPALLI, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.56830099999999,
              18.3105327
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KOTTAVALASA,  KOTTAVALASA, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1903382,
              17.8899871
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BOBBILI, BOBBILI, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.356381,
              18.5727886
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "RAJAM, RAJAM, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.66077399999999,
              18.4497303
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bhimavaram, Bhimavaram, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.521241,
              16.544893
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Undi, Undi, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4672526,
              16.5859868
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Narsapuram, Narsapuarm, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.64734399999999,
              16.6025946
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Akividu, Akividu, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3767431,
              16.5817724
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Palakole, Palakole, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.72534739999999,
              16.5179401
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Attili, Attili, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6078635,
              16.6870295
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganapavaram,  Ganapavaram,  W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.46052019999999,
              16.7005162
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Penumantra,  Penumantra,  W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6504786,
              16.643508
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Penugonda, Penugonda, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7456892,
              16.6561394
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Poduru,  Poduru,  W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7532872,
              16.5887445
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tadepalligudem, Tadepalligudem, W.G.District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5316033,
              16.8072523
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Gopavaram, Proddatur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5730079,
              14.7844632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Upparapalli, Proddatur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6113885,
              14.7410457
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Proddatur, Proddatur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5541053,
              14.752624
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Venkupalli, Duvvur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.65394200000001,
              14.8409522
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Chinthakunta-2, Duvvur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7029766,
              14.7833806
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Devagudi, Jammalamadugu, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4489062,
              14.786511
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "S.Uppalapadu, Jammalamadugu, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3871054,
              14.9066349
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Dommaranandyala , Mylavaram, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.36573419999999,
              14.8648568
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thalamanchipatnam, Mylavaram, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3297752,
              14.8551624
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "K.Thimmapuram, MUDDANUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4155033,
              14.6850841
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "VELPUCHERLA, MUDDANUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3826765,
              14.6259964
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondapuram-1, R S Kondapuram , YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1935866,
              14.7749009
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Tallaprodutur-1, R S Kondapuram , YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1935866,
              14.7749009
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "N.YERRABALLI, S MYDUKUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8265217,
              14.7412665
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "ANNALURU, S MYDUKUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7321005,
              14.7264993
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BHADRIPALLI, CHAPADU, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6581303,
              14.7307175
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "PEDDAGURUVALURU, CHAPADU, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6581303,
              14.7307175
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kalamalla, Yerraguntla, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.47093199999999,
              14.7093885
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kommaddi, Veerapunayunipalli, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4902195,
              14.6107788
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "THONDALADINNE, RAJUPALEM, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.61327349999999,
              14.8561631
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TANGUTURU, RAJUPALEM, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1794684,
              14.2915409
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "J.KOTHAPALLI, PEDDAMUDIUM, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.45047559999999,
              15.0117411
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rampadu,Obulapuram, SAKN, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.948623,
              15.0392496
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kondrajupalli, SAKN, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8382644,
              14.5767233
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kalasapadu, Kalasapadu, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9435503,
              15.1039088
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "E Tahmballapalli, Kalasapadu, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9160943,
              15.1485648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ganugapenta, Porumamilla, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.09274839999999,
              14.8590881
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rangasamudram 2, Porumamilla, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9764656,
              14.9851973
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SAMBATUR, KAMALAPURAM, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6430653,
              14.6415088
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "DEVARAJUPALLI, KAMALAPURAM, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.64496900000002,
              14.545983
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "TAPPETLA, VALLUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.701559,
              14.5794388
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "LEBAKA, VALLUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6965972,
              14.5411822
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pennaperuru, Vontimitta, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0249516,
              14.4420878
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Vontimitta, Vontimitta, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0259293,
              14.3958667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Ippapenta 1, C.K. Dinne, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7873429,
              14.432844
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rasoolpalli, C.K. Dinne, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7758341,
              14.4250582
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pendlimarri, C.K. Dinne, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.78894059999999,
              14.4324331
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Machunuru, Pendlimarri, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6136077,
              14.5057921
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Yellatur, Pendlimarri, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6398677,
              14.443955
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Patha Kadapa, Kadapa, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.83684869999999,
              14.4977388
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "ANJANEYA KOTTALU, KHAJIPET, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.77891919999999,
              14.6677836
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHEMULLAPALLI, KHAJIPET, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7532884,
              14.6587411
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "SHIVALAPALLI, CHENNUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.792467,
              14.5654488
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BALASINGANAPALLI, KANAPARTHI, CHENNUR, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.792467,
              14.5654488
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "palugurallapalli , B mattam, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.880062,
              14.8191384
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thotlapalli , B mattam, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8382644,
              14.5767233
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "b kodur, B kodur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9730553,
              14.8844489
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "payalakunta , B kodur, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0196143,
              14.8739373
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Puttayapalli, Badvel, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.05974049999999,
              14.7304949
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kongalaveedu, Badvel, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0390799,
              14.681101
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kaluvapalli, Gopavaram, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.04755589999999,
              14.8223998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Rachayapeta, Gopavaram, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1534422,
              14.6620676
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Thambalagondi, Atloor, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.05462210000002,
              14.5579746
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Reddypalli, Atloor, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.05462210000002,
              14.5579746
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "kumbagiri, Atloor, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0397862,
              14.5999653
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Muthukuru, Atloor, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.05462210000002,
              14.5579746
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "madapuru, Atloor, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.05462210000002,
              14.5579746
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "vanthatipalli, SIDHOUT, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9632996,
              14.4694087
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Nagulagttapalli, Chakrayapeta, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4991247,
              14.2620071
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Kuppam, Chakrayapeta, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.516602,
              14.2117537
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Muthukuru, Vempalli, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4557919,
              14.3642978
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Bakkannagaripalli, Vempalli, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3899108,
              14.3313295
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Sunkesula, Simhadripuram, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.21088859999999,
              14.6525408
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Pydipalem, Simhadripuram, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.16454089999999,
              14.6190069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Peddakudala, Lingala, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1632037,
              14.4858517
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "Komannuthala, Lingala, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0093272,
              14.5092017
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "BUCHUPALLI, THONDURU, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2729584,
              14.6077254
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "CHAGALERU, VEMULA, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3671565,
              14.3989089
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KADAPA, Kadapa, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8242089,
              14.4673154
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "warnings",
          "asset": {
              "id": "KADAPA, Kadapa, YSR, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8242089,
              14.4673154
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispenasry, Borivanka, Tekkali, Srikakulam District-532322, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.66698769999999,
              18.9830675
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Polyclinic, 1st floor, Near BSNL Office, Fort back side, Vizianagaram PIN-535002, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4124587,
              18.1102747
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Area Veterinary Hospital Near Fire Station, Nakkapalli Village, Nakkapalli Mandal, Anakapalli District, PIN Code: 531081, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.7154634,
              17.4072904
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Area Veterinary Hospital, Near by Govt. High School, Atchutapuram Village, Atchutapuram Mandal, Anakapalli District PIN Code: 531011, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.97911909999999,
              17.5637797
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Office of the Deputy Director (AH) Veterinary Hospital Campus Opp ITDA, Post Office, Rampachodavaram, PIN Code: 533288, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.78041979999999,
              17.438239
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Office of the Assistant Director (AH) Area Veterinary Hospital Beside MPDO Office Addateegal, PIN Code: 533428, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.02246350000001,
              17.475937
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Assistant Director(AH), Area Veterinary Hospital (AVH) Zilla Parishad High School Road, Prathipadu Pin Code : 533432, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1846508,
              17.2318726
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Veterinary Asst. Surgeon., Veterinary Dispensary, Thetagunta Beside Electric Substation Tuni (M) Pin Code: 533406, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.44209959999999,
              17.3140411
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH) Area Veterinary Hospital, Jaggaihapeta -521175, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0646682,
              16.9177187
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH) Area Veterinary Hospital, Ibrahimpatnam-521456, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5118178,
              16.5984626
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH) Area Veterinary Hospital, Thiruvuru-521235, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6061147,
              17.1100522
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Korisapadu, Korisapadu Mandal, Bapatla District, Pin Code.523212, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.042722,
              15.7525204
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Medarametla, Somavarapadu, Korisapadu Mandal, Bapatla District, Pin Code.523212, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.02739389999999,
              15.7203593
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Pittalavanipalem, 522329, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6320135,
              15.9802888
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Jammulapalem(v), Bapatla(m) 522113, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4409967,
              15.9365023
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Rural Livestock Unit, Near Ankalamma Cheruvu, Cherukuru Village, Parchur Mandal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0937265,
              16.0958937
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Rural Livestock Unit, Near Water Tank, Veerannapalem Village, Parchur Mandal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3219567,
              15.9578328
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Back side of Police station, Karamchedu Mandal, Bapatla District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3216102,
              15.8830894
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Near NTR Statue, Daggupadu, Karamchedu (M), Bapatla District, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3162572,
              15.8845305
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Near ZPH, School, Makkenavaripalem village, Santhamaguluru mandal, Bapatla District, Pin code.523303, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9572748,
              16.0227228
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, K. Rajupalem village, Ballikurava mandal, Bapatla District, Pin code.523301, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1083001,
              16.0057989
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary-Bobbarlanka, Chodayapalem, (p.o)Repalle Mandal, Pin code: 522264, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8841283,
              15.949205
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary-Thummala, Thummala(p.o)Repalle Mandal, Pin code: 522264, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8412688,
              15.9085847
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Rural Livestock Unit, Challa reddy palem(v), Vetapalem(m) Bapatla (d) pin;-523187, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3268812,
              15.7716942
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Rural Livestock Unit, Gonasapudi(v), Chinnaganjam (m) Bapatla (d) pin:-523181, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2222073,
              15.7471443
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Gooty - 515401., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.634687,
              15.1220053
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Singanamala - 515435, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.71697309999999,
              14.8003189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Tadipatri - 515411., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0092047,
              14.9091024
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Guntakal - 515801., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3769836,
              15.1660706
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Kalyanadurgam - 515761., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1107476,
              14.5519565
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Settur - 515767., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.98145389999999,
              14.4499954
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Kambadur - 515765., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2314696,
              14.3449454
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Dharmavaram - 515671., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.71659249999999,
              14.4000475
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Kothacheruvu - 515133., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7652346,
              14.1883776
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Kadiri - 515591., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1610702,
              14.1137566
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Puttaparthi - 515134., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8109623,
              14.168813
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Madakasira - 515301., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.27544259999999,
              13.94083
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Gorantla - 515231 ., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7705127,
              13.9846018
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director(AH), AVH, Lepakshi - 515331., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60771969999999,
              13.8039436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/O Deputy Director, Animal Husbandry, Ambedkar junction, Near Head post office, Tekkali, Srikakulam District-532201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8942542,
              18.3063413
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/O Deputy Director, Animal Husbandry, VPC Campus, Near Ambedkar Statue, Srikakulam-532001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3029361,
              17.7038861
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Vizianagaram Division, VT.Agraharam, opp Reliance Petrol bunk, Vizianagaram 535004, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3869516,
              18.0860227
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Deputy Director (AH), Bobbili Division, opp Samsthanam High school, Raja college road, Bobbili 535558, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3500518,
              18.5708146
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "District Animal Husbandry Officer, Parvathipuram Manyam District, 1st floor F3& F4, RCM School, Opp RTC Complex, Parvathipuram, Pin No- 535501., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              null,
              null
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Assistant Surgeon, Veeragattam, Veeragattam Mandal, Pin Code -532460, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6561215,
              18.72413
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Behind SBI, Vishalakhshinagar, Hanumanthawaka, Visakhapatnam- 530043, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3068771,
              17.7618211
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital, Thotagaruvu, Opposite to Sri radha Krishna Kalyana Mandapam, Near ZPH School, Chinagadili, Visakhapatnam- 530040, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.29620369999999,
              17.7019982
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o TheArea Veterinary Hospital, Near Prema samajam, Gandhinagar, Anakapalli Dt. 531001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.9998777,
              17.6997834
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Area Veterinary Hopital, Opp.Seetaramanursing home, near old bus stop, chodavaram village, Chodavaram Mandal, Anakapalli Dt. 531036, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.93445229999999,
              17.8277288
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Area Veterinary Hospital, 5Road Junction, Beside Old Muncipal Office, Narsipatnam. 531116, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.60894669999999,
              17.67
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital, Araku, Arakuvaly Mandal ASR District- 531151, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.88010469999999,
              18.325654
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hopital, Chinthapalli, Chithapalli Mandal, ASR District-531111, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.3499325,
              17.8710309
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital, Sundriputt, Paderu Mandal ASR District-531024, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6267345,
              18.0732491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Deputy Director(AH), Veterinary Hospital Campus, Rajamahendravaram. Lakshmivarapu Pet, Seshayya Metta, Devichowk, Rajamahendravaram, A.P., Pin Code : 533101., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7677645,
              16.9936831
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director(AH), Veterinary Hospital Campus, Kovvur - 534350, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.727383,
              17.0125618
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Deputy Director(AH), Regional Animal Disease Diagnostic Laboratory, Kakinada, A.P., Pin Code : 533004 Room Location : Ground floor, Room No. 2, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2474648,
              16.9890648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Deputy Director(AH), Ramarao peta, Veterinary Hospital Road, JD Office Campus, Gate-1, Kakinada, Pin code - 533004, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.22708850000001,
              16.9663046
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Deputy Director(AH), Beside Pasuvula Hospital Amalpuram, AHD, Near Nalla Vanthena Amalapuram, Pincode - 533201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.02066320000002,
              16.5826526
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o AD (AH), Area Veterinary Hospital(AVH), Pasuvula Hospital Road, Ravulapalem, Pincode - 533238, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8423198,
              16.762483
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital(AVH) Tadepalligudem, Tadepalligudem Mandal, W.G.Dist Pin code 534101, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.53502979999999,
              16.8114968
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director, Animal Husbandry Office, Bhimavaram, Bhimavaram Mandal, W.G.Dist Pin:534201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.521241,
              16.544893
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director, Veterinary Hospital campus, opposite ASR stadium, pension line Pincode - 534005, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1156178,
              16.7163183
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Oppisite Fish market, Srinivasa center, Nuzvid, Eluru District - Pin code : 521201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8490357,
              16.7875689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Near rythu bazar, Machilipatnam, Krishna dt-521001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1390428,
              16.1904721
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Pasuvula santha campus, Gudlavalleru post & Mandal, krishna District-521356, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0544917,
              16.3437071
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Joint Director (AH) campus, Muthyalampadu, Vijayawada-520011, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63685389999999,
              16.5259875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Nandigama, Ramannapeta Road, Pin-521185, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2800921,
              16.773025
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, Besides Bramham gari matam, Main road, Phirangipuram, Guntur Dt 522529, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2453776,
              16.302918
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Veterinary Dispensary, PEDAPALEM, Duggirala Mandal, Guntur dt 522305, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6460408,
              16.36123
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital, Vemuru, Bapatla District, Pin Code.522261, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7399885,
              16.1792758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital, Chirala, Bapatla District, Pin Code.523155, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3507973,
              15.8298148
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Area Veterinary Hospital, Addanki, Bapatla District, Pin Code.523201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9416549,
              15.8527903
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Assistant Director (AH), Area veterinary Hospital, Karempudi road, Gurazala, Pin code-522415, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6277523,
              16.5814535
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Assistant Director (AH), Area veterinary Hospital, Vaddavalli, 13th ward, Park centre, Sattenapalli, Pin code-522415, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.14739399999999,
              16.3916769
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Divisinaol Deputy Director (AH), Near Rangarayudu cheruvu, Ongole Pin Code-523001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0590804,
              15.4813673
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director (AH), Area Veterinary Hospital, Podili, Pin Code-523240, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6816348,
              15.7684569
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o the Divisional Deputy Director, Nellore, VPC Campus, Railway Feeders Road, Santhapeta, Nellore-524001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9857165,
              14.4611349
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o the Divisional Deputy Director, Kavali, Opposite Municipal Office, Railway Road, Kavali-524201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.99023360000001,
              14.9164627
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o the Divisional Deputy Director, Kandukur Veterinary Hospital Campus, Pamuru Bus stand, Ippagunta Road, Kandukur-523105, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.41100899999999,
              15.0948182
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Deputy Director (AH), 18-491, Near Murughan Petrol Bunk, Palamaner Road, Chittoor Dist- 517001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0833822,
              13.2030231
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Assistant Director (AH), Area Veterinary Hospital, Punganur Chittoor Dist - 517247, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5671128,
              13.3644543
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Assistant Director (AH), Area Veterinary Hospital, Chandragiri Tirupati Dist - 517101, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3381572,
              13.5918997
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Assistant Director (AH), Area Veterinary Hospital, Sri kalahasthi Tirupati Dist - 517644, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6994622,
              13.7508392
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o The Assistant Director (AH), Area Veterinary Hospital, Gudur Tirupati Dist - 524101, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8533917,
              14.1549535
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Deputy Director (AH) VPC Campus Kothapeta Kurnool - 518001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.04717819999999,
              15.8346395
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "Assistant Director (AH) Veterinary Hospital Opp to T.B. Colany Adoni Raod Yemmiganur - 518360, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4600553,
              15.7572824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Animal Husbandry Department, opposite RTC Buss Stand, Nandyal Pin - 518501, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.479407,
              15.4903641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Animal Husbandry Department, Near Four road center, Allagadda Pin - 518543, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5127559,
              15.1305389
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Beside Collectorate near Rajendra prasad Govt. High School Anantapuram -515001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.59725949999999,
              14.6841535
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy Director (AH), Near RTC Depot Uravakonda - 515812, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2577817,
              14.9441154
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o. Assistant Director (AH), ADDL, Sai nagar, 4th cross, Veterinary hospital campus, Anantapuram - 515001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6011888,
              14.6735491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o. Deputy Director (AH), Near Seri culture office, Dharmavaram - 515671, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7201031,
              14.4124551
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o. Deputy Director (AH), Penukonda - 515110, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5970586,
              14.0849002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o. Deputy Director (AH), Near VPC, Flower Market Hindupuram - 515201, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5009298,
              13.8222599
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy director, opp old junior college, PULIVENDULA 516390, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2322961,
              14.4290487
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy director, beside RTO office, utukur, kadapa 516003, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8058514,
              14.4442199
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o ASSISTANT DIRECTOR, AVH MADANAPALI opp CSI JCM church, avenue road, madanpalli 517325, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5055575,
              13.5523871
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": "violations",
          "asset": {
              "id": "O/o Deputy director, Near Municipal office, Rayachoty 516269, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7519382,
              14.0586263
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o The Deputy Director(AH), Beside the Sub collector Office,Opposite Govt Jr College,Penukonda,Sri Satya Sai .Dt, Pin-code-515110."
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.595606,
              14.087641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o The Deputy Director(AH), Veterinary Hospital Campus, Rajamahendravaram. Lakshmivarapu Pet, Seshayya Metta, Devichowk , Rajamahendravaram, A.P., Pin Code : 533101. "
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.774424,
              17.008994
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Deputy Director (AH) Tadepalligudem Near MRO Office Darsiparru road Pentapadu: W.G Dist, PIN Code 534166"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.529202,
              16.787733
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/O Deputy Director (AH), Pasuvula santha road, Gudlavalleru -521356, Krishna district."
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.054717,
              16.350862
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/O Deputy Director, Animal Husbandary, Veterinary Hospital compound, Ramannapeta Road, Nandigama, NTR District-521185"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.284002,
              16.772874
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/O Deputy Director (AH), Mutyalampadu, Near Govt. Press, Opposite to sivalayam, Vijayawada, NTR District -520011"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.638529,
              16.527888
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Joint Director, Animal Husbandry Department GDF Premises, Hanumanthavaka, Visakhapatnam Pin: 530040"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.334144,
              17.759047
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Deputy Director, Animal Husbandry, opposite R.T.C busstand Nandyal mandal, Nandyal-518501"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.479627,
              15.488552
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary poly clinc, First floor, Near BSNL office, Fort backside, VIZIANAGARAM Pin:535002, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4124587,
              18.1102747
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Assistant director AVH Parvathipuram chakali belagam beside American hospital Parvathipuram manyam district, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4219682,
              18.7691807
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o The Area Veterinary Hospital, 5 Road Junction, Besied Old Municipal Office, Narsipatnam-531116, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.60894669999999,
              17.67
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Area Veterinary Hospital, Near MRO office, Araku Valley Village and Mandal, Alluri Seetaramaraju District-531149 , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8889504,
              18.317874
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o The Deputy Director(AH), Regional Animal Disease Diagnostic Laboratory, Kakinada, A.P., Pin Code: 533004, Room, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2474648,
              16.9890648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Area Veterinary Hospital, Chintalapudi, Gurubhatlagudem Road, Near Venkateswara Swamy Temple, Pin: 5744260, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9090509,
              17.1090465
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "RLU Taduvai Main Road, Taduvai, Pin Code-534447. Jangareddigudem Mandal., Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1981735,
              17.1351943
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "VPC New Building 3rd Floor, Veterinary Polyclinic Campus, Kothapet, Guntur- 522001, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.44621169999999,
              16.2861218
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Area veterinary Hospital Campas, Nidubrolu Villag, Ponnur mandal, Guntur(Dt) Pin Code:-522124, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4938267,
              16.0929365
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Darsi, Darsi (M) Prakasam-523247, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.67927050000002,
              15.7701491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Area veterinary Hospital Campas, Indukurpet Village, Mandal, SPSRNellore (Dt) Pin Code:-524314, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.09713649999999,
              14.4702867
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary Hospital Rebala Village, Buchireddy palem Mandal, SPSRNellore (Dt) Pin Code:-524305, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9010784,
              14.5260881
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Assistant Director (AH), Area Vetrinary Hospital Singanamala Anantapuram - 515435, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.71697309999999,
              14.8003189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o. Assistant Director (AH), Are veterinary Hospital, Rayadurgam - 515865, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6585315,
              18.4498566
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o. Assistant Director (AH), Area Veterinary Hospital, Guntakal -515801, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3769836,
              15.1660706
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o. Assistant Director (AH), Area Veterinary Hospital, Gorantla -515231, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7705127,
              13.9846018
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o. Assistant Director (AH), Area Veterinary Hospital, Puttaparthi -515134, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8109623,
              14.168813
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o. Assistant Director (AH), Area Veterinary Hospital, Lepakshi -515331, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60771969999999,
              13.8039436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o. Assistant Director (AH), Area Veterinary Hospital, Near RTC Bustand, Dharmavaram -515672, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7149827,
              14.4097874
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Assistant Director (AH) I/c Dr YSR Agri Lab Constituency Animal Disease Diagnostic Laboratory, Agriculture Market, Committee Compound, Gooty Road, Pathikonda, Pin Code:518380, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5007739,
              15.3963743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Assistant Director (AH) I/c Constituency Animal Disease Diagnostic Laboratory, Veterinary Hospital, H.No.304, 1st ward, Venkatapuram, near Sai Baba Temple, Adoni Road, Yemmiganur, Pin Code:518360, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.46159229999999,
              15.7662462
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Assistant Director (AH) I/c Constituency Animal Disease Diagnostic Laboratory, Area Veterinary Hospital, Near Police Station, Dhone, Pin Code:518222, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8732414,
              15.3960427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "ASSISTANT DIRECTOR, NEW AVH BUILDING, NEAR ZPHS SCHOOL, KOLIMI VEEDHI, PORUMAMILLA- 516193 YSR DISTRICT, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1568427,
              14.1977565
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary Hospital, Palasa, 532221, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4109252,
              18.7723549
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary Hospital, Narasanapeta, 532421, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0378894,
              18.4055227
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary Hospital, Pathapatnam, 532213, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0840723,
              18.7440593
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "AREA VETERINAY HOSPITAL KOTHAVALASA, Village and Mandal, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1903382,
              17.8899871
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Saluru Village and mandal, pin:535591, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.20394189999999,
              18.5169856
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "VELAGAWADA Village PALAKONDA MANDAL Pin 532440, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7733555,
              18.6175675
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary Dispensary Adduru, Chodavaram mandal, Anakapalli District Pin: 531035, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0092803,
              17.7869686
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Rural Live stock unit, Sarabhannapalem, Koyyuru mandal, ASR district, Pin Code: 531084, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2083365,
              17.6607539
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "NEAR MRO OFFICE OPPOSITE AGRICULTURE DEPOT KAPAVARAM ROAD KORUKONDA, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.82646849999999,
              17.1649184
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "VETERINARY HOSPITAL NALLAJERLA EAST GODAVARI DIST, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4072346,
              16.9475376
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Area veterinary hospital Attili W.G.Dist, Pincode , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5417467,
              17.1003703
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "0/o Area Veterinary Hospitl Narsapuram. Near Muncipal office, Narsapuram town, W.G.Dist, Pincode -534275, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6931559,
              16.4368557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/O Assistant Director, Area Veterinary Hospital, Elamarru, Pedaparupudi (M), Krishna(Dt), Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9557829,
              16.4272464
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/O Assistant Director, Area Veterinary Hospital, A Konduru, A.Konduru (M), NTR(Dt), Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65211390000002,
              16.9659754
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/O Assistant Director, Area Veterinary Hospital, Korukonda, Palnadu Dsit-522647, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.83104209999999,
              17.1687858
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Area Veterinary Hospital, Vykuntapuram, Back side of Fire station, Chirala, Bapatla District. PIN- 523155, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3507973,
              15.8298148
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "GIDDALUR, GIDDALUR, PRAKASAM, 523357, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9236355,
              15.3757808
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "SANKRANTHIPALLI, RAPUR MANDAL, SPSR NELLORE dist . pincode 524408 , Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5343786,
              14.1998609
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Assistant Director (AH), Area Veterinary Hospital, Kuppam Kuppam Mandal, Chittoor District - 517425, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.342291,
              12.7461129
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Assistant Director (AH), Area Veterinary Hospital, Somala Somala Mandal, Chittoor District - 517257, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8081964,
              13.476537
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Area Veterinary Hospital, Animal Husbandry, opposite R.T.C bustand Kodumur mandal, Kurnool-518464, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7677288,
              15.6834009
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "O/o Area Veterinary Hospital, Animal Husbandry, opposite R.T.C bus stand Bethamcherla mandal, Nandyal-518599, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.15184359999999,
              15.4575887
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "Veterinary Dispensary, Molakalacheruvu(V), Molakalacheruvu (M), Annamayya Dist-517590, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.59405439999999,
              13.3175496
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "AD (AH), Area Vety. Hospital, Pednandipadu, Guntur Dist-522235, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3435908,
              16.0571109
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "level": null,
          "asset": {
              "id": "AD (AH), ADDL, Vizianagaram, Andhra Pradesh, India"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.39555059999999,
              18.1066576
          ]
      }
  }
].map(a => {
  a.properties.level = 'normal';
  return a;
});
console.log("installed ILRs", installedILRs);

const gj = {
  type: 'FeatureCollection',
  features: [...installedILRs],
};
console.log("gj", gj);
toBeDelivered.forEach((e) => {
  gj.features.push({
    type: 'Feature',
    properties: {
      // id: d.id,
      // timestamp: d.lastUpdateLocation.timestamp,
      level: 'warnings', // normal, warnings, violations,
      asset: { id: e.addr },
      assetGroup: 'ag',
    },
    geometry: {
      type: 'Point',
      coordinates: [e.lng, e.lat],
    },
  });
});
deepFreezers.forEach((e) => {
  gj.features.push({
    type: 'Feature',
    properties: {
      // id: d.id,
      // timestamp: d.lastUpdateLocation.timestamp,
      level: 'violations', // normal, warnings, violations,
      asset: { id: e.addr },
      assetGroup: 'ag',
    },
    geometry: {
      type: 'Point',
      coordinates: [e.lng, e.lat],
    },
  });
});
walkingColdRooms.forEach((e) => {
  gj.features.push({
    type: 'Feature',
    properties: {
      // id: d.id,
      // timestamp: d.lastUpdateLocation.timestamp,
      level: null, // normal, warnings, violations,
      asset: { id: e.addr },
      assetGroup: 'ag',
    },
    geometry: {
      type: 'Point',
      coordinates: [e.lng, e.lat],
    },
  });
});



let dataloaded = false;
const geojsons = { overviewPoints: gj };
const updateOverviewMap = () => {
  const { map } = window.mapbox;
  if (!map) return;
  if (!map.isStyleLoaded()) {
    console.log('map style not yet loaded');
    return;
  }
  console.log("updating overview points");
  console.log("geojsons", geojsons);
  // filters for classifying devices into three categories based on level
  const normal = ['==', ['get', 'level'], 'normal'];
  const warnings = ['==', ['get', 'level'], 'warnings'];
  const violations = ['==', ['get', 'level'], 'violations'];

  // colors to use for the categories
  const colors = ['#4264fb', '#fd8d3c', '#e31a1c', '#008000'];

  if (map.getSource('overview-points')) {
    map.getSource('overview-points').setData(geojsons.overviewPoints);
  } else {
    console.log("adding overview points");
    map.addSource('overview-points', {
      type: 'geojson',
      data: geojsons.overviewPoints,
      // cluster: true,
      // clusterRadius: 80,
      // clusterProperties: {
      //   // keep separate counts for each category in a cluster
      //   normal: ['+', ['case', normal, 1, 0]],
      //   warnings: ['+', ['case', warnings, 1, 0]],
      //   violations: ['+', ['case', violations, 1, 0]],
      // },
    });
    // circle and symbol layers for rendering individual devices (unclustered points)
    map.addLayer({
      id: 'overview-points',
      type: 'circle',
      source: 'overview-points',
      filter: ['!=', 'cluster', true],
      paint: {
        'circle-color': [
          'case',
          normal,
          colors[0],
          warnings,
          colors[1],
          violations,
          colors[2],
          colors[3],
        ],
        'circle-opacity': 0.9,
        'circle-radius': 5,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      },
    });
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    map.on('mouseenter', 'overview-points', (e) => {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // const htmlElement = document.createElement('div');
      // ReactDOM.render(
      //   <AssetCard asset={JSON.parse(e.features[0].properties.asset)} />,
      //   htmlElement,
      // );
      // Populate the popup and set its coordinates
      // based on the feature found.
      // popup.setLngLat(coordinates).setDOMContent(htmlElement).addTo(map);
      const p = e.features[0].properties;
      let html = '';
      html += `<b>Asset Id:</b> ${JSON.parse(p.asset || '{}').id}`;
      html += '<br />';
      html += `<b>Device Id:</b> ${p.id}`;
      html += '<br />';
      html += `<b>Lat:</b> ${coordinates[1]}`;
      html += '<br />';
      html += `<b>Lng:</b> ${coordinates[0]}`;
      popup.setLngLat(coordinates).setHTML(html).addTo(map);
    });

    map.on('mouseleave', 'overview-points', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });

    // map.on('click', 'overview-points', handleOverviewPointsClick);

    // objects for caching and keeping track of HTML marker objects (for performance)
    const markers = {};
    let markersOnScreen = {};

    const updateMarkers = () => {
      const newMarkers = {};
      const features = map.querySourceFeatures('overview-points');

      // for every cluster on the screen, create an HTML marker for it (if we didn't yet),
      // and add it to the map if it's not there already
      features.forEach((feature) => {
        const coords = feature.geometry.coordinates;
        const props = feature.properties;
        if (!props.cluster) return;
        const id = props.cluster_id;

        const marker = markers[id] || new mapboxgl.Marker({
          element: createDonutChart(props, colors),
        });
        marker.setLngLat(coords);
        markers[id] = marker;
        newMarkers[id] = marker;

        if (!markersOnScreen[id]) marker.addTo(map);
      });
      // for every marker we've added previously, remove those that are no longer visible
      Object.keys(markersOnScreen).forEach((id) => {
        if (!newMarkers[id]) markersOnScreen[id].remove();
      });
      markersOnScreen = newMarkers;
    };

    // after the GeoJSON data is loaded, update markers on the screen on every frame
    map.on('render', () => {
      if (!map.isSourceLoaded('overview-points')) return;
      // updateMarkers();
    });

    // map.addControl(navControl.current, 'bottom-right');
    dataloaded = true;
  }
  // handleZoomToBounds();
};

const checkUpdate = () => {
  if (window.mapbox && !dataloaded) {
    console.log("updating overview");
    updateOverviewMap();
  }else {
    console.log("skipping");
  };
}

setInterval(() => {
  checkUpdate();
}, 2000)