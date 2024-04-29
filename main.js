
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
          "id": "PD0010",
          "timestamp": "1683391201",
          "level": "normal",
          "asset": {
              "id": "Ananthagiri.-ArakuValley Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8775218,
              18.3273486
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1966",
          "timestamp": "1700221801",
          "level": "normal",
          "asset": {
              "id": "Devarapalli-Maredumilli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.71354749999999,
              17.5983355
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0614",
          "timestamp": "1683263530",
          "level": "normal",
          "asset": {
              "id": "G.D.Peta-Yatapaka Mandal"
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
          "id": "PD1345",
          "timestamp": "1683868895",
          "level": "normal",
          "asset": {
              "id": "G.Madugula.-G.Madugula Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.5326911,
              18.0127822
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0284",
          "timestamp": "1684125868",
          "level": "normal",
          "asset": {
              "id": "Gangavaram-Gangavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0475242,
              16.7338867
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1440",
          "timestamp": "1685775082",
          "level": "normal",
          "asset": {
              "id": "Indukurupeta-Devipatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.78348679999999,
              17.2617421
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0765",
          "timestamp": "1684876801",
          "level": "normal",
          "asset": {
              "id": "Kasipatnam-Ananthagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.99786259999999,
              18.1968728
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0801",
          "timestamp": "1697694380",
          "level": "normal",
          "asset": {
              "id": "Koyyuru.-Koyyuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2182569,
              17.6550069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0031",
          "timestamp": "1683937801",
          "level": "normal",
          "asset": {
              "id": "Kunavaram-Kunavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8702405,
              16.440428
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1702",
          "timestamp": "1684471025",
          "level": "normal",
          "asset": {
              "id": "Kuturu-Kunavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.30968279999999,
              17.6867189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1495",
          "timestamp": "1686012001",
          "level": "normal",
          "asset": {
              "id": "Mothugudem-Chinturu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4006199,
              17.747799
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1641",
          "timestamp": "1696581523",
          "level": "normal",
          "asset": {
              "id": "Munchangiput.-Munchingputttu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7399875,
              15.9128998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0579",
          "timestamp": "1684225800",
          "level": "normal",
          "asset": {
              "id": "Pedamattapalli-V.R.Puram Mandal"
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
          "id": "PD0064",
          "timestamp": "1693906200",
          "level": "normal",
          "asset": {
              "id": "Rajavommangi-Rajavommangi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.23320199999999,
              17.546866
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0112",
          "timestamp": "1682431801",
          "level": "normal",
          "asset": {
              "id": "Seethapalli -Rampachodavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7937386,
              17.3772838
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0698",
          "timestamp": "1683020908",
          "level": "normal",
          "asset": {
              "id": "VR.Puram-V.R.Puram Mandal"
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
          "id": "PD0928",
          "timestamp": "1685547601",
          "level": "normal",
          "asset": {
              "id": "Y.Ramavaram-Y.Ramavaram Mandal"
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
          "id": "PD0625",
          "timestamp": "1696834533",
          "level": "normal",
          "asset": {
              "id": "Adduru-Chodavaram Mandal"
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
          "id": "PD0254",
          "timestamp": "1683357318",
          "level": "normal",
          "asset": {
              "id": "Anthakapalli-Sabbavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1210018,
              17.8148518
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1602",
          "timestamp": "1690019401",
          "level": "normal",
          "asset": {
              "id": "Butchayyapeta - Butchayyapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.88621549999999,
              17.7866244
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1503",
          "timestamp": "1697302801",
          "level": "normal",
          "asset": {
              "id": "Butchempeta-Rolugunta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6064693,
              17.7295263
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0103",
          "timestamp": "1686913237",
          "level": "normal",
          "asset": {
              "id": "Cheedikada - Cheedikada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.892324,
              17.9285256
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0932",
          "timestamp": "1689751201",
          "level": "normal",
          "asset": {
              "id": "Chettupalli-Narsipatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.64969459999999,
              17.6811354
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0940",
          "timestamp": "1681216804",
          "level": "normal",
          "asset": {
              "id": "Chinadoddigallu-Nakkapalli Mandal"
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
          "id": "PD1248",
          "timestamp": "1696581574",
          "level": "normal",
          "asset": {
              "id": "Chinnagummuluru-S. Rayavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8061559,
              17.454556
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1188",
          "timestamp": "1685085724",
          "level": "normal",
          "asset": {
              "id": "Chowduwada-K.Kotapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1330611,
              17.8925554
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1924",
          "timestamp": 1712556406,
          "level": "normal",
          "asset": {
              "id": "b5ddb2ed-b875-48b1-bdeb-b39100439596"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.00276,
              17.69621
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1781",
          "timestamp": "1684135254",
          "level": "normal",
          "asset": {
              "id": "Devarapalli-Devarapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5623849,
              17.0350499
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0565",
          "timestamp": "1693211400",
          "level": "normal",
          "asset": {
              "id": "Dimili-Rambilli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8719356,
              17.5109201
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1381",
          "timestamp": "1683695592",
          "level": "normal",
          "asset": {
              "id": "Dosuru-Atchuthapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0354663,
              17.5472775
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0140",
          "timestamp": "1683122425",
          "level": "normal",
          "asset": {
              "id": "Etikoppaka-Yelamanchili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.7468511,
              17.4876831
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2479",
          "timestamp": "1702015371",
          "level": "normal",
          "asset": {
              "id": "33981cd1-80c7-4043-8a82-36c575d17dac"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.186402,
              17.690292
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0479",
          "timestamp": "1695194401",
          "level": "normal",
          "asset": {
              "id": "Gavarapalem-Anakapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0129986,
              17.6894901
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0598",
          "timestamp": "1680574201",
          "level": "normal",
          "asset": {
              "id": "Godicherla-Nakkapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.61998009999999,
              17.3919115
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0152",
          "timestamp": "1683367044",
          "level": "normal",
          "asset": {
              "id": "Golugonda-Golugonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.4678294,
              17.6794093
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0528",
          "timestamp": "1683273812",
          "level": "normal",
          "asset": {
              "id": "Gullepalli-Sabbavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1414466,
              17.832138
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1546",
          "timestamp": "1702058619",
          "level": "normal",
          "asset": {
              "id": "00d46d4c-bbe6-4ee6-951e-3bb80624daa0"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18633000000003,
              17.690128333333345
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1942",
          "timestamp": "1689224448",
          "level": "normal",
          "asset": {
              "id": "K.D.Peta-Golugonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.36959879999999,
              17.6719514
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0092",
          "timestamp": "1681812620",
          "level": "normal",
          "asset": {
              "id": "Kannurupalem-Kasimkota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.819627,
              17.634444
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0298",
          "timestamp": "1700205001",
          "level": "normal",
          "asset": {
              "id": "Kasimkota-Kasimkota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.9641299,
              17.668636
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2050",
          "timestamp": "1702058529",
          "level": "normal",
          "asset": {
              "id": "5035f714-86f1-4a3b-aad2-501330acd6fa"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18633500000003,
              17.690123611111126
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1096",
          "timestamp": "1702015382",
          "level": "normal",
          "asset": {
              "id": "1a4cc6cd-f497-4eb9-b5eb-bc84d1b85b49"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.93354833333332,
              17.828005
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1746",
          "timestamp": "1683275400",
          "level": "normal",
          "asset": {
              "id": "Kothakota-Ravikamatham Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6983535,
              17.7511437
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0946",
          "timestamp": "1683189001",
          "level": "normal",
          "asset": {
              "id": "Lankelapalem-Parawada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.0810331,
              17.6209276
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0485",
          "timestamp": "1695277800",
          "level": "normal",
          "asset": {
              "id": "Lingarajupalem-S. Rayavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.8115447,
              17.4429909
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2138",
          "timestamp": "1700207748",
          "level": "normal",
          "asset": {
              "id": "ee732d34-ec37-4e6a-8b25-cef9ac7fea60"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.70869529411765,
              16.510758235294112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0030",
          "timestamp": 1711085307,
          "level": "normal",
          "asset": {
              "id": "393537fa-2162-4861-9221-5874efff372f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.92928,
              17.59401
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0864",
          "timestamp": "1698745801",
          "level": "normal",
          "asset": {
              "id": "M.koduru-V. Madugula Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.7888929,
              17.9098003
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1660",
          "timestamp": "1683268970",
          "level": "normal",
          "asset": {
              "id": "Makavarapalem-Makavarapalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.7199966,
              17.6193771
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0921",
          "timestamp": "1700207908",
          "level": "normal",
          "asset": {
              "id": "b3c57f02-8550-44ee-9f22-a390e1d17b24"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7098853125,
              16.509933125000003
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1623",
          "timestamp": "1683273534",
          "level": "normal",
          "asset": {
              "id": "Munagapaka-Munagapaka Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.9165388,
              17.5996951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1913",
          "timestamp": "1684027201",
          "level": "normal",
          "asset": {
              "id": "Nagulapalli-Munagapaka Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.999206,
              17.6651746
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1329",
          "timestamp": "1699083001",
          "level": "normal",
          "asset": {
              "id": "Nathavaram-Nathavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.49237579999999,
              17.5690406
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1766",
          "timestamp": "1696577314",
          "level": "normal",
          "asset": {
              "id": "Pamulawaka-Kotauratla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.6834453,
              17.5662138
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0264",
          "timestamp": "1700210589",
          "level": "normal",
          "asset": {
              "id": "d0581ec3-9cdf-45bd-aa5d-bc2d7f8eafc3"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.70864916666666,
              16.510894999999994
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1814",
          "timestamp": "1691220559",
          "level": "normal",
          "asset": {
              "id": "Pedagogada - Cheedikada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.892324,
              17.9285256
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0356",
          "timestamp": "1699423340",
          "level": "normal",
          "asset": {
              "id": "8313ca54-49e2-4a04-b643-983797b2fd51"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.043089,
              17.737563
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2452",
          "timestamp": "1700211234",
          "level": "normal",
          "asset": {
              "id": "ffcca0d0-b9d7-4298-b1e2-906ef8194786"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7086532142857,
              16.510729999999995
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0747",
          "timestamp": "1699994774",
          "level": "normal",
          "asset": {
              "id": "78145aa2-b299-4278-8d41-c506b7b219ca"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.015823,
              17.73202
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1947",
          "timestamp": "1700210957",
          "level": "normal",
          "asset": {
              "id": "4b12ba35-1ee4-40ee-88eb-cde0054c4f71"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.710348,
              16.509369500000002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0925",
          "timestamp": "1701083401",
          "level": "normal",
          "asset": {
              "id": "Rajam-Butchayyapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.88621549999999,
              17.7866244
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1877",
          "timestamp": 1713118264,
          "level": "normal",
          "asset": {
              "id": "5d756131-793a-4b43-8e5e-059cd5f2992a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.93177,
              17.46409
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1699",
          "timestamp": "1683271031",
          "level": "normal",
          "asset": {
              "id": "Rolugunta-Rolugunta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.667247,
              17.7185645
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1541",
          "timestamp": "1677162805",
          "level": "normal",
          "asset": {
              "id": "Satyavaram-Payakaraopeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.5875496,
              17.3260806
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1943",
          "timestamp": "1684913834",
          "level": "normal",
          "asset": {
              "id": "Seethanagaram-Anakapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.9595655,
              17.7366123
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1714",
          "timestamp": "1701932401",
          "level": "normal",
          "asset": {
              "id": "Somalingapalem-Yelamanchili Mandal"
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
          "id": "PD0556",
          "timestamp": "1683350040",
          "level": "normal",
          "asset": {
              "id": "Sreerampuram-Payakaraopeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.553086,
              17.362436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0203",
          "timestamp": "1702231334",
          "level": "normal",
          "asset": {
              "id": "fb28d4cd-3894-4834-85d1-b0a9407a4e0b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18636021505378,
              17.69018032258065
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0683",
          "timestamp": "1703700391",
          "level": "normal",
          "asset": {
              "id": "b6e095f3-cf4c-4305-8716-84e0848fc453"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.812966,
              17.917944
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1889",
          "timestamp": "1706510205",
          "level": "normal",
          "asset": {
              "id": "653c1576-441b-47b1-8c37-1e47a6c4f6ae"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.84864240740741,
              17.54360074074074
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0069",
          "timestamp": "1704433432",
          "level": "normal",
          "asset": {
              "id": "3fef901e-5b62-430a-833b-99d453980f5d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.04009523809525,
              17.888390476190477
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0846",
          "timestamp": "1706033928",
          "level": "normal",
          "asset": {
              "id": "0fb922c0-f33c-4bf0-9636-4375bae93f63"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.93357132653061,
              17.828030306122447
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0394",
          "timestamp": "1699336085",
          "level": "normal",
          "asset": {
              "id": "e7fbed54-73c9-441d-93fb-03bdb8d5aaeb"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.798719,
              17.791292
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0668",
          "timestamp": "1682104201",
          "level": "normal",
          "asset": {
              "id": "Vada cheepurupalli-Parawada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.073835,
              17.5660678
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0461",
          "timestamp": "1701972249",
          "level": "normal",
          "asset": {
              "id": "16172b98-5c2f-41e6-912f-048d6c12dd3a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634907692311,
              17.690124000000008
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0478",
          "timestamp": "1702058078",
          "level": "normal",
          "asset": {
              "id": "c77c4d32-0d17-4dd0-ab31-6ac29234f652"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634428571433,
              17.690129870129876
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0726",
          "timestamp": "1705652753",
          "level": "normal",
          "asset": {
              "id": "7fe34a05-d834-424c-b9b7-e542c9db5700"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60091583333336,
              14.67385166666667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0949",
          "timestamp": "1703644029",
          "level": "normal",
          "asset": {
              "id": "8f56516d-cbe6-4649-a168-055eb2d7fe3a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.01628,
              14.906969999999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1233",
          "timestamp": "1687844706",
          "level": "normal",
          "asset": {
              "id": "Amidyala-Uravakonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2232709,
              14.8537787
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1549",
          "timestamp": "1684730283",
          "level": "normal",
          "asset": {
              "id": "Atmakur-Atmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.160006,
              14.7617192
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1449",
          "timestamp": "1680766617",
          "level": "normal",
          "asset": {
              "id": "Avuladatla-Rayadurgam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.9807873,
              14.6938406
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0107",
          "timestamp": "1675194093",
          "level": "normal",
          "asset": {
              "id": "B.Pappuru-Narpala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8081363,
              14.633715
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0624",
          "timestamp": "1688064601",
          "level": "normal",
          "asset": {
              "id": "Bommanahal- Bommanahal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.9779875,
              15.0008268
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0738",
          "timestamp": "1694145001",
          "level": "normal",
          "asset": {
              "id": "Brahmasamuram- Brahmasamuram Mandal"
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
          "id": "PD0896",
          "timestamp": "1688365196",
          "level": "normal",
          "asset": {
              "id": "Bukkapuram-Yellanuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.99099489999999,
              14.6433008
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1607",
          "timestamp": "1681796028",
          "level": "normal",
          "asset": {
              "id": "Chiyyedu-Anantapuramu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7059301,
              14.604274
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1419",
          "timestamp": "1680678432",
          "level": "normal",
          "asset": {
              "id": "Cholasamudram-Kudair Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.160006,
              14.7617192
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0828",
          "timestamp": "1680766206",
          "level": "normal",
          "asset": {
              "id": "Chukkaluru-Tadipatri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.98599899999999,
              14.9463156
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1615",
          "timestamp": "1682421841",
          "level": "normal",
          "asset": {
              "id": "Gangavaram-Beluguppa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1997141,
              14.6433873
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0247",
          "timestamp": "1687936215",
          "level": "normal",
          "asset": {
              "id": "Garladinne-Garladinne Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5954558,
              14.819586
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0193",
          "timestamp": "1703668759",
          "level": "normal",
          "asset": {
              "id": "f42308c3-6aa0-41c6-8d25-4176413d702e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.62295,
              14.63373
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1348",
          "timestamp": "1688365107",
          "level": "normal",
          "asset": {
              "id": "Katiganikalva-Anantapuramu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.61888259999999,
              14.6310664
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0189",
          "timestamp": "1695099823",
          "level": "normal",
          "asset": {
              "id": "Korrpadu-Bukkarayasamudram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.63428189999999,
              14.6938794
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0951",
          "timestamp": "1680760540",
          "level": "normal",
          "asset": {
              "id": "Kuderu-kudair Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4292786,
              14.7306166
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1340",
          "timestamp": "1680672958",
          "level": "normal",
          "asset": {
              "id": "M.B.Palli-Rapthadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60635409999999,
              14.6158174
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1261",
          "timestamp": "1689190201",
          "level": "normal",
          "asset": {
              "id": "Narpala-Narpal Mandal"
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
          "id": "PD1485",
          "timestamp": "1680764268",
          "level": "normal",
          "asset": {
              "id": "Palavai-Kalyandurgam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.16505269999999,
              14.5110355
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1181",
          "timestamp": "1680845793",
          "level": "normal",
          "asset": {
              "id": "Pallepalli-Rayadurgam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              76.8666453,
              14.6909442
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1338",
          "timestamp": "1687759528",
          "level": "normal",
          "asset": {
              "id": "Peddapappur- Peddapappur Mandal"
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
          "id": "PD1532",
          "timestamp": "1680677695",
          "level": "normal",
          "asset": {
              "id": "Peddayekkaluru-Peddapappur Mandal"
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
          "id": "PD0666",
          "timestamp": "1683877365",
          "level": "normal",
          "asset": {
              "id": "Putlur-Putlur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9667267,
              14.8125885
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0039",
          "timestamp": "1678342201",
          "level": "normal",
          "asset": {
              "id": "Salakamcheruvu-Singanamala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7280396,
              14.8471826
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0161",
          "timestamp": "1680761792",
          "level": "normal",
          "asset": {
              "id": "Tarimela-Singanamala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.65504419999999,
              14.924941
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0722",
          "timestamp": "1693034401",
          "level": "normal",
          "asset": {
              "id": "Thopudurthy-Atmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4888388,
              14.5465736
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1803",
          "timestamp": "1701831237",
          "level": "normal",
          "asset": {
              "id": "75d6d639-003b-4dc7-afcb-146d18e6101e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.21648933333333,
              12.372905666666668
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1840",
          "timestamp": 1707366308,
          "level": "normal",
          "asset": {
              "id": "ffa67e45-f5b8-4ac7-a3e9-4cd085617588"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.58984,
              14.94373
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1661",
          "timestamp": 3418899436,
          "level": "normal",
          "asset": {
              "id": "b06407cb-1c13-4ed3-8572-ff1d920fcf1b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.37393,
              15.15296
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1870",
          "timestamp": 1707186520,
          "level": "normal",
          "asset": {
              "id": "40d9d649-8064-486f-b3b2-4eef4496e00c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.01803,
              14.90604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1888",
          "timestamp": 1713499849,
          "level": "normal",
          "asset": {
              "id": "9477f8b7-a0c6-4c6d-9c89-aeb7a867f62b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.38845,
              15.15813
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1773",
          "timestamp": 1711174099,
          "level": "normal",
          "asset": {
              "id": "31116b2d-d76f-4b9c-89f9-fa0ef2a3985b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.58977,
              14.94368
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1868",
          "timestamp": 1707187324,
          "level": "normal",
          "asset": {
              "id": "864c9f6d-bc3a-44b3-8be3-225ea7440bb7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.02041,
              14.90363
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1720",
          "timestamp": 1707189327,
          "level": "normal",
          "asset": {
              "id": "f3bc23ec-90be-482f-b7a7-fd9b397b63cd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.91535,
              14.98758
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1821",
          "timestamp": 1712033411,
          "level": "normal",
          "asset": {
              "id": "24fd6ddc-a328-4035-869b-cc5e42be42fe"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6017,
              14.67332
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1645",
          "timestamp": 1711609071,
          "level": "normal",
          "asset": {
              "id": "a1748396-edc1-4823-a652-0543c90b6fc4"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.63605,
              14.69028
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1859",
          "timestamp": 3422595929,
          "level": "normal",
          "asset": {
              "id": "415de552-373b-4eab-a287-2df8c030eb31"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.63266,
              15.12578
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1723",
          "timestamp": 1711693032,
          "level": "normal",
          "asset": {
              "id": "6f4f3abe-bd57-4ab8-b50c-c57189d975fd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60528,
              14.61515
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1595",
          "timestamp": 3422848755,
          "level": "normal",
          "asset": {
              "id": "e9087e24-c65d-4f33-a32f-95530d097036"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.25721,
              14.93744
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1767",
          "timestamp": "1693807320",
          "level": "normal",
          "asset": {
              "id": "Vajrakarur- Vajrakarur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.383888,
              15.0266142
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0567",
          "timestamp": "1680676899",
          "level": "normal",
          "asset": {
              "id": "Venkatampalli-Tadipatri Mandal"
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
          "id": "PD0781",
          "timestamp": "1680867601",
          "level": "normal",
          "asset": {
              "id": "Vidapanakal-Vidapanakal Mandal"
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
          "id": "PD1295",
          "timestamp": "1687845727",
          "level": "normal",
          "asset": {
              "id": "Yadiki-Yadiki Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8736084,
              15.0498011
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0972",
          "timestamp": "1683243000",
          "level": "normal",
          "asset": {
              "id": "Yerraguntla-Garladinne Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5308002,
              14.844439
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1352",
          "timestamp": "1687930337",
          "level": "normal",
          "asset": {
              "id": "Ankisettipalle-Madanapalle Mandal"
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
          "id": "PD0702",
          "timestamp": "1701836681",
          "level": "normal",
          "asset": {
              "id": "B.Kothakota-B Kothakota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2626658,
              13.6575418
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0090",
          "timestamp": "1693800001",
          "level": "normal",
          "asset": {
              "id": "CTM-Madanapalle Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5094248,
              13.5585829
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0128",
          "timestamp": "1681884780",
          "level": "normal",
          "asset": {
              "id": "Chembakuru-Ramasamudram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.42392099999999,
              13.3670753
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0339",
          "timestamp": "1695191401",
          "level": "normal",
          "asset": {
              "id": "Chintaparthi-Valmikipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.70581179999999,
              13.6430087
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0836",
          "timestamp": "1681890185",
          "level": "normal",
          "asset": {
              "id": "GYARAMPALLI-KV PALLI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.84392679999999,
              13.7241597
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1190",
          "timestamp": "1681887099",
          "level": "normal",
          "asset": {
              "id": "Gandaboyanapalle-Valmikipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6313624,
              13.6374524
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1122",
          "timestamp": "1681878633",
          "level": "normal",
          "asset": {
              "id": "Guntimadugu-Rayachoty Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6285252,
              14.1140167
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0911",
          "timestamp": "1681800563",
          "level": "normal",
          "asset": {
              "id": "Gurramkonda-Gurramkonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.75193689999999,
              14.0586236
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0660",
          "timestamp": "1681882194",
          "level": "normal",
          "asset": {
              "id": "K.Kandulavaripalli-Chitvel Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3351735,
              14.1357053
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1529",
          "timestamp": "1685779201",
          "level": "normal",
          "asset": {
              "id": "KV PALLI-KV PALLI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9026554,
              13.8074554
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1232",
          "timestamp": "1681980788",
          "level": "normal",
          "asset": {
              "id": "Kakarlavaripalli-Penagaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2627341,
              14.3045947
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1470",
          "timestamp": "1681889495",
          "level": "normal",
          "asset": {
              "id": "Kannemadugu-Thamballapalle Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4894015,
              13.7733529
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0059",
          "timestamp": "1694415872",
          "level": "normal",
          "asset": {
              "id": "Kurabalakota-Kurabalakota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4815879,
              13.652581
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0084",
          "timestamp": "1681888945",
          "level": "normal",
          "asset": {
              "id": "Mahal-Kalikiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7894122,
              13.7751696
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1343",
          "timestamp": "1698381000",
          "level": "normal",
          "asset": {
              "id": "Mangampeta-Obulavaripalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.30641519999999,
              14.0414759
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0237",
          "timestamp": "1681881541",
          "level": "normal",
          "asset": {
              "id": "Medikurthi-Kalikiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7759559,
              13.6982447
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1258",
          "timestamp": "1682399204",
          "level": "normal",
          "asset": {
              "id": "Mudivedu-Kurabalakota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5075126,
              13.7075719
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0126",
          "timestamp": "1696503001",
          "level": "normal",
          "asset": {
              "id": "Mulakalacheruvu-Mulakalacheruvu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.26327669999999,
              13.79822
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1287",
          "timestamp": "1681888088",
          "level": "normal",
          "asset": {
              "id": "NADIMICHERLA-Kalakada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6841917,
              13.8320274
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1145",
          "timestamp": "1681882454",
          "level": "normal",
          "asset": {
              "id": "NUTHANKALVA-KV PALLI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.93076889999999,
              13.8674589
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0634",
          "timestamp": "1693812471",
          "level": "normal",
          "asset": {
              "id": "Nagirimadugu-vayalpad Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6990782,
              13.6972176
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0060",
          "timestamp": "1681709538",
          "level": "normal",
          "asset": {
              "id": "Nandaluru-Nandaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1008351,
              14.2676323
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0169",
          "timestamp": "1682139038",
          "level": "normal",
          "asset": {
              "id": "Nimmanapalle-Nimmanapalle Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6675305,
              13.5714548
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0934",
          "timestamp": "1681884065",
          "level": "normal",
          "asset": {
              "id": "Nooliveedu-Galiveedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.55401839999999,
              14.1011705
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1408",
          "timestamp": "1697521324",
          "level": "normal",
          "asset": {
              "id": "Obulavaripalli-Obulavaripalli Mandal"
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
          "id": "PD0870",
          "timestamp": "1682479640",
          "level": "normal",
          "asset": {
              "id": "P R PALLE-Kalakada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7294317,
              13.7825748
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1201",
          "timestamp": "1681804382",
          "level": "normal",
          "asset": {
              "id": "PTM-P.T.M Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.21703,
              13.7048567
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1306",
          "timestamp": "1694412005",
          "level": "normal",
          "asset": {
              "id": "Pandillapalli-Lakkireddipalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6994326,
              14.1831779
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1796",
          "timestamp": "1688950201",
          "level": "normal",
          "asset": {
              "id": "Peddamandyam-Peddamandyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5490494,
              13.9273819
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1568",
          "timestamp": "1683950764",
          "level": "normal",
          "asset": {
              "id": "Penagaluru-Penagaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2627341,
              14.3045947
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1167",
          "timestamp": "1693808648",
          "level": "normal",
          "asset": {
              "id": "Pullampeta-Pullampeta mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.20986669999999,
              14.1223474
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0268",
          "timestamp": "1682401846",
          "level": "normal",
          "asset": {
              "id": "Ramasamudram-Ramasamudram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4239209,
              13.3670753
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1240",
          "timestamp": "1682050835",
          "level": "normal",
          "asset": {
              "id": "Rayavaram-T Sundupalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.993862,
              13.9909154
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1204",
          "timestamp": "1681880358",
          "level": "normal",
          "asset": {
              "id": "Reddivaripalli-Chitvel Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3289523,
              14.1728215
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1748",
          "timestamp": "1682054228",
          "level": "normal",
          "asset": {
              "id": "Settigunta-Rly. Kodur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.398642,
              13.8530943
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1364",
          "timestamp": "1702108801",
          "level": "normal",
          "asset": {
              "id": "Sibyala-Rayachoty Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.75193689999999,
              14.0586236
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0028",
          "timestamp": "1694411348",
          "level": "normal",
          "asset": {
              "id": "TALAPULA-PILER Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9471378,
              13.654869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0267",
          "timestamp": "1683624613",
          "level": "normal",
          "asset": {
              "id": "Tarigonda-Gurramkonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6278158,
              13.6935748
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1771",
          "timestamp": "1681966684",
          "level": "normal",
          "asset": {
              "id": "V.P.R.Kandrika-Rly. Kodur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.34479549999999,
              13.9218923
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1679",
          "timestamp": "1685084851",
          "level": "normal",
          "asset": {
              "id": "Veeraballi-Veeraballi Mandal"
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
          "id": "PD0022",
          "timestamp": "1681801499",
          "level": "normal",
          "asset": {
              "id": "Veligallu-Peddamandyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5355606,
              13.8232951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1222",
          "timestamp": "1682746201",
          "level": "normal",
          "asset": {
              "id": "ABV Palem - Parchuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2767779,
              15.9684068
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1260",
          "timestamp": "1695195750",
          "level": "normal",
          "asset": {
              "id": "ANANTHAVARAM-Kolluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7713243,
              16.2331731
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0729",
          "timestamp": "1687500601",
          "level": "normal",
          "asset": {
              "id": "Amarthaluru-Amarthaluru Mandal"
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
          "id": "PD1331",
          "timestamp": "1690462801",
          "level": "normal",
          "asset": {
              "id": "Ambadipudi - Ballikurava  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0101724,
              15.9735277
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1798",
          "timestamp": "1690953001",
          "level": "normal",
          "asset": {
              "id": "Ballikurava - Ballikurava Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0276929,
              15.999866
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0564",
          "timestamp": "1682485162",
          "level": "normal",
          "asset": {
              "id": "Bhattiprolu-Bhattiprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7845272,
              16.1038105
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1085",
          "timestamp": "1683901201",
          "level": "normal",
          "asset": {
              "id": "Bobbarlanka-Repalle Mandal"
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
          "id": "PD1903",
          "timestamp": "1695196793",
          "level": "normal",
          "asset": {
              "id": "Bommanampadu-Addanki Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0101724,
              15.8400147
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0345",
          "timestamp": "1684819801",
          "level": "normal",
          "asset": {
              "id": "CHAVLI-Vemuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7399659,
              16.1595313
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1638",
          "timestamp": "1683279001",
          "level": "normal",
          "asset": {
              "id": "CHINAPARMI-Tsundur Mandal"
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
          "id": "PD1636",
          "timestamp": "1682408401",
          "level": "normal",
          "asset": {
              "id": "Cherukupalli-Cherukupalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6805413,
              16.0493704
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1257",
          "timestamp": "1687223401",
          "level": "normal",
          "asset": {
              "id": "Chinaganjam - Chinaganjam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2377078,
              15.698071
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1562",
          "timestamp": "1695272444",
          "level": "normal",
          "asset": {
              "id": "Chiralanagar - Chirala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3343661,
              15.8124858
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1701",
          "timestamp": "1683802268",
          "level": "normal",
          "asset": {
              "id": "Dronadula-Martur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1037721,
              15.9938431
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1639",
          "timestamp": "1683355274",
          "level": "normal",
          "asset": {
              "id": "Epurupalem - Chirala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3839584,
              15.8511736
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0802",
          "timestamp": "1682663098",
          "level": "normal",
          "asset": {
              "id": "Govada-Amarthaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.66635819999999,
              16.0843873
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1309",
          "timestamp": "1708150800",
          "level": "normal",
          "asset": {
              "id": "8e14fbbd-f4e3-4167-866a-ba5aabf5d58b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.71788999999994,
              16.071000000000005
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0789",
          "timestamp": "1682486966",
          "level": "normal",
          "asset": {
              "id": "Guttavaripalem-Bhattiprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8250638,
              16.0864949
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0792",
          "timestamp": "1684477201",
          "level": "normal",
          "asset": {
              "id": "J.Panguluru-J.Panguluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.09260139999999,
              15.8191462
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0114",
          "timestamp": "1703091479",
          "level": "normal",
          "asset": {
              "id": "6b37b5c6-8610-4494-a295-5129e311bb9f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347383333339,
              16.506835666666664
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0417",
          "timestamp": "1682327284",
          "level": "normal",
          "asset": {
              "id": "KOLLURU-Kolluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.79746,
              16.1828024
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0058",
          "timestamp": "1694587387",
          "level": "normal",
          "asset": {
              "id": "Kankatapalem-Bapatla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4173514,
              15.9223748
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0817",
          "timestamp": "1688710979",
          "level": "normal",
          "asset": {
              "id": "Karlapalem-Karlapalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5379739,
              15.9408472
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1973",
          "timestamp": "1682420466",
          "level": "normal",
          "asset": {
              "id": "Khajipalem-Pittalavanipalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63685389999999,
              15.9843732
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0862",
          "timestamp": "1683781549",
          "level": "normal",
          "asset": {
              "id": "Kolalapudi-Martur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.10307399999999,
              15.8914571
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1709",
          "timestamp": "1684534201",
          "level": "normal",
          "asset": {
              "id": "Konanki-Martur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1037721,
              15.9938431
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0887",
          "timestamp": "1684828200",
          "level": "normal",
          "asset": {
              "id": "Korisapadu-Korisapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.03532849999999,
              15.7570503
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0834",
          "timestamp": "1696855201",
          "level": "normal",
          "asset": {
              "id": "Kothapeta - Vetapalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.36437509999999,
              15.8235434
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1833",
          "timestamp": "1683666001",
          "level": "normal",
          "asset": {
              "id": "Kuchinapudi-Nizampatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.749849,
              15.962373
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1194",
          "timestamp": "1693272001",
          "level": "normal",
          "asset": {
              "id": "Kukatlapalli -Ballikurava Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9290642,
              15.9639269
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0526",
          "timestamp": "1683624410",
          "level": "normal",
          "asset": {
              "id": "Makkenavaripalem - Santhamaguluru Mandal"
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
          "id": "PD0842",
          "timestamp": "1685603267",
          "level": "normal",
          "asset": {
              "id": "Medarametla-Korisapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0188812,
              15.7245496
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0400",
          "timestamp": "1682489052",
          "level": "normal",
          "asset": {
              "id": "Mulpuru-Amarthaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6810495,
              16.1596712
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0078",
          "timestamp": "1682501401",
          "level": "normal",
          "asset": {
              "id": "Muppavaram-J.Panguluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0956936,
              15.820271
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0191",
          "timestamp": "1682406984",
          "level": "normal",
          "asset": {
              "id": "Nizampatnam-Bhattiprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6682428,
              15.9055019
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0394",
          "timestamp": "1682398204",
          "level": "normal",
          "asset": {
              "id": "Nuthalapadu - Parchuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.268988,
              15.9612071
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0225",
          "timestamp": "1703095538",
          "level": "normal",
          "asset": {
              "id": "b239ba23-98af-4df6-9052-9de8d35d8159"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347527559062,
              16.506835669291338
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1108",
          "timestamp": "1683690980",
          "level": "normal",
          "asset": {
              "id": "Pittalavanipalem-Pittalavanipalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63685389999999,
              15.9843732
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0216",
          "timestamp": "1682664198",
          "level": "normal",
          "asset": {
              "id": "Pudiwada-Nagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6937177,
              15.9970269
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1244",
          "timestamp": "1704952385",
          "level": "normal",
          "asset": {
              "id": "618c1104-8597-4d18-8e1c-9754ebef1b26"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65821,
              16.03931
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1742",
          "timestamp": "1703091468",
          "level": "normal",
          "asset": {
              "id": "eb30980a-660b-46fb-b7f8-e66ea7e2135d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68842285714287,
              16.525334285714283
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1289",
          "timestamp": "1702832318",
          "level": "normal",
          "asset": {
              "id": "0127d418-ef16-49f1-9e4c-f597e646cf24"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347557377056,
              16.506836065573765
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1208",
          "timestamp": "1703091404",
          "level": "normal",
          "asset": {
              "id": "cdad4458-68d1-4f94-95fb-e738dce8980c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68844,
              16.525299999999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0024",
          "timestamp": "1701863481",
          "level": "normal",
          "asset": {
              "id": "a4bf9f90-8530-49de-bb31-f3add3313731"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.066487,
              16.077794
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0858",
          "timestamp": "1703091507",
          "level": "normal",
          "asset": {
              "id": "2b573f67-4700-48f0-80dd-69a89667033d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68843384615386,
              16.52530461538461
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1791",
          "timestamp": "1684477771",
          "level": "normal",
          "asset": {
              "id": "Ramkuru-J.Panguluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.09260139999999,
              15.8191462
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0718",
          "timestamp": "1682396541",
          "level": "normal",
          "asset": {
              "id": "Swarna - Karmchedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2861818,
              15.856283
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1944",
          "timestamp": "1684832820",
          "level": "normal",
          "asset": {
              "id": "TSUNDURU-Tsundur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.585835,
              16.1567133
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1629",
          "timestamp": "1685166601",
          "level": "normal",
          "asset": {
              "id": "Vedullapalli-Bapatla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4201336,
              15.878922
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1732",
          "timestamp": "1811056201",
          "level": "normal",
          "asset": {
              "id": "Vetapalem - Vetapalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2994823,
              15.771135
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1573",
          "timestamp": "1685071737",
          "level": "normal",
          "asset": {
              "id": "Yaddanapudi  - Yaddanapudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1722073,
              15.9975801
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1487",
          "timestamp": "1695188720",
          "level": "normal",
          "asset": {
              "id": "karamchedu - Karmchedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3164048,
              15.884568
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0976",
          "timestamp": "1686727201",
          "level": "normal",
          "asset": {
              "id": "197 Ramapuram-Gudipala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1809159,
              13.1066876
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0867",
          "timestamp": "1689228044",
          "level": "normal",
          "asset": {
              "id": "AVH Gudipala-Gudipala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1248645,
              13.1012691
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0175",
          "timestamp": "1703603168",
          "level": "normal",
          "asset": {
              "id": "41f0666e-7b62-4570-b904-3ec832331693"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7836,
              14.48264
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0418",
          "timestamp": "1685952001",
          "level": "normal",
          "asset": {
              "id": "AVH Vedurukuppam-Vedurukuppam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3212058,
              13.4514598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0661",
          "timestamp": "1685095068",
          "level": "normal",
          "asset": {
              "id": "Agaram-Nindra Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7147468,
              13.353847
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0678",
          "timestamp": "1687933069",
          "level": "normal",
          "asset": {
              "id": "Baireddypalli-Bairedypalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6083572,
              13.0907326
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0499",
          "timestamp": "1689234712",
          "level": "normal",
          "asset": {
              "id": "Bommasamudram-Gudipala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.12662879999999,
              13.0534134
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1960",
          "timestamp": "1702294376",
          "level": "normal",
          "asset": {
              "id": "Chittoor-Chittoor Mandal"
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
          "id": "PD0545",
          "timestamp": "1681891850",
          "level": "normal",
          "asset": {
              "id": "Chowdepalli-Chowdepalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6202865,
              13.4811456
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1743",
          "timestamp": "1705646605",
          "level": "normal",
          "asset": {
              "id": "7b826149-8395-457f-9b87-f1900dc09823"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.55337429319367,
              13.440421308900527
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1065",
          "timestamp": "1681889060",
          "level": "normal",
          "asset": {
              "id": "Edigapalli-Punganur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.57501409999999,
              13.36592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0471",
          "timestamp": 1712392840,
          "level": "normal",
          "asset": {
              "id": "61f48602-50d6-4285-8d3d-0b14ca9cd3a2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.21296,
              13.26546
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0135",
          "timestamp": "1681978876",
          "level": "normal",
          "asset": {
              "id": "Gangavaram-Gangavaram (M)"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7457541,
              13.217416
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0569",
          "timestamp": "1687937322",
          "level": "normal",
          "asset": {
              "id": "Gonumakulapalli-V.Kota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4794568,
              13.0011676
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1091",
          "timestamp": "1676716201",
          "level": "normal",
          "asset": {
              "id": "Gudupalli-Gudupalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4975067,
              12.9735336
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2498",
          "timestamp": "1706505539",
          "level": "normal",
          "asset": {
              "id": "3a4163d9-5a14-48b7-acb0-1e3dd804a639"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.09995375796177,
              13.197322101910832
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0501",
          "timestamp": "1703659577",
          "level": "normal",
          "asset": {
              "id": "16ee226a-5848-4121-bf4d-aae02cbdf4e1"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.43349,
              13.342059999999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0777",
          "timestamp": "1681892119",
          "level": "normal",
          "asset": {
              "id": "Kalluru-Pulicherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.99982,
              13.5593429
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0875",
          "timestamp": "1681964905",
          "level": "normal",
          "asset": {
              "id": "Kandur-Somala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.773831,
              13.5549253
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0127",
          "timestamp": "1683364760",
          "level": "normal",
          "asset": {
              "id": "Karvetinagaram-Karvetinagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4465159,
              13.4210317
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1784",
          "timestamp": "1681965382",
          "level": "normal",
          "asset": {
              "id": "Kolamaisnapalli-Palamaner Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7474214,
              13.194898
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1001",
          "timestamp": "1682166601",
          "level": "normal",
          "asset": {
              "id": "Koppedu-Nindra Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7038771,
              13.4093667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1080",
          "timestamp": "1688971385",
          "level": "normal",
          "asset": {
              "id": "Kurichivedu-Chittoor Mandal"
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
          "id": "PD0317",
          "timestamp": "1682056414",
          "level": "normal",
          "asset": {
              "id": "Madireddypalli-Yadamari Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9853048,
              13.1536656
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1203",
          "timestamp": "1681886959",
          "level": "normal",
          "asset": {
              "id": "Nalagampalli-Bangarupalyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9132652,
              13.1962328
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1759",
          "timestamp": "1702032001",
          "level": "normal",
          "asset": {
              "id": "O/O AD (AH), ISDP-Chittoor Mandal"
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
          "id": "PD1039",
          "timestamp": "1694497210",
          "level": "normal",
          "asset": {
              "id": "P.Kothakota-Puthalapattu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1075726,
              13.4102124
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0052",
          "timestamp": "1684289719",
          "level": "normal",
          "asset": {
              "id": "Paipalem-Kuppam Mandal"
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
          "id": "PD0311",
          "timestamp": "1682410378",
          "level": "normal",
          "asset": {
              "id": "Palasamudram-Palasamudram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.385975,
              13.2121167
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1758",
          "timestamp": "1702095601",
          "level": "normal",
          "asset": {
              "id": "Pulicherla-Pulicherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.043318,
              13.6004704
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0085",
          "timestamp": 1710754887,
          "level": "normal",
          "asset": {
              "id": "8c46444d-8211-470a-8ee4-f04e8f2bab7f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.09343,
              13.2116
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1272",
          "timestamp": "1705048028",
          "level": "normal",
          "asset": {
              "id": "ac1916af-a7cb-43fd-84ba-f2287017922a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.43349,
              13.34206
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0092",
          "timestamp": "1703665793",
          "level": "normal",
          "asset": {
              "id": "4d59b11b-255d-46aa-81db-cd1f5de06a50"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.38761,
              13.20912
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1524",
          "timestamp": "1703672962",
          "level": "normal",
          "asset": {
              "id": "5fb8867a-7983-4323-981c-f2051326412c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.43349,
              13.34206
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1158",
          "timestamp": "1703603675",
          "level": "normal",
          "asset": {
              "id": "c0d8c99f-957f-4ec2-b237-ecffe9d6e28b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7836463157895,
              14.482399473684211
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1857",
          "timestamp": "1706594593",
          "level": "normal",
          "asset": {
              "id": "717bb3da-1fc6-4abe-a368-dbba0f691b4c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.28337007462686,
              13.43540186567164
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0462",
          "timestamp": "1703636750",
          "level": "normal",
          "asset": {
              "id": "0766ca70-fae5-46d1-b396-d883486355fc"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.8054,
              14.44487
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2027",
          "timestamp": "1706677955",
          "level": "normal",
          "asset": {
              "id": "5fb51d17-d37c-4c3a-bb04-325ad066972f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.23419,
              13.40785
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0333",
          "timestamp": "1682791800",
          "level": "normal",
          "asset": {
              "id": "Rompicherla-Rompicherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.050381,
              13.6678164
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0542",
          "timestamp": "1681890784",
          "level": "normal",
          "asset": {
              "id": "Royalpeta-Peddapanjani Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6865903,
              13.3070863
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1584",
          "timestamp": "1701738001",
          "level": "normal",
          "asset": {
              "id": "SR Puram- SR Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.382808,
              13.5193126
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1297",
          "timestamp": "1681967843",
          "level": "normal",
          "asset": {
              "id": "Sankarayalpeta-Peddapanjani Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6865903,
              13.3070863
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1610",
          "timestamp": "1682480333",
          "level": "normal",
          "asset": {
              "id": "Sathambakam-Penumur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1613171,
              13.2866175
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0094",
          "timestamp": "1694620801",
          "level": "normal",
          "asset": {
              "id": "Thayyur-SR Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.382808,
              13.5193126
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1491",
          "timestamp": "1675196987",
          "level": "normal",
          "asset": {
              "id": "Theertham-Bairedypalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.53769059999999,
              13.0959041
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0174",
          "timestamp": "1681051800",
          "level": "normal",
          "asset": {
              "id": "Thugundram-G.D.Nellore Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2666098,
              13.1911129
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1912",
          "timestamp": "1706179699",
          "level": "normal",
          "asset": {
              "id": "9cb30049-ac25-44ca-be7d-af4a2e8f387f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.34789,
              13.14795
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0441",
          "timestamp": "1694416834",
          "level": "normal",
          "asset": {
              "id": "Vanamaladinne-Punganur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.514259,
              13.3155537
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1114",
          "timestamp": "1681892721",
          "level": "normal",
          "asset": {
              "id": "Vijayapuram-Vijayapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6972785,
              13.2677213
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0861",
          "timestamp": 1711309404,
          "level": "normal",
          "asset": {
              "id": "7caeb76e-1ff3-400e-84dc-013063566510"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.54194,
              17.10035
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1861",
          "timestamp": "1706128797",
          "level": "normal",
          "asset": {
              "id": "9ab131fb-4baf-40dd-a702-bc4ce54a798d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.72643676470591,
              17.01679852941176
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1021",
          "timestamp": "1703138384",
          "level": "normal",
          "asset": {
              "id": "29fe12c3-7bb2-41c5-99f8-d280796f46e8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.40076,
              16.9439
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0738",
          "timestamp": "1703055140",
          "level": "normal",
          "asset": {
              "id": "927f631b-68ff-46be-a461-3a4ea7dd30b9"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.66774999999997,
              16.90575545454545
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1084",
          "timestamp": "1701411001",
          "level": "normal",
          "asset": {
              "id": "Annadevarapeta-Thallapudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6254415,
              17.1182749
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0475",
          "timestamp": "1701236400",
          "level": "normal",
          "asset": {
              "id": "Biccavolu-Biccavolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.043438,
              16.9665505
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1962",
          "timestamp": "1683699125",
          "level": "normal",
          "asset": {
              "id": "Burugupudi-Korukonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8140779,
              17.0968244
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0220",
          "timestamp": "1696223679",
          "level": "normal",
          "asset": {
              "id": "Chagallu-Chagallu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7025144,
              17.0127026
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1156",
          "timestamp": "1683614590",
          "level": "normal",
          "asset": {
              "id": "Chodavaram-Nallajerla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4546775,
              16.9551733
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0427",
          "timestamp": 1710747936,
          "level": "normal",
          "asset": {
              "id": "4c0ec7be-5dc1-49aa-afa3-7d7d627fa8f9"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.72637,
              17.01707
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0820",
          "timestamp": "1694149817",
          "level": "normal",
          "asset": {
              "id": "Devarapalli-Devarapalli (M)"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5623849,
              17.0350499
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0352",
          "timestamp": "1687427401",
          "level": "normal",
          "asset": {
              "id": "Gokavaram-Gokavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.84839099999999,
              17.2563226
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0944",
          "timestamp": "1701146400",
          "level": "normal",
          "asset": {
              "id": "Jegurupadu-Kadiam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8497567,
              16.9091169
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0026",
          "timestamp": "1683712801",
          "level": "normal",
          "asset": {
              "id": "Kalavalapalli-Chagallu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6411184,
              16.9487665
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0687",
          "timestamp": "1682216401",
          "level": "normal",
          "asset": {
              "id": "Khandavalli-Peravali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7712361,
              16.7210749
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0444",
          "timestamp": "1690155001",
          "level": "normal",
          "asset": {
              "id": "Komaripalem-Biccavolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.00392550000001,
              16.9225264
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1021",
          "timestamp": "1683174747",
          "level": "normal",
          "asset": {
              "id": "Korumamidi-Nidadavolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.57198190000001,
              16.9461518
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1110",
          "timestamp": "1696571554",
          "level": "normal",
          "asset": {
              "id": "Kutukuluru-Anaparthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9780262,
              16.8761144
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0776",
          "timestamp": "1696661513",
          "level": "normal",
          "asset": {
              "id": "Pasivedula-Kovvur Mandal"
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
          "id": "AA0400",
          "timestamp": "1706947933",
          "level": "normal",
          "asset": {
              "id": "216b1d56-e440-43a8-b8e4-5dd28507bfd6"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.73914,
              16.74996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0993",
          "timestamp": "1683109346",
          "level": "normal",
          "asset": {
              "id": "Polamuru-Anaparthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.96575490000001,
              16.9093137
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0636",
          "timestamp": "1686223249",
          "level": "normal",
          "asset": {
              "id": "Pothavaram-Nallajerla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.41278799999999,
              17.0185339
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0889",
          "timestamp": "1683272419",
          "level": "normal",
          "asset": {
              "id": "Punyakshetram-Rajanagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8524882,
              16.9765865
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1179",
          "timestamp": "1683259818",
          "level": "normal",
          "asset": {
              "id": "Purushothapalli-Nidadavolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7116839,
              16.9079589
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1163",
          "timestamp": "1688453761",
          "level": "normal",
          "asset": {
              "id": "Rajampalem-Gopalapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8961782,
              17.3829356
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1661",
          "timestamp": "1689135272",
          "level": "normal",
          "asset": {
              "id": "Rajavolu-Rajamahendravaram Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8251687,
              16.9520617
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0321",
          "timestamp": "1683176127",
          "level": "normal",
          "asset": {
              "id": "Rampayerrampalem-Gokavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.84839099999999,
              17.2563226
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1976",
          "timestamp": "1683098949",
          "level": "normal",
          "asset": {
              "id": "Rangampeta-Rangampeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.98525939999999,
              17.0893743
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0074",
          "timestamp": "1686137250",
          "level": "normal",
          "asset": {
              "id": "Seetanagaram-Seethanagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.672954,
              17.195976
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2285",
          "timestamp": 1710828912,
          "level": "normal",
          "asset": {
              "id": "53e81639-edf7-4a97-abce-0adcffd951b7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.66454,
              17.12723
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0641",
          "timestamp": "1685302801",
          "level": "normal",
          "asset": {
              "id": "Thorredu-Rajamahendravaram Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.76666159999999,
              17.0819886
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1583",
          "timestamp": "1683099736",
          "level": "normal",
          "asset": {
              "id": "Undrajavaram-Undrajavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6981473,
              16.7893633
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1603",
          "timestamp": "1687761946",
          "level": "normal",
          "asset": {
              "id": "Vadapalli-Kovvur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8128716,
              16.8154288
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1398",
          "timestamp": "1701073801",
          "level": "normal",
          "asset": {
              "id": "Vadisileru-Rangampeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9507538,
              17.0859869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0701",
          "timestamp": "1685114479",
          "level": "normal",
          "asset": {
              "id": "Vedullapalli-Seethanagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.71868409999999,
              17.1313277
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1382",
          "timestamp": "1681662600",
          "level": "normal",
          "asset": {
              "id": "Veliveenu-Undrajavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6870496,
              16.8425666
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1473",
          "timestamp": "1704868941",
          "level": "normal",
          "asset": {
              "id": "c54c0d68-7827-48ac-9ba9-a8cea8bba271"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.11427776119403,
              16.719862835820898
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1718",
          "timestamp": "1700124862",
          "level": "normal",
          "asset": {
              "id": "dbfb20c0-073d-4ac9-bf85-a29867b93ff9"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.709325,
              16.511425
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1139",
          "timestamp": "1683615408",
          "level": "normal",
          "asset": {
              "id": "Agiripalli - Agiripalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.78517099999999,
              16.6799583
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2528",
          "timestamp": "1702961861",
          "level": "normal",
          "asset": {
              "id": "b0535ed8-383f-49f4-9d44-62a1227e8971"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.33492,
              16.44764
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0144",
          "timestamp": "1685688685",
          "level": "normal",
          "asset": {
              "id": "Borrampalem - T Narasapuram Mandal"
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
          "id": "PD1354",
          "timestamp": "1695205276",
          "level": "normal",
          "asset": {
              "id": "Buttayagudem - Buttayagudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3199996,
              17.2027004
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0408",
          "timestamp": "1682663011",
          "level": "normal",
          "asset": {
              "id": "Chataparru - Eluru Mandal"
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
          "id": "PD0840",
          "timestamp": "1686906001",
          "level": "normal",
          "asset": {
              "id": "Chatrai - Chatrai Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8640699,
              16.9946061
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0677",
          "timestamp": "1700254082",
          "level": "normal",
          "asset": {
              "id": "57cfceee-7a2f-4a90-83af-c2d01db2038a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68765923076923,
              16.521832307692307
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0330",
          "timestamp": "1688709059",
          "level": "normal",
          "asset": {
              "id": "Chebrolu - Unguturu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3921781,
              16.828945
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1238",
          "timestamp": "1688619861",
          "level": "normal",
          "asset": {
              "id": "Chintapdu - Mandavalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1568329,
              16.513692
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1020",
          "timestamp": "1683591601",
          "level": "normal",
          "asset": {
              "id": "D.Tirumala D.Tirumala Mandal"
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
          "id": "AA1762",
          "timestamp": "1702788997",
          "level": "normal",
          "asset": {
              "id": "dace5f8e-a50b-4671-96a4-4ce794952d88"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347609756095,
              16.506834634146333
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1740",
          "timestamp": "1691562001",
          "level": "normal",
          "asset": {
              "id": "Darbhagudem - Jeelugumilli Mandal"
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
          "id": "PD0421",
          "timestamp": "1683611618",
          "level": "normal",
          "asset": {
              "id": "Dippakayalapadu  - Koyyalagudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.455364,
              17.1154906
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1316",
          "timestamp": "1704697027",
          "level": "normal",
          "asset": {
              "id": "6d88484b-2d01-4c81-99e5-cebfa159df5f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.41889,
              17.157220000000002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0013",
          "timestamp": "1686117053",
          "level": "normal",
          "asset": {
              "id": "Edara - Agiripalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7526199,
              16.7273975
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0424",
          "timestamp": "1701248721",
          "level": "normal",
          "asset": {
              "id": "95d9538a-8d56-4500-95f6-df7f09f26943"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.78137,
              16.6819
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0203",
          "timestamp": "1683610070",
          "level": "normal",
          "asset": {
              "id": "G-Kothapalli  - D-Tirumala Mandal"
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
          "id": "PD1035",
          "timestamp": "1682660141",
          "level": "normal",
          "asset": {
              "id": "Gollapalli - Nuzvid Mandal"
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
          "id": "AA0226",
          "timestamp": "1700254266",
          "level": "normal",
          "asset": {
              "id": "694c4e15-1898-4b10-855a-c87465357638"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63006714285713,
              16.501904285714282
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1379",
          "timestamp": "1696577218",
          "level": "normal",
          "asset": {
              "id": "Gundugolanu - Bhimadole Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.23123009999999,
              16.7797429
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1232",
          "timestamp": "1705726766",
          "level": "normal",
          "asset": {
              "id": "b4be7e82-104e-48a5-adfe-332aa9b4059b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.11427633333332,
              16.719857500000007
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0343",
          "timestamp": "1682662053",
          "level": "normal",
          "asset": {
              "id": "Jalipudi - Eluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1582112,
              16.6816556
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1765",
          "timestamp": "1699649529",
          "level": "normal",
          "asset": {
              "id": "b1d4b277-a295-424e-9750-d7f7e86729d1"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.891044,
              16.056887
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1308",
          "timestamp": "1691212286",
          "level": "normal",
          "asset": {
              "id": "Kalaparru - Pedapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.01204969999999,
              16.6697377
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1216",
          "timestamp": "1682102400",
          "level": "normal",
          "asset": {
              "id": "Kalidindi - Kalidindi Mandal"
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
          "id": "PD1457",
          "timestamp": "1698984001",
          "level": "normal",
          "asset": {
              "id": "Kamavarapukota - Kamavarapukota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1938878,
              17.0097652
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0845",
          "timestamp": "1695279696",
          "level": "normal",
          "asset": {
              "id": "Kanukollu  - Mandavalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.132018,
              16.4601077
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0501",
          "timestamp": "1682666747",
          "level": "normal",
          "asset": {
              "id": "Katrenipadu - Musunuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.95366779999999,
              16.7856631
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1572",
          "timestamp": "1685000211",
          "level": "normal",
          "asset": {
              "id": "Korukollu - Kalidindi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2436227,
              16.4837824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1253",
          "timestamp": "1682674583",
          "level": "normal",
          "asset": {
              "id": "Kovvali - Denduluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.17337169999999,
              16.7305111
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0675",
          "timestamp": "1695107401",
          "level": "normal",
          "asset": {
              "id": "Koyyalagudem - Koyyalagudem Mandal"
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
          "id": "PD0530",
          "timestamp": "1682589980",
          "level": "normal",
          "asset": {
              "id": "Lakkavaram - Jangareddygudem Mandal"
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
          "id": "PD1199",
          "timestamp": "1683617156",
          "level": "normal",
          "asset": {
              "id": "Lingapalem - Lingapalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.991942,
              16.9484113
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1517",
          "timestamp": "1682673515",
          "level": "normal",
          "asset": {
              "id": "Mudinepalli - Mudinepalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1140376,
              16.4195214
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1155",
          "timestamp": "1683006792",
          "level": "normal",
          "asset": {
              "id": "Musunuru - Musunuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9339067,
              16.8260112
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1436",
          "timestamp": "1694417499",
          "level": "normal",
          "asset": {
              "id": "Nidamarru - Nidamarru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.42103039999999,
              16.7234241
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0385",
          "timestamp": "1683527369",
          "level": "normal",
          "asset": {
              "id": "Pedakadimi - Pedavegi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.02439559999999,
              16.7357642
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1675",
          "timestamp": "1683784975",
          "level": "normal",
          "asset": {
              "id": "Pedapadu - Pedapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0333941,
              16.636955
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0682",
          "timestamp": "1683002644",
          "level": "normal",
          "asset": {
              "id": "Pedavegi - Pedavegi  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.106506,
              16.8101731
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0341",
          "timestamp": "1694690400",
          "level": "normal",
          "asset": {
              "id": "Pippara-Ganapavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4684972,
              16.7046504
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0583",
          "timestamp": "1682663513",
          "level": "normal",
          "asset": {
              "id": "Prodduvaka - Mudinepalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2209014,
              16.4572905
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0967",
          "timestamp": "1684309906",
          "level": "normal",
          "asset": {
              "id": "Pulla - Bhimadole Mandal"
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
          "id": "AA1342",
          "timestamp": "1702659441",
          "level": "normal",
          "asset": {
              "id": "3db8140f-6004-4508-a1c0-6a751549e460"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347527559062,
              16.506835669291338
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2435",
          "timestamp": "1703134684",
          "level": "normal",
          "asset": {
              "id": "d7bc9e5a-5606-409b-bd0a-68f46bcb6e3a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.07590000000003,
              17.103870000000004
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1024",
          "timestamp": "1707459973",
          "level": "normal",
          "asset": {
              "id": "d83d9ada-d7c4-4558-aeb3-5247299d3a1d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.21475152941177,
              16.554181058823538
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0900",
          "timestamp": 1712082018,
          "level": "normal",
          "asset": {
              "id": "c2f8d57c-ae4d-4036-a549-ad277a6e773a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65861,
              16.21257
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2525",
          "timestamp": "1706677099",
          "level": "normal",
          "asset": {
              "id": "6de81cc4-4b9f-4a73-8b40-269fe208ba31"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.07590083333338,
              17.103871944444446
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1323",
          "timestamp": "1703091832",
          "level": "normal",
          "asset": {
              "id": "5f666d9b-b48e-4df7-96ea-8564ac853aee"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68668,
              16.52399
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1103",
          "timestamp": "3408430193",
          "level": "normal",
          "asset": {
              "id": "49517204-732f-47f0-9584-bda874c4fa68"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67571799999999,
              16.50528
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1992",
          "timestamp": "1705721414",
          "level": "normal",
          "asset": {
              "id": "c2af903c-7dd0-49ae-872d-466850ee4ba7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.53245,
              16.55032
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2038",
          "timestamp": "1702663486",
          "level": "normal",
          "asset": {
              "id": "be5f89af-6573-41c1-b414-d4f14090cd3a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.673482,
              16.507204
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1724",
          "timestamp": "1703091481",
          "level": "normal",
          "asset": {
              "id": "9f4f5683-bb11-4af0-9519-c5c056745831"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347609756095,
              16.506834634146333
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1115",
          "timestamp": 1711434267,
          "level": "normal",
          "asset": {
              "id": "4f2061dd-415c-42ca-afb1-d04899848cee"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.07939,
              16.73243
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1209",
          "timestamp": "1693820401",
          "level": "normal",
          "asset": {
              "id": "Seetanapalli -Kaikaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.2127852,
              16.5527879
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1708",
          "timestamp": "1688704801",
          "level": "normal",
          "asset": {
              "id": "Seethanagaram - Chintalapudi Mandal"
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
          "id": "PD0890",
          "timestamp": "1686498000",
          "level": "normal",
          "asset": {
              "id": "T Narasapuram - T Narasapuram Mandal"
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
          "id": "PD0386",
          "timestamp": "1683006601",
          "level": "normal",
          "asset": {
              "id": "Tadikallapudi - Kamavarapukota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1938878,
              17.0097652
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1068",
          "timestamp": "1678134001",
          "level": "normal",
          "asset": {
              "id": "Unguturu - Unguturu Mandal"
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
          "id": "AA0180",
          "timestamp": "1700254184",
          "level": "normal",
          "asset": {
              "id": "798871c4-b3fd-449c-a810-55daf2d2a373"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63004,
              16.50184
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0694",
          "timestamp": "1688111926",
          "level": "normal",
          "asset": {
              "id": "Velerupadu - Velerupadu Mandal"
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
          "id": "PD0651",
          "timestamp": "1685082656",
          "level": "normal",
          "asset": {
              "id": "Yanamadala - Nuzvid Mandal"
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
          "id": "PD1430",
          "timestamp": "1683010130",
          "level": "normal",
          "asset": {
              "id": "Yarrampalli - Chintalapudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9875964,
              17.0696809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0294",
          "timestamp": "1699994684",
          "level": "normal",
          "asset": {
              "id": "1daae8a1-4bcf-44b5-9c57-b6442e9b2809"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.16129,
              13.07676
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1490",
          "timestamp": "1687949512",
          "level": "normal",
          "asset": {
              "id": "AB Palem-Pedanandipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.32827379999999,
              16.1392832
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1249",
          "timestamp": "1704870600",
          "level": "normal",
          "asset": {
              "id": "c2ebd4da-dcfd-4017-8070-238f9abb8a9b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.44997,
              16.29652
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0304",
          "timestamp": "1696915425",
          "level": "normal",
          "asset": {
              "id": "Angalakuduru-Tenali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.61187679999999,
              16.2393275
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0050",
          "timestamp": "1682671177",
          "level": "normal",
          "asset": {
              "id": "Brahamanakoduru-Ponnur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5481667,
              16.0685991
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1352",
          "timestamp": "1704950693",
          "level": "normal",
          "asset": {
              "id": "468358e2-ac70-4934-9889-c99d84626e48"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4492444680851,
              16.29657595744681
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1514",
          "timestamp": "1705996734",
          "level": "normal",
          "asset": {
              "id": "d9124ab9-2ced-426a-b57a-1b7f72d53542"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.92774285714286,
              16.88012857142857
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1086",
          "timestamp": "1682657984",
          "level": "normal",
          "asset": {
              "id": "Gottipadu-Prathipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2976316,
              16.1640601
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0746",
          "timestamp": "1686151845",
          "level": "normal",
          "asset": {
              "id": "Kakumanu-Kakumanu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.39856549999999,
              16.0572832
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0187",
          "timestamp": "1682662171",
          "level": "normal",
          "asset": {
              "id": "Katrapadu-Vatticherukuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4250021,
              16.1967578
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0594",
          "timestamp": "1685076814",
          "level": "normal",
          "asset": {
              "id": "Kaza-Mangalagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.54542940000002,
              16.3907375
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1353",
          "timestamp": "1683535588",
          "level": "normal",
          "asset": {
              "id": "Kolakaluru-Tenali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6174279,
              16.3036391
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1450",
          "timestamp": "1690294200",
          "level": "normal",
          "asset": {
              "id": "Kollipara-Kollipara Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7494193,
              16.2872034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2460",
          "timestamp": "1702656551",
          "level": "normal",
          "asset": {
              "id": "315528eb-fc27-4b6c-9cb9-025217a88041"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347609756095,
              16.506834634146333
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0672",
          "timestamp": "1684123192",
          "level": "normal",
          "asset": {
              "id": "Mandadam-Thulluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5257863,
              16.5180488
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0596",
          "timestamp": "1684130205",
          "level": "normal",
          "asset": {
              "id": "Medikonduru-Thulluru Mandal"
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
          "id": "PD1609",
          "timestamp": "1684591801",
          "level": "normal",
          "asset": {
              "id": "Mulukuduru-Ponnur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.53203789999999,
              16.0226568
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1380",
          "timestamp": "1682587200",
          "level": "normal",
          "asset": {
              "id": "Munipalli-Ponnur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.539678,
              16.1255225
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0369",
          "timestamp": "1682657084",
          "level": "normal",
          "asset": {
              "id": "Munnangi-Kollipara Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7218505,
              16.3301503
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0153",
          "timestamp": "1683096737",
          "level": "normal",
          "asset": {
              "id": "Mutluru-Vatticherukuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4840974,
              16.157955
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1444",
          "timestamp": "1684209354",
          "level": "normal",
          "asset": {
              "id": "Namburu -Pedakakani  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.52879449999999,
              16.35895
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1756",
          "timestamp": "1685717012",
          "level": "normal",
          "asset": {
              "id": "Nanduru-Ponnur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5091133,
              16.0252759
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1543",
          "timestamp": "1683704245",
          "level": "normal",
          "asset": {
              "id": "Nudurupadu-Tadikonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4521216,
              16.4199857
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0165",
          "timestamp": "1682926155",
          "level": "normal",
          "asset": {
              "id": "Nutakki -Mangalagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6507268,
              16.4158347
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0109",
          "timestamp": "1684071601",
          "level": "normal",
          "asset": {
              "id": "Pata ponnur-Ponnur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5481667,
              16.0685991
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0704",
          "timestamp": "1682661711",
          "level": "normal",
          "asset": {
              "id": "Pedakakani-Chebrolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4911892,
              16.3398218
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0372",
          "timestamp": "1682590067",
          "level": "normal",
          "asset": {
              "id": "Pedapalem-Duggirala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6590494,
              16.3841498
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1421",
          "timestamp": "1683779902",
          "level": "normal",
          "asset": {
              "id": "Pedaparimi-Thulluru Mandal"
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
          "id": "PD0699",
          "timestamp": "1683108330",
          "level": "normal",
          "asset": {
              "id": "Pedaravuru-Tenali Mandal"
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
          "id": "PD0821",
          "timestamp": "1686044554",
          "level": "normal",
          "asset": {
              "id": "Phirangipuram-Tadikonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4521216,
              16.4199857
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0607",
          "timestamp": "1689742201",
          "level": "normal",
          "asset": {
              "id": "Ponnekallu-Tadikonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.40065659999999,
              16.4074378
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0843",
          "timestamp": "3409255374",
          "level": "normal",
          "asset": {
              "id": "d2e5a44c-9729-4e9d-b740-273c7ad9ebca"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347527559062,
              16.506835669291338
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1718",
          "timestamp": "1683796801",
          "level": "normal",
          "asset": {
              "id": "Ravela-Tadikonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3505521,
              16.4196975
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1394",
          "timestamp": "1695102001",
          "level": "normal",
          "asset": {
              "id": "Siripuram-Thulluru Mandal"
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
          "id": "PD1763",
          "timestamp": "1701863401",
          "level": "normal",
          "asset": {
              "id": "Tadepalli-Tadepalli Mandal"
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
          "id": "PD0536",
          "timestamp": "1683624786",
          "level": "normal",
          "asset": {
              "id": "Uppalapadu(o)-Pedanandipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2335255,
              16.0768094
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0012",
          "timestamp": "1683787934",
          "level": "normal",
          "asset": {
              "id": "Uppalapadu-Pedakakani  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5146713,
              16.3048631
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1251",
          "timestamp": "1704953841",
          "level": "normal",
          "asset": {
              "id": "8efcd24c-1159-4bf1-b351-74032b934114"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.44932919999998,
              16.296615799999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0160",
          "timestamp": "1684988950",
          "level": "normal",
          "asset": {
              "id": "Vallabhapuram-Kollipara Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.71998959999999,
              16.3523452
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1915",
          "timestamp": "1702095600",
          "level": "normal",
          "asset": {
              "id": "Vangipuram-Prathipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.38743749999999,
              16.1310603
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1762",
          "timestamp": "1698820175",
          "level": "normal",
          "asset": {
              "id": "Vatticherukuru-Vatticherukuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4478352,
              16.1819993
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1056",
          "timestamp": "1687418156",
          "level": "normal",
          "asset": {
              "id": "Vejendla-Chebrolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.524397,
              16.2368816
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0048",
          "timestamp": "1683000066",
          "level": "normal",
          "asset": {
              "id": "ANNAVARAM-Sankhavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.40128729999999,
              17.2788719
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0401",
          "timestamp": "1683008141",
          "level": "normal",
          "asset": {
              "id": "ARATLAKATTA-Karapa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.16932369999999,
              16.9018262
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1031",
          "timestamp": "1684302481",
          "level": "normal",
          "asset": {
              "id": "ATCHAMPETA-Samalkot Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.22980559999999,
              17.030901
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0425",
          "timestamp": "1683003553",
          "level": "normal",
          "asset": {
              "id": "BENDAPUDI-Thondangi Mandal"
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
          "id": "PD1961",
          "timestamp": "1689133801",
          "level": "normal",
          "asset": {
              "id": "CHEBROLU-Gollaprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.3153433,
              17.2057591
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0790",
          "timestamp": "1682933371",
          "level": "normal",
          "asset": {
              "id": "DHARMAVARAM-Prathipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2264398,
              17.2294916
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0757",
          "timestamp": "1683003986",
          "level": "normal",
          "asset": {
              "id": "DIVILI -Peddapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1638846,
              17.1434617
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0057",
          "timestamp": "1683798567",
          "level": "normal",
          "asset": {
              "id": "DUGGUDURU-Kajuluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1482448,
              16.7816609
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1548",
          "timestamp": "1683781306",
          "level": "normal",
          "asset": {
              "id": "DURGADA-Gollaprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.3438327,
              17.2141802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1270",
          "timestamp": "1693640004",
          "level": "normal",
          "asset": {
              "id": "G.MEDAPADU-Samalkot Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1006244,
              16.9892872
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0900",
          "timestamp": "1684559194",
          "level": "normal",
          "asset": {
              "id": "GANDEPALLI-Gandepalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.961664,
              17.1391865
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0829",
          "timestamp": "1683007303",
          "level": "normal",
          "asset": {
              "id": "GOLLAPALEM-Kajuluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1681058,
              16.8010045
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0210",
          "timestamp": "1700664530",
          "level": "normal",
          "asset": {
              "id": "INJARAM-Tallarevu Mandal"
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
          "id": "PD0289",
          "timestamp": "1683631120",
          "level": "normal",
          "asset": {
              "id": "KAJULURU-Kajuluru Mandal"
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
          "id": "PD0219",
          "timestamp": "1682936056",
          "level": "normal",
          "asset": {
              "id": "KANDRAKOTA -Peddapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1298807,
              17.1450734
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0024",
          "timestamp": "1683693686",
          "level": "normal",
          "asset": {
              "id": "KATHIPUDI-Sankhavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.33705049999999,
              17.2418038
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1559",
          "timestamp": "1682938344",
          "level": "normal",
          "asset": {
              "id": "KATRAVULAPALLI-Jaggampeta Mandal"
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
          "id": "PD1210",
          "timestamp": "1695642001",
          "level": "normal",
          "asset": {
              "id": "KIRLAMPUDI-Kirlampudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1811093,
              17.2009965
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0233",
          "timestamp": "1685522730",
          "level": "normal",
          "asset": {
              "id": "KOMARAGIRI-U.Kothapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.3187355,
              17.0878025
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0794",
          "timestamp": "1683009029",
          "level": "normal",
          "asset": {
              "id": "KOTTAM-Kottananduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.4400679,
              17.4454055
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1840",
          "timestamp": "1684559188",
          "level": "normal",
          "asset": {
              "id": "MADHAVAPATNAM-Samalkot Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2067063,
              16.9904415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0712",
          "timestamp": "1701771322",
          "level": "normal",
          "asset": {
              "id": "MALLAM-Pithapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1856385,
              17.1105757
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1935",
          "timestamp": "1682930256",
          "level": "normal",
          "asset": {
              "id": "N.SURAVARAM-Tuni Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.54293249999999,
              17.355267
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0383",
          "timestamp": "1683875909",
          "level": "normal",
          "asset": {
              "id": "NADAKUDURU-Karapa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.16932369999999,
              16.9018262
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1742",
          "timestamp": "1683010819",
          "level": "normal",
          "asset": {
              "id": "NAYAKAMPALLI-Gandepalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0475242,
              17.1117956
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0420",
          "timestamp": "1683784244",
          "level": "normal",
          "asset": {
              "id": "PANDURU-Kakinada R Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2664774,
              17.0513585
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0235",
          "timestamp": "1699077624",
          "level": "normal",
          "asset": {
              "id": "PATAVALA-Tallarevu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.2216538,
              16.8283807
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0062",
          "timestamp": "1683354411",
          "level": "normal",
          "asset": {
              "id": "PEDAPUDI-Peddapudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1305609,
              16.9523477
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0653",
          "timestamp": "1685609400",
          "level": "normal",
          "asset": {
              "id": "R.B.PATNAM-Peddapuram Mandal"
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
          "id": "AA0201",
          "timestamp": "1702880562",
          "level": "normal",
          "asset": {
              "id": "59673a23-73eb-411d-8f98-556db14070b3"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.23245400000002,
              16.96685266666668
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0453",
          "timestamp": "1702880563",
          "level": "normal",
          "asset": {
              "id": "b748655d-5ae2-4ce6-9556-0bd0ba4b6c35"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.23238683333334,
              16.966839666666676
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0264",
          "timestamp": "1699207801",
          "level": "normal",
          "asset": {
              "id": "ROWTHULAPUDI-Routhulapudi Mandal"
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
          "id": "PD0228",
          "timestamp": "1683006643",
          "level": "normal",
          "asset": {
              "id": "SRUNGAVRUKSHAM-Thondangi Mandal"
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
          "id": "PD1731",
          "timestamp": "1689714000",
          "level": "normal",
          "asset": {
              "id": "T P HILLS-Prathipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1917556,
              17.228882
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1438",
          "timestamp": "1693815220",
          "level": "normal",
          "asset": {
              "id": "TETAGUNTA-Tuni Mandal"
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
          "id": "PD1164",
          "timestamp": "1683007793",
          "level": "normal",
          "asset": {
              "id": "U.KOTHAPALLI-U.Kothapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.3187355,
              17.0878025
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1477",
          "timestamp": "1683008706",
          "level": "normal",
          "asset": {
              "id": "VEERAVARAM -Kirlampudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.151645,
              17.1693842
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1303",
          "timestamp": "1687220401",
          "level": "normal",
          "asset": {
              "id": "VELANGI-Karapa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.16932369999999,
              16.9018262
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1022",
          "timestamp": "1683092024",
          "level": "normal",
          "asset": {
              "id": "VETLAPALEM-Samalkot Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1305609,
              17.0226875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1974",
          "timestamp": "1682935226",
          "level": "normal",
          "asset": {
              "id": "VOMMANGI-Prathipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1917556,
              17.228882
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1428",
          "timestamp": "1695723000",
          "level": "normal",
          "asset": {
              "id": "YELESWARAM-Yeleshwaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1063568,
              17.2882648
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0015",
          "timestamp": "1683777459",
          "level": "normal",
          "asset": {
              "id": "Allavaram - Allavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0617",
          "timestamp": "1684398001",
          "level": "normal",
          "asset": {
              "id": "Ambajipeta - Ambajipeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1479",
          "timestamp": "1698415801",
          "level": "normal",
          "asset": {
              "id": "Angara - Kapileswarapuram Mandal"
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
          "id": "PD0843",
          "timestamp": "1683865432",
          "level": "normal",
          "asset": {
              "id": "Arthamuru - Mandapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.94393409999999,
              16.8908833
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1564",
          "timestamp": "1683522276",
          "level": "normal",
          "asset": {
              "id": "Atchutapuram - Kapileswarapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9705274,
              16.8106707
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1211",
          "timestamp": "1686227401",
          "level": "normal",
          "asset": {
              "id": "Atreyapuram - Atreyapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.79314,
              16.8343899
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0609",
          "timestamp": "1700221200",
          "level": "normal",
          "asset": {
              "id": "Avidi - Kothapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9030024,
              16.672679
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1723",
          "timestamp": "1683097282",
          "level": "normal",
          "asset": {
              "id": "Bhimanapalli - Uppalaguptham Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0693",
          "timestamp": "1683260698",
          "level": "normal",
          "asset": {
              "id": "Challapalli - Uppalaguptham Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1074",
          "timestamp": "1687624201",
          "level": "normal",
          "asset": {
              "id": "Chelluru - Rayavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9916586,
              16.8092991
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0717",
          "timestamp": "1689308403",
          "level": "normal",
          "asset": {
              "id": "Cheyyaru - Katrenikona Mandal"
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
          "id": "PD0708",
          "timestamp": "1682688601",
          "level": "normal",
          "asset": {
              "id": "Devaguptham - Allavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1773",
          "timestamp": "1683095125",
          "level": "normal",
          "asset": {
              "id": "Draksharama - Ramachandrapuram Mandal"
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
          "id": "PD1052",
          "timestamp": "1685073418",
          "level": "normal",
          "asset": {
              "id": "Dwarapudi - Mandapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.9261999,
              16.9355804
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1683",
          "timestamp": "1683786696",
          "level": "normal",
          "asset": {
              "id": "Edarapalli - Amalapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0221",
          "timestamp": "1683097265",
          "level": "normal",
          "asset": {
              "id": "Geddanapalli - Katrenikona Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.17476239999999,
              16.5828992
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1665",
          "timestamp": "1683106140",
          "level": "normal",
          "asset": {
              "id": "Gopalapuram - Ravulapalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.82472849999999,
              16.7069924
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1315",
          "timestamp": "1683026995",
          "level": "normal",
          "asset": {
              "id": "Gudimellanka - Malkipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8074055,
              16.4409038
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1182",
          "timestamp": "1683019750",
          "level": "normal",
          "asset": {
              "id": "Gummileru - Alamuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.90777899999999,
              16.8272387
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1208",
          "timestamp": "1697437801",
          "level": "normal",
          "asset": {
              "id": "Gutendeevi - Mummidivaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.10429549999999,
              16.6414998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0097",
          "timestamp": "1699801801",
          "level": "normal",
          "asset": {
              "id": "Kesanakurru - Mummidivaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.10429549999999,
              16.6414998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1062",
          "timestamp": "1685397601",
          "level": "normal",
          "asset": {
              "id": "Kesavadasupalem - Sakhinetipalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7978572,
              16.3613034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1146",
          "timestamp": "1683178800",
          "level": "normal",
          "asset": {
              "id": "Kesavaram - Mandapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.88150399999999,
              16.9327104
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0200",
          "timestamp": "1699871721",
          "level": "normal",
          "asset": {
              "id": "Kothalanka - Mummidivaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.1373629,
              16.6378126
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0376",
          "timestamp": "1683108382",
          "level": "normal",
          "asset": {
              "id": "Kurmapuram - Rayavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.990701,
              16.7826443
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1618",
          "timestamp": "1683094355",
          "level": "normal",
          "asset": {
              "id": "Lakkavaram  - Malkipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.84041239999999,
              16.4222286
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1797",
          "timestamp": "1683021664",
          "level": "normal",
          "asset": {
              "id": "Machavaram - Rayavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.97938959999999,
              16.8483481
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1774",
          "timestamp": "1683103200",
          "level": "normal",
          "asset": {
              "id": "Magam - Inavelli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0440378,
              16.6372889
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1472",
          "timestamp": "1683092123",
          "level": "normal",
          "asset": {
              "id": "Mamidikuduru - Razole Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.91733119999999,
              16.5028955
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0988",
          "timestamp": "1683526319",
          "level": "normal",
          "asset": {
              "id": "Mori - Sakhinetipalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7632052,
              16.4021333
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0869",
          "timestamp": "1688120508",
          "level": "normal",
          "asset": {
              "id": "Mukkamala - Ambajipeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0378",
          "timestamp": "1683108600",
          "level": "normal",
          "asset": {
              "id": "Mukteswaram - Inavelli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.11253250000001,
              16.9183226
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1620",
          "timestamp": "1687932600",
          "level": "normal",
          "asset": {
              "id": "N arsapurapupeta -Ramachandrapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0768023,
              16.8675093
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1213",
          "timestamp": "1691390959",
          "level": "normal",
          "asset": {
              "id": "Pamarru - K.Gangavram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0475242,
              16.7338867
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0367",
          "timestamp": "1683098034",
          "level": "normal",
          "asset": {
              "id": "Pekeru - K.Gangavram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0475242,
              16.7338867
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1358",
          "timestamp": "1683357318",
          "level": "normal",
          "asset": {
              "id": "Penikeru - Alamuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8838931,
              16.7889753
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0042",
          "timestamp": "1683025106",
          "level": "normal",
          "asset": {
              "id": "Pulletikurru - Ambajipeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0031356,
              16.5765809
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1281",
          "timestamp": "1685689234",
          "level": "normal",
          "asset": {
              "id": "Ryali - Atreyapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8019391,
              16.7798744
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0897",
          "timestamp": "1687021801",
          "level": "normal",
          "asset": {
              "id": "Sakhinetipalli - Sakhinetipalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7787067,
              16.4034462
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1554",
          "timestamp": "1683090612",
          "level": "normal",
          "asset": {
              "id": "Tatipaka - Razole Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8799306,
              16.4964968
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1123",
          "timestamp": "1683520953",
          "level": "normal",
          "asset": {
              "id": "V Cchinthalapudi - Amalapuram Mandal"
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
          "id": "PD1601",
          "timestamp": "1683103201",
          "level": "normal",
          "asset": {
              "id": "Vakatippa -Kapileswarapuram Mandal"
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
          "id": "PD1149",
          "timestamp": "1683095775",
          "level": "normal",
          "asset": {
              "id": "Veeravellipalem - Inavelli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0114209,
              16.6600657
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0743",
          "timestamp": "1683020282",
          "level": "normal",
          "asset": {
              "id": "Vella - Ramachandrapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.0665903,
              16.8253812
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0640",
          "timestamp": "1684649400",
          "level": "normal",
          "asset": {
              "id": "Yeditha - Mandapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.88150399999999,
              16.9327104
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1542",
          "timestamp": "1698740401",
          "level": "normal",
          "asset": {
              "id": "manepalli -P.Gannavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.8866233,
              16.5199749
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0547",
          "timestamp": "1701243357",
          "level": "normal",
          "asset": {
              "id": "e8d90df5-a325-4ef0-8a07-b8b45db92e42"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.81781173913043,
              16.541499999999996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0879",
          "timestamp": "1705919046",
          "level": "normal",
          "asset": {
              "id": "b3154eab-57e8-4fe6-bdaa-777f2c2f190a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.91270229166666,
              16.018871041666674
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1209",
          "timestamp": "1699319544",
          "level": "normal",
          "asset": {
              "id": "90c51c34-c707-48ba-b572-2d7a4e900e96"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.271144,
              16.370775
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1711",
          "timestamp": "1701153398",
          "level": "normal",
          "asset": {
              "id": "4d78e787-064b-4259-930f-104557d013b4"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.96339633333334,
              16.641014333333334
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0088",
          "timestamp": "1699652295",
          "level": "normal",
          "asset": {
              "id": "129278cf-e295-47a8-954d-83236d00866b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.930643,
              16.115965
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0146",
          "timestamp": "1700297156",
          "level": "normal",
          "asset": {
              "id": "1b7537c3-eb0e-4dc3-b3ee-1daa36aa4f0d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.15707,
              16.1968
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1735",
          "timestamp": "1700167330",
          "level": "normal",
          "asset": {
              "id": "9d0fc13d-d5f3-40f5-b862-e2aefcdcd089"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.61409499999999,
              16.4927875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1542",
          "timestamp": 1714328081,
          "level": "normal",
          "asset": {
              "id": "5cd23eeb-8886-48c5-8047-3c13bc5429d2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.13924,
              16.19044
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0167",
          "timestamp": "1700124036",
          "level": "normal",
          "asset": {
              "id": "77076529-0c16-43e2-b1c0-6f9046c6ef14"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7086652,
              16.510854799999997
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0923",
          "timestamp": "1706174029",
          "level": "normal",
          "asset": {
              "id": "1e747d3f-5c53-4381-82fa-e93c9c8e17ea"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.96419859649122,
              16.326897192982447
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1090",
          "timestamp": "1700543457",
          "level": "normal",
          "asset": {
              "id": "37e8e6c1-2f85-4e31-a7a6-bb8ab1080918"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00086999999998,
              14.44204
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0741",
          "timestamp": "1701161248",
          "level": "normal",
          "asset": {
              "id": "cf4faa07-717c-4ac3-a12d-ef08910d8cdc"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.71842833333332,
              16.463806666666667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0061",
          "timestamp": 1709024543,
          "level": "normal",
          "asset": {
              "id": "e553b10b-914d-4c4d-8756-530a4913e81c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.84156,
              16.36553
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0310",
          "timestamp": "1689060969",
          "level": "normal",
          "asset": {
              "id": "Ampapuram-Bapulapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.893817,
              16.5989518
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0860",
          "timestamp": "1682569671",
          "level": "normal",
          "asset": {
              "id": "Angaluru-Gudlavalleru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0354406,
              16.38307
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2313",
          "timestamp": 1714125372,
          "level": "normal",
          "asset": {
              "id": "7be628a0-5897-4a70-ab86-5d5f2425c8c2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.13925,
              16.19044
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0851",
          "timestamp": "1687846650",
          "level": "normal",
          "asset": {
              "id": "Atkuru-Unguturu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8518912,
              16.5636353
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0585",
          "timestamp": "1683012718",
          "level": "normal",
          "asset": {
              "id": "Bhatlapenumarru-Movva Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9124781,
              16.2888829
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0895",
          "timestamp": "1682573118",
          "level": "normal",
          "asset": {
              "id": "Bommuluru -Gudivada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0105872,
              16.4111711
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0783",
          "timestamp": "1682661600",
          "level": "normal",
          "asset": {
              "id": "Chennuru-Pedana Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.14856209999999,
              16.3674502
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0113",
          "timestamp": "1685166865",
          "level": "normal",
          "asset": {
              "id": "Chinnapuram- Mandal Machilipatnam"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0506249,
              16.1141326
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1197",
          "timestamp": 1714124974,
          "level": "normal",
          "asset": {
              "id": "622aa21b-1949-4e74-86ee-18f51606dfc2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.13924,
              16.19044
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0824",
          "timestamp": "1696266601",
          "level": "normal",
          "asset": {
              "id": "Devarapalli -Thotlavalluru"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8218617,
              16.2973444
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0672",
          "timestamp": "1703135850",
          "level": "normal",
          "asset": {
              "id": "cc098eb7-e627-442a-994d-4316505a9e5f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.75396,
              16.460190000000008
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1480",
          "timestamp": "1683110973",
          "level": "normal",
          "asset": {
              "id": "Gandigunta-Vuyyuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8391628,
              16.377515
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0488",
          "timestamp": "1682574638",
          "level": "normal",
          "asset": {
              "id": "Ghantasala-Ghantasala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9463751,
              16.1697164
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1071",
          "timestamp": "1684398280",
          "level": "normal",
          "asset": {
              "id": "Gollanapalli  -Gannavaram"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7740912,
              16.6152589
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0331",
          "timestamp": "1682576696",
          "level": "normal",
          "asset": {
              "id": "Gopuvanipalem-Machilipatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1878404,
              16.2138286
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1290",
          "timestamp": "1685785801",
          "level": "normal",
          "asset": {
              "id": "Guduru-Guduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0830691,
              16.2172351
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0430",
          "timestamp": "1684469244",
          "level": "normal",
          "asset": {
              "id": "Indupalli -Unguturu"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8765176,
              16.4682544
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0909",
          "timestamp": "1694816401",
          "level": "normal",
          "asset": {
              "id": "Kankipadu-Kankipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7679058,
              16.4343545
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1327",
          "timestamp": "1683606601",
          "level": "normal",
          "asset": {
              "id": "Kanumolu-Bapulapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.96569319999999,
              16.6054535
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1289",
          "timestamp": "1682577771",
          "level": "normal",
          "asset": {
              "id": "Kapileswarapuram-Pamidimukkala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8640699,
              16.3232192
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0637",
          "timestamp": "1702029601",
          "level": "normal",
          "asset": {
              "id": "Katuru-Vuyyuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.85853569999999,
              16.4220911
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0316",
          "timestamp": "1686283201",
          "level": "normal",
          "asset": {
              "id": "Koduru -Koduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.03406009999999,
              16.008622
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0211",
          "timestamp": "1682933963",
          "level": "normal",
          "asset": {
              "id": "Kosuru-Movva Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.96914749999999,
              16.2053546
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1754",
          "timestamp": "1705611115",
          "level": "normal",
          "asset": {
              "id": "30bd38b0-46db-4c47-891c-05ec4b40615a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.86939027777777,
              16.257276944444442
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1107",
          "timestamp": "1706348530",
          "level": "normal",
          "asset": {
              "id": "5d77dfec-06ff-43b5-96aa-b3e65afe5a41"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.27859943396228,
              16.37539150943397
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0649",
          "timestamp": "1682572810",
          "level": "normal",
          "asset": {
              "id": "Kunderu-Kankipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8287826,
              16.418604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0288",
          "timestamp": "1700213755",
          "level": "normal",
          "asset": {
              "id": "0c601ae8-49a3-46a5-818d-b332aba0767c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67597,
              16.505938571428572
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1227",
          "timestamp": "1683978748",
          "level": "normal",
          "asset": {
              "id": "Modumudi -Avanigadda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9401672,
              16.0182512
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0196",
          "timestamp": "1682494400",
          "level": "normal",
          "asset": {
              "id": "Mopidevi-Mopidevi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9276861,
              16.0667216
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2365",
          "timestamp": "1702369190",
          "level": "normal",
          "asset": {
              "id": "29ce1253-86e6-4d0e-9538-a8d4e04eb023"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.046805,
              16.449135
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1067",
          "timestamp": "1682576724",
          "level": "normal",
          "asset": {
              "id": "Mudunuru-Vuyyuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9041817,
              16.4022085
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0060",
          "timestamp": "1701243303",
          "level": "normal",
          "asset": {
              "id": "c1e39eea-a30e-41ee-99e1-84db7228df58"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.72676263157894,
              16.55201921052631
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0580",
          "timestamp": "1684904400",
          "level": "normal",
          "asset": {
              "id": "Nagayalanka -Nagayalanka Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9180086,
              15.9455478
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0125",
          "timestamp": "1684320601",
          "level": "normal",
          "asset": {
              "id": "Nandamuru-Pedana Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.1988623,
              16.2871707
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1488",
          "timestamp": "1682582401",
          "level": "normal",
          "asset": {
              "id": "Nandivada-Nandivada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.98296309999999,
              16.497495
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0839",
          "timestamp": "1694753909",
          "level": "normal",
          "asset": {
              "id": "Neelipudi-Kruthivennu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3516291,
              16.3985193
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1883",
          "timestamp": "1685598663",
          "level": "normal",
          "asset": {
              "id": "Nimmakuru- Mandal Pamarru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9966915,
              16.2703086
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2456",
          "timestamp": "1699648857",
          "level": "normal",
          "asset": {
              "id": "24dd6853-2978-4aaa-8b6b-308fe9631c5f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.988461,
              16.081286
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1262",
          "timestamp": "1684401601",
          "level": "normal",
          "asset": {
              "id": "Pedakammavaripalem -Nagayalanka Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0217717,
              15.8976822
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0390",
          "timestamp": "1700167814",
          "level": "normal",
          "asset": {
              "id": "8e258535-967d-4024-85d9-e140b551f959"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.614144,
              16.492694
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0362",
          "timestamp": "1696594201",
          "level": "normal",
          "asset": {
              "id": "Pedaparupudi-Pedaparupudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9563936,
              16.4253377
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1853",
          "timestamp": "1706674374",
          "level": "normal",
          "asset": {
              "id": "a02dbc8c-46b2-4abc-aaed-822183a1b079"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68558622222228,
              16.459196222222225
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1754",
          "timestamp": "1689555601",
          "level": "normal",
          "asset": {
              "id": "Pedatummidi-Bantumilli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.27224269999999,
              16.3696665
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1446",
          "timestamp": "1683094193",
          "level": "normal",
          "asset": {
              "id": "Poranki-Penamaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.72515899999999,
              16.4692802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0099",
          "timestamp": "1700124361",
          "level": "normal",
          "asset": {
              "id": "34e9a335-26d3-4ce8-99e4-d22763fa1617"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.70874173913043,
              16.510901739130436
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1284",
          "timestamp": "1704968166",
          "level": "normal",
          "asset": {
              "id": "aa739634-e295-4105-be05-0fef3fd60f34"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.80368555555555,
              16.321827111111116
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0211",
          "timestamp": "1702875503",
          "level": "normal",
          "asset": {
              "id": "b4cda98f-3338-4517-8e1b-82903cafc518"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67222333333333,
              16.498173333333334
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1591",
          "timestamp": "1682571722",
          "level": "normal",
          "asset": {
              "id": "Remalle-Bapulapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9152434,
              16.6594427
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1028",
          "timestamp": "1693821725",
          "level": "normal",
          "asset": {
              "id": "Rudrapaka-Nandivada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.0898426,
              16.5157417
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1611",
          "timestamp": "1699994739",
          "level": "normal",
          "asset": {
              "id": "c1170609-b9f7-4ce2-b00c-517a08ff99db"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.847262,
              16.196498
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1106",
          "timestamp": "1683692400",
          "level": "normal",
          "asset": {
              "id": "Telaprolu-Unguturu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8917353,
              16.5810618
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1057",
          "timestamp": "1682507857",
          "level": "normal",
          "asset": {
              "id": "Thotlavalluru-Thotlavalluru"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.783514,
              16.3468095
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0209",
          "timestamp": "1682922532",
          "level": "normal",
          "asset": {
              "id": "Unguturu-Unguturu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.8792871,
              16.5265369
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1041",
          "timestamp": "1700167738",
          "level": "normal",
          "asset": {
              "id": "74be9460-e3e0-4e8e-ba2c-8ad512ec2c69"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68292624999998,
              16.51933125
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2163",
          "timestamp": "1701163832",
          "level": "normal",
          "asset": {
              "id": "ecba7b80-9322-42c4-aa78-ba5948f841d8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.99541440000002,
              16.433882399999995
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0884",
          "timestamp": "1700167533",
          "level": "normal",
          "asset": {
              "id": "f6143e0c-33c2-444b-ab75-e0b91e181fbe"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.61408,
              16.49275
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1581",
          "timestamp": "1682493509",
          "level": "normal",
          "asset": {
              "id": "Vakkalagadda-Challapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9059269,
              16.1400816
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1183",
          "timestamp": "1687027200",
          "level": "normal",
          "asset": {
              "id": "Veerankilock-Pamidimukkala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.86545339999999,
              16.2781113
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1034",
          "timestamp": "1688102438",
          "level": "normal",
          "asset": {
              "id": "Veeravalli-Bapulapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.91693839999999,
              16.611797
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1823",
          "timestamp": "1700170522",
          "level": "normal",
          "asset": {
              "id": "bc83da9d-053b-4ff7-9a72-69a8cc1404c8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.68291199999999,
              16.519368
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0590",
          "timestamp": "1682568106",
          "level": "normal",
          "asset": {
              "id": "Ventrapragada-Pedaparupudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.90694719999999,
              16.4402373
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0665",
          "timestamp": "1699991839",
          "level": "normal",
          "asset": {
              "id": "965956d7-6144-4814-a016-fec54a01f32f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.971155,
              16.297475
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1339",
          "timestamp": "1701499801",
          "level": "normal",
          "asset": {
              "id": "Zamigolvepalli-Pamarru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.9608569,
              16.3682101
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1378",
          "timestamp": "1703751918",
          "level": "normal",
          "asset": {
              "id": "bb28ad47-aa36-4132-af32-38d7d0dd013b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.226647,
              15.394396
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0319",
          "timestamp": "1681363362",
          "level": "normal",
          "asset": {
              "id": "Badinehal -Kowthalam  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1402447,
              15.7738596
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0023",
          "timestamp": "1685171480",
          "level": "normal",
          "asset": {
              "id": "Baichigeri-Adoni Mandal Mandal"
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
          "id": "PD0979",
          "timestamp": "1680926713",
          "level": "normal",
          "asset": {
              "id": "Banavasi-Yemmiganur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4759334,
              15.7641991
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1585",
          "timestamp": "1681280422",
          "level": "normal",
          "asset": {
              "id": "C Belagal-C Belagal  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.67222389999999,
              15.8201951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0878",
          "timestamp": "1697774415",
          "level": "normal",
          "asset": {
              "id": "Chinnatekur-Kallur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9287354,
              15.6385517
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0830",
          "timestamp": "1687934857",
          "level": "normal",
          "asset": {
              "id": "Chippagiri-Chippagiri Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3180836,
              15.2289047
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1686",
          "timestamp": "1684828800",
          "level": "normal",
          "asset": {
              "id": "Devanabanda-Pathikonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4286011,
              15.4463518
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1219",
          "timestamp": "1680932634",
          "level": "normal",
          "asset": {
              "id": "Devanakonda-Devanakonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.54904479999999,
              15.539518
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1418",
          "timestamp": "1688101809",
          "level": "normal",
          "asset": {
              "id": "Govardhanagiri-Veldurthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9645852,
              15.4727877
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0108",
          "timestamp": "1680741601",
          "level": "normal",
          "asset": {
              "id": "Halaharvi -Halaharvi  Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.44581509999999,
              15.8272672
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0009",
          "timestamp": "1689058023",
          "level": "normal",
          "asset": {
              "id": "Hosur-Pathikonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5007186,
              15.3968177
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0061",
          "timestamp": "1698217201",
          "level": "normal",
          "asset": {
              "id": "Jonnagiri-Tuggali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5705392,
              15.2316713
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1244",
          "timestamp": "1694059834",
          "level": "normal",
          "asset": {
              "id": "K.Husainapuram-Orvakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1778185,
              15.6840564
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1656",
          "timestamp": "1693983792",
          "level": "normal",
          "asset": {
              "id": "Kambaladinne-Peddakadubur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.35397739999999,
              15.7441247
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0855",
          "timestamp": "3409906311",
          "level": "normal",
          "asset": {
              "id": "dd3dc199-09fb-4a0b-9386-02ac773f54dd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.810641,
              15.508781
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1247",
          "timestamp": "1680831601",
          "level": "normal",
          "asset": {
              "id": "Kandukur-Kosigi Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2203966,
              15.9536747
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1764",
          "timestamp": "1680850336",
          "level": "normal",
          "asset": {
              "id": "Katarukonda-Krishnagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.758757,
              15.5462535
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1144",
          "timestamp": "1680841838",
          "level": "normal",
          "asset": {
              "id": "Khyruppala -Aspari  Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.46446069999999,
              15.5447502
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1810",
          "timestamp": "1680939462",
          "level": "normal",
          "asset": {
              "id": "Kothakota-C Belagal  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.67222389999999,
              15.8201951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1724",
          "timestamp": "1681104443",
          "level": "normal",
          "asset": {
              "id": "Kowthalam -Kowthalam  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.1402447,
              15.7738596
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0587",
          "timestamp": "1703845742",
          "level": "normal",
          "asset": {
              "id": "2b726fa5-ce36-4dd4-97e7-122c8b28acdf"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.82879,
              15.55433
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0740",
          "timestamp": "1696916468",
          "level": "normal",
          "asset": {
              "id": "Laddagiri-Kodumur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8896034,
              15.6335782
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1594",
          "timestamp": "1687939805",
          "level": "normal",
          "asset": {
              "id": "Maddikera-Maddikera Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4166602,
              15.248763
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0438",
          "timestamp": "1700649001",
          "level": "normal",
          "asset": {
              "id": "Madire-Adoni Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2121169,
              15.647817
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1255",
          "timestamp": "1681105992",
          "level": "normal",
          "asset": {
              "id": "Malapalli-Mantralayam Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4257319,
              15.9413776
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1959",
          "timestamp": "1681110427",
          "level": "normal",
          "asset": {
              "id": "Mandhavarm-Mantralayam Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4257319,
              15.9413776
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1622",
          "timestamp": "1681451476",
          "level": "normal",
          "asset": {
              "id": "Molagavalli-Alur Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3295708,
              15.3559003
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1361",
          "timestamp": "1685718001",
          "level": "normal",
          "asset": {
              "id": "Nandavaram-Nandavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.28036,
              15.375322
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1902",
          "timestamp": "1696872600",
          "level": "normal",
          "asset": {
              "id": "Nidzur-Kurnool Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0431936,
              15.8172192
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1508",
          "timestamp": "1688105255",
          "level": "normal",
          "asset": {
              "id": "Omnagar -Peddakadubur  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.3148526,
              15.809135
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1710",
          "timestamp": "1693989600",
          "level": "normal",
          "asset": {
              "id": "Orvakal-Orvakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1778185,
              15.6840564
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0245",
          "timestamp": "1705904478",
          "level": "normal",
          "asset": {
              "id": "70d72cf7-af1a-4f79-a783-fbfe4e2b510d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0784,
              15.77415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1079",
          "timestamp": "1697698235",
          "level": "normal",
          "asset": {
              "id": "Peddaharivanam - Adoni Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.09098089999999,
              15.6207125
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0085",
          "timestamp": "1695587401",
          "level": "normal",
          "asset": {
              "id": "Peddahottur-Alur Mandal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.2266653,
              15.3943076
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1778",
          "timestamp": "1681721820",
          "level": "normal",
          "asset": {
              "id": "Peddanelatur-Gonegandla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.665066,
              15.7462798
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1631",
          "timestamp": "1696916289",
          "level": "normal",
          "asset": {
              "id": "Peddathumbalam-Adoni Mandal Mandal"
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
          "id": "AA0338",
          "timestamp": "1703233062",
          "level": "normal",
          "asset": {
              "id": "3a7b610e-8dcb-484d-b6d0-5c468deb74a9"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.895598,
              15.75506
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0445",
          "timestamp": "1681111954",
          "level": "normal",
          "asset": {
              "id": "Polakal-C Belagal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.67222389999999,
              15.8201951
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0713",
          "timestamp": "1703845742",
          "level": "normal",
          "asset": {
              "id": "e0ea9608-34a0-444b-9150-a4caf89e685c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.82879,
              15.554329999999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1455",
          "timestamp": "1700230501",
          "level": "normal",
          "asset": {
              "id": "Pyalakurthy-Kodumur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7709558,
              15.6860071
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1821",
          "timestamp": "1681282326",
          "level": "normal",
          "asset": {
              "id": "Tuggali-Tuggali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.54402879999999,
              15.31422
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1346",
          "timestamp": "1680936000",
          "level": "normal",
          "asset": {
              "id": "Ulchala-Kurnool Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9210307,
              15.8343145
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2054",
          "timestamp": "1705558318",
          "level": "normal",
          "asset": {
              "id": "db8520db-b79f-4429-9ecc-87bb9a37d92a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.971,
              15.64658
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1992",
          "timestamp": "1681185662",
          "level": "normal",
          "asset": {
              "id": "Uyyalawada-Orvakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0751774,
              15.6294155
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1735",
          "timestamp": "1680680401",
          "level": "normal",
          "asset": {
              "id": "Velamakur-Devanakonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.54904479999999,
              15.539518
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1802",
          "timestamp": "1687933622",
          "level": "normal",
          "asset": {
              "id": "Veldurthi-Veldurthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9310283,
              15.5508726
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0964",
          "timestamp": "1683868062",
          "level": "normal",
          "asset": {
              "id": "Alluru - Veerullapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4409967,
              16.7693407
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1413",
          "timestamp": "1683869526",
          "level": "normal",
          "asset": {
              "id": "Bandipalem  - Jaggaiyapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.18680909999999,
              16.8193347
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0422",
          "timestamp": "1694669006",
          "level": "normal",
          "asset": {
              "id": "Chandrala  - Mylavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.70342219999999,
              16.7653239
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0613",
          "timestamp": "1685313600",
          "level": "normal",
          "asset": {
              "id": "Chandralapadu - Chandralapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2014543,
              16.6939114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1569",
          "timestamp": "1682935524",
          "level": "normal",
          "asset": {
              "id": "Chillakallu - Jaggaiyapeta Mandal"
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
          "id": "PD1986",
          "timestamp": "1685299201",
          "level": "normal",
          "asset": {
              "id": "Chinthalapadu - Tiruvuru  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5605111,
              17.0172562
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1592",
          "timestamp": "1696581973",
          "level": "normal",
          "asset": {
              "id": "Eturu - Chandralapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.29693499999999,
              16.6306399
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1152",
          "timestamp": "1683002956",
          "level": "normal",
          "asset": {
              "id": "G. Konduru - G.Konduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5743969,
              16.6821198
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0553",
          "timestamp": "1693380001",
          "level": "normal",
          "asset": {
              "id": "Gandepalli - Mandal Kanchikacherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.33384389999999,
              16.7278667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1504",
          "timestamp": "1683872525",
          "level": "normal",
          "asset": {
              "id": "Gandrai - Jaggaiyapeta  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1191296,
              16.9714343
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1514",
          "timestamp": "1692343500",
          "level": "normal",
          "asset": {
              "id": "Ganginenipalem - G.Konduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.54940069999999,
              16.7480886
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0667",
          "timestamp": "1694579873",
          "level": "normal",
          "asset": {
              "id": "Gollapudi - Vijayawada Rural  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.5827599,
              16.5400016
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0466",
          "timestamp": "1684319229",
          "level": "normal",
          "asset": {
              "id": "Gudavalli - Vijayawada Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7496283,
              16.5123337
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1205",
          "timestamp": "1687934142",
          "level": "normal",
          "asset": {
              "id": "Kambhampadu - A.Konduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.65627529999999,
              16.9851596
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0231",
          "timestamp": "1687152001",
          "level": "normal",
          "asset": {
              "id": "Kondapalli - Ibrahimpatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.52282579999999,
              16.5927605
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1365",
          "timestamp": "1696586130",
          "level": "normal",
          "asset": {
              "id": "Madhavaram - A.Konduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6428241,
              16.9673039
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0096",
          "timestamp": "1688708735",
          "level": "normal",
          "asset": {
              "id": "Magallu - Mandal Nandigama Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.31643609999999,
              16.8138329
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1589",
          "timestamp": "1683785401",
          "level": "normal",
          "asset": {
              "id": "Moguluru -Kanchikacherla  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.338585,
              16.6366924
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1172",
          "timestamp": "1687328400",
          "level": "normal",
          "asset": {
              "id": "Mulapadu - Ibrahimpatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.47019639999999,
              16.6088016
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1830",
          "timestamp": "1684302469",
          "level": "normal",
          "asset": {
              "id": "Mutchinepalli - Reddigudem  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7366859,
              16.8690415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1112",
          "timestamp": "1684025400",
          "level": "normal",
          "asset": {
              "id": "Nawabpeta - Penuganchiprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.24746569999999,
              16.9017437
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0752",
          "timestamp": "1683871385",
          "level": "normal",
          "asset": {
              "id": "Nidamamuru - Vijayawada Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.61965339999999,
              16.6106853
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0621",
          "timestamp": "1686197878",
          "level": "normal",
          "asset": {
              "id": "Patamata - Mandal Vijayawada Urban Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6832302,
              16.4871657
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1598",
          "timestamp": "1683264895",
          "level": "normal",
          "asset": {
              "id": "Penuganchiprolu - Penuganchiprolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.24746569999999,
              16.9017437
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1968",
          "timestamp": "1682929271",
          "level": "normal",
          "asset": {
              "id": "Pulluru - Mylavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.63824129999999,
              16.7638263
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0476",
          "timestamp": "1695274289",
          "level": "normal",
          "asset": {
              "id": "Putrela  - Vissannapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7172633,
              17.0242824
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0315",
          "timestamp": "1686946801",
          "level": "normal",
          "asset": {
              "id": "Reddigudem - Reddigudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7366859,
              16.8690415
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1795",
          "timestamp": "1688017201",
          "level": "normal",
          "asset": {
              "id": "Telladevarapalli - Vissannapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.7380716,
              16.9669842
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1484",
          "timestamp": "1683778783",
          "level": "normal",
          "asset": {
              "id": "Vatsavai - Vatsavai Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2446779,
              16.9804204
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0923",
          "timestamp": "1682932770",
          "level": "normal",
          "asset": {
              "id": "Veerullapadu - Veerullapadu  Mandal"
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
          "id": "PD1493",
          "timestamp": "1683611819",
          "level": "normal",
          "asset": {
              "id": "Velagaleru - G.Konduru  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.6146524,
              16.6504004
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1588",
          "timestamp": "1683526445",
          "level": "normal",
          "asset": {
              "id": "Vellanki - Veerullapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3717512,
              16.7667676
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0626",
          "timestamp": "1683003056",
          "level": "normal",
          "asset": {
              "id": "Vutukuru - Gampalagudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4332232,
              17.0180572
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1099",
          "timestamp": "1684387720",
          "level": "normal",
          "asset": {
              "id": "but  - Chandralapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2014543,
              16.6939114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1645",
          "timestamp": "1681451669",
          "level": "normal",
          "asset": {
              "id": "Alamur - Rudravaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6046022,
              15.2413503
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1621",
          "timestamp": "1689186001",
          "level": "normal",
          "asset": {
              "id": "Allur - Nandikotkur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2563277,
              15.8605613
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0170",
          "timestamp": "1684130594",
          "level": "normal",
          "asset": {
              "id": "Alluru - Uyyalawada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2141468,
              15.8671898
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1263",
          "timestamp": "1681365978",
          "level": "normal",
          "asset": {
              "id": "Balapanur - Panyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3963095,
              15.5061259
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1357",
          "timestamp": "1693980600",
          "level": "normal",
          "asset": {
              "id": "Bandiatmakur - Bandiatmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.52229609999999,
              15.580406
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1367",
          "timestamp": "1701931949",
          "level": "normal",
          "asset": {
              "id": "Bijinavemula - Koilkuntla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.31736409999999,
              15.2304101
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1193",
          "timestamp": "1681448143",
          "level": "normal",
          "asset": {
              "id": "Brahmanakotkur - Nandikotkur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1995165,
              15.8154572
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1265",
          "timestamp": "1681123266",
          "level": "normal",
          "asset": {
              "id": "Chanugondla - Dhone Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6979885,
              15.3666805
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0007",
          "timestamp": "1693638134",
          "level": "normal",
          "asset": {
              "id": "Chinnapoodilla - Peapully  Mandal"
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
          "id": "PD1693",
          "timestamp": "1681281595",
          "level": "normal",
          "asset": {
              "id": "Chowtkur - Nandikotkur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.26458869999999,
              15.8555925
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0214",
          "timestamp": "1681799157",
          "level": "normal",
          "asset": {
              "id": "Dornipadu - Dornipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.44819559999999,
              15.2055555
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0669",
          "timestamp": "1682583860",
          "level": "normal",
          "asset": {
              "id": "Erragudidinne - Rudravaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5213691,
              15.2562075
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0662",
          "timestamp": "1681192759",
          "level": "normal",
          "asset": {
              "id": "Gadivemula - Panyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.42270909999999,
              15.6776236
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0148",
          "timestamp": "1693806794",
          "level": "normal",
          "asset": {
              "id": "Gajulapalle - Mahanandi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6188509,
              15.4047831
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1184",
          "timestamp": "1681719979",
          "level": "normal",
          "asset": {
              "id": "Gorukallu - Panyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4107578,
              15.5650404
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1613",
          "timestamp": "1681448020",
          "level": "normal",
          "asset": {
              "id": "Gospadu - Gospadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.41692499999999,
              15.3565868
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1688",
          "timestamp": "1684146822",
          "level": "normal",
          "asset": {
              "id": "Govindapalli-Sirivella Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5338597,
              15.3197774
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0659",
          "timestamp": "1677771976",
          "level": "normal",
          "asset": {
              "id": "Jaladurgam - Peapully  Mandal"
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
          "id": "PD1158",
          "timestamp": "1698085801",
          "level": "normal",
          "asset": {
              "id": "Karivena - Atmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5549587,
              15.8561163
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0681",
          "timestamp": "1695200587",
          "level": "normal",
          "asset": {
              "id": "Kolimigundla - Kolimigundla  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1085147,
              15.0762027
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0805",
          "timestamp": "1680694801",
          "level": "normal",
          "asset": {
              "id": "Konidela - Nandikotkur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.28536679999999,
              15.9267125
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0105",
          "timestamp": "1687761585",
          "level": "normal",
          "asset": {
              "id": "Koratamaddi - Panyam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.348665,
              15.5144141
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1685",
          "timestamp": "1696828285",
          "level": "normal",
          "asset": {
              "id": "Kothapalle - Kothapalle Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6136282,
              15.0175722
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1558",
          "timestamp": "1693810842",
          "level": "normal",
          "asset": {
              "id": "Kurukunda - Atmakur"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5827082,
              15.9215287
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1492",
          "timestamp": "1682312684",
          "level": "normal",
          "asset": {
              "id": "Midthur - Nandikotkur Mandal"
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
          "id": "PD0709",
          "timestamp": "1681018801",
          "level": "normal",
          "asset": {
              "id": "Mittakandala - Pamulapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4748903,
              15.8032968
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0102",
          "timestamp": "1691476201",
          "level": "normal",
          "asset": {
              "id": "Muchumarri - Pagidyala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.30547469999999,
              15.9695014
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1782",
          "timestamp": "1682152201",
          "level": "normal",
          "asset": {
              "id": "Mutyalapadu - Chagalamarri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5923804,
              14.966192
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1747",
          "timestamp": "1696653767",
          "level": "normal",
          "asset": {
              "id": "Nandavaram-Banaganapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.28036,
              15.375322
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0375",
          "timestamp": "1681378604",
          "level": "normal",
          "asset": {
              "id": "Owk-Owk Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1184236,
              15.2100465
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1096",
          "timestamp": "1681451514",
          "level": "normal",
          "asset": {
              "id": "Pagidyala  - Pagidyala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3401293,
              15.9354796
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1647",
          "timestamp": "1681542536",
          "level": "normal",
          "asset": {
              "id": "Palukuru-Banaganapalli Mandal"
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
          "id": "PD0046",
          "timestamp": "1681467280",
          "level": "normal",
          "asset": {
              "id": "Pamulapadu - Pamulapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4929583,
              15.8409055
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1242",
          "timestamp": "1689661801",
          "level": "normal",
          "asset": {
              "id": "Pandurangapuram - Nandyal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.43327219999999,
              15.4388696
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1505",
          "timestamp": "1677523128",
          "level": "normal",
          "asset": {
              "id": "Parnapalli - Bandiatmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.52229609999999,
              15.580406
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1672",
          "timestamp": "1681278722",
          "level": "normal",
          "asset": {
              "id": "Paruamanchala-JupaduBunglow Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3913328,
              15.7966604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0205",
          "timestamp": "1681445598",
          "level": "normal",
          "asset": {
              "id": "Peddakottala - Nandyal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.51537110000001,
              15.4602069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1317",
          "timestamp": "1679874103",
          "level": "normal",
          "asset": {
              "id": "Peraipalli - Allagadda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5031743,
              15.1348056
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0091",
          "timestamp": "1681991401",
          "level": "normal",
          "asset": {
              "id": "Perusomula  - Sanjamala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2075798,
              15.0583227
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0680",
          "timestamp": "1681438362",
          "level": "normal",
          "asset": {
              "id": "Pulimaddi - Nandyal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4617762,
              15.5397011
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0754",
          "timestamp": "1688103076",
          "level": "normal",
          "asset": {
              "id": "R.S Rangapuram - Bethamcherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0499301,
              15.4316839
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0599",
          "timestamp": "1694163050",
          "level": "normal",
          "asset": {
              "id": "Regadagudur - Velugodu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.574602,
              15.7183119
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0513",
          "timestamp": "1689056202",
          "level": "normal",
          "asset": {
              "id": "Seetharamapuram - Bethamcherla Mandal"
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
          "id": "PD1439",
          "timestamp": "1681460044",
          "level": "normal",
          "asset": {
              "id": "Sirivella - Sirivella Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5338597,
              15.3197774
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0087",
          "timestamp": "1681535533",
          "level": "normal",
          "asset": {
              "id": "Tangutur-Banaganapalli Mandal"
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
          "id": "PD0040",
          "timestamp": "1693824001",
          "level": "normal",
          "asset": {
              "id": "Thimmapuram - Mahanandi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.573129,
              15.4901674
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1930",
          "timestamp": "1695023401",
          "level": "normal",
          "asset": {
              "id": "U.Kothapalli - Dhone Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.837079,
              15.3760776
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0482",
          "timestamp": "1681457256",
          "level": "normal",
          "asset": {
              "id": "Uyyalawada - Uyyalawada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3970205,
              15.1021796
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1024",
          "timestamp": "1681202599",
          "level": "normal",
          "asset": {
              "id": "Venkatapuram - Atmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.58373069999999,
              15.8790866
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1530",
          "timestamp": "1681529401",
          "level": "normal",
          "asset": {
              "id": "W.Kothapalli - Dornipadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4282972,
              15.2678748
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0982",
          "timestamp": "1681458057",
          "level": "normal",
          "asset": {
              "id": "West Prathakota - Pagidyala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.36573419999999,
              15.9166389
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0452",
          "timestamp": "1682394143",
          "level": "normal",
          "asset": {
              "id": "Yagantipalli-Banaganapalli Mandal"
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
          "id": "PD0786",
          "timestamp": "1688920201",
          "level": "normal",
          "asset": {
              "id": "Yallur - Gospadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4559471,
              15.3064081
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0130",
          "timestamp": "1688368119",
          "level": "normal",
          "asset": {
              "id": "B.D VALASA-SEETHANAGARAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3723711,
              18.6614321
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0706",
          "timestamp": "1688365281",
          "level": "normal",
          "asset": {
              "id": "BAGUVALASA-SALUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.20508629999999,
              18.5163848
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1648",
          "timestamp": "1683527933",
          "level": "normal",
          "asset": {
              "id": "BATTILI-BHAMINI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7857627,
              19.0122905
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0879",
          "timestamp": "1687859211",
          "level": "normal",
          "asset": {
              "id": "Balijipeta- Balijipeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.52967439999999,
              18.6149066
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0854",
          "timestamp": "1687940545",
          "level": "normal",
          "asset": {
              "id": "Bhadragiri -Gummalaxmipuram  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6595918,
              18.9759014
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0370",
          "timestamp": "1684127404",
          "level": "normal",
          "asset": {
              "id": "Bhamini- Bhamini Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8172836,
              18.9091907
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0393",
          "timestamp": "1683360727",
          "level": "normal",
          "asset": {
              "id": "Bitiwada-Veeraghattam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6414933,
              18.6157546
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1341",
          "timestamp": "1683374997",
          "level": "normal",
          "asset": {
              "id": "CHINA BAGGA-SEETHAMPETA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8168053,
              18.6925337
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0454",
          "timestamp": "1683371414",
          "level": "normal",
          "asset": {
              "id": "Chinamangalapuram-Palakonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7575774,
              18.6006737
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0521",
          "timestamp": "1699592400",
          "level": "normal",
          "asset": {
              "id": "Chinamerangi-Jiyyammavalasa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.54872379999999,
              18.8394391
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1469",
          "timestamp": "1695404401",
          "level": "normal",
          "asset": {
              "id": "DONUBAI-SEETHAMPETA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7349681,
              18.7297114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1254",
          "timestamp": "1693638154",
          "level": "normal",
          "asset": {
              "id": "Gorada -Gummalaxmipuram  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6601104,
              18.9770986
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0451",
          "timestamp": "1683784581",
          "level": "normal",
          "asset": {
              "id": "Gumma-Kurupam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6432877,
              18.9516772
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1828",
          "timestamp": "1683359498",
          "level": "normal",
          "asset": {
              "id": "Jiyyammavalasa-Jiyyammavalasa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.60091539999999,
              18.7895081
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0671",
          "timestamp": "1688121601",
          "level": "normal",
          "asset": {
              "id": "Komarada-Komarada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.462938,
              18.9034495
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0036",
          "timestamp": "1684299297",
          "level": "normal",
          "asset": {
              "id": "M.R.NAGARAM-Parvathipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4875722,
              15.9233114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0497",
          "timestamp": "1685007363",
          "level": "normal",
          "asset": {
              "id": "M.SINGUPURAM-PALAKONDA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.70711229999999,
              18.6561608
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1236",
          "timestamp": "1683362150",
          "level": "normal",
          "asset": {
              "id": "Madalingi-Komarada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4603538,
              18.8992009
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1370",
          "timestamp": "1687938491",
          "level": "normal",
          "asset": {
              "id": "Makkuva- Makkuva Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2673259,
              18.6611054
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0992",
          "timestamp": "1694068658",
          "level": "normal",
          "asset": {
              "id": "Mamidipalli-Salur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.17896809999999,
              18.6091936
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0350",
          "timestamp": "1693814081",
          "level": "normal",
          "asset": {
              "id": "NAGURU-GARUGUBILLI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.522346,
              18.7483782
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0111",
          "timestamp": "1686211103",
          "level": "normal",
          "asset": {
              "id": "NARSIPURAM-Parvathipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4043088,
              18.7376129
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0787",
          "timestamp": "1687644601",
          "level": "normal",
          "asset": {
              "id": "Nidagallu-Seethanagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3723711,
              18.6614321
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0719",
          "timestamp": "1683531274",
          "level": "normal",
          "asset": {
              "id": "Pachipenta-Pachipenta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1124329,
              18.4785757
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0173",
          "timestamp": "1693825184",
          "level": "normal",
          "asset": {
              "id": "Pedabondapilli-Parvathipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.42675179999999,
              18.7817162
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1409",
          "timestamp": "1686337317",
          "level": "normal",
          "asset": {
              "id": "Pedagottili- Kurupam  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7284547,
              18.8966923
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0983",
          "timestamp": "1701972115",
          "level": "normal",
          "asset": {
              "id": "e983d867-5c67-498f-bc4d-9f6adbd0f06d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18636202898551,
              17.690183913043484
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0425",
          "timestamp": "1702015416",
          "level": "normal",
          "asset": {
              "id": "6df5daee-6d34-46e1-9937-2877064d722d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.29934,
              18.46491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0017",
          "timestamp": 1710750035,
          "level": "normal",
          "asset": {
              "id": "1165ea60-f408-4453-945c-581eac908c69"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.80989,
              18.66316
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1849",
          "timestamp": "1702101809",
          "level": "normal",
          "asset": {
              "id": "de897c55-924e-4e88-87ed-380af6198b3f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.88057,
              18.77891
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2330",
          "timestamp": "1704175424",
          "level": "normal",
          "asset": {
              "id": "0241fc2b-724d-4571-a3a7-91d1e6de0391"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6621,
              18.9768
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0217",
          "timestamp": "1702317822",
          "level": "normal",
          "asset": {
              "id": "6f0a6022-42f0-44b9-9da5-384ba1e44738"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.55215222222222,
              18.865065555555557
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0838",
          "timestamp": "1701972214",
          "level": "normal",
          "asset": {
              "id": "3c4f5b87-ae1b-43ec-bed1-95fe00ed5298"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634826666671,
              17.690135466666675
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2380",
          "timestamp": "1701972198",
          "level": "normal",
          "asset": {
              "id": "6326e168-3ce3-4353-82ab-8d8fb96c6899"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18639166666668,
              17.69024888888889
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1341",
          "timestamp": "3409176274",
          "level": "normal",
          "asset": {
              "id": "7674c23b-03a4-4886-b026-88f388d37623"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5521492857143,
              18.865062857142856
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0859",
          "timestamp": "1699595615",
          "level": "normal",
          "asset": {
              "id": "55b1760a-c7c4-4378-ae86-117d6257dc20"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.553459,
              18.732617
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1092",
          "timestamp": "1704348653",
          "level": "normal",
          "asset": {
              "id": "406f9d3a-3c20-493b-a574-a5f4e2e5b8a9"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.66209999999998,
              18.976800000000004
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1850",
          "timestamp": "1701929023",
          "level": "normal",
          "asset": {
              "id": "677efc93-6248-444f-aaa9-5ea20066c188"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18640124999999,
              17.690370625
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1095",
          "timestamp": "1701973222",
          "level": "normal",
          "asset": {
              "id": "f3bbbacb-feab-4bd3-8187-57dee651e5db"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634609756103,
              17.690151951219523
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0403",
          "timestamp": "1683356834",
          "level": "normal",
          "asset": {
              "id": "TUDI-VEERAGHATTAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6412835,
              18.6494845
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1003",
          "timestamp": "1695724778",
          "level": "normal",
          "asset": {
              "id": "TUMARADA-PALAKONDA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.71462430000001,
              18.608158
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0083",
          "timestamp": "1683790819",
          "level": "normal",
          "asset": {
              "id": "Thallaburidi-Parvathipuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3271666,
              18.7411625
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0631",
          "timestamp": "1702358401",
          "level": "normal",
          "asset": {
              "id": "Ullibadra-Garugubilli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4783578,
              18.7557196
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1029",
          "timestamp": "1702105236",
          "level": "normal",
          "asset": {
              "id": "248dec0d-85e6-4711-945a-a7dc18f70755"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.42774,
              18.7868
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1170",
          "timestamp": 1712210148,
          "level": "normal",
          "asset": {
              "id": "e1ecdc3c-2251-4e45-b7ce-3af5e7913683"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.49356,
              18.71151
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1534",
          "timestamp": "1701972320",
          "level": "normal",
          "asset": {
              "id": "f8da2435-f201-4758-95f8-a4ba1119dd0c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634609756103,
              17.690151951219523
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1721",
          "timestamp": "1687345801",
          "level": "normal",
          "asset": {
              "id": "Veeraghattam-Veeraghattam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6095653,
              18.6885592
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1698",
          "timestamp": "1683689530",
          "level": "normal",
          "asset": {
              "id": "A.G.Padu - Y.Palem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3204662,
              16.0287383
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1086",
          "timestamp": "1702547214",
          "level": "normal",
          "asset": {
              "id": "c5cf007c-8308-4bef-b1c1-c27c5b991e21"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.27466333333335,
              15.180649166666667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0243",
          "timestamp": "1700813629",
          "level": "normal",
          "asset": {
              "id": "72d478e1-7421-4544-a731-78a099685e1b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00407599999998,
              15.536212
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0882",
          "timestamp": "1682333038",
          "level": "normal",
          "asset": {
              "id": "Ambavaram - C.S.Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1557874,
              15.2114456
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0481",
          "timestamp": "1682745601",
          "level": "normal",
          "asset": {
              "id": "Ammanabrolu - Naguluppalapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.11145119999999,
              15.6394647
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1025",
          "timestamp": "1700845980",
          "level": "normal",
          "asset": {
              "id": "5bf350f9-fd69-479c-83bb-f166a9952fcd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.926975,
              15.376655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0416",
          "timestamp": "1689654601",
          "level": "normal",
          "asset": {
              "id": "Ardhaveedu - Ardhaveedu  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.95993469999999,
              15.6746632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1770",
          "timestamp": "1695798691",
          "level": "normal",
          "asset": {
              "id": "Botlapalem - Darsi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7687251,
              15.7323288
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0859",
          "timestamp": "1682403269",
          "level": "normal",
          "asset": {
              "id": "Chinna Dornala - Dornala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.13512229999999,
              15.8859313
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0463",
          "timestamp": "1700890166",
          "level": "normal",
          "asset": {
              "id": "76b637f3-9846-4181-a6d7-2a8235837097"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.03381,
              15.33981
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1799",
          "timestamp": "1682570528",
          "level": "normal",
          "asset": {
              "id": "D.G.Peta - C.S.Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.17883739999999,
              15.1729316
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1381",
          "timestamp": "1706077191",
          "level": "normal",
          "asset": {
              "id": "94eec52b-81cd-46d8-88c5-88e57e8173e1"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.052941,
              15.496694999999999
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1224",
          "timestamp": 1711964021,
          "level": "normal",
          "asset": {
              "id": "e6fdbaec-f539-4018-8265-0d6e925a6312"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.26634,
              15.73171
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1788",
          "timestamp": "1682489709",
          "level": "normal",
          "asset": {
              "id": "Doddavarappadu  - Maddipadu  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0297389,
              15.5857647
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1612",
          "timestamp": "1686612000",
          "level": "normal",
          "asset": {
              "id": "Donakonda - Donakonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4848677,
              15.83329
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1507",
          "timestamp": "1682072597",
          "level": "normal",
          "asset": {
              "id": "Dornala - Dornala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0955723,
              15.9072455
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1671",
          "timestamp": "1683780605",
          "level": "normal",
          "asset": {
              "id": "Dupadu - Tripuranthakam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3676753,
              15.9165443
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1668",
          "timestamp": "1684221317",
          "level": "normal",
          "asset": {
              "id": "East gangavaram - Tallur  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.881483,
              15.738336
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1494",
          "timestamp": "1682493319",
          "level": "normal",
          "asset": {
              "id": "Ethamukkala - Kothapatnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1136569,
              15.3744511
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1118",
          "timestamp": "1684499337",
          "level": "normal",
          "asset": {
              "id": "Galijerugulla - Bestavaripeta Mandal"
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
          "id": "AA0960",
          "timestamp": 1713132563,
          "level": "normal",
          "asset": {
              "id": "95800d5a-68e6-4177-8d9e-b4a6d098c321"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.92828,
              15.37725
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1360",
          "timestamp": "1683861930",
          "level": "normal",
          "asset": {
              "id": "Gotlagattu - KK MItla  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4211567,
              15.5514521
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1437",
          "timestamp": "1700743487",
          "level": "normal",
          "asset": {
              "id": "6cca230e-6195-4c7d-ba13-1c2927205d40"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.51088,
              15.41
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1136",
          "timestamp": "1700658822",
          "level": "normal",
          "asset": {
              "id": "80a7fb4b-b6cd-47a0-9e29-5f745c7f6d3f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.99905,
              14.43846
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1111",
          "timestamp": "1706082822",
          "level": "normal",
          "asset": {
              "id": "cf3f2107-f52f-4cc9-9fc4-fc12936116be"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.04176360000001,
              15.507780399999996
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0620",
          "timestamp": "1682309583",
          "level": "normal",
          "asset": {
              "id": "Jangamguntla - Cumbum Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1400365,
              15.6410684
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1810",
          "timestamp": "1700669670",
          "level": "normal",
          "asset": {
              "id": "1720e96b-d3ae-4431-aef4-1870e9cad46b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98319,
              14.43869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1681",
          "timestamp": "1695960466",
          "level": "normal",
          "asset": {
              "id": "K Uppalapadu - Kondepi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9248669,
              15.3710948
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1852",
          "timestamp": "1695276751",
          "level": "normal",
          "asset": {
              "id": "K V Palli -Kanigiri  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3707735,
              15.166633
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1858",
          "timestamp": "1685172351",
          "level": "normal",
          "asset": {
              "id": "KK Mitla - KK MItla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.560344,
              15.348463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1140",
          "timestamp": "1680781201",
          "level": "normal",
          "asset": {
              "id": "Kakarla - Marripudi Mandal"
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
          "id": "PD1700",
          "timestamp": "1682327048",
          "level": "normal",
          "asset": {
              "id": "Kalujuvvalapadu - Tarlupadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2281975,
              15.6505041
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1993",
          "timestamp": "1700860068",
          "level": "normal",
          "asset": {
              "id": "d14aa713-589b-42a3-92ed-19b2f15e58cd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.03763,
              15.34279
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0415",
          "timestamp": "1700400608",
          "level": "normal",
          "asset": {
              "id": "19388171-f4d1-459d-929c-14bb3c8df015"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00063,
              14.442155
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0831",
          "timestamp": "1696050787",
          "level": "normal",
          "asset": {
              "id": "Komarole - Komarole  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9711445,
              15.3484251
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0215",
          "timestamp": "1699939200",
          "level": "normal",
          "asset": {
              "id": "Konijedu  - Tangutur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9486489,
              15.4459664
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1042",
          "timestamp": "1682148427",
          "level": "normal",
          "asset": {
              "id": "Kothapatnam - Kothapatnam  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.16597929999999,
              15.446762
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1991",
          "timestamp": "1691494801",
          "level": "normal",
          "asset": {
              "id": "M.Nidamaluru - Tangutur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9563417,
              15.3877123
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0044",
          "timestamp": "1680353417",
          "level": "normal",
          "asset": {
              "id": "Mallampeta - Donakonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3718497,
              15.824606
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1330",
          "timestamp": "1682657098",
          "level": "normal",
          "asset": {
              "id": "Marella - Mundlamur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9003786,
              15.877697
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0051",
          "timestamp": "1694419910",
          "level": "normal",
          "asset": {
              "id": "Marripudi - Marripudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6516312,
              15.5132491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1141",
          "timestamp": "1700681943",
          "level": "normal",
          "asset": {
              "id": "4e471374-54d6-44de-9051-c4f0afd0beec"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98319,
              14.43869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2454",
          "timestamp": "1700597013",
          "level": "normal",
          "asset": {
              "id": "60d06c0a-c701-4612-b7d7-b684680e4b26"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00066,
              14.44249
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0179",
          "timestamp": "1682406300",
          "level": "normal",
          "asset": {
              "id": "Naidupalem - Pullalacheruvu  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.51525219999999,
              16.2278247
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1435",
          "timestamp": "1695115801",
          "level": "normal",
          "asset": {
              "id": "P Alavalapadu - P C Palli  Mandal"
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
          "id": "PD1630",
          "timestamp": "1682506107",
          "level": "normal",
          "asset": {
              "id": "P C Palli -P C Palli  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.560344,
              15.348463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0845",
          "timestamp": "1700629191",
          "level": "normal",
          "asset": {
              "id": "766b562c-aef2-4505-b522-d1147ffe2aad"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00056,
              14.438150000000002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0812",
          "timestamp": "1691898001",
          "level": "normal",
          "asset": {
              "id": "Pakala S.Konda Mandal"
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
          "id": "PD0532",
          "timestamp": "1684214400",
          "level": "normal",
          "asset": {
              "id": "Pallamalli - Chimakurthy Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9921644,
              15.6013295
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0186",
          "timestamp": "1682568103",
          "level": "normal",
          "asset": {
              "id": "Pamuru - Pamuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4113072,
              15.0960348
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0850",
          "timestamp": "1682319858",
          "level": "normal",
          "asset": {
              "id": "Peddaraveedu - Peddaraveedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2239676,
              15.8138091
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0688",
          "timestamp": "1691215535",
          "level": "normal",
          "asset": {
              "id": "Pernamitta - Mandal S.N.Padu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.94025599999999,
              15.5411264
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0703",
          "timestamp": "1693888096",
          "level": "normal",
          "asset": {
              "id": "Podalakondapalli - Giddalur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9257586,
              15.3767062
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0395",
          "timestamp": "1702365722",
          "level": "normal",
          "asset": {
              "id": "afe4a6b6-7efb-4b7b-ac23-10ab6206721e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.79995900000003,
              15.27111
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0855",
          "timestamp": "1702096800",
          "level": "normal",
          "asset": {
              "id": "Ponnalur - Ponnalur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.79885469999999,
              15.2757076
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0206",
          "timestamp": "1682315427",
          "level": "normal",
          "asset": {
              "id": "Pullalacheruvu - Pullalacheruvu  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4303017,
              16.156745
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1995",
          "timestamp": "1706077049",
          "level": "normal",
          "asset": {
              "id": "ecd84e32-8a52-4854-b817-0a4f9e7063f6"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.05301263157892,
              15.496987192982457
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0693",
          "timestamp": "1700756770",
          "level": "normal",
          "asset": {
              "id": "2c4e5efc-51b5-4aeb-8a29-ca1e1dd69e59"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.51096400000002,
              15.409880000000001
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0208",
          "timestamp": "1706126363",
          "level": "normal",
          "asset": {
              "id": "56540237-4beb-420f-a9b3-99dbd7fef00c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9891323287671,
              15.60107356164384
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2100",
          "timestamp": "1699317955",
          "level": "normal",
          "asset": {
              "id": "e6010489-4f4e-4300-9ed0-b23d28fc7714"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.528672,
              15.628864
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1390",
          "timestamp": "1700859900",
          "level": "normal",
          "asset": {
              "id": "d3991c6c-8fd7-4ca6-bada-be699f83e6bb"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.03763,
              15.34279
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1560",
          "timestamp": "1700856560",
          "level": "normal",
          "asset": {
              "id": "0aba7b42-b274-4412-9451-8a194aaedd9d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.03763,
              15.34279
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0011",
          "timestamp": "3403173474",
          "level": "normal",
          "asset": {
              "id": "f61e3730-ede8-4317-88ea-6a8fb4320cab"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00086999999998,
              14.44204
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0301",
          "timestamp": "1700615155",
          "level": "normal",
          "asset": {
              "id": "090f2305-f34b-4930-a1db-3b1cb4fb3018"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0002,
              14.438250000000002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0676",
          "timestamp": "1684218600",
          "level": "normal",
          "asset": {
              "id": "Racherla - Racherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.96417629999999,
              15.4625069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1819",
          "timestamp": "1700859779",
          "level": "normal",
          "asset": {
              "id": "0e0ee4b4-cf91-41e8-8394-c581f3c18e8e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9271857142857,
              15.376738571428572
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0027",
          "timestamp": "1682398422",
          "level": "normal",
          "asset": {
              "id": "Rayavarama - Markapur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4562947,
              16.0006472
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1432",
          "timestamp": "1702528669",
          "level": "normal",
          "asset": {
              "id": "40b72bfc-2967-4ad2-97ae-80796c3c607d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.94180217391305,
              15.542352173913041
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0364",
          "timestamp": "1697086801",
          "level": "normal",
          "asset": {
              "id": "S.R Puram - H.M Padu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.49286,
              15.409445
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0019",
          "timestamp": "1700643070",
          "level": "normal",
          "asset": {
              "id": "c9e082de-87d3-4718-84d0-237b99f7d6c6"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0001725,
              14.441105
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1750",
          "timestamp": "1683509114",
          "level": "normal",
          "asset": {
              "id": "Sanjeevaraopeta - Giddalur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9257586,
              15.3767062
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1406",
          "timestamp": "1700548377",
          "level": "normal",
          "asset": {
              "id": "d656e10c-d9bf-4126-9fe0-816497ad816f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00056,
              14.43815
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0766",
          "timestamp": "1683864001",
          "level": "normal",
          "asset": {
              "id": "Singarayakonda - S.Konda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.026428,
              15.252886
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0957",
          "timestamp": "1684348377",
          "level": "normal",
          "asset": {
              "id": "Somavaarapeta - Bestavaripeta  Mandal"
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
          "id": "PD0396",
          "timestamp": "1689753601",
          "level": "normal",
          "asset": {
              "id": "Tadivaripalli - Tarlupadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2281975,
              15.6505041
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0339",
          "timestamp": "1702447646",
          "level": "normal",
          "asset": {
              "id": "6e1b749b-2373-4c86-b6e0-40c1e76d90d4"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.88187315789474,
              15.735522631578945
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1214",
          "timestamp": "1700714971",
          "level": "normal",
          "asset": {
              "id": "92eb1919-45c0-495c-8d0a-fee689c271c6"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.27470214285714,
              15.180530714285712
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2463",
          "timestamp": "1700847020",
          "level": "normal",
          "asset": {
              "id": "301c6674-756b-4063-aba1-c01046e1844f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.92845,
              15.37724
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0227",
          "timestamp": "1682310762",
          "level": "normal",
          "asset": {
              "id": "Thokapalli - Peddaraveedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3583671,
              15.8371874
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0721",
          "timestamp": "1697963401",
          "level": "normal",
          "asset": {
              "id": "Thurimilla - Cumbum Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1098015,
              15.5795226
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1200",
          "timestamp": "1694161185",
          "level": "normal",
          "asset": {
              "id": "UG Palem - Mandal Podili  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6241058,
              15.6008965
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1619",
          "timestamp": "1683777331",
          "level": "normal",
          "asset": {
              "id": "Ulichi -Ongole  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1553878,
              15.5465149
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1497",
          "timestamp": "1696827746",
          "level": "normal",
          "asset": {
              "id": "Uppugunduru Naguluppalapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.11145119999999,
              15.6394647
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2405",
          "timestamp": "1699318409",
          "level": "normal",
          "asset": {
              "id": "79336b19-b784-4563-82a1-59f422082c4b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.101305,
              15.54894
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1746",
          "timestamp": "1702881588",
          "level": "normal",
          "asset": {
              "id": "94bbf821-2e65-48e1-af9d-da25ce2e979c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.86733117647057,
              15.589785882352942
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1753",
          "timestamp": "1702443892",
          "level": "normal",
          "asset": {
              "id": "50e95071-abae-4d49-a266-4607b67737c2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.116199,
              15.588831000000003
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0721",
          "timestamp": "1702949791",
          "level": "normal",
          "asset": {
              "id": "d1117ea9-7289-43f0-aeb8-1192ac763fdd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5111154098361,
              15.409457868852455
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1719",
          "timestamp": "1702369649",
          "level": "normal",
          "asset": {
              "id": "9b239d11-4de4-46ac-a71c-610384616583"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.85698538461538,
              15.408868461538463
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1174",
          "timestamp": "1699429951",
          "level": "normal",
          "asset": {
              "id": "60b8fda1-81df-42b1-af9f-f9ec56082c5a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.021388,
              15.620157
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0944",
          "timestamp": "1702238479",
          "level": "normal",
          "asset": {
              "id": "4c6e2082-993b-45f3-94ae-0f9c66985e2f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0376675,
              15.34267
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1808",
          "timestamp": "1700594415",
          "level": "normal",
          "asset": {
              "id": "ac4d5bea-31b0-4cab-9efc-27ebe6621e24"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00040888888888,
              14.438427222222224
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1382",
          "timestamp": "1706080551",
          "level": "normal",
          "asset": {
              "id": "6df0fff7-80e8-43b9-b2dc-98b37d21d474"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.05331305555558,
              15.496391111111105
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1473",
          "timestamp": "1684218718",
          "level": "normal",
          "asset": {
              "id": "Veligandla - Veligandla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3454996,
              15.3415051
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1561",
          "timestamp": "1680428401",
          "level": "normal",
          "asset": {
              "id": "Vemulakota - Markapur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2408858,
              15.739385
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1175",
          "timestamp": "1686837001",
          "level": "normal",
          "asset": {
              "id": "Vemulapadu - H.M Padu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9010784,
              15.4466909
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1459",
          "timestamp": "1682403693",
          "level": "normal",
          "asset": {
              "id": "Yellupalli - Giddalur  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9257586,
              15.3767062
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0818",
          "timestamp": "1689592200",
          "level": "normal",
          "asset": {
              "id": "Yerajarla - Ongole  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.049922,
              15.5057232
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1627",
          "timestamp": "1682395205",
          "level": "normal",
          "asset": {
              "id": "Zarugumalli - Zarugumalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9871062,
              15.3153296
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1312",
          "timestamp": "1688621649",
          "level": "normal",
          "asset": {
              "id": "75-Tyallur-Pedakurapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.28999100000001,
              16.5121745
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0767",
          "timestamp": "1698403801",
          "level": "normal",
          "asset": {
              "id": "Atchanpet-Atchampet Mandal"
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
          "id": "PD1196",
          "timestamp": "1691229180",
          "level": "normal",
          "asset": {
              "id": "Bellamkonta-Bellamkonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.007497,
              16.4891374
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0180",
          "timestamp": "1682491439",
          "level": "normal",
          "asset": {
              "id": "Brahmanapalli -Piduguralla  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8306076,
              16.5168351
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2019",
          "timestamp": "1705464765",
          "level": "normal",
          "asset": {
              "id": "2febdf84-a3f4-4a7f-93d9-ef090f3eb943"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.04721879518071,
              16.241206746987956
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1786",
          "timestamp": "1688448723",
          "level": "normal",
          "asset": {
              "id": "Daida-Gurazala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.60381149999999,
              16.6378659
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0398",
          "timestamp": "1687157401",
          "level": "normal",
          "asset": {
              "id": "Dechavaram-Nekarikallu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9862442,
              16.3146891
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0391",
          "timestamp": "1685515719",
          "level": "normal",
          "asset": {
              "id": "Dhulipala-Sattenapalli Mandal"
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
          "id": "AA0802",
          "timestamp": "1703006340",
          "level": "normal",
          "asset": {
              "id": "b85c8a7e-0229-4090-a462-950621031a19"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347000000001,
              16.507099999999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1608",
          "timestamp": "1702271401",
          "level": "normal",
          "asset": {
              "id": "Durgi-Durgi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5406738,
              16.4287632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1501",
          "timestamp": "1686978601",
          "level": "normal",
          "asset": {
              "id": "Ganapavaram -Rajupalem  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0346299,
              16.4172644
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1880",
          "timestamp": "1677160201",
          "level": "normal",
          "asset": {
              "id": "Garapadu-Pedakurapadu Mandal"
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
          "id": "PD0115",
          "timestamp": "1682492484",
          "level": "normal",
          "asset": {
              "id": "Guthikonda -Piduguralla  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8338761,
              16.4301503
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0617",
          "timestamp": "1703134465",
          "level": "normal",
          "asset": {
              "id": "76b80863-1e41-46b9-9d6c-a0ba17a72672"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.170215,
              16.08728
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0471",
          "timestamp": "1694418498",
          "level": "normal",
          "asset": {
              "id": "Karempudi -Karempudi  Mandal"
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
          "id": "AA0327",
          "timestamp": 1709104753,
          "level": "normal",
          "asset": {
              "id": "0622c911-c6d6-4e0e-bdbe-0cafbc60c18f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.88971,
              16.25214
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1751",
          "timestamp": "1704171528",
          "level": "normal",
          "asset": {
              "id": "3285709c-b5a7-4ad6-9604-ba3a55b7095a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.12505,
              16.13646
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1907",
          "timestamp": "1683003346",
          "level": "normal",
          "asset": {
              "id": "Kotcherla -Ipuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7618447,
              16.1486956
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0154",
          "timestamp": "1682504764",
          "level": "normal",
          "asset": {
              "id": "Krosuru -Krosuru  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1400671,
              16.5452918
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0716",
          "timestamp": "1698297169",
          "level": "normal",
          "asset": {
              "id": "Machavaram-Machavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.86500790000001,
              16.5695224
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0718",
          "timestamp": "3408816301",
          "level": "normal",
          "asset": {
              "id": "a93335d6-6d1e-4452-a35c-eb6961e88ca3"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.67347536000005,
              16.506835759999994
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1925",
          "timestamp": "1686202337",
          "level": "normal",
          "asset": {
              "id": "Mandadi-Veldurthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.40849279999999,
              16.4133843
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0541",
          "timestamp": "1702095919",
          "level": "normal",
          "asset": {
              "id": "Mokkapadu-Rajupalem  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0679553,
              16.4549055
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1806",
          "timestamp": "1682505717",
          "level": "normal",
          "asset": {
              "id": "Mulakaluru-Narasaraopet Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0667635,
              16.27768
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0226",
          "timestamp": "1686859202",
          "level": "normal",
          "asset": {
              "id": "Muppalla- Muppalla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.84648039999999,
              16.2373932
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1088",
          "timestamp": "1682656201",
          "level": "normal",
          "asset": {
              "id": "Muppalla-Ipuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.84648039999999,
              16.2373932
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0751",
          "timestamp": "1682579378",
          "level": "normal",
          "asset": {
              "id": "Nadendla-Nadendla Mandal"
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
          "id": "PD0293",
          "timestamp": "1699245612",
          "level": "normal",
          "asset": {
              "id": "Nagulavaram-Macherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.30641519999999,
              16.5106147
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1998",
          "timestamp": "1707290188",
          "level": "normal",
          "asset": {
              "id": "4a7264ff-de84-49f6-852e-4171ee10aa69"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0472250561798,
              16.24119449438202
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1040",
          "timestamp": "1702020601",
          "level": "normal",
          "asset": {
              "id": "Narukullapadu- Mandal Amaravathi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.3664467,
              16.5319855
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0573",
          "timestamp": "1685077841",
          "level": "normal",
          "asset": {
              "id": "Nuzendla-Nuzendla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7420906,
              15.926779
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0292",
          "timestamp": "1682582887",
          "level": "normal",
          "asset": {
              "id": "Pasumarru-Chilaklauriepet Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.18201619999999,
              16.0703187
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1586",
          "timestamp": "1682926721",
          "level": "normal",
          "asset": {
              "id": "Pedamakkena-Sattenapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2411929,
              16.4328263
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1373",
          "timestamp": "1704959624",
          "level": "normal",
          "asset": {
              "id": "598c07df-4501-48c4-810b-bb05ad708eb7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.10184833333334,
              16.59095333333333
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1525",
          "timestamp": "1697193338",
          "level": "normal",
          "asset": {
              "id": "Petlurivaripalem -Narasaraopet Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.01436559999999,
              16.1523753
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1817",
          "timestamp": "1685077817",
          "level": "normal",
          "asset": {
              "id": "Pittambanda- Mandal Vinukonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8604831,
              15.9969772
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1388",
          "timestamp": "1705036918",
          "level": "normal",
          "asset": {
              "id": "d871a701-ecde-4d62-9114-6b83f01b34f4"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.05412,
              16.18559571428571
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0188",
          "timestamp": "1699323787",
          "level": "normal",
          "asset": {
              "id": "f88c8b4e-8fe2-4a1a-bbc8-57ae413c4164"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.870449,
              16.201258
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1350",
          "timestamp": "1703048257",
          "level": "normal",
          "asset": {
              "id": "906592df-3b98-4102-a17d-24fb97904e3a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.04227,
              16.13825
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1161",
          "timestamp": "1703048178",
          "level": "normal",
          "asset": {
              "id": "433dd1a0-97e2-4e2d-8e88-3f126e5d4ca4"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0109225,
              16.25948
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1018",
          "timestamp": "1704689918",
          "level": "normal",
          "asset": {
              "id": "38a82a7d-ec3f-4f69-a993-4919df87209b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.01087,
              16.25906
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0336",
          "timestamp": "1682578348",
          "level": "normal",
          "asset": {
              "id": "Rentachintala-Rentachintala Mandal"
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
          "id": "PD1396",
          "timestamp": "1682575474",
          "level": "normal",
          "asset": {
              "id": "Rompicherla-Rompicherla (M)"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9087468,
              16.2097034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1510",
          "timestamp": "1682576404",
          "level": "normal",
          "asset": {
              "id": "Santhagudipadu-Rompicherla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9133717,
              16.2556469
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0697",
          "timestamp": "1683788113",
          "level": "normal",
          "asset": {
              "id": "Sathuluru-Nadendla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1191826,
              16.2552109
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0344",
          "timestamp": "1685340327",
          "level": "normal",
          "asset": {
              "id": "Savalyapuram-Savalyapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8170675,
              16.1037913
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0047",
          "timestamp": "1697516104",
          "level": "normal",
          "asset": {
              "id": "Solasa-Edlapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2174914,
              16.2294533
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1697",
          "timestamp": "1686540369",
          "level": "normal",
          "asset": {
              "id": "Tangeda-Nadikudi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.74263,
              16.5943252
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0359",
          "timestamp": "1683956128",
          "level": "normal",
          "asset": {
              "id": "Thimmapuram-Edlapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.2053647,
              16.1472957
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1183",
          "timestamp": "1706938971",
          "level": "normal",
          "asset": {
              "id": "90290ccb-2093-4458-a520-413ad67ff506"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.71826,
              16.43097
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1780",
          "timestamp": "1683704114",
          "level": "normal",
          "asset": {
              "id": "Tumurukota-Rentachintala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4587376,
              16.5582544
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2511",
          "timestamp": "1706503955",
          "level": "normal",
          "asset": {
              "id": "43aec9b1-a471-4ad3-939a-e27bedd39d27"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.77936,
              16.21852
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0375",
          "timestamp": "1705472340",
          "level": "normal",
          "asset": {
              "id": "f17dd871-c1f4-4fcf-89ea-38961e9a2828"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.04722000000001,
              16.24129
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1433",
          "timestamp": "1681927801",
          "level": "normal",
          "asset": {
              "id": "Veldurthi-Veldurthi (M)"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9310283,
              15.5508726
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1640",
          "timestamp": "1702092988",
          "level": "normal",
          "asset": {
              "id": "Vellaturu-Bollapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.64950879999999,
              16.1211069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0041",
          "timestamp": "1701515896",
          "level": "normal",
          "asset": {
              "id": "Velpur-Atchampet Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1282031,
              16.5760432
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0576",
          "timestamp": "1693892845",
          "level": "normal",
          "asset": {
              "id": "Velpuru-Savalyapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8626367,
              16.1386925
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0952",
          "timestamp": "1693633214",
          "level": "normal",
          "asset": {
              "id": "Vykuntapuram-Amaravathi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.4124824,
              16.5675127
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1752",
          "timestamp": "1701863424",
          "level": "normal",
          "asset": {
              "id": "bc4c560d-b880-4e20-a18c-dd747796a3ba"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.891194,
              16.056742
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1707",
          "timestamp": "1692957601",
          "level": "normal",
          "asset": {
              "id": "A.S.Peta-A.s.Peta Mandal"
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
          "id": "AA1477",
          "timestamp": "1705558917",
          "level": "normal",
          "asset": {
              "id": "40e09f99-f10d-4046-b18b-df9cca61872e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98562186666666,
              14.46117066666667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2437",
          "timestamp": "1702754962",
          "level": "normal",
          "asset": {
              "id": "3323323a-8866-4496-ab62-af8f50cdabb4"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.624352,
              14.61935
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0322",
          "timestamp": "1706167189",
          "level": "normal",
          "asset": {
              "id": "6a51458f-fafb-48d4-8491-4fd9b5f8dc2e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.90135876288659,
              15.2122344329897
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1356",
          "timestamp": "1706851869",
          "level": "normal",
          "asset": {
              "id": "f425c044-cde8-401c-b793-c0fdcfad90dd"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.72563,
              15.164776666666667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1515",
          "timestamp": 1712307043,
          "level": "normal",
          "asset": {
              "id": "bd30db92-2b47-42d2-8420-1cceec23c5d0"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.57719,
              14.8335
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1202",
          "timestamp": "1685427336",
          "level": "normal",
          "asset": {
              "id": "Amancherla-Nellore Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8548823,
              14.4133666
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1895",
          "timestamp": "1699606829",
          "level": "normal",
          "asset": {
              "id": "Ananthasagaram-Ananthasagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4060896,
              14.5718811
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1535",
          "timestamp": "1683698985",
          "level": "normal",
          "asset": {
              "id": "Basinenipalli-Seetharamapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2088091,
              14.9722339
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0786",
          "timestamp": "1700769838",
          "level": "normal",
          "asset": {
              "id": "d14933fe-8f77-4467-a793-ad5077e211f7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98326599999999,
              14.438306
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0865",
          "timestamp": "1700985773",
          "level": "normal",
          "asset": {
              "id": "67077e76-8366-493f-bf94-c890ff9ad9ad"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98539,
              14.91222
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1937",
          "timestamp": "1682320359",
          "level": "normal",
          "asset": {
              "id": "Brahmadevam-Muthukuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.09399780000001,
              14.2927358
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1239",
          "timestamp": "1682054400",
          "level": "normal",
          "asset": {
              "id": "Brahmanakraka-Jaladanki Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8940215,
              14.8380457
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0155",
          "timestamp": "1682576377",
          "level": "normal",
          "asset": {
              "id": "Chejarla-Chejarla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5908956,
              14.4818579
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2329",
          "timestamp": "1700854997",
          "level": "normal",
          "asset": {
              "id": "563fa2f9-ea68-48cc-89e0-1a839d907427"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.41071333333333,
              14.51207
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0861",
          "timestamp": "1682408253",
          "level": "normal",
          "asset": {
              "id": "Chinthalatmakuru-Kaluvoya Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4111862,
              14.5118653
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0709",
          "timestamp": "1704179958",
          "level": "normal",
          "asset": {
              "id": "5596e4cf-bb07-4c37-9d08-61a8c87a2f63"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98550629310344,
              14.461332241379308
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2486",
          "timestamp": "1705647741",
          "level": "normal",
          "asset": {
              "id": "8a3fbf64-3ae0-4ff8-bea1-8981c03fac5c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9854125,
              14.46044
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1249",
          "timestamp": "1688711401",
          "level": "normal",
          "asset": {
              "id": "Dachuru-Kaluvoya Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.57368919999999,
              14.4089687
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0822",
          "timestamp": "1695189001",
          "level": "normal",
          "asset": {
              "id": "Eduru-TP.Guduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0924268,
              14.404978
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1606",
          "timestamp": "1683715700",
          "level": "normal",
          "asset": {
              "id": "Gandipalem-Udayagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3095848,
              14.9986191
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0138",
          "timestamp": "1682318631",
          "level": "normal",
          "asset": {
              "id": "Griddaluru-Sydapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.74138959999999,
              14.1772875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0939",
          "timestamp": "1707802835",
          "level": "normal",
          "asset": {
              "id": "f0180799-75b1-411c-9079-8b2b4870a8ee"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.90311,
              15.07516
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0238",
          "timestamp": "1684729267",
          "level": "normal",
          "asset": {
              "id": "Gudluru-Gudluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.90520649999999,
              15.0725331
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1993",
          "timestamp": "1683534379",
          "level": "normal",
          "asset": {
              "id": "Gundemadakala -Chejarla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4816378,
              14.8024461
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0793",
          "timestamp": "1682069733",
          "level": "normal",
          "asset": {
              "id": "Iskapalli-Allur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0993166,
              14.7467457
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1052",
          "timestamp": 1710824386,
          "level": "normal",
          "asset": {
              "id": "62f4e572-ee7b-4f3d-8a19-6d5cbebe29a8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98467,
              14.59285
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1279",
          "timestamp": "1681987446",
          "level": "normal",
          "asset": {
              "id": "Kampasamudram-Marripadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.23947609999999,
              14.7739484
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0826",
          "timestamp": "1700767282",
          "level": "normal",
          "asset": {
              "id": "7c109a9b-6029-4fb1-8d2e-7dfa43800f93"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98330392857143,
              14.438326428571429
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1225",
          "timestamp": "1679881800",
          "level": "normal",
          "asset": {
              "id": "Karatampadu-Atmakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.54137639999999,
              14.6777875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1736",
          "timestamp": 1706802321,
          "level": "normal",
          "asset": {
              "id": "e06cb2e3-428d-45c0-b55e-4f74c83f60ed"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.90132,
              15.21213
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0644",
          "timestamp": "1682053835",
          "level": "normal",
          "asset": {
              "id": "Karedu-Ulavapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0597459,
              15.1878193
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0700",
          "timestamp": "1694506375",
          "level": "normal",
          "asset": {
              "id": "Kodavaluru-Kodavaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.00388219999999,
              14.5657721
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0006",
          "timestamp": "1700856083",
          "level": "normal",
          "asset": {
              "id": "af570d7c-b382-465c-b005-1f1ebd81b9ce"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.41071333333333,
              14.51207
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0857",
          "timestamp": "1700757843",
          "level": "normal",
          "asset": {
              "id": "1be7da5c-bf49-44c9-a0f2-7288d9cbfbd7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98325545454544,
              14.43856
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0769",
          "timestamp": "1682334000",
          "level": "normal",
          "asset": {
              "id": "Kurrapalli-Udayagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2629408,
              14.7846604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0588",
          "timestamp": "1682055243",
          "level": "normal",
          "asset": {
              "id": "Leguntapadu-Kovur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0241489,
              14.5141097
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1566",
          "timestamp": "1685343660",
          "level": "normal",
          "asset": {
              "id": "Lingasamudram-Lingasamudram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5322424,
              14.0750467
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1478",
          "timestamp": "1682055412",
          "level": "normal",
          "asset": {
              "id": "Machavaram-Kandukur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7904475,
              13.9715058
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0224",
          "timestamp": "1683785108",
          "level": "normal",
          "asset": {
              "id": "Madamanuru-Manubolu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8422792,
              14.2418842
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1872",
          "timestamp": "1682056622",
          "level": "normal",
          "asset": {
              "id": "Mudivarthipalem-Indukurupeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.09958329999999,
              14.4712684
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1951",
          "timestamp": 1714112088,
          "level": "normal",
          "asset": {
              "id": "0ea391ca-6d3d-4220-8feb-9df20040f048"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.1047,
              14.34593
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1715",
          "timestamp": "1682322567",
          "level": "normal",
          "asset": {
              "id": "Nandavaram-Marripadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4643703,
              14.6995431
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0918",
          "timestamp": "1683702000",
          "level": "normal",
          "asset": {
              "id": "Nandipadu-Duttalur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3494214,
              14.7995128
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0260",
          "timestamp": "1676053201",
          "level": "normal",
          "asset": {
              "id": "Narrawada-Duttalur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4232672,
              14.9012848
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0696",
          "timestamp": "1691547601",
          "level": "normal",
          "asset": {
              "id": "North Mopur-Allur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0414026,
              14.6465588
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0842",
          "timestamp": "1700855910",
          "level": "normal",
          "asset": {
              "id": "97186dc3-a5fe-4b74-a906-69fcb9414c2c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.41074,
              14.51207
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1411",
          "timestamp": "1687848332",
          "level": "normal",
          "asset": {
              "id": "Peddireddipalli-Varikuntapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.35978899999999,
              15.007975
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0519",
          "timestamp": "1682569769",
          "level": "normal",
          "asset": {
              "id": "Penubarthi-Rapur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.50975489999999,
              14.3494114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1048",
          "timestamp": "1706520018",
          "level": "normal",
          "asset": {
              "id": "a541d474-ca08-4eb1-a0f1-850270974097"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.89022,
              14.19869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1383",
          "timestamp": "1682415671",
          "level": "normal",
          "asset": {
              "id": "Pokur-V.V.Palem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8198692,
              15.1769707
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1806",
          "timestamp": "1706671571",
          "level": "normal",
          "asset": {
              "id": "ba56d12a-d601-4f33-be0a-27d072e2041e"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.93207,
              14.465859999999997
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0427",
          "timestamp": "1681984990",
          "level": "normal",
          "asset": {
              "id": "Pudiparthi-Venkatachalam Mandal"
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
          "id": "AA0942",
          "timestamp": "1704047400",
          "level": "normal",
          "asset": {
              "id": "eeb5cfd4-5fc5-4d1c-b77d-8ff4143ca740"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.603468,
              14.717932
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0891",
          "timestamp": "1682054923",
          "level": "normal",
          "asset": {
              "id": "Rebala-Buchireddypalem Mandal"
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
          "id": "PD0533",
          "timestamp": "1699591871",
          "level": "normal",
          "asset": {
              "id": "Revuru-Ananthasagaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5104577,
              14.5886509
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1772",
          "timestamp": "1689926400",
          "level": "normal",
          "asset": {
              "id": "Sai peta-Kondapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7589133,
              15.0334485
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1019",
          "timestamp": "1681983840",
          "level": "normal",
          "asset": {
              "id": "Sangam-Sangam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7498014,
              14.5856623
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2493",
          "timestamp": "1703158742",
          "level": "normal",
          "asset": {
              "id": "8156b22d-7099-4aca-96c7-bac15f18ea74"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9729,
              14.29178
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1905",
          "timestamp": 1710749321,
          "level": "normal",
          "asset": {
              "id": "9cb0ca31-f5f0-4e04-ac99-473cd98c420f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.14206,
              15.01546
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0627",
          "timestamp": "1697257307",
          "level": "normal",
          "asset": {
              "id": "Siddanakonduru-Kaligiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7733908,
              14.7947798
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1351",
          "timestamp": "1684322298",
          "level": "normal",
          "asset": {
              "id": "Sydapuram-Sydapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.74138959999999,
              14.1772875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1729",
          "timestamp": "1700769995",
          "level": "normal",
          "asset": {
              "id": "576ab390-0c08-4227-9c8e-987c72c39166"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98329166666666,
              14.438276666666667
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0586",
          "timestamp": "1682054995",
          "level": "normal",
          "asset": {
              "id": "Tettu-Gudluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9082598,
              15.0706076
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0822",
          "timestamp": "1703220807",
          "level": "normal",
          "asset": {
              "id": "7d39dba1-e9f3-4394-90f0-6180ac9e0660"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.548914,
              14.911218
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2409",
          "timestamp": "1703639173",
          "level": "normal",
          "asset": {
              "id": "4615017f-513e-4986-aaeb-6bd0d998900f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.05976,
              14.73073
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0798",
          "timestamp": "1700129400",
          "level": "normal",
          "asset": {
              "id": "Thoderu-Podalakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7659219,
              14.4116677
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0591",
          "timestamp": "1682056267",
          "level": "normal",
          "asset": {
              "id": "V.R.Kota-Lingasamudram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0465067,
              14.0352299
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1582",
          "timestamp": "1704397073",
          "level": "normal",
          "asset": {
              "id": "83d1c4e5-94fa-46fb-baa2-52bb0c7601ff"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.41526920454554,
              14.510781136363642
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2108",
          "timestamp": "1706419167",
          "level": "normal",
          "asset": {
              "id": "f0ad18c1-3eb0-45af-80e4-2d0ae618a58d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8728,
              14.20361
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2529",
          "timestamp": "1700723166",
          "level": "normal",
          "asset": {
              "id": "cc2df154-b6c5-4de6-83fc-8ddba243cec8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.99981,
              14.43959
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0543",
          "timestamp": "1683008834",
          "level": "normal",
          "asset": {
              "id": "Valluru-Muthukuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.09399780000001,
              14.2927358
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1537",
          "timestamp": "1693290001",
          "level": "normal",
          "asset": {
              "id": "Varikuntapadu-Varikuntapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.35978899999999,
              15.007975
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2004",
          "timestamp": "1700770110",
          "level": "normal",
          "asset": {
              "id": "c158b05e-d656-463f-a0d3-cf44c21ad96c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.98328599999999,
              14.438172
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1143",
          "timestamp": "1682315177",
          "level": "normal",
          "asset": {
              "id": "Venkatachalam-Venkatachalam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.92703709999999,
              14.3267653
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1841",
          "timestamp": "1701562201",
          "level": "normal",
          "asset": {
              "id": "Vidavaluru-Vidavaluru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0653482,
              14.5723259
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1662",
          "timestamp": "1682058915",
          "level": "normal",
          "asset": {
              "id": "aluthrthi-Podalakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.6845529,
              14.4394213
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0077",
          "timestamp": "1681975801",
          "level": "normal",
          "asset": {
              "id": "AVH Bathalapalli-Bathalapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.76759,
              14.5149206
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1570",
          "timestamp": "1684814981",
          "level": "normal",
          "asset": {
              "id": "AVH Dharmavaram-Dharmavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7147794,
              14.3860712
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0255",
          "timestamp": "1695449646",
          "level": "normal",
          "asset": {
              "id": "AVH Nallacheruvu-Nallacheruvu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1859083,
              13.9868474
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1520",
          "timestamp": "1684686684",
          "level": "normal",
          "asset": {
              "id": "AVH Penukondsa-penukonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5973233,
              14.0844312
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1273",
          "timestamp": "1681901319",
          "level": "normal",
          "asset": {
              "id": "AVH Puttaparthy-Puttaparthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8119299,
              14.1621929
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0885",
          "timestamp": "1682069199",
          "level": "normal",
          "asset": {
              "id": "AVH Talupula -Talupula Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2575816,
              14.2432607
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1369",
          "timestamp": "1693611001",
          "level": "normal",
          "asset": {
              "id": "AVH Tanakal-Tanakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1934911,
              13.918853
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1743",
          "timestamp": "1696651071",
          "level": "normal",
          "asset": {
              "id": "Agali-Agali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0528382,
              13.78601
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0813",
          "timestamp": "1702207201",
          "level": "normal",
          "asset": {
              "id": "Amadagur-Amadagur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0216792,
              13.888319
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0914",
          "timestamp": "1682481897",
          "level": "normal",
          "asset": {
              "id": "Basavanapalli-Amarapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.0607637,
              14.0244034
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1506",
          "timestamp": "1691812801",
          "level": "normal",
          "asset": {
              "id": "Bonthal palli-Tanakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1934911,
              13.918853
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0099",
          "timestamp": "1683010201",
          "level": "normal",
          "asset": {
              "id": "Bukkaptnam-Bukkaptnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8121073,
              14.1580987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1375",
          "timestamp": "1682062368",
          "level": "normal",
          "asset": {
              "id": "Chalivendula-Hindupur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8121073,
              14.1580987
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0068",
          "timestamp": "1682061380",
          "level": "normal",
          "asset": {
              "id": "Chilamathur-Chilamathur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.7037131,
              13.838947
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0474",
          "timestamp": "1681966938",
          "level": "normal",
          "asset": {
              "id": "Chinthalapalli-Dharmavaram Mandal"
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
          "id": "PD1294",
          "timestamp": "1681975041",
          "level": "normal",
          "asset": {
              "id": "Donnikota-Nallamada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0594874,
              14.1091175
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0410",
          "timestamp": "1681970470",
          "level": "normal",
          "asset": {
              "id": "Gandlapenta- Gandlapenta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2486603,
              14.1142832
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1328",
          "timestamp": "1681974039",
          "level": "normal",
          "asset": {
              "id": "Gudibanda-Gudibanda Mandal"
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
          "id": "PD1426",
          "timestamp": "1691220601",
          "level": "normal",
          "asset": {
              "id": "Gutturu-Penukonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6321339,
              14.191467
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1000",
          "timestamp": "1681973401",
          "level": "normal",
          "asset": {
              "id": "Kallur-Lepakshi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5612254,
              13.8352485
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1269",
          "timestamp": "1681898628",
          "level": "normal",
          "asset": {
              "id": "Kanaganapalli-Kanaganapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5261129,
              14.4456854
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1632",
          "timestamp": "1684282201",
          "level": "normal",
          "asset": {
              "id": "Kodigenahalli-Parigi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4759334,
              13.8628643
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1659",
          "timestamp": "1681922663",
          "level": "normal",
          "asset": {
              "id": "Kokkanti-Tanakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2796482,
              13.9408734
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0705",
          "timestamp": "1682068153",
          "level": "normal",
          "asset": {
              "id": "KrishnaPuram-Bukkaptnam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9110321,
              14.3301146
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0949",
          "timestamp": "1688460991",
          "level": "normal",
          "asset": {
              "id": "Madhudi-Agali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.05284840000002,
              13.7859687
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1400",
          "timestamp": "1686291997",
          "level": "normal",
          "asset": {
              "id": "Mamillapalli-Mamillapalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.96983139999999,
              15.1051048
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0730",
          "timestamp": "1681973539",
          "level": "normal",
          "asset": {
              "id": "Manampalli-Lepakshi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.6049218,
              13.8040549
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1009",
          "timestamp": "1702192800",
          "level": "normal",
          "asset": {
              "id": "Mohammadabad-Amadagur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.0216792,
              13.888319
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0938",
          "timestamp": "1682562001",
          "level": "normal",
          "asset": {
              "id": "Mudigubba-Dharmavaram Mandal"
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
          "id": "PD1301",
          "timestamp": "1694041801",
          "level": "normal",
          "asset": {
              "id": "NP Kunta -N.P.Kunta Mandal"
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
          "id": "PD1460",
          "timestamp": "1681966654",
          "level": "normal",
          "asset": {
              "id": "Nallamada-Nallamada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.98314409999999,
              14.1416836
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0933",
          "timestamp": "1701874801",
          "level": "normal",
          "asset": {
              "id": "OD Cheruvu- OD Cheruvu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9945633,
              14.3536893
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1777",
          "timestamp": "1675318801",
          "level": "normal",
          "asset": {
              "id": "OD Kondakamarla-ODCheruvu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.9945633,
              14.3536893
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0512",
          "timestamp": "1683617488",
          "level": "normal",
          "asset": {
              "id": "Patnam-Kadiri Mandal"
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
          "id": "PD1509",
          "timestamp": "1683630219",
          "level": "normal",
          "asset": {
              "id": "Pedaballi-Nallamada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.98314409999999,
              14.1416836
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0323",
          "timestamp": "1684125211",
          "level": "normal",
          "asset": {
              "id": "Peddannavari palli-Talupula Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.33881699999999,
              14.2540308
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0269",
          "timestamp": "1682058487",
          "level": "normal",
          "asset": {
              "id": "Rallapalli-Gudibanda Mandal"
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
          "id": "PD0381",
          "timestamp": "1683000796",
          "level": "normal",
          "asset": {
              "id": "Ramagiri-Ramagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5060438,
              14.3103958
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0832",
          "timestamp": "1683099600",
          "level": "normal",
          "asset": {
              "id": "Reddipalli -Nallamada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.98314409999999,
              14.1416836
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1109",
          "timestamp": "1683616897",
          "level": "normal",
          "asset": {
              "id": "Roddam-Roddam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4271913,
              14.0934797
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1234",
          "timestamp": "1681899196",
          "level": "normal",
          "asset": {
              "id": "Rolla-Rolla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.10392879999999,
              13.8419388
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0371",
          "timestamp": "1681970195",
          "level": "normal",
          "asset": {
              "id": "Santhebidanuru-Hindupur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.4759334,
              13.7263897
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0373",
          "timestamp": "1686628201",
          "level": "normal",
          "asset": {
              "id": "Sidduguri Palli -Talupula Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1988805,
              14.2635945
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0999",
          "timestamp": "1682526601",
          "level": "normal",
          "asset": {
              "id": "Somandepalli-Somandepalli Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.60764329999999,
              14.0088622
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1185",
          "timestamp": "1702218601",
          "level": "normal",
          "asset": {
              "id": "Tavalam-Tanakal Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1963404,
              13.8420115
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1741",
          "timestamp": "1685349240",
          "level": "normal",
          "asset": {
              "id": "Utakur-Parigi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.5017428,
              13.9068777
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1221",
          "timestamp": "1682321660",
          "level": "normal",
          "asset": {
              "id": "Vengalammacheruvu-Puttaparthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              77.8710285,
              14.1509869
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0421",
          "timestamp": "1700254202",
          "level": "normal",
          "asset": {
              "id": "c4ebc669-d81d-48b9-ad2b-f81bb5590b1a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.05502,
              18.33129
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1175",
          "timestamp": 1710825861,
          "level": "normal",
          "asset": {
              "id": "771f62fc-2d88-4e07-a720-ad180f278e6a"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.40499,
              18.77257
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0690",
          "timestamp": "1700124394",
          "level": "normal",
          "asset": {
              "id": "d8821959-03dd-4077-bef0-f9bd793d77e6"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.70862103448276,
              16.510832758620694
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2464",
          "timestamp": 1711086109,
          "level": "normal",
          "asset": {
              "id": "157d200d-31b4-4c9b-99b7-ddf777de98a7"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.68826,
              18.20151
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0847",
          "timestamp": "1683614593",
          "level": "normal",
          "asset": {
              "id": "Akkulapeta-AMADALAVALASA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8698323,
              18.4371216
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0443",
          "timestamp": "1684935001",
          "level": "normal",
          "asset": {
              "id": "Ampolu-Gara Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0544053,
              18.3314303
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1711",
          "timestamp": "1683354604",
          "level": "normal",
          "asset": {
              "id": "Arasavalli-Srikakulam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.912221,
              18.2878206
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1078",
          "timestamp": "1701322801",
          "level": "normal",
          "asset": {
              "id": "Atchutapuram-Jalumuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9737648,
              18.5712303
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1582",
          "timestamp": "1683954357",
          "level": "normal",
          "asset": {
              "id": "Boddapadu-Palasa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4696961,
              18.7783849
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0866",
          "timestamp": "1699502369",
          "level": "normal",
          "asset": {
              "id": "Borivaka-Kaviti Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.6884426,
              19.0093875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1451",
          "timestamp": "1683522409",
          "level": "normal",
          "asset": {
              "id": "Budumuru-LAVERU Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7648634,
              18.2468153
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0278",
          "timestamp": "1683610378",
          "level": "normal",
          "asset": {
              "id": "Burja-BURJA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8002659,
              18.5316351
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0961",
          "timestamp": "1693977427",
          "level": "normal",
          "asset": {
              "id": "Cheedipudi-Saravakota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0155458,
              18.5439262
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0656",
          "timestamp": "1683708411",
          "level": "normal",
          "asset": {
              "id": "Chinnabadam-Palasa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4133272,
              18.7407999
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1104",
          "timestamp": "1691823094",
          "level": "normal",
          "asset": {
              "id": "Etcherla-ETCHERLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8206713,
              18.2798959
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1658",
          "timestamp": "1698044401",
          "level": "normal",
          "asset": {
              "id": "GSigadam-GSIGADAM Mandal"
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
          "id": "AA0908",
          "timestamp": 1709229286,
          "level": "normal",
          "asset": {
              "id": "fcd47ed6-d4a5-4525-9a66-9faf61f57404"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.37148,
              18.66761
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0726",
          "timestamp": "1696922584",
          "level": "normal",
          "asset": {
              "id": "Guttavalli-BURJA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.84465019999999,
              18.4436949
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0390",
          "timestamp": "1683543204",
          "level": "normal",
          "asset": {
              "id": "Haripuram-Mandasa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.46058219999999,
              18.8724406
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0086",
          "timestamp": "1698389131",
          "level": "normal",
          "asset": {
              "id": "Hiramandalam-Hiramandalam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9506181,
              18.6679753
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1402",
          "timestamp": "1683527400",
          "level": "normal",
          "asset": {
              "id": "Jalumuru-Jalumuru Mandal"
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
          "id": "PD1170",
          "timestamp": "1958303231",
          "level": "normal",
          "asset": {
              "id": "K.S.Palli-Saravakota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1128007,
              18.6264689
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1755",
          "timestamp": "1683278333",
          "level": "normal",
          "asset": {
              "id": "Kanchili-Kanchili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.582481,
              18.9811478
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1025",
          "timestamp": "1685086524",
          "level": "normal",
          "asset": {
              "id": "Kaviti- Mandal Kaviti Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.6884426,
              19.0093875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1667",
          "timestamp": "1700288152",
          "level": "normal",
          "asset": {
              "id": "Koligam-Ichapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.6168508,
              19.1223285
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1972",
          "timestamp": "1699755601",
          "level": "normal",
          "asset": {
              "id": "Korasavada -Pathapatnam  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.04713890000001,
              18.6970108
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0616",
          "timestamp": "1700297307",
          "level": "normal",
          "asset": {
              "id": "2f5a0e6a-1cd7-469a-8497-ffe30829936c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.544,
              18.07655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1605",
          "timestamp": "1699646476",
          "level": "normal",
          "asset": {
              "id": "913ca324-306d-4b87-8019-1002a79ddd72"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.852327,
              18.190609
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1282",
          "timestamp": "1684123199",
          "level": "normal",
          "asset": {
              "id": "Kurudu-Kotabommali  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1433186,
              18.5551038
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1808",
          "timestamp": "1696826946",
          "level": "normal",
          "asset": {
              "id": "LNPeta-LNPETA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9621406,
              18.6195209
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1298",
          "timestamp": "1683614897",
          "level": "normal",
          "asset": {
              "id": "Laveru-LAVERU Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6953764,
              18.2370939
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0095",
          "timestamp": "1697516056",
          "level": "normal",
          "asset": {
              "id": "Lingalavalasa-Tekkali Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.15868189999999,
              18.605126
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0212",
          "timestamp": "1694481601",
          "level": "normal",
          "asset": {
              "id": "Makrampuram-Kanchili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.582481,
              18.9811478
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1280",
          "timestamp": "1683787611",
          "level": "normal",
          "asset": {
              "id": "Mandasa-Mandasa Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.46058219999999,
              18.8724406
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1310",
          "timestamp": "1692118801",
          "level": "normal",
          "asset": {
              "id": "Meliaputti -Meliaputti  Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1738463,
              18.7749391
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0735",
          "timestamp": "1682749299",
          "level": "normal",
          "asset": {
              "id": "Metturu-Kothuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9135726,
              18.7435862
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1224",
          "timestamp": "1683957950",
          "level": "normal",
          "asset": {
              "id": "Nadagam-Narasannapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9835789,
              18.4347623
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0606",
          "timestamp": "1694447401",
          "level": "normal",
          "asset": {
              "id": "Narsipuram- Mandal Nandigam"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.27458779999999,
              18.6300775
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1956",
          "timestamp": "1683802981",
          "level": "normal",
          "asset": {
              "id": "Patharlapalli-RANASTHALAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.706626,
              18.1415356
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1677",
          "timestamp": "1683360804",
          "level": "normal",
          "asset": {
              "id": "Penubarthi-PONDURU Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8176095,
              18.3423641
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1887",
          "timestamp": "1683709749",
          "level": "normal",
          "asset": {
              "id": "Polaki-POLAKI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.099966,
              18.3764255
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1245",
          "timestamp": "1683283713",
          "level": "normal",
          "asset": {
              "id": "Priyagraharam-POLAKI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.1415822,
              18.4234471
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0100",
          "timestamp": "1684246201",
          "level": "normal",
          "asset": {
              "id": "Purushothapuram-SARUBUJJILI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.9453168,
              18.4469266
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0066",
          "timestamp": "1683872528",
          "level": "normal",
          "asset": {
              "id": "Pydibheemavaram-RANASTHALAM Mandal"
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
          "id": "AA1089",
          "timestamp": "1705985542",
          "level": "normal",
          "asset": {
              "id": "a8e5f7f8-1192-4b07-8963-19ed90c63260"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.892394,
              18.34995
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1756",
          "timestamp": "1700121284",
          "level": "normal",
          "asset": {
              "id": "35318dc2-8cb5-479d-9b67-85607b82b57f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.70856571428568,
              16.51070142857142
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0559",
          "timestamp": "1683357624",
          "level": "normal",
          "asset": {
              "id": "SMPuram-ETCHERLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8320834,
              18.2995312
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0164",
          "timestamp": "1683351328",
          "level": "normal",
          "asset": {
              "id": "Singupuram-Srikakulam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.970817,
              18.354529
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0540",
          "timestamp": "1695463160",
          "level": "normal",
          "asset": {
              "id": "Sreekurmam-Gara Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.0048439,
              18.2730186
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD2495",
          "timestamp": "1685772874",
          "level": "normal",
          "asset": {
              "id": "Tilaru-Kotabommali  Mandal"
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
          "id": "AA0934",
          "timestamp": "1701843926",
          "level": "normal",
          "asset": {
              "id": "7d26da25-c81d-49e2-bf0e-f68c662f12dc"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.8946718,
              18.307435599999998
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0503",
          "timestamp": "1685771659",
          "level": "normal",
          "asset": {
              "id": "Vajrapukothuru- Mandal Vajrapukothuru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              84.4494282,
              18.6908237
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1128",
          "timestamp": "1681196090",
          "level": "normal",
          "asset": {
              "id": "Ankulapatur-Kota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9843099,
              14.1309128
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1597",
          "timestamp": "1681208144",
          "level": "normal",
          "asset": {
              "id": "Arai-K.V.B.Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.40793,
              13.6159344
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0300",
          "timestamp": "1681365503",
          "level": "normal",
          "asset": {
              "id": "Bhakarapeta-Chinnagottigallu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1569698,
              13.6532642
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1599",
          "timestamp": "1681968543",
          "level": "normal",
          "asset": {
              "id": "C.R.Kandriga-Pichatur Mandal"
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
          "id": "PD0019",
          "timestamp": "1681211076",
          "level": "normal",
          "asset": {
              "id": "Chembedu-Pellakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8041271,
              13.8366632
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0646",
          "timestamp": "1681121249",
          "level": "normal",
          "asset": {
              "id": "Chennuru-Gudur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.80025580000002,
              14.1539861
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0515",
          "timestamp": "1681196178",
          "level": "normal",
          "asset": {
              "id": "Chillakur-Chillakur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8618833,
              14.1279145
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0252",
          "timestamp": "1681288447",
          "level": "normal",
          "asset": {
              "id": "Chittamuru-Chittamur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.06885869999999,
              13.9558573
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0968",
          "timestamp": "1681708885",
          "level": "normal",
          "asset": {
              "id": "Chittedu-Kota Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9822126,
              14.0555113
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0477",
          "timestamp": "1681200422",
          "level": "normal",
          "asset": {
              "id": "Damalacheruvu-Pakala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.04402429999999,
              13.4814988
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0320",
          "timestamp": "1681191329",
          "level": "normal",
          "asset": {
              "id": "Damanellore-Sullurpeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8849825,
              13.7356675
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0072",
          "timestamp": "1681367643",
          "level": "normal",
          "asset": {
              "id": "Dornakambala-Chandragiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3046543,
              13.5452044
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0270",
          "timestamp": "1682483007",
          "level": "normal",
          "asset": {
              "id": "Durgasamudram-Tirupati Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3912531,
              13.5753079
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0142",
          "timestamp": "1681708458",
          "level": "normal",
          "asset": {
              "id": "Eguvaveedi-Srikalahasthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.65652589999999,
              13.704721
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1075",
          "timestamp": "1681281672",
          "level": "normal",
          "asset": {
              "id": "Gajulamandyam-Renigunta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5118634,
              13.5972058
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1274",
          "timestamp": "1681370551",
          "level": "normal",
          "asset": {
              "id": "Irugulam-Satyavedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9942377,
              13.4981665
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0552",
          "timestamp": "1681905000",
          "level": "normal",
          "asset": {
              "id": "Jayampu-Balayapalle Mandal"
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
          "id": "PD0912",
          "timestamp": "1690791235",
          "level": "normal",
          "asset": {
              "id": "K.Oddepalli-Pakala Mandal"
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
          "id": "PD0819",
          "timestamp": "1690932000",
          "level": "normal",
          "asset": {
              "id": "Kalroad palli-Chandragiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2042258,
              13.513422
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1523",
          "timestamp": "1681276217",
          "level": "normal",
          "asset": {
              "id": "Kammapalli-RC Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.40793,
              13.6159344
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0243",
          "timestamp": "1677340240",
          "level": "normal",
          "asset": {
              "id": "Katur-BN Kandriga Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.8492812,
              13.702019
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0902",
          "timestamp": "1700916001",
          "level": "normal",
          "asset": {
              "id": "Kondagunta-Gudur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.7939506,
              14.0827266
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1776",
          "timestamp": "1683403201",
          "level": "normal",
          "asset": {
              "id": "Kuppambadur-RC Puram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.3930124,
              13.4958597
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0194",
          "timestamp": "1681706321",
          "level": "normal",
          "asset": {
              "id": "Kurugonda-Ojili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9409555,
              14.0114945
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1931",
          "timestamp": "1681371769",
          "level": "normal",
          "asset": {
              "id": "Lingasamudram-Dakkili Mandal"
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
          "id": "PD1555",
          "timestamp": "1681783201",
          "level": "normal",
          "asset": {
              "id": "M.R.Palli-Tirupati Rural Mandal"
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
          "id": "PD0325",
          "timestamp": "1683615290",
          "level": "normal",
          "asset": {
              "id": "Mallam-Chittamur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.06885869999999,
              13.9558573
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1324",
          "timestamp": "1681284976",
          "level": "normal",
          "asset": {
              "id": "Mavillapadu-Doravarisatram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9612368,
              13.7638331
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0106",
          "timestamp": "1681201591",
          "level": "normal",
          "asset": {
              "id": "Mogarala-Pakala Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.09274839999999,
              13.4843448
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0250",
          "timestamp": "1681441876",
          "level": "normal",
          "asset": {
              "id": "Nagalapuram-Nagalapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.79885469999999,
              13.3857837
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0081",
          "timestamp": "1681122857",
          "level": "normal",
          "asset": {
              "id": "Naravari palli-Chandragiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2662575,
              13.6187964
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1593",
          "timestamp": "1681366021",
          "level": "normal",
          "asset": {
              "id": "Narayanavanam-Narayanavanam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5887049,
              13.4234223
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1995",
          "timestamp": "1681447093",
          "level": "normal",
          "asset": {
              "id": "Nerabailu-Yerravaripalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.1634124,
              13.748907
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1990",
          "timestamp": "1681545270",
          "level": "normal",
          "asset": {
              "id": "Ozili-Ojili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9066763,
              14.0036134
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1825",
          "timestamp": "1682623200",
          "level": "normal",
          "asset": {
              "id": "P.R.Mangalam-Puttur Mandal"
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
          "id": "PD0690",
          "timestamp": "1689939000",
          "level": "normal",
          "asset": {
              "id": "Palamangalam-Narayanavanam Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.68208039999999,
              13.4107437
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1600",
          "timestamp": "1682312989",
          "level": "normal",
          "asset": {
              "id": "Pandluru-Naidupet Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4041614,
              13.6276698
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0837",
          "timestamp": "1701321601",
          "level": "normal",
          "asset": {
              "id": "Papanaidupeta-Yerpedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5638387,
              13.6027713
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0846",
          "timestamp": "1699946353",
          "level": "normal",
          "asset": {
              "id": "Paravolu-Venkatagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5462943,
              13.9925802
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0954",
          "timestamp": "1681378416",
          "level": "normal",
          "asset": {
              "id": "Pudi-Thottambedu Mandal"
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
          "id": "PD0139",
          "timestamp": "1692166200",
          "level": "normal",
          "asset": {
              "id": "Pudipatla-Tirupati Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.36203239999999,
              13.6087438
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1214",
          "timestamp": "1681278691",
          "level": "normal",
          "asset": {
              "id": "Pulikundram-Pichatur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.74138959999999,
              13.3991349
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0507",
          "timestamp": "1692048600",
          "level": "normal",
          "asset": {
              "id": "R.Mallavaram-Renigunta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5505094,
              13.648103
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1130",
          "timestamp": "1681293871",
          "level": "normal",
          "asset": {
              "id": "Seetaramapuram-Vadamalapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.524513,
              13.5492114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1695",
          "timestamp": "1681449113",
          "level": "normal",
          "asset": {
              "id": "Sirinambudur-Satyavedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.9612368,
              13.4322706
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0332",
          "timestamp": "1700895601",
          "level": "normal",
          "asset": {
              "id": "Tada-Tada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              80.0387776,
              13.5856417
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1733",
          "timestamp": "1693889196",
          "level": "normal",
          "asset": {
              "id": "Thottambedu-Thottambedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.72316119999999,
              13.7168036
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1716",
          "timestamp": "1681281461",
          "level": "normal",
          "asset": {
              "id": "Tiruchanur-Tirupati Rural Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.4480975,
              13.6092492
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1097",
          "timestamp": "1681716001",
          "level": "normal",
          "asset": {
              "id": "Tirumalakuppam-Puttur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.5406738,
              13.363788
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0158",
          "timestamp": "1681278769",
          "level": "normal",
          "asset": {
              "id": "Uranudur-Srikalahasthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.64740359999999,
              13.7279218
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1749",
          "timestamp": "1694427601",
          "level": "normal",
          "asset": {
              "id": "Vadamalapeta-Vadamalapeta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.524513,
              13.5492114
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1153",
          "timestamp": "1681210083",
          "level": "normal",
          "asset": {
              "id": "Vampalli-Srikalahasthi Mandal"
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
          "id": "PD1783",
          "timestamp": "1701063168",
          "level": "normal",
          "asset": {
              "id": "Varadaiahpalem-Varadaiahpalem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.93466029999999,
              13.601156
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0018",
          "timestamp": "1697871321",
          "level": "normal",
          "asset": {
              "id": "Yathaluru-Venkatagiri Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.58079649999999,
              13.9590539
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0045",
          "timestamp": "1701926017",
          "level": "normal",
          "asset": {
              "id": "Yerpedu-Yerpedu Mandal"
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
          "id": "PD1013",
          "timestamp": "1681191715",
          "level": "normal",
          "asset": {
              "id": "Yerra vari palem-Yerravaripalem Mandal"
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
          "id": "AA2473",
          "timestamp": "1702231154",
          "level": "normal",
          "asset": {
              "id": "260c4f01-bc4d-4a08-a4ef-c256736c1e11"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18637333333334,
              17.69044
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0495",
          "timestamp": "1704484659",
          "level": "normal",
          "asset": {
              "id": "d2246538-5784-452d-a90f-18d93fadf07b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.32066,
              17.7630025
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0915",
          "timestamp": "1704606569",
          "level": "normal",
          "asset": {
              "id": "abeb3912-4fd0-4230-a924-8aaf65ce2e5d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.22788987012987,
              17.744119610389614
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1007",
          "timestamp": "1704191313",
          "level": "normal",
          "asset": {
              "id": "60eb5255-72a8-4750-9500-fc759ecd3fd8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.30524037037038,
              17.7157262962963
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0190",
          "timestamp": "1683873894",
          "level": "normal",
          "asset": {
              "id": "Aganampudi-Gajuwaka Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1391172,
              17.7265688
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1462",
          "timestamp": "1702276201",
          "level": "normal",
          "asset": {
              "id": "Anandapuram-Anandapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.369313,
              17.9040508
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0294",
          "timestamp": "1683526817",
          "level": "normal",
          "asset": {
              "id": "Ch Agraharam-Pendurthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              82.53211189999999,
              17.4077424
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0136",
          "timestamp": "1695445800",
          "level": "normal",
          "asset": {
              "id": "Chandrampalem-Visakha (R) Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.358903,
              17.8094398
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1059",
          "timestamp": "1683520764",
          "level": "normal",
          "asset": {
              "id": "Dakamarri-Bheemili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.4009712,
              17.9884504
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1725",
          "timestamp": "1691472525",
          "level": "normal",
          "asset": {
              "id": "Devada-Pedagantyada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1166438,
              17.5670314
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0587",
          "timestamp": "1683790180",
          "level": "normal",
          "asset": {
              "id": "Gajuwaka-Gajuwaka Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2035471,
              17.6851243
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1670",
          "timestamp": "1683187072",
          "level": "normal",
          "asset": {
              "id": "Gandhigram-Mulagada Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2255048,
              17.6984763
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0562",
          "timestamp": "1683352958",
          "level": "normal",
          "asset": {
              "id": "Isukathota-Seethammadhara Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3091092,
              17.742199
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1733",
          "timestamp": "1705919118",
          "level": "normal",
          "asset": {
              "id": "a828d1b5-a0f3-40aa-b5b9-7916d3dd0728"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.33415059523813,
              17.759041309523827
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0603",
          "timestamp": "1693806601",
          "level": "normal",
          "asset": {
              "id": "Kotanarava-Pendurthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1937209,
              17.7413306
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0937",
          "timestamp": "1695205141",
          "level": "normal",
          "asset": {
              "id": "Padmanabham-Padmanabham Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.33752439999999,
              17.9914434
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1362",
          "timestamp": "1683184200",
          "level": "normal",
          "asset": {
              "id": "Pandrangi-Padmanabham Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3659163,
              17.9633024
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1481",
          "timestamp": "1694417133",
          "level": "normal",
          "asset": {
              "id": "Pendurthi-Pendurthi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.20891259999999,
              17.80552
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1216",
          "timestamp": "1704959748",
          "level": "normal",
          "asset": {
              "id": "03244889-89ca-4442-b922-7cf20dfbcb7d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.12546,
              18.17288
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0665",
          "timestamp": "1688103588",
          "level": "normal",
          "asset": {
              "id": "Reddipalli-Padmanabham Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3401971,
              18.0121731
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1871",
          "timestamp": "1683262538",
          "level": "normal",
          "asset": {
              "id": "Sontyam-Anandapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2987576,
              17.8677933
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0635",
          "timestamp": "1689044401",
          "level": "normal",
          "asset": {
              "id": "Thallavalasa-Bheemili Mandal"
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
          "id": "AA1580",
          "timestamp": "1699336139",
          "level": "normal",
          "asset": {
              "id": "c8db8ff0-de44-48cb-88fc-b940b6be4e43"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.204864,
              17.668301
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1268",
          "timestamp": "1689209401",
          "level": "normal",
          "asset": {
              "id": "ALAMADA-JAMI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.235879,
              17.9938243
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0335",
          "timestamp": "1689066001",
          "level": "normal",
          "asset": {
              "id": "BADANGI-BADANGI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3663617,
              18.4940742
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0259",
          "timestamp": "1684384801",
          "level": "normal",
          "asset": {
              "id": "BHEEMALI-L.KOTA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2231621,
              17.9793796
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1165",
          "timestamp": "1702015317",
          "level": "normal",
          "asset": {
              "id": "5aa3b72a-5a5c-4479-94d4-6beb4bae24a2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634296296298,
              17.690142592592604
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0939",
          "timestamp": "1683059400",
          "level": "normal",
          "asset": {
              "id": "BODDAM-VEPADA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.14077640000001,
              18.0538598
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0865",
          "timestamp": "1683959400",
          "level": "normal",
          "asset": {
              "id": "BONANGI-GANTYADA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2191457,
              18.1472948
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0455",
          "timestamp": "1699336302",
          "level": "normal",
          "asset": {
              "id": "e114ed0a-d96d-4ed0-adde-fe3f8c2fe128"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.127631,
              18.172888
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2388",
          "timestamp": 1710820891,
          "level": "normal",
          "asset": {
              "id": "77d72378-7c67-4233-a8f6-b23fa37d3b65"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.56744,
              18.31685
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1157",
          "timestamp": "1683532265",
          "level": "normal",
          "asset": {
              "id": "CHALLAPETAMENTADA Mandal"
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
          "id": "PD1646",
          "timestamp": "1683952981",
          "level": "normal",
          "asset": {
              "id": "DATHIRAJERU-DATHIRAJERU Mandal"
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
          "id": "AA0323",
          "timestamp": "1705988729",
          "level": "normal",
          "asset": {
              "id": "a774f8cd-f88e-40d3-8aa3-d900ef4bb186"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.35341307692306,
              18.571883538461538
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0483",
          "timestamp": "1683525073",
          "level": "normal",
          "asset": {
              "id": "DENDERU-KOTHAVALASA Mandal"
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
          "id": "PD1371",
          "timestamp": "1680730201",
          "level": "normal",
          "asset": {
              "id": "DHARAMAVARAM-S.KOTA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.1930331,
              18.1190968
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0305",
          "timestamp": "1702231332",
          "level": "normal",
          "asset": {
              "id": "75df82e9-279b-4a25-aa08-d19e8c303b4c"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634428571431,
              17.690135714285727
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0143",
          "timestamp": "1702101725",
          "level": "normal",
          "asset": {
              "id": "8bc8fe1e-a9c1-4352-8fca-63e5e6877e7d"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.65613,
              18.448700000000002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0430",
          "timestamp": "1702317646",
          "level": "normal",
          "asset": {
              "id": "531403c7-586e-4a38-bc4c-24df4ab9d729"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.40339499999999,
              18.121940000000002
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1197",
          "timestamp": "1688376000",
          "level": "normal",
          "asset": {
              "id": "JAMI-JAMI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2602464,
              18.0514079
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1674",
          "timestamp": "1683952215",
          "level": "normal",
          "asset": {
              "id": "JONNAVALASA-VIZIANAGARAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.3615748,
              18.0925259
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0216",
          "timestamp": "1702317925",
          "level": "normal",
          "asset": {
              "id": "fa606a51-3ae3-43ae-8a6e-661088ff6cd3"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.40337,
              18.12197
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1060",
          "timestamp": "1683357919",
          "level": "normal",
          "asset": {
              "id": "KORUKONDA-VIZIANAGARAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.33418329999999,
              18.0643046
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1132",
          "timestamp": "1683357562",
          "level": "normal",
          "asset": {
              "id": "L.KOTA-L.KOTA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.15551970000001,
              18.0234298
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0058",
          "timestamp": "1702188393",
          "level": "normal",
          "asset": {
              "id": "4b94d1bb-878f-4486-bc46-8d1327d5414b"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18635845454548,
              17.690197727272732
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1741",
          "timestamp": "1702317809",
          "level": "normal",
          "asset": {
              "id": "89e25791-cfe8-44bf-b1d7-6ea8c33d11ae"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.40337,
              18.12197
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1627",
          "timestamp": "1699388771",
          "level": "normal",
          "asset": {
              "id": "22aabd74-a7eb-4558-9352-e00e8fa5abb8"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.75788,
              18.415189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1189",
          "timestamp": "1695275234",
          "level": "normal",
          "asset": {
              "id": "NEMALAM-THERLAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.5623088,
              18.5000645
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1474",
          "timestamp": "1683605697",
          "level": "normal",
          "asset": {
              "id": "PEDAMAJJI PLAEM-GANTYADA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.51747569999999,
              18.898597
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0300",
          "timestamp": "1702188989",
          "level": "normal",
          "asset": {
              "id": "ea46c669-5412-483d-8986-7cdabebee66f"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18636168831173,
              17.69023805194806
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1738",
          "timestamp": "1684137405",
          "level": "normal",
          "asset": {
              "id": "POGIRI-RAJAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.649404,
              18.4556587
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1468",
          "timestamp": "1683617547",
          "level": "normal",
          "asset": {
              "id": "RAMABHADRA PURAM-R.B PURAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.2223759,
              18.0243069
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0009",
          "timestamp": "3406669454",
          "level": "normal",
          "asset": {
              "id": "9df74643-954b-4016-96fa-c2ca700def86"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18634323529415,
              17.690135588235307
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1349",
          "timestamp": "1688911800",
          "level": "normal",
          "asset": {
              "id": "SANKILI-REGIDI AMUDALAVASA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.7431549,
              18.5622626
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0881",
          "timestamp": "1699629601",
          "level": "normal",
          "asset": {
              "id": "THETTANGI-GURLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.46702250000001,
              18.2657787
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0873",
          "timestamp": "1702188245",
          "level": "normal",
          "asset": {
              "id": "3d6b058d-82f9-49fa-8bb8-980b9b21afcb"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.18636285714288,
              17.69021365079366
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0340",
          "timestamp": "1702015264",
          "level": "normal",
          "asset": {
              "id": "b836759d-1d75-405d-8e13-be4739c4cdb2"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.29937000000001,
              18.46491
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0754",
          "timestamp": "1702317893",
          "level": "normal",
          "asset": {
              "id": "e274a0f5-1590-422e-8666-4b62626e4d11"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.40337,
              18.12197
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0119",
          "timestamp": "1691938502",
          "level": "normal",
          "asset": {
              "id": "VANGARA-VANGARA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6253431,
              19.1262245
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA0779",
          "timestamp": "1702058621",
          "level": "normal",
          "asset": {
              "id": "855e5146-4b8e-4ffc-a53c-598bfd2c6afe"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.6566,
              18.44875
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2382",
          "timestamp": "1705915885",
          "level": "normal",
          "asset": {
              "id": "e5d03b68-301c-4f80-b552-e4169e9a1feb"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.15064,
              17.92203
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA1932",
          "timestamp": "1702015203",
          "level": "normal",
          "asset": {
              "id": "a09c04f8-db41-47ad-a861-5e1d13afb1aa"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.40911,
              18.102745
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "AA2491",
          "timestamp": "1704491267",
          "level": "normal",
          "asset": {
              "id": "6e029e8c-4636-4651-8d13-5d0ac90f52d3"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.40952916666669,
              18.112537129629622
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1720",
          "timestamp": "1687423221",
          "level": "normal",
          "asset": {
              "id": "WALTERU-SANTHAKAVITI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              83.81702039999999,
              18.4045732
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1790",
          "timestamp": "1683196339",
          "level": "normal",
          "asset": {
              "id": "Alamuru  - Penumantra Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7062103,
              16.6239558
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1311",
          "timestamp": "1693648559",
          "level": "normal",
          "asset": {
              "id": "Arugolanu - Tadepalligudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.57609450000001,
              16.8395037
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1979",
          "timestamp": "1683185808",
          "level": "normal",
          "asset": {
              "id": "Dagguluru - Palakole Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.66103799999999,
              16.5300793
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0351",
          "timestamp": "1683610485",
          "level": "normal",
          "asset": {
              "id": "Elamanchili - Elamanchili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7828033,
              16.4808462
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0642",
          "timestamp": "1701364201",
          "level": "normal",
          "asset": {
              "id": "Gutlapadu  - Bhimavaarm Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4790074,
              16.4385149
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0240",
          "timestamp": "1683195724",
          "level": "normal",
          "asset": {
              "id": "I.Bhimavaram - Akiveedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3621973,
              16.5830025
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1448",
          "timestamp": "1682778000",
          "level": "normal",
          "asset": {
              "id": "Jinnuru   - Poduru Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.72262979999999,
              16.5456843
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1557",
          "timestamp": "1683181772",
          "level": "normal",
          "asset": {
              "id": "Kalla  - Kalla Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4089359,
              16.5375519
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0814",
          "timestamp": "1683194179",
          "level": "normal",
          "asset": {
              "id": "Konithiwada - Veeravasaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6555607,
              16.6000017
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1125",
          "timestamp": "1689763801",
          "level": "normal",
          "asset": {
              "id": "Kopparru - Narasapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6379378,
              16.4582631
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1442",
          "timestamp": "1702021200",
          "level": "normal",
          "asset": {
              "id": "Korumilli - Pentapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5856555,
              16.7502181
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0389",
          "timestamp": "1683353248",
          "level": "normal",
          "asset": {
              "id": "Kothapadu - Iragavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.64677689999999,
              16.7039543
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0610",
          "timestamp": "1684740461",
          "level": "normal",
          "asset": {
              "id": "LB Cherla - Mandal Narasapuram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6966198,
              16.4329833
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0171",
          "timestamp": "1683273381",
          "level": "normal",
          "asset": {
              "id": "Madhavaram - Tadepalligudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.59508679999999,
              16.8886694
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1626",
          "timestamp": "1683192105",
          "level": "normal",
          "asset": {
              "id": "Mogalthur - Mogalthur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6105642,
              16.415655
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0069",
          "timestamp": "1683355541",
          "level": "normal",
          "asset": {
              "id": "Muddapuram - Tanuku Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6202381,
              16.8047791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0423",
          "timestamp": "1683192982",
          "level": "normal",
          "asset": {
              "id": "Palakoderu - Undi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5479871,
              16.5861566
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0340",
          "timestamp": "1683376403",
          "level": "normal",
          "asset": {
              "id": "Pattempalem - Tadepalligudem Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5258027,
              16.815269
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0876",
          "timestamp": "1684179601",
          "level": "normal",
          "asset": {
              "id": "Pentapadu - Pentapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.52535639999999,
              16.7803742
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1911",
          "timestamp": "1683186646",
          "level": "normal",
          "asset": {
              "id": "Penumantra  - Penumantra Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.65282189999999,
              16.6437416
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1753",
          "timestamp": "1683185727",
          "level": "normal",
          "asset": {
              "id": "Relangi - Iragavaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.64677689999999,
              16.7039543
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0030",
          "timestamp": "1676016002",
          "level": "normal",
          "asset": {
              "id": "Siddantham   - Penugonda Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.7474513,
              16.6600005
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0082",
          "timestamp": "1683263727",
          "level": "normal",
          "asset": {
              "id": "Siddapuram - Akiveedu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.3502541,
              16.6130791
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1528",
          "timestamp": "1683721763",
          "level": "normal",
          "asset": {
              "id": "Unikili - Attili Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6021358,
              16.613925
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1142",
          "timestamp": "1683712040",
          "level": "normal",
          "asset": {
              "id": "Valluru - Achanta Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.82995040000002,
              16.5579583
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0123",
          "timestamp": "1686990600",
          "level": "normal",
          "asset": {
              "id": "Veeravasaram - Veeravasaram Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.62768919999999,
              16.5366494
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0942",
          "timestamp": "1687411201",
          "level": "normal",
          "asset": {
              "id": "Velpur  - Tanuku Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.6791569,
              16.7454594
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1678",
          "timestamp": "1692289686",
          "level": "normal",
          "asset": {
              "id": "Vempa - Bhimavaarm Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5749753,
              16.4421308
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0779",
          "timestamp": "1701759000",
          "level": "normal",
          "asset": {
              "id": "Vissakoderu - Undi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.566498,
              16.5511125
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1058",
          "timestamp": "1683662401",
          "level": "normal",
          "asset": {
              "id": "West Vipparru - Pentapadu Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.4736152,
              16.7452229
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0242",
          "timestamp": "1701252601",
          "level": "normal",
          "asset": {
              "id": "Yandagandi - Undi Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              81.5335865,
              16.6432909
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0426",
          "timestamp": "1696168801",
          "level": "normal",
          "asset": {
              "id": "ALANKHANPALLI-KADAPA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7933753,
              14.4960859
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1388",
          "timestamp": "1700814601",
          "level": "normal",
          "asset": {
              "id": "BHAKARAPET-SIDHOUT Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9685203,
              14.4679826
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1605",
          "timestamp": "1681201541",
          "level": "normal",
          "asset": {
              "id": "BIDINAMCHERLA-SIMHADRIPURAM Mandal"
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
          "id": "PD1664",
          "timestamp": "1700107356",
          "level": "normal",
          "asset": {
              "id": "Buddayapalli-Proddatur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7897663,
              14.5603966
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0098",
          "timestamp": "1681285916",
          "level": "normal",
          "asset": {
              "id": "CHAKRAYAPET-CHAKRAYAPET Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.49224269999999,
              14.2562084
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1736",
          "timestamp": "1682478018",
          "level": "normal",
          "asset": {
              "id": "CHAPADU-CHAPADU Mandal"
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
          "id": "PD0518",
          "timestamp": "1681280085",
          "level": "normal",
          "asset": {
              "id": "CHENNUR-CHENNUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7810683,
              14.5482285
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0486",
          "timestamp": "1696327200",
          "level": "normal",
          "asset": {
              "id": "CHILAMKUR-YERRAGUNTLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4609854,
              14.6586721
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0868",
          "timestamp": "1681283364",
          "level": "normal",
          "asset": {
              "id": "Chowduru-Proddatur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.47874639999999,
              14.7779634
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0527",
          "timestamp": "1681280970",
          "level": "normal",
          "asset": {
              "id": "Duvvur-Duvvur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6540576,
              14.8405902
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1655",
          "timestamp": "1695186104",
          "level": "normal",
          "asset": {
              "id": "ETURU-KHAJIPET Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.689863,
              14.6351912
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0772",
          "timestamp": "1687413121",
          "level": "normal",
          "asset": {
              "id": "GADEGUDURU-RAJUPALEM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5873498,
              14.8990453
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0905",
          "timestamp": "1702359006",
          "level": "normal",
          "asset": {
              "id": "GOLLALAGUDURU-VEMULA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.32173440000001,
              14.4149666
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0075",
          "timestamp": "1700198938",
          "level": "normal",
          "asset": {
              "id": "GUDEMCHERUVU-JAMMALAMADUGU Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3700011,
              14.8263033
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0218",
          "timestamp": "1681100381",
          "level": "normal",
          "asset": {
              "id": "GUNDLAKUNTA-PEDDAMUDIUM Mandal"
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
          "id": "PD1401",
          "timestamp": "1682086200",
          "level": "normal",
          "asset": {
              "id": "Gangireddypalli -VEERAPUNAYUNI  PALLE Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4752808,
              14.4793372
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1590",
          "timestamp": "1681107305",
          "level": "normal",
          "asset": {
              "id": "K KOTHAPALLI-MUDDANUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6528166,
              14.5854893
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0192",
          "timestamp": "1688806859",
          "level": "normal",
          "asset": {
              "id": "KAMALAKUR-ATLUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0814523,
              14.6399995
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0360",
          "timestamp": "1687411240",
          "level": "normal",
          "asset": {
              "id": "KOPPARTHI-C.K DINNE Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.76178929999999,
              14.4267483
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0804",
          "timestamp": "1681204730",
          "level": "normal",
          "asset": {
              "id": "KORRAPDU-RAJUPALEM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2442339,
              14.2318901
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0639",
          "timestamp": "1681454952",
          "level": "normal",
          "asset": {
              "id": "Kamanur-Proddatur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6082979,
              14.7962819
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0197",
          "timestamp": "1681280721",
          "level": "normal",
          "asset": {
              "id": "Kanaguduru-Duvvur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.6193035,
              14.9100038
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1321",
          "timestamp": "1681537096",
          "level": "normal",
          "asset": {
              "id": "LINGALA-LINGALA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1105817,
              14.4826639
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1043",
          "timestamp": "1682314515",
          "level": "normal",
          "asset": {
              "id": "MANTAPAMPALLI-VONTIMITTA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.08604150000001,
              14.324103
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1044",
          "timestamp": "1697433601",
          "level": "normal",
          "asset": {
              "id": "MURARICHINTHALA-LINGALA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.1105817,
              14.4826639
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1300",
          "timestamp": "1688715599",
          "level": "normal",
          "asset": {
              "id": "MYLAVARAM-MYLAVARAM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.34867489999999,
              14.8557352
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1173",
          "timestamp": "1699506000",
          "level": "normal",
          "asset": {
              "id": "NANDIMANDALAM-PENDLIMARRI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.52538779999999,
              14.4039383
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0248",
          "timestamp": "1681187446",
          "level": "normal",
          "asset": {
              "id": "ONIPENTA-MYDUKUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7330957,
              14.7557186
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1121",
          "timestamp": "1700517001",
          "level": "normal",
          "asset": {
              "id": "PARLAPADU-RAJUPALEM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5173016,
              14.8900815
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1223",
          "timestamp": "1680851160",
          "level": "normal",
          "asset": {
              "id": "PEDDAMUDIUM-PEDDAMUDIUM Mandal"
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
          "id": "PD1803",
          "timestamp": "1697431800",
          "level": "normal",
          "asset": {
              "id": "PEDDAPASUPALA-PEDDAMUDIUM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4100649,
              14.8668888
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0399",
          "timestamp": "1697085284",
          "level": "normal",
          "asset": {
              "id": "PEDDIRAJUPALLE-B. MATTAM Mandal"
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
          "id": "PD1286",
          "timestamp": "1680842409",
          "level": "normal",
          "asset": {
              "id": "PORUMAMILLA-PORUMAMILLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9915188,
              14.9994124
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1302",
          "timestamp": "1681294456",
          "level": "normal",
          "asset": {
              "id": "POTLADURTHI-YERRAGUNTLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.5405304,
              14.7143001
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1730",
          "timestamp": "1702379412",
          "level": "normal",
          "asset": {
              "id": "PRABHALAVEEDU-B. KODUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0108212,
              14.7947528
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0815",
          "timestamp": "1681450189",
          "level": "normal",
          "asset": {
              "id": "RACHAGUDIPALLI-VONTIMITTA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.0263645,
              14.3948189
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0991",
          "timestamp": "1700523001",
          "level": "normal",
          "asset": {
              "id": "RAJUPALEM-RAJUPALEM Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              79.2442339,
              14.2318901
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1519",
          "timestamp": "1701852723",
          "level": "normal",
          "asset": {
              "id": "RAMANNAPALLI-CHENNUR Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.7810683,
              14.5482285
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1326",
          "timestamp": "1697778654",
          "level": "normal",
          "asset": {
              "id": "TEKURPETA-PORUMAMILLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.9924486,
              15.011149
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0612",
          "timestamp": "1681289495",
          "level": "normal",
          "asset": {
              "id": "Thallamapuram-Proddatur Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.59376220000001,
              14.7119203
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0114",
          "timestamp": "1697144401",
          "level": "normal",
          "asset": {
              "id": "VEERAPUNAYUNI  PALLE-VEERAPUNAYUNI PALLE Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.4722318,
              14.472524
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0670",
          "timestamp": "1682488200",
          "level": "normal",
          "asset": {
              "id": "VEMPALLI-VEMPALLI Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.45855999999999,
              14.3661521
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD0258",
          "timestamp": "1680852546",
          "level": "normal",
          "asset": {
              "id": "VEMULA-VEMULA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.3187471,
              14.3677724
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1653",
          "timestamp": "1702104040",
          "level": "normal",
          "asset": {
              "id": "YERRABALLI-PULIVENDULA"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.2263388,
              14.4222318
          ]
      }
  },
  {
      "type": "Feature",
      "properties": {
          "id": "PD1533",
          "timestamp": "1680847921",
          "level": "normal",
          "asset": {
              "id": "YERRAGUNTLA-YERRAGUNTLA Mandal"
          },
          "assetGroup": "ag"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              78.53485069999999,
              14.639396
          ]
      }
  }
]
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