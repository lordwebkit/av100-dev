<script setup>
import ABtn from '@/components/ABtn.vue';
import ACheckbox from '@/components/ACheckbox.vue';
import ATooltip from '@/components/ATooltip.vue';
</script>
<template>
  <section class="user-settings">
    <div class="user-settings-inner">
      <div class="user-settings__subsection setting">
        <h3 class="setting__header">Прочие настройки</h3>
        <div class="setting__body setting-body">
          <ABtn class="setting-body__btn">Сохранить</ABtn>
          <span class="setting-body__hr"></span>
          <div class="setting-body__field setting-body__field--top">
            <ACheckbox type="checkbox" class="setting-body__checkbox-input" checkboxId="setting-body__checkbox-color" />
            <label class="setting-body__checkbox-label" for="setting-body__checkbox-color">Включить цвета в ленте</label>
            <ATooltip>Включение зеленого/желтого цвета</ATooltip>
          </div>
          <div class="setting-body__field">
            <ACheckbox type="checkbox" class="setting-body__checkbox-input" checkboxId="setting-body__checkbox-auto"
              checkboxChecked="true" />
            <label class="setting-body__checkbox-label" for="setting-body__checkbox-auto">
              Автоматически переходить к новым объявлениям
            </label>
            <ATooltip>Лента будет автоматически обновляться 1 раз в 3 секунды</ATooltip>
          </div>
          <div class="setting-body__field">
            <label class="setting-body__select-label" for="setting-body__select-sity">Часовой пояс</label>
            <select name="sity" class="setting-body__select-input" id="setting-body__select-sity">
              <option value="Калининград">Калининград</option>
              <option value="Москва" selected>Москва</option>
              <option value="Самара">Самара</option>
              <option value="Омск">Омск</option>
              <option value="Красноярск">Красноярск</option>
              <option value="Иркутск">Иркутск</option>
              <option value="Якутск">Якутск</option>
              <option value="Владивосток">Владивосток</option>
              <option value="Магадан">Магадан</option>
              <option value="Камчатка">Камчатка</option>
            </select>
          </div>
        </div>
      </div>
      <div class="user-settings__subsection setting">
        <h3 class="setting__header">Прочие настройки</h3>
        <div class="setting__body setting-body other-setting">
          <div class="setting-body__field other-setting__top">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-source"
              name="setting-body__other-setting">
            <label class="setting-body__radio-label" for="setting-body__radio-source">На источник</label>
            <ATooltip>Прямой переход в объявление на источнике</ATooltip>
          </div>
          <span class="setting-body__hr setting-body__hr--short"></span>
          <div class="setting-body__field other-setting__middle">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-seperate-window"
              name="setting-body__other-setting">
            <label class="setting-body__radio-label" for="setting-body__radio-seperate-window">В карточку в отдельном
              окне</label>
          </div>
          <span class="setting-body__hr setting-body__hr--short"></span>
          <div class="setting-body__field other-setting__bottom">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-current-window"
              name="setting-body__other-setting" checked>
            <label class="setting-body__radio-label" for="setting-body__radio-current-window">В карточку в текущем
              окне</label>
          </div>
          <p class="setting-body__subtitle">
            Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.
          </p>
        </div>
      </div>
      <div class="user-settings__subsection setting">
        <h3 class="setting__header">Оповещения о новых подборках</h3>
        <div class="setting__body setting-body other-setting">
          <div class="setting-body__field other-setting__top">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-telegram"
              name="setting-body__nostification">
            <label class="setting-body__radio-label" for="setting-body__radio-telegram">Telegram ID</label>
          </div>
          <span class="setting-body__hr setting-body__hr--short"></span>
          <div class="setting-body__field other-setting__middle">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-email"
              name="setting-body__nostification">
            <label class="setting-body__radio-label" for="setting-body__radio-email">Email</label>
          </div>
          <span class="setting-body__hr setting-body__hr--short"></span>
          <div class="setting-body__field other-setting__bottom">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-push"
              name="setting-body__nostification">
            <label class="setting-body__radio-label" for="setting-body__radio-push">Push</label>
            <ATooltip>Прямой переход в объявление на источнике</ATooltip>
          </div>
          <span class="setting-body__hr setting-body__hr--short"></span>
          <div class="setting-body__field other-setting__bottom">
            <input type="radio" class="setting-body__radio-input" id="setting-body__radio-off"
              name="setting-body__nostification" checked>
            <label class="setting-body__radio-label" for="setting-body__radio-off">Выкл</label>
          </div>
          <h4 class="setting-body__title">Уведомления</h4>
          <p class="setting-body__subtitle">
            Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей
            подборки.
          </p>
        </div>
      </div>
      <div class="user-settings__subsection setting">
        <h3 class="setting__header">Учётная запись</h3>
        <div class="setting__body setting-body">
          <div class="setting-body__field">
            <label class="setting-body__account-label">Фамилия</label>
            <div class="">
              <input type="input" class="setting-body__account-input">
              <span class="setting-body__account-info">* Не обязательно</span>
            </div>
          </div>
          <div class="setting-body__field">
            <label class="setting-body__account-label">Имя</label>
            <input type="input" class="setting-body__account-input">
          </div>
          <div class="setting-body__field">
            <label class="setting-body__account-label">Номер телефона</label>
            <input type="input" class="setting-body__account-input">
          </div>
          <div class="setting-body__field">
            <label class="setting-body__account-label">Логин</label>
            <input type="input" class="setting-body__account-input">
          </div>
          <div class="setting-body__field">
            <label class="setting-body__account-label">Компания</label>
            <input type="input" class="setting-body__account-input">
          </div>
        </div>
      </div>
      <div class="user-settings__subsection setting">
        <h3 class="setting__header">Звонок через SIP</h3>
        <div class="setting__body setting-body">
          <p class="setting-body__subtitle setting-body__subtitle--sip">
            Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style lang="scss">
.user-settings {
  padding: 0 0 0.1rem;

  &__subsection {
    margin-bottom: 4rem;
  }
}

.user-settings-inner {
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 1.5rem;
  padding-top: 2rem;
}

.setting {
  display: flex;

  &__header {
    flex: 0 0 25rem;
    margin-right: 2rem;
    max-width: 25rem;
    font-size: 1.8rem;
    font-weight: 600;
  }

  &__body {
    max-width: 49rem;
    flex: 1;
  }
}

.setting-body {
  &__field {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  &__field--top {
    margin-top: 2.5rem;
  }

  &__checkbox-label {
    color: #000;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    min-height: 2rem;
    min-width: 2rem;
    position: relative;
    user-select: none;
    width: 32rem;
  }

  &__select-label {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 0;
    margin-right: 2.5rem;
    margin-top: 0.4rem;
  }

  &__select-input {
    height: 28px;
    transition: all 0.3s ease;
    background: #fff;
    border: 1px solid #e1e1e3;
    border-radius: 3px;
    font-family: inherit;
    font-weight: 500;
    padding: 0 40px 0 10px;
    width: 22rem;

    &:hover {
      border-color: #2dc574;
    }
  }

  &__radio-input {
    margin-right: 1rem;
    cursor: pointer;
  }

  &__radio-label {
    width: 32.7rem;
    cursor: pointer;
  }

  &__account-label {
    flex: 0 0 12rem;
    align-self: flex-start;
    font-weight: 500;
    margin-right: 1rem;
    max-width: 12rem;
  }

  &__account-input {
    appearance: none;
    background: #fff;
    border: 0.1rem solid #e1e1e3;
    border-radius: 0.3rem;
    box-shadow: none;
    color: #222;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.1;
    outline: none;
    transition: all .3s;
    padding: 0.8rem 1rem;
  }

  &__account-info {
    color: #a3a3a3;
    display: block;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  &__subtitle {
    color: #686869;
    margin-top: 2.5rem;
  }

  &__subtitle--sip {
    margin-top: 0;
  }

  &__title {
    margin-top: 2rem;
  }

  &__hr {
    background-color: #cdcdcd;
    width: 100%;
    height: 1px;
    display: block;
    opacity: 0.6;
  }

  &__hr--short {
    width: 77%;
  }
}

.other-setting {

  &__top,
  &__middle {
    margin-bottom: 1.5rem;
  }

  &__middle,
  &__bottom {
    margin-top: 1.5rem;
  }
}
</style>