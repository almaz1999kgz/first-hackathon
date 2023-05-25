import React, { useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  ImageListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { deepOrange, deepPurple, orange } from "@mui/material/colors";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { Link } from "react-router-dom";

const NavTwoAllPage = () => {
  return (
    <Box
      sx={{
        marginTop: "55px",
      }}
    >
      <Container className="call">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <Grid container alignItems="center">
              <Grid item>
                <FmdGoodIcon color="error" />
              </Grid>
              <Grid item>
                <Typography variant="h5">Позвоните </Typography>
                <Typography variant="h6">И укажите свой Адрес </Typography>
              </Grid>
              <Grid item>
                <ArrowForwardIosIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid container alignItems="center">
              <Grid item>
                <RestaurantIcon color="error" />
              </Grid>
              <Grid item>
                <Typography variant="h5">Закажите Еду</Typography>
                <Typography variant="h6">Из лучших кафе </Typography>
              </Grid>
              <Grid item>
                <ArrowForwardIosIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid container alignItems="center">
              <Grid item>
                <PedalBikeIcon color="error" />
              </Grid>
              <Grid item>
                <Typography variant="h5">Мы Доставим</Typography>
                <Typography variant="h6">Прямо к вашей двери</Typography>
              </Grid>
              <Grid item>
                <ArrowForwardIosIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid container alignItems="center">
              <Grid item>
                <MonetizationOnIcon color="error" />
              </Grid>
              <Grid item>
                <Typography variant="h5">Позвоните </Typography>
                <Typography variant="h6">И укажите свой Адрес </Typography>
              </Grid>
              <Grid item>
                <ArrowForwardIosIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="150px"
        marginTop="20px"
        bgcolor="orange"
      >
        <Container maxWidth="sm">
          <Box textAlign="center" marginBottom={2}>
            <TextField
              label="Поиск блюд и заведений"
              variant="outlined"
              fullWidth
              className="inp"
            />
          </Box>
          <Box textAlign="center">
            {/* <Button variant="contained" color="primary">
              Отправить
            </Button> */}
          </Box>
        </Container>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="150px"
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          className="kake"
          textAlign="center"
        >
          Мы оказываем услуги по доставке:
        </Typography>
      </Box>
      <Grid
        display="flex"
        justifyContent="center"
        gap="10%"
        // flexWrap="wrap"
        alignItems="center"
        flexWrap="wrap"
        marginTop="50px"
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://avatars.mds.yandex.net/i?id=f4233ce5b14a44da41a003ce4ae9a25f-7083384-images-thumbs&n=13"
            title="green iguana"
          />

          <CardActions>
            <Button size="small" component={Link} to="/food">
              Все Блюда КЫРГЫЗСТАНА
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://avatars.mds.yandex.net/i?id=6df3d8bdb9e3a69d499bef3ebfaa7271c1342c4f-9168056-images-thumbs&n=13"
            title="green iguana"
          />

          <CardActions>
            <Button size="small" component={Link} to="/food">
              Все Продукты Кыргызст
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://avatars.mds.yandex.net/i?id=30d2badd2b8273b984cefc6aea1dc80ccb28da7e-8527116-images-thumbs&n=13"
            title="green iguana"
          />

          <CardActions>
            <Button size="small">Цветы и Подарки Кыргы</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://avatars.mds.yandex.net/i?id=bab244ae63953c8cee146534ee36f0fcdcb6ac99-4234038-images-thumbs&n=13"
            title="green iguana"
          />

          <CardActions>
            <Button size="small">Медикаменты Кыргызст</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        gap="7.5%"
        // flexWrap="wrap"
        alignItems="center"
        flexWrap="wrap"
        marginTop="100px"
        className="choose"
      >
        <Grid>
          <a
            href="http://localhost:3002/food"
            style={{ textDecoration: "none" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.mds.yandex.net/i?id=371e1a14846a343a337e9be5e1f6e296e27fe03d-8453627-images-thumbs&n=13"
              sx={{ width: "120px", height: "120px" }}
            />
            <Typography color={"white"} fontWeight="bold">
              Все Питания
            </Typography>
          </a>
        </Grid>
        <Grid>
          <a
            href="http://localhost:3002/food"
            style={{ textDecoration: "none" }}
          >
            <Avatar
              alt="Travis Howard"
              src="https://avatars.mds.yandex.net/i?id=9954b48cdf59192602b2b872cbb8442f-4093415-images-thumbs&n=13"
              sx={{ width: "120px", height: "120px" }}
            />
            <Typography color={"white"} fontWeight="bold">
              Стейки Шмейки
            </Typography>
          </a>
        </Grid>
        <Grid>
          <a
            href="https://www.povarenok.ru/recipes/show/148481/"
            style={{ textDecoration: "none" }}
          >
            <Avatar
              alt="Cindy Baker"
              src="https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D1%81%D1%8C-%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9-%D1%86%D1%8B%D0%BF-%D0%B5%D0%BD%D0%BE%D0%BA-32258636.jpg"
              sx={{ width: "120px", height: "120px" }}
            />
            <Typography color={"white"} fontWeight="bold">
              Курица Лапая
            </Typography>
          </a>
        </Grid>
        <Grid>
          <a href="http://localhost:3002/food" className="page">
            <Avatar
              alt="Cindy Baker"
              src="https://avatars.mds.yandex.net/i?id=37bcea2954178c557e8a524546ae08e854c29d72-8254804-images-thumbs&n=13"
              sx={{ width: "120px", height: "120px" }}
            />
            <Typography color={"white"} fontWeight="bold">
              Рамен По Тайский
            </Typography>
          </a>
        </Grid>
        <Grid>
          <a
            href="http://localhost:3002/food"
            style={{ textDecoration: "none" }}
          >
            <Avatar
              alt="Cindy Baker"
              src="https://www.creativefabrica.com/wp-content/uploads/2020/04/07/Burger-Icon-SVG-Graphics-3814510-1.png"
              sx={{ width: "120px", height: "120px" }}
            />
            <Typography color={"white"} fontWeight="bold">
              Гамбургуры Fast
            </Typography>
          </a>
        </Grid>
        <Grid>
          <a
            href="http://localhost:3002/food"
            style={{ textDecoration: "none" }}
          >
            <Avatar
              alt="Cindy Baker"
              src="https://avatars.mds.yandex.net/i?id=8d702076f208a1e0f4a7f00105d727fd-4161437-images-thumbs&n=13"
              sx={{ width: "120px", height: "120px" }}
            />
            <Typography color={"white"} fontWeight="bold">
              Продукты отдуши
            </Typography>
          </a>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        gap="1.5%"
        // flexWrap="wrap"
        alignItems="center"
        flexWrap="wrap"
        marginTop="100px"
        width="100%"
        className="thebest"
      >
        <a
          href="https://www.google.com/search?hl=Ru&sxsrf=APwXEdfPODOhMcHj93g3N9wJ9f1Yzwierg:1685021581697&q=%D0%AF+%D0%BD%D0%B5+%D0%B7%D0%BD%D0%B0%D1%8E+%D0%91%D1%80%D0%B0%D1%82%D0%B0%D0%BD+%D0%BD%D0%B5+%D0%BE%D0%B1%D0%B5%D1%81%D1%81%D1%83%D0%B4%D1%8C&spell=1&sa=X&ved=2ahUKEwj5icPGypD_AhWjl4sKHTNJDoEQBSgAegQIBxAB&biw=1536&bih=754&dpr=1.25"
          style={{ textDecoration: "none" }}
        >
          <ImageListItem sx={{ width: "350px" }}>
            <img
              src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663793136_36-mykaleidoscope-ru-p-samaya-appetitnaya-yeda-yeda-instagram-39.jpg"
              alt=""
            />
          </ImageListItem>
          <Typography
            color={"black"}
            fontWeight="bold"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            Лучшие Кафе
          </Typography>
        </a>
        <a
          href="https://www.google.com/search?q=%D0%97%D0%B4%D0%B5%D1%81%D1%8C+%D1%82%D0%BE%D0%B6%D0%B5+%D0%91%D0%B5%D1%81%D1%81%D0%B8%D0%BB%D0%B5%D0%BD&hl=ru&sxsrf=APwXEddW536n9CPMXDM5eNJE7K13W556RA%3A1685021642219&source=hp&ei=ymNvZPf-CujPkPIP1q694As&iflsig=AOEireoAAAAAZG9x2kTPW7vveAbLwmBF5lelskmtT3gD&ved=0ahUKEwj3i6_jypD_AhXoJ0QIHVZXD7wQ4dUDCAk&uact=5&oq=%D0%97%D0%B4%D0%B5%D1%81%D1%8C+%D1%82%D0%BE%D0%B6%D0%B5+%D0%91%D0%B5%D1%81%D1%81%D0%B8%D0%BB%D0%B5%D0%BD&gs_lcp=Cgdnd3Mtd2l6EANQAFgAYABoAHAAeACAAQCIAQCSAQCYAQA&sclient=gws-wiz"
          style={{ textDecoration: "none" }}
        >
          <ImageListItem sx={{ width: "350px" }}>
            <img
              src="https://i8.photo.2gis.com/images/branch/0/30258560055351734_cb29.jpg"
              alt=""
            />
          </ImageListItem>
          <Typography
            color={"black"}
            fontWeight="bold"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            Лучшие Кафе
          </Typography>
        </a>
      </Grid>
      <Box>
        <Grid
          display="flex"
          justifyContent="center"
          // flexWrap="wrap"
          alignItems="center"
          marginTop="100px"
          textAlign="center"
        >
          <Typography variant="h3" fontWeight="bold" className="kake">
            Новинки и акции
          </Typography>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          gap="1.5%"
          //   flexWrap="wrap"
          alignItems="center"
          //   flexWrap="wrap"
          marginTop="100px"
          width="100%"
          padding="3%"
        >
          <a href="https://www.kfc.kg/">
            <ImageListItem>
              <img src="https://wallpapercave.com/wp/wp7553510.jpg" alt="" />
            </ImageListItem>
          </a>
          <a href="https://www.kfc.kg/">
            <ImageListItem>
              <img src="https://wallpapercave.com/wp/wp7553510.jpg" alt="" />
            </ImageListItem>
          </a>
          <a href="https://www.kfc.kg/">
            <ImageListItem>
              <img src="https://wallpapercave.com/wp/wp7553510.jpg" alt="" />
            </ImageListItem>
          </a>
        </Grid>
      </Box>
      <Container
        className="biog"
        maxWidth="50%"
        sx={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",

          //   alignItems: "flex-end",
        }}
      >
        <Grid width="500px" sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" className="kake">
            «Ковер-самолет» доставит всё! «Ковер-самолет» это – Ваша
            персональная сказка! – Доставка обедов, продуктов, напитков,
            медикаментов и цветов в Бишкеке
          </Typography>
          <Typography variant="caption">
            Мы живем в удивительное время! Век, когда стремительно развиваются
            наука и технологии, когда всё и вся живет по закону бытия «Кто не
            успел, тот опоздал!» Как же успеть всё: работать, вовремя обедать,
            устроить романтический ужин любимому человеку, успеть выбрать и
            купить подарок? Да, на все нужно время, которого так не хватает. Вам
            поможет ковер-самолет… "Как в сказке? Такое бывает?" - спросите Вы.
            У нас бывает и не такое. Наш «Ковер-самолет» сэкономит Ваше время и
            доставит по Вашему заказу любое блюдо на обед из лучших кафе и
            ресторанов Бишкека. Любите блюда азиатской кухни – кафе «Фаиза» к
            Вашим услугам! Мы доставим лагман, плов или манты с пылу с жару! А
            может, предпочитаете итальянские блюда, или китайскую, индийскую,
            европейскую кухню?! Главное – это выбрать блюдо из меню кафе,
            заказать и ожидать звонка. Мы доставим ваш обед, ужин или завтрак в
            Бишкеке по Вашему звонку! Хотите сделать сюрприз? Нужны цветы,
            конфеты, подарки? Или не успеваете сходить в магазин за продуктами
            домой? Или срочно нужно купить торт? А времени катастрофически не
            хватает ни на что… «Ковер-самолет» решит Ваши проблемы и сэкономит
            Ваше время и деньги. Ведь не придется ездить в поисках подарка,
            продуктов, торта и прочих товаров! Мы все доставим по Бишкеку за
            Вас! Наш «Ковер-самолет» - это не просто сайт, занимающийся
            доставкой обедов, продуктов и подарков в Бишкеке. «Ковер-самолет» -
            это Ваша палочка-выручалочка в условиях вечного цейтнота.
            «Ковер-самолет» - это сказочная возможность, не выходя из дома или
            офиса, решить проблему с едой, подарком, тортом на день рождения.
            «Ковер-самолет» - это еще и волшебная палочка, и сапоги-скороходы, и
            скатерть-самобранка! Пусть сказка станет былью, ведь в жизни всегда
            должно быть место и сказке, и празднику!
          </Typography>
        </Grid>
      </Container>
      <Container
        maxWidth="50%"
        sx={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",

          //   alignItems: "flex-end",
        }}
      >
        <Grid width="500px" sx={{ textAlign: "center" }}>
          <Typography color="error" variant="h4">
            Обед прилетит на «Ковре-самолете» – доставка горячих обедов в
            Бишкеке
          </Typography>
          <Typography variant="caption">
            Вы много работаете, живете в условиях вечной нехватки времени и
            постоянного напряжения? У Вас нет даже времени, чтобы пообедать.
            Горы непеределанной работы, конца и краю которой нет, переговоры,
            договоры, заказы... Но не стоит в этой суете забывать о себе
            любимом. Ведь здоровье прежде всего! Да и работать, когда желудок
            поет свои голодные песни, тоже неприятно и не полезно. Так что же
            делать, когда времени выйти пообедать нет, а обедать так хочется?
            Терпеть или перехватить чего-нибудь всухомятку, запивая кофе? Мы
            можем предложить Вам лучший вариант. Обед в Бишкеке Вам принесет
            «Ковер-самолет» - как в сказке быстро и из любого конца города
            Бишкек. Вам стоит лишь выбрать именно то, что Вам хочется в этот
            момент. После приема заказа Ваш обед будет стоять на Вашем столе
            максимум через час. Удобно, согласитесь? Вы предпочитаете
            итальянскую кухню, или экзотическую индийскую, а может, острую
            китайскую, или изысканную европейскую? Хотите отведать креветок под
            соусом, полакомиться мясом по-китайски, или предпочитаете
            диетическое мясо кролика? А может, вы верны родной азиатской кухне?
            Самый лучший лагман и жареные манты в кафе «Фаиза». Все возможно с
            «Ковром-самолетом». Нет времени ходить по магазинам и рынкам, чтобы
            закупить продукты? Наши сотрудники сделают это за Вас. Нужно только
            составить список, что именно Вам нужно. Нужны конфеты, торт на день
            рождения или другое торжество? Тоже не проблема! От лучших
            производителей для лучших именинников, молодоженов, юбиляров – для
            Вас! Напитки, соки, элитные вина и другие алкогольные и
            безалкогольные напитки – все это мы можем привезти туда, куда Вы
            скажете. В общем, мы не только экономим Ваше время, мы облегчаем Вам
            жизнь. Вам стоит только пожелать, и, будто по мановению волшебной
            палочки, Ваши желания станут реальностью. Будь то обед или нечто
            большее!
          </Typography>
        </Grid>
      </Container>
      <Container
        className="biog"
        maxWidth="50%"
        sx={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",

          //   alignItems: "flex-end",
        }}
      >
        <Grid width="500px" sx={{ textAlign: "center" }}>
          <Typography variant="h4" className="kake" fontWeight="bold">
            В аптеку на «Ковре-самолете» - доставка медикаментов в Бишкеке
          </Typography>
          <Typography variant="caption">
            Как часто мы бегаем из одной аптеки в другую, ища то или иное
            лекарство. Или предпочитаем не заходить в аптеку без нужды, а только
            тогда, когда уже деваться некуда. А бывает и так, что постельный
            режим не позволяет нам выйти из дома. Что делать? Во всех случаях
            один ответ – «Ковер-самолет». Вот решение, которое Вы искали. И
            которое мы с удовольствием можем Вам предложить. Мы доставим любые
            медикаменты из аптек города Бишкека. Сделайте заказ и наш сотрудник
            в минимальный срок, быстро и надежно, будет стоять у Вашей двери с
            пакетом, несущим жизнь. Ведь иногда секунды решают все. Заказывайте
            доставку медикаментов в Бишкеке через наш сервис! Берегите себя и
            свое время! Воспользуйтесь службой доставки «Ковер-самолет» - для
            скорости и удобства!
          </Typography>
        </Grid>
      </Container>
      <Box marginTop="50px" marginBottom="50px">
        <Grid
          // className="gray"
          display="flex"
          marginBottom="100px"
          justifyContent="center"
          alignItems="center"
          gap="100px"
        >
          <Button>adsaddas</Button>
          <Button>adsdsasad</Button>
          <Button>asddas</Button>
        </Grid>
        <Grid
          display="flex"
          height="70px"
          //   display="flex"
          marginBottom="100px"
          justifyContent="center"
          alignItems="center"
          gap="30px"
        >
          <ImageListItem sx={{ width: "250px" }}>
            <img
              src="https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=52731873"
              alt=""
            />
          </ImageListItem>
          <ImageListItem sx={{ width: "250px" }}>
            <img src="https://hiv.life/public/app4.png" alt="" />
          </ImageListItem>
        </Grid>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid display="flex" height="50px">
            <ImageListItem sx={{ width: "50px" }}>
              <img
                src="https://static.tildacdn.com/tild3063-6664-4134-a365-366333303139/png-transparent-inst.png"
                alt=""
              />
            </ImageListItem>
            <ImageListItem sx={{ width: "50px" }}>
              <img
                src="https://static.insales-cdn.com/files/1/1963/17541035/original/odnoklassniki.png"
                alt=""
              />
            </ImageListItem>
            <ImageListItem sx={{ width: "50px" }}>
              <img
                src="https://i.pinimg.com/originals/76/de/f0/76def004e9a3d78276e9a65b39abaaed.jpg"
                alt=""
              />
            </ImageListItem>
          </Grid>
          <Grid width="150px">
            <HistoryToggleOffIcon />
            <Typography>Режим работы: 8:00 - 02:00 (ночи)</Typography>
          </Grid>

          <Grid>
            <Typography>(0)999 931631 </Typography>
            <Typography>(0)999 931631 </Typography>
            <Typography>(0)999 931631 </Typography>
            <Typography>(0)999 931631 </Typography>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default NavTwoAllPage;

// sx={{ marginTop: "30px", display: "flex" }}
