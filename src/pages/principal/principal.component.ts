import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
    public informacoesFeira = '';
    public programacao = ''
    public config : SwiperOptions;
    public images = [];
    constructor() {


        this.informacoesFeira='  O evento caracteriza‐se na realização de visitas para alunos concluintes do ensino médio, de escolas interessadas em conhecer a instituição, seu funcionamento, sua infraestrutura e as possibilidades de ingresso no ensino superior.\n' +
            '\nEsta é uma excelente oportunidade para os estudantes de nossa região desenvolverem novas referências sobre um ensino superior de qualidade. É uma maneira agradável de entrar em contato com o mundo acadêmico, que está tão próximo desses alunos e, sobretudo, trata‐se de uma oportunidade ímpar de auxiliá‐los na tarefa de decidir pelo desenvolvimento de habilidades adequadas para a construção de uma sólida carreira profissional.\n' +
            '\nPara participar, a escola deve agendar e confirmar período e horário definidos, por meio do e‐mail: feiraprofissoes.smo@unoesc.edu.br\n' +
            '\nA partir da confirmação por parte da Escola, a organização da Feira das Profissões entrará novamente em contato para realizar a visita e para maiores informações.\n'


        this.programacao =
            `Saída da Escola à Unoesc São Miguel do Oeste, horário a ser definido com a escola.  <br>
            Recepção: estacionamento 2 da Unoesc.<br>
            Encaminhamentos para visitação aos estandes e laboratórios - Visitação livre pelo campus.<br>
            Os alunos terão a oportunidade de conhecer cada local,conforme afinidade.<br>
            • Palestra de encerramento: Escolha profissiona`
    }


    ngOnInit() {
        this.images = [
            {src: 'assets/images/banner1.jpg'},
            {src: 'assets/images/banner2_1.jpg'},
            {src: 'assets/images/banner3_2.jpg'},

        ];

        this.config  = {

            autoHeight:false,
            pagination: {el: '.swiper-pagination', clickable: true},
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        };
    }

}
